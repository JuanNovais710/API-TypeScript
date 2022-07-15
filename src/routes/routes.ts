import { Router} from "express";
import { PostController } from "../controllers/post.controller";

const routes = Router();
const postController = new PostController();

routes.post('/post', postController.create);
routes.get('/', postController.index);
routes.put('/:id', postController.update);
routes.delete('/:id', postController.delete);

export default routes 