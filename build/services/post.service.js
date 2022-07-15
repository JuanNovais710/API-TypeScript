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
exports.PostService = void 0;
const data_source_1 = require("../data-source");
const post_entity_1 = require("../entities/post.entity");
class PostService {
    constructor() {
        this.index = () => __awaiter(this, void 0, void 0, function* () {
            const posts = yield this.postRepository.find();
            return posts;
        });
        this.create = () => {
            return "Create from service";
        };
        this.update = (post, id) => __awaiter(this, void 0, void 0, function* () {
            const updatedPost = yield this.postRepository.update(id, post);
            return;
        });
        this.delete = (id) => __awaiter(this, void 0, void 0, function* () {
            const deletedPost = yield this.postRepository.delete(id);
            return deletedPost;
        });
        this.postRepository = data_source_1.AppDataSource.getRepository(post_entity_1.PostEntity);
    }
}
exports.PostService = PostService;
