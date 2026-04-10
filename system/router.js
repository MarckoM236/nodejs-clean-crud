import routes from "../app/routes.js";
import { response } from "../app/helpers/response.js";
import middlewares from "../app/middlewares/kernel.js";

const regexes = getRegex(routes);

async function router(req, res) {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const pathname = url.pathname;
    const queryParams = Object.fromEntries(url.searchParams);

    const routeInfo = matchRoute(pathname, regexes);

    if (routeInfo) {
        const route = routes[routeInfo.route];
        const params = routeInfo?.params || {};

        const [method, controllerName, actionName, middlewaresRoute] = route;

        if (method === req.method) {

           //validate middlewares 
           if(middlewaresRoute && Array.isArray(middlewaresRoute)){
                for(const name of middlewaresRoute){
                    if(name in middlewares){
                        const passed = middlewares[name](req, res);
                        if (!passed) return; 
                    }
                }
           }

           try {
            const controller = await import(`../app/controllers/${controllerName}.js`);
            const ControllerClass = controller.default
            const controllerInstance = new ControllerClass();

            await controllerInstance[actionName](req, res, params, queryParams);

           } catch (error) {
            console.log(error);
            response(res,500,'application/json', JSON.stringify({'success':false,'error':'Internal server error'}));
           }
        }
        else{
            response(res,405,'application/json', JSON.stringify({'success':false,'error':'Method not allowed'}));
        }
    } else {
        response(res,404,'application/json', JSON.stringify({'success':false,'error':'Not found'}));
    }
}

function getRegex(routes){
    let regexes = [];
    for (let route in routes) {

        // Convert {param} → regex
        const pattern = route.replace(/{[^}]+}/g, '([^/]+)');
        
        // create regex
        const regex = new RegExp(`^${pattern}$`);

        regexes.push({regex, route});
    }
    return regexes;
}

function matchRoute(url, regexes) {
    for (let regexe_item in regexes) {

        const match = url.match(regexes[regexe_item].regex);

        if (match) {
            return {
                route: regexes[regexe_item].route,
                params: match.slice(1)
            };
        }
    }

    return null;
}

export default router;