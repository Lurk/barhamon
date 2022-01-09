import { Posts } from "../models/posts";
import * as posts_data from "./content";

export const posts = new Posts();
Object.values(posts_data).forEach((p) => posts.addPost(p));
