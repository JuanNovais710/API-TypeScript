"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const post_controller_1 = require("../controllers/post.controller");
const routes = (0, express_1.Router)();
const postController = new post_controller_1.PostController();
routes.post('/post', postController.create);
routes.get('/', postController.index);
routes.put('/:id', postController.update);
routes.delete('/:id', postController.delete);
exports.default = routes;
