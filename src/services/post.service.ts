import { AppDataSource } from "../data-source";
import { PostEntity } from "../entities/post.entity";
import {  } from "../repository/post.repository";


export class PostService {
    private postRepository
    private postEntity: PostEntity;

    constructor(){
        this.postRepository = AppDataSource.getRepository(PostEntity)
    }
    public index = async () => {
        const posts = await this.postRepository.find()
        return posts
    }
    public create = () => {
        return "Create from service";
    }
    public update = async (post: PostEntity, id: number) => {
        const updatedPost = await this.postRepository.update(id, post);
        return 
    }
    public delete = async (id: number) => {
        const deletedPost = await this.postRepository.delete(id);
        return deletedPost;
    }
}