const routes = {
    '/task': ['GET','taskController','getTasks',['app-key']],
    '/task-create': ['POST','taskController','createTask',['app-key']],
    '/task-edit/{id}': ['PATCH','taskController','updateTask'],
    '/task-delete/{id}': ['DELETE','taskController','deleteTask'],
}
export default routes;