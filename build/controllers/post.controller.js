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
const express_1 = require("express");
const service_1 = require("../services/service");
class PostController {
    constructor() {
        this.index = (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.send(this.postService.index());
        });
        this.router = (0, express_1.Router)();
        this.routes();
        this.postService = new service_1.PostService();
    }
    create(req, res) {
        res.send(this.postService.create());
    }
    update(req, res) {
        res.send(this.postService.update());
    }
    delete(req, res) {
        res.send(this.postService.delete());
    }
    routes() {
        this.router.get('/', this.index);
        this.router.post('/', this.create);
        this.router.put('/:id', this.update);
        this.router.delete('/:id', this.delete);
    }
}
exports.PostController = PostController;
