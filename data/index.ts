import { Posts } from "../models/posts";
import * as posts_data from "./content";
import { getMusic } from "./music/music";

export const posts = new Posts();
Object.values(posts_data).forEach((p) => posts.addPost(p));
getMusic().then((musicPosts) => musicPosts.forEach((p) => posts.addPost(p)));
