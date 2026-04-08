import pool from '../../system/connectionDB.js';

class taskRepository{
    constructor(){}

    async getTasks(){
        const query = 'select * from tasks';
        const [rows] = await pool.execute(query);
        return rows;
    }

    async createTask(data){
        const [result] = await pool.execute(
        'INSERT INTO tasks (name, description, created_date, status) VALUES (?, ?, ?, ?)',
        [data['name'], data['description'], data['created_date'], data['status']]
        );

        return result;
    }

    async updateTask(id,keys, data){
        const [result] = await pool.execute(
        'update tasks set ' + keys +' where id=?',
        [ ...data, id]
        );

        return result;
    }

    async deleteTask(id){
        const [result] = await pool.execute(
        'delete from tasks where id=?',
        [id]
        );

        return result;
    }
}

export default taskRepository;