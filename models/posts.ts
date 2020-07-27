export interface PostInterface {
  pid: string,
  header: string,
  time: number,
  description: string,
  Preview: React.FC
  Full: React.FC
  image: string,
  readTime?: number,
  tags?: string[]
}

type Dict<T> = {
  [ key: string ]: T | undefined
}

interface PageOptions {
  offset: number,
  limit: number,
  tag?: string
}

interface PageResult {
  limit: number,
  offset: number,
  total: number,
  totalPages: number,
  currentPage: number,
  posts: PostInterface[]
}

export class Posts {
  private posts: Dict<PostInterface> = {};

  addPost(post: PostInterface) {
    if (this.posts[ post.pid ]) {
      throw new Error(`post with id: ${post.pid} already exists`);
    }
    this.posts[ post.pid ] = post;
  }

  getPost(pid: string): PostInterface | false {
    return this.posts[ pid ] || false;
  }

  length() {
    return Object.keys(this.posts).length;
  }

  getPage(opt: PageOptions = { offset: 0, limit: 10 }): PageResult {
    let res: PostInterface[];
    if (opt.tag) {
      res = Object.values(this.posts).filter((p) => p.tags.includes(opt.tag))
    } else {
      res = Object.values(this.posts);
    }

    return {
      limit: opt.limit,
      offset: opt.offset,
      total: res.length,
      totalPages: Math.ceil(res.length / opt.limit),
      currentPage: opt.offset === 0 ? 1 : Math.ceil(opt.offset / opt.limit) + 1,
      posts: res.sort(((a, b) => b.time - a.time)).slice(opt.offset, opt.offset + opt.limit)
    };
  }

  getAll() {
    return Object.values(this.posts).sort(((a, b) => b.time - a.time));
  }
}

