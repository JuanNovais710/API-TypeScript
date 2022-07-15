"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRepository = void 0;
const post_entity_1 = require("../entities/post.entity");
require("reflect-metadata");
const data_source_1 = require("../data-source");
exports.postRepository = data_source_1.AppDataSource.getRepository(post_entity_1.PostEntity);
