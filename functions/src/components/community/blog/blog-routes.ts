import {Request, Response} from "express";
import {BlogService} from "./services/blog-service";
import {Blog} from "./model/blog";
import {Post} from "./model/post";

export class BlogRoutes {
    public static routes(app: any): void {

        // Get a Blog
        app.route('/blogs/:uuidBlog').get(async (request: Request, response: Response) => {
            BlogService.getBlog(request.params.uuidBlog)
                .then(function(blog: Blog) {
                    response.status(200).send(blog);
                }).catch(function(error: any){
                response.status(404).send("Blog wasn't found: " + error)
            });
        })

        // Get a Post
        app.route('/posts/:uuidPost').get(async (request: Request, response: Response) => {
            BlogService.getPost(request.params.uuidPost)
                .then(function(post: Post) {
                    response.status(200).send(post);
                }).catch(function(error: any){
                response.status(404).send("Post wasn't found: " + error)
            });
        })

        // Create a Post
        app.route('/posts').post(async (request: Request, response: Response) => {
            BlogService.createPost(request.body)
                .then(function (post: Post) {
                    response.status(200).send(post);
                }).catch(function (error: any) {
                response.status(404).send("Post wasn't created successful: " + error);
            });
        });

        // Update a Post
        app.route('/posts').put(async (request: Request, response: Response) => {
            BlogService.updatePost(request.body)
                .then(function (post: Post) {
                    response.status(200).send(post);
                }).catch(function (error: any) {
                response.status(404).send("Post wasn't updated successful: " + error);
            });
        });

        // Delete a Post
        app.route('/posts/:uuidPost').delete(async (request: Request, response: Response) => {
            BlogService.deletePost(request.params.uuidPost)
                .then(function (successful: boolean) {
                    response.status(200).send(successful);
                }).catch(function (error: any) {
                response.status(404).send("Post wasn't updated successful: " + error);
            });
        });
    }
}
