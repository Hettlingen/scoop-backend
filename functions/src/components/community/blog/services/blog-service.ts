import {Blog} from "../model/blog";
import {BlogDatabseService} from "./database/blog-databse-service";
import {Post} from "../model/post";
import * as uuidGenerator from "uuid/v4";

export class BlogService {

    static async getBlog(uuidBlog: string): Promise<Blog> {
        console.log('START: BlogService.getBlog: ' + uuidBlog);
        if (!uuidBlog) throw new Error('Blog-ID is required');

        try {
            return await BlogDatabseService.readBlog(uuidBlog);
        } catch(error){
            throw new Error('[myfarmer] BlogService.getBlog - Error reading Blog' + error);
        }
    }

    static async getPost(uuidPost: string): Promise<Post> {
        console.log('START: BlogService.getBlog: ' + uuidPost);
        if (!uuidPost) throw new Error('Post-ID is required');

        try {
            return await BlogDatabseService.readPost(uuidPost);
        } catch(error){
            throw new Error('[myfarmer] BlogService.getPost - Error reading Post with uuid '
                + uuidPost + ', error: ' +
                + error);
        }
    }

    static async createPost(post: Post): Promise<Post> {
        console.log('Post: ' + JSON.stringify(post));
        console.log('START: BlogService.createPost');

        try {
            return await BlogDatabseService.createPost(
                uuidGenerator(),
                post);
        } catch(error){
            throw new Error('[myfarmer] BlogService.createPost - Error creating Post for Blog: '
                + post.blog.uuid + ', error: ' +
                + error);
        }
    }

    static async updatePost(post: Post): Promise<Post> {
        console.log('START: BlogService.createPost: ' + post.blog.uuid);

        try {
            return await BlogDatabseService.updatePost(post);
        } catch(error){
            throw new Error('[myfarmer] BlogService.updatePost - Error creating Post for Blog: '
                + post.blog.uuid + ', error: ' +
                + error);
        }
    }

    static async deletePost(uuidPost: string): Promise<boolean> {
        console.log('START: BlogService.deletePost: ' + uuidPost);

        try {
            return await BlogDatabseService.deletePost(uuidPost);
        } catch(error){
            throw new Error('[myfarmer] BlogService.updatePost - Error deleting Post: '
                + uuidPost + ', error: ' +
                + error);
        }
    }
}
