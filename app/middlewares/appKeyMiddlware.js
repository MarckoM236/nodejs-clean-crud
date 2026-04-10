import {secretApi} from '../config/appConfig.js'
import { response } from "../helpers/response.js";

function validateAppKey(req,res){
    const appKey = req.headers['x-app-key'];

    if (!appKey || appKey !== secretApi.api_key) {
        response(res, 401, 'application/json', JSON.stringify({
            success: false,
            error: 'Unauthorized'
        }));
        return false;
    }

    return true;
}

export default validateAppKey;