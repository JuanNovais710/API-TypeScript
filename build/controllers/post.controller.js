"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostController = void 0;
const post_entity_1 = require("../entities/post.entity");
const post_repository_1 = require("../repository/post.repository");
const post_service_1 = require("../services/post.service");
class PostController {
    constructor() {
        this.postService = new post_service_1.PostService();
        this.postEntity = new post_entity_1.PostEntity();
    }
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const posts = yield post_repository_1.postRepository.find();
            res.send(posts).json();
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, content } = req.body;
            try {
                const newPost = post_repository_1.postRepository.create({ title, content });
                yield post_repository_1.postRepository.save(newPost);
                return res.status(200).json(newPost);
            }
            catch (error) {
                console.log(error);
                return res.status(500).json('Internal Server Error.');
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedPost = yield post_repository_1.postRepository
                .update(req.params.id, req.body);
            return res.sendStatus(201);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield post_repository_1.postRepository.delete(req.params.id);
            return res.sendStatus(200);
        });
    }
}
exports.PostController = PostController;
