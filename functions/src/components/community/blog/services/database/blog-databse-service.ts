import {Blog} from "../../model/blog";
import {databaseBlog} from "../../../../../index";
import {mapBlogFromDbToBlog, mapPostFromDbToPost} from "../blog-mapper";
import {Post} from "../../model/post";

export class BlogDatabseService {

    static async readBlog(uuidBlog: string): Promise<Blog> {
        console.log('START: BlogDatabseService.readBlog: ' + uuidBlog);
        if (!uuidBlog) throw new Error('[myfarmer] BlogDatabseService.readBlog - Wrong parameters');

        const query = `SELECT Blog.uuid,
                              Blog.title,
                              Blog.description,
                              Post.uuid uuidOfPost, 
                              Post.title titleOfPost,
                              Post.content contentOfPost,
                              Post.imageName imageNameOfPost,
                              Post.duration durationOfPost  
                            FROM Blog 
                            LEFT JOIN Post 
                                ON Blog.uuid=Post.uuidBlog
                                WHERE Blog.uuid='${uuidBlog}';`;

        try {
            const blogFromDb = await databaseBlog.query(query);

            if (blogFromDb === null || blogFromDb === undefined) {
                throw new Error('[myfarmer] BlogDatabseService.readBlog - Blog doesnt exist on database');
            }

            return mapBlogFromDbToBlog(blogFromDb);
        } catch(error) {
            throw new Error('[myfarmer] BlogDatabseService.readBlog - Error reading blog from database: ' + error);
        }
    }

    static async readPost(uuidPost: string): Promise<Post> {
        console.log('START: BlogDatabseService.readPost: ' + uuidPost);
        if (!uuidPost) throw new Error('[myfarmer] BlogDatabseService.readPost - Wrong parameters');

        const query = `SELECT * FROM Post WHERE Post.uuid='${uuidPost}'`;

        try {
            const postFromDb = await databaseBlog.query(query);

            if (postFromDb === null || postFromDb === undefined) {
                throw new Error('[myfarmer] BlogDatabseService.readPost - Post doesnt exist on database');
            }

            return mapPostFromDbToPost(postFromDb[0]);
        } catch(error) {
            throw new Error('[myfarmer] BlogDatabseService.readPost - Error reading Post from database: ' + error);
        }
    }

    static async createPost(uuid: string, post: Post): Promise<Post> {
        console.log('START: BlogDatabseService.createPost');

        // TODO remove the blog uuid and use it dynamically
        const query = `INSERT INTO Post(uuid, title, content, duration, uuidBlog) VALUES ('${uuid}', '${post.title}', '${post.content}', '${post.duration}', '550e8400-e29b-11d4-a716-446655450001')`;

        try {
            const uuidFromDb = await databaseBlog.query(query);

            if (!uuidFromDb) throw new Error('[myfarmer] Error inserting post in database.');

            return uuidFromDb[0];
        } catch(error) {
            throw new Error('[myfarmer] Error execute insert-query post: ' + error);
        }
    }

    static async updatePost(post: Post): Promise<Post> {
        console.log('START: BlogDatabseService.updatePost');

        const query = `INSERT INTO Post(uuid, title, content, duration) VALUES ('${post.uuid}', '${post.title}', '${post.content}', '${post.duration}')`;

        try {
            const uuidFromDb = await databaseBlog.query(query);

            if (!uuidFromDb) throw new Error('[myfarmer] Error inserting post in database.');

            return uuidFromDb[0];
        } catch(error) {
            throw new Error('[myfarmer] Error execute insert-query post: ' + error);
        }
    }
}
