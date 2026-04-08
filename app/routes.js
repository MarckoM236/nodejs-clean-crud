const routes = {
    '/task': ['GET','taskController','getTasks'],
    '/task-create': ['POST','taskController','createTask'],
    '/task-edit/{id}': ['PATCH','taskController','updateTask'],
    '/task-delete/{id}': ['DELETE','taskController','deleteTask'],
}
export default routes;