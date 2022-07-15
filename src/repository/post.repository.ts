import { Repository } from "typeorm";
import { PostEntity } from '../entities/post.entity';
import 'reflect-metadata';
import { AppDataSource } from "../data-source";

export const postRepository = AppDataSource.getRepository(PostEntity);
