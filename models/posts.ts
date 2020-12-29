export enum Types {
  PARAGRAPH = "PARAGRAPH",
  DIVIDER = "DIVIDER",
  MESSAGE = "MESSAGE",
  CODE = 'CODE',
  IMAGE = 'IMAGE',
  IMAGE_GALLERY = 'IMAGE_GALLERY',
  CLOUDINARY_GALLERY = 'CLOUDINARY_GALLERY',
  YOUTUBE_VIDEO = 'YOUTUBE_VIDEO',
  LINK = 'LINK',
  LIST = 'LIST',
  LIST_ITEM = 'LIST_ITEM',
  HEADER = 'HEADER',
  BOLD = "BOLD",
  ACCORDION = "ACCORDION",
  LINE_THROUGH = "LINE_THROUGH"
}

type ParagraphContent = string | Link | Bold | ImageGallery | CloudinaryGallery | Code | LineTrough;

export interface Paragraph {
  type: Types.PARAGRAPH
  value: ParagraphContent | ParagraphContent[]
}

export interface LineTrough {
  type: Types.LINE_THROUGH
  value: (string | Link | Bold) | (string | Link | Bold)[]
}

export interface ListItem {
  type: Types.LIST_ITEM
  value: ParagraphContent | ParagraphContent[]
}

export interface Bold {
  type: Types.BOLD
  value: string
}

export interface Header {
  type: Types.HEADER
  value: (string | Link) | (string | Link)[]
}

export interface Link {
  type: Types.LINK,
  value: {
    url: string,
    text?: string
    as?: string
  }
}

export interface List {
  type: Types.LIST,
  value: {
    type?: "dot" | "number",
    content: ListItem[]
  }
}

export interface Divider {
  type: Types.DIVIDER
}

export interface Message {
  type: Types.MESSAGE,
  value: {
    header?: string,
    icon?: string,
    content: Paragraph[] | Paragraph
  }
}

export interface Code {
  type: Types.CODE,
  value: {
    lang: string,
    content: string
  }
}

export interface Image {
  type: Types.IMAGE,
  value: {
    src: string,
    alt: string,
    thumbnail?: string,
    srcSet?: string,
    sizes?: string
  }
}

export interface ImageGallery {
  type: Types.IMAGE_GALLERY,
  value: Image[]
}

export interface CloudinaryGallery {
  type: Types.CLOUDINARY_GALLERY,
  value: {
    username: string,
    tag: string
  }
}

export interface YoutubeVideo {
  type: Types.YOUTUBE_VIDEO,
  value: string
}

export interface Accordion {
  type: Types.ACCORDION,
  value: {
    header: string,
    text: Paragraph
  }[]
}

export type PostPreview = Paragraph | Link | List;

export type PostFull =
  PostPreview
  | YoutubeVideo
  | Divider
  | Image
  | ImageGallery
  | CloudinaryGallery
  | Code
  | Message
  | Header
  | Bold
  | Accordion
  ;

export function p(value: ParagraphContent | ParagraphContent[]): Paragraph {
  return {
    type: Types.PARAGRAPH,
    value
  }
}

export function h3(value: (string | Link) | (string | Link)[]): Header {
  return {
    type: Types.HEADER,
    value
  }
}

export function s(value: (string | Link | Bold) | (string | Link | Bold)[]): LineTrough {
  return {
    type: Types.LINE_THROUGH,
    value
  }
}

export function createMessage(value: { content: Paragraph[] | Paragraph, header?: string, icon?: string }): Message {
  return {
    type: Types.MESSAGE,
    value
  }
}

export function a(value: { url: string, as?: string, text?: string }): Link {
  return {
    type: Types.LINK,
    value
  }
}

export function code(value: { content: string, lang: string }): Code {
  return {
    type: Types.CODE,
    value
  }
}

export function b(text: string): Bold {
  return {
    type: Types.BOLD,
    value: text
  }
}

export function createDivider(): Divider {
  return {
    type: Types.DIVIDER,
  }
}

export function createCloudinaryGallery(username: string, tag: string): CloudinaryGallery {
  return {
    type: Types.CLOUDINARY_GALLERY,
    value: {
      username,
      tag
    }
  }
}

export function createYoutubeVideo(value: string): YoutubeVideo {
  return {
    type: Types.YOUTUBE_VIDEO,
    value
  }
}

export function ul(value: { content: ListItem[], type?: "dot" | "number" }): List {
  return {
    type: Types.LIST,
    value
  }
}

export function li(value: ParagraphContent | ParagraphContent[]): ListItem {
  return {
    type: Types.LIST_ITEM,
    value
  }
}


export function createAccordion(value: { header: string, text: Paragraph }[]): Accordion {
  return {
    type: Types.ACCORDION,
    value
  }
}

export function img(value: {
  src: string,
  alt: string,
  thumbnail?: string,
  srcSet?: string,
  sizes?: string
}): Image {
  return {
    type: Types.IMAGE,
    value
  }
}

export function createImageGallery(value: Image[]): ImageGallery {
  return {
    type: Types.IMAGE_GALLERY,
    value
  }
}


export interface PostInterface {
  pid: string,
  header: string,
  time: number,
  description: string,
  preview: PostPreview[]
  full: PostFull[]
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

export interface PageResult {
  limit: number,
  offset: number,
  total: number,
  totalPages: number,
  currentPage: number,
  posts: PostInterface[]
}

export class Posts {
  private posts: Dict<PostInterface> = {};
  private l: number = 0;

  addPost(post: PostInterface) {
    if (this.posts[ post.pid ]) {
      throw new Error(`post with id: ${post.pid} already exists`);
    }
    this.posts[ post.pid ] = post;
    this.l += 1;
  }

  getPost(pid: string): PostInterface | false {
    return this.posts[ pid ] || false;
  }

  length() {
    return this.l;
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

