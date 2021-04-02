import { PostFull, PostPreview } from "./tree";

export interface PostInterface {
  pid: string;
  header: string;
  time: number;
  description: string;
  preview: PostPreview[];
  full: PostFull[];
  image: string;
  readTime?: number;
  tags?: string[];
}

type Dict<T> = {
  [key: string]: T | undefined;
};

interface PageOptions {
  offset: number;
  limit: number;
  tag?: string;
}

export interface PageResult {
  limit: number;
  offset: number;
  total: number;
  totalPages: number;
  currentPage: number;
  posts: PostInterface[];
}

export class Posts {
  private posts: Dict<PostInterface> = {};
  private l: number = 0;
  private cache = [];

  addPost(post: PostInterface) {
    if (this.posts[post.pid]) {
      throw new Error(`post with id: ${post.pid} already exists`);
    }
    this.posts[post.pid] = post;
    this.l += 1;
  }

  getPost(pid: string): PostInterface | false {
    return this.posts[pid] || false;
  }

  length() {
    return this.l;
  }

  getPage(opt: PageOptions = { offset: 0, limit: 10 }): PageResult {
    let res: PostInterface[];
    if (opt.tag) {
      res = this.getAll().filter((p) => p.tags.includes(opt.tag));
    } else {
      res = this.getAll();
    }

    return {
      limit: opt.limit,
      offset: opt.offset,
      total: res.length,
      totalPages: Math.ceil(res.length / opt.limit),
      currentPage: opt.offset === 0 ? 1 : Math.ceil(opt.offset / opt.limit) + 1,
      posts: res.slice(opt.offset, opt.offset + opt.limit),
    };
  }

  getAll() {
    if (this.cache.length === 0) {
      this.cache = Object.values(this.posts).sort((a, b) => b.time - a.time);
    }
    return this.cache;
  }
}
