import { Router } from 'express';
import VideoControler from './controler.js'

const VideoRouter = new Router();

//роути 
VideoRouter.delete('/:id', VideoControler.delete_id);

export default videoRouter;