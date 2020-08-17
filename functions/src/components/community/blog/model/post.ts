import {Blog} from "./blog";

export class Post {
    public uuid!: string;
    public title!: string;
    public content!: string;
    public imageName!: string;
    public duration!: number;
    public author!: string;
    public blog!: Blog;
    public dateCreated!: Date;
    public dateUpdated!: Date;
    public datePublished!: Date;
}
