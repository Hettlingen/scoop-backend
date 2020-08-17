import {Post} from "./post";

export class Blog {
    public uuid!: string;
    public title!: string;
    public description!: string;
    public author!: string;  // should be an author
    public listPost: Post[] = [];
    public dateCreated!: Date;
    public dateUpdated!: Date;
    public datePublished!: Date;
}
