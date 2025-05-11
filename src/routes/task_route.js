import { Router } from "express";
import * as TaskController from '../controllers/task_controller.js'; // Import the controller
import { AuthenticateToken } from '../middlewares/auth.js';

const taskRoutes = Router();


taskRoutes.post('/add_task', TaskController.create_task);
taskRoutes.put('/update_task/:id', TaskController.update_task);
taskRoutes.get('/get_all_task', TaskController.get_all_task);
taskRoutes.get('/get_specific_task/:id', TaskController.get_specific_task);
taskRoutes.delete('/delete_task/:id', TaskController.delete_task);


export default taskRoutes;
