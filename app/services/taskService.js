import taskRepository from '../repositories/taskRepository.js';

class taskService {
    constructor(){
        this.taskRepository = new taskRepository();
    }

    async getTasks(){
        return await this.taskRepository.getTasks();
    }

    async createTask(data){
        if (data.status === '') {
            data.status = 'pending'
        }
        return await this.taskRepository.createTask(data);
    }

    async updateTask(id, data){
        if (data.status === 'completed' && !data.updated_date) {
            throw new Error('Task completed must have date');
        }

        const keys = Object.keys(data);
        const setKeys = keys.map(key => `${key} = ?`).join(', ');
        const values = Object.values(data);

        return await this.taskRepository.updateTask(id, setKeys, values);
    }

    async deleteTask(id){

        return await this.taskRepository.deleteTask(id);
    }
}

export default taskService;