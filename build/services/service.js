"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostService = void 0;
class PostService {
    constructor() {
        this.index = () => {
            return "Index from service";
        };
        this.create = () => {
            return "Create from service";
        };
        this.update = () => {
            return "Update from service";
        };
        this.delete = () => {
            return "Delete from service";
        };
    }
}
exports.PostService = PostService;
