const routes = {
    '/task': ['GET','taskController','getTasks'],
    '/task-create': ['POST','taskController','createTask'],
    '/task-edit/{id}': ['PUT','taskController','updateTask'],
    '/task-delete/{id}': ['DELETE','taskController','deleteTask'],
}
export default routes;