export const enum Types {
  PARAGRAPH = "PARAGRAPH",
  DIVIDER = "DIVIDER",
  MESSAGE = "MESSAGE",
  CODE = "CODE",
  IMAGE = "IMAGE",
  IMAGE_GALLERY = "IMAGE_GALLERY",
  CLOUDINARY_GALLERY = "CLOUDINARY_GALLERY",
  YOUTUBE_VIDEO = "YOUTUBE_VIDEO",
  LINK = "LINK",
  LIST = "LIST",
  LIST_ITEM = "LIST_ITEM",
  H1 = "H1",
  H2 = "H2",
  H3 = "H3",
  H4 = "H4",
  BOLD = "BOLD",
  ACCORDION = "ACCORDION",
  ACCORDION_TAB = "ACCORDION_TAB",
  LINE_THROUGH = "LINE_THROUGH",
  EMBED = "EMBED",
}

export interface Embed {
  type: Types.EMBED;
  value: string;
}

type ParagraphContent =
  | string
  | Link
  | Bold
  | ImageGallery
  | CloudinaryGallery
  | Code
  | LineTrough;

export interface Paragraph {
  type: Types.PARAGRAPH;
  value: ParagraphContent[];
}

export interface LineTrough {
  type: Types.LINE_THROUGH;
  value: (string | Link | Bold)[];
}

export interface ListItem {
  type: Types.LIST_ITEM;
  value: ParagraphContent[];
}

export interface Bold {
  type: Types.BOLD;
  value: string;
}

export interface H1 {
  type: Types.H1;
  value: (string | Link)[];
}

export interface H2 {
  type: Types.H2;
  value: (string | Link)[];
}

export interface H3 {
  type: Types.H3;
  value: (string | Link)[];
}

export interface H4 {
  type: Types.H4;
  value: (string | Link)[];
}

export interface Link {
  type: Types.LINK;
  value: {
    url: string;
    text?: string;
    as?: string;
  };
}

export interface List {
  type: Types.LIST;
  value: {
    type?: "dot" | "number";
    content: ListItem[];
  };
}

export interface Divider {
  type: Types.DIVIDER;
}

export interface Message {
  type: Types.MESSAGE;
  value: {
    header?: string;
    icon?: string;
    content: Paragraph[];
    warning?: boolean;
  };
}

export interface Code {
  type: Types.CODE;
  value: {
    lang:
      | "js"
      | "css"
      | "json"
      | "jsx"
      | "typescript"
      | "yml"
      | "rust"
      | "bash";
    content: string;
  };
}

export interface Image {
  type: Types.IMAGE;
  value: {
    src: string;
    alt: string;
    thumbnail?: string;
    srcSet?: string;
    sizes?: string;
  };
}

export interface ImageGallery {
  type: Types.IMAGE_GALLERY;
  value: Image[];
}

export interface CloudinaryGallery {
  type: Types.CLOUDINARY_GALLERY;
  value: {
    username: string;
    tag: string;
  };
}

export interface YoutubeVideo {
  type: Types.YOUTUBE_VIDEO;
  value: string;
}

export interface Accordion {
  type: Types.ACCORDION;
  value: AccordionTab[];
}

export interface AccordionTab {
  type: Types.ACCORDION_TAB;
  value: {
    header: string;
    content: PostFull;
  };
}

export type PostPreview = Paragraph | Link | List | LineTrough;

export type PostFull =
  | PostPreview
  | YoutubeVideo
  | Divider
  | Image
  | ImageGallery
  | CloudinaryGallery
  | Code
  | Message
  | H1
  | H2
  | H3
  | H4
  | Bold
  | Accordion
  | Embed;

export type Elements = PostFull | ListItem | AccordionTab;

export function p(value: ParagraphContent[]): Paragraph {
  return {
    type: Types.PARAGRAPH,
    value,
  };
}

export function h2(value: (string | Link)[]): H2 {
  return {
    type: Types.H2,
    value,
  };
}

export function h3(value: (string | Link)[]): H3 {
  return {
    type: Types.H3,
    value,
  };
}

export function h4(value: (string | Link)[]): H3 {
  return {
    type: Types.H3,
    value,
  };
}

export function s(value: (string | Link | Bold)[]): LineTrough {
  return {
    type: Types.LINE_THROUGH,
    value,
  };
}

export function createMessage(value: {
  content: Paragraph[];
  header?: string;
  icon?: string;
  warning?: boolean;
}): Message {
  return {
    type: Types.MESSAGE,
    value: {
      ...value,
      warning: value.warning === undefined ? true : value.warning,
    },
  };
}

export function a(value: { url: string; as?: string; text?: string }): Link {
  return {
    type: Types.LINK,
    value,
  };
}

export function code(value: {
  content: string;
  lang: "js" | "css" | "json" | "jsx" | "typescript" | "yml" | "rust" | "bash";
}): Code {
  return {
    type: Types.CODE,
    value,
  };
}

export function b(text: string): Bold {
  return {
    type: Types.BOLD,
    value: text,
  };
}

export function createDivider(): Divider {
  return {
    type: Types.DIVIDER,
  };
}

export function createCloudinaryGallery(
  username: string,
  tag: string,
): CloudinaryGallery {
  return {
    type: Types.CLOUDINARY_GALLERY,
    value: {
      username,
      tag,
    },
  };
}

export function createYoutubeVideo(value: string): YoutubeVideo {
  return {
    type: Types.YOUTUBE_VIDEO,
    value,
  };
}

export function ul(value: {
  content: ListItem[];
  type?: "dot" | "number";
}): List {
  return {
    type: Types.LIST,
    value,
  };
}

export function li(value: ParagraphContent[]): ListItem {
  return {
    type: Types.LIST_ITEM,
    value,
  };
}

export function createAccordion(value: AccordionTab[]): Accordion {
  return {
    type: Types.ACCORDION,
    value,
  };
}

export function createAccordionTab(value: {
  header: string;
  content: PostFull;
}): AccordionTab {
  return {
    type: Types.ACCORDION_TAB,
    value,
  };
}

export function img(value: {
  src: string;
  alt: string;
  thumbnail?: string;
  srcSet?: string;
  sizes?: string;
}): Image {
  return {
    type: Types.IMAGE,
    value,
  };
}

export function createImageGallery(value: Image[]): ImageGallery {
  return {
    type: Types.IMAGE_GALLERY,
    value,
  };
}

export function embed(value: string): Embed {
  return {
    type: Types.EMBED,
    value,
  };
}
