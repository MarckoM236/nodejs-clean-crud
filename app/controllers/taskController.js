import taskService from "../services/taskService.js";
import {response} from "../helpers/response.js";
import getRequestData from "../../system/request.js";  
import {validateCreation,validateUpdate} from '../requests/taskRequest.js'; 

class taskController {
    constructor(){
        this.taskService = new taskService();
    }

    async getTasks(req, res){
        try {
            const tasks = await this.taskService.getTasks();
            response(res,200,'application/json', JSON.stringify(tasks));
        } catch (error) {
            response(res,500,'application/json', JSON.stringify({'success':false,'error':'server error'}));
        }
    }

    async createTask(req,res){
        try {
            const data = await getRequestData(req);

            //validate
            if(validateCreation(data)){
                const task = await this.taskService.createTask(data);
                response(res,201,'application/json', JSON.stringify({'success':true,'message':'Task created successfully','data':task}));
            }
            else{
                response(res,400,'application/json', JSON.stringify({'success':false,'error':'there are obligatory fields empties'}));
            }
        } catch (error) {
            console.log(error)
            response(res,500,'application/json', JSON.stringify({'success':false,'error':'server error'}));
        }

    }

    async updateTask(req,res,param){
        const id=param[0];

        try {
            const data = await getRequestData(req);

            //validate
            if(validateUpdate(data)){
                const task = await this.taskService.updateTask(id,data);
                response(res,200,'application/json', JSON.stringify({'success':true,'message':'Task updated successfully','data':task}));
            }
            else{
                response(res,400,'application/json', JSON.stringify({'success':false,'error':'there are obligatory fields empties'}));
            }
        } catch (error) {
            console.log(error)
            response(res,500,'application/json', JSON.stringify({'success':false,'error':'server error'}));
        }

    }

    async deleteTask(req,res,param){
        const id=param[0];

        try {
            const tasks = await this.taskService.deleteTask(id);
            response(res,200,'application/json', JSON.stringify({'success':true,'message':'Task deleted successfully','data':task}));
            
        } catch (error) {
            console.log(error)
            response(res,500,'application/json', JSON.stringify({'success':false,'error':'server error'}));
        }

    }


}

export default taskController;