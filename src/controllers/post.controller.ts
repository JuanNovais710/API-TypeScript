import { Request, Response } from "express"
import { title } from "process";
import { PostEntity } from "../entities/post.entity";
import { postRepository } from "../repository/post.repository";
import { PostService } from "../services/post.service";

export class PostController {
    postService = new PostService();
    postEntity = new PostEntity();

    async index(req: Request, res: Response) {
        const posts = await postRepository.find()
        res.send(posts).json();
    }

    async create(req: Request, res: Response) {
        const { title, content } = req.body;
        try {
            const newPost = postRepository.create({ title, content });
            await postRepository.save(newPost);
            return res.status(200).json(newPost)

        } catch (error) {
            console.log(error)
            return res.status(500).json('Internal Server Error.')
        }
    }

    async update (req: Request, res: Response) { 
        
        const updatedPost = await postRepository
        .update(req.params.id, req.body);
        return res.sendStatus(201);
    }
    async delete (req: Request, res: Response) {
        await postRepository.delete(req.params.id);
        return res.sendStatus(200);
    }

}