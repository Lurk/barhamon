import { a, p, b, ul, li } from "../../models/tree";
import { PostInterface } from "../../models/posts";

const preview = p(["by Camille Fournier"]);

export const the_managers_path: PostInterface = {
  pid: "the_managers_path",
  header:
    "The Manager's Path: A Guide for Tech Leaders Navigating Growth and Change",
  time: 1641723580884,
  image:
    "https://res.cloudinary.com/barhamon/image/upload/c_scale,h_800,q_auto/v1641722817/header/the_managers_path.jpg",
  tags: ["book"],
  description:
    "Book about how to manage people, and be managed by other people",
  preview: [preview],
  full: [
    preview,
    p([
      "This is the book you should read as early as possible in your tech career, despite the name. After reading it, you will understand what and why people around you want from you, which will help your daily activities.",
    ]),
    p(["My takeaways are:"]),
    ul({
      type: "dot",
      content: [
        li([
          "Now work I did in the past has a proper name. For example, once I managed three teams, but since our carrier ladder was awful, my position was - Systems architect. I was responsible for architecture because we had no tech lead, but what everybody wanted from me was those team productivity. Now I know that I was engineering manager, and Instead of making architectural decisions, I Now work I did in the past has a proper name. For example, once I managed three teams, but since our carrier ladder was awful, my position was - Systems architect. I was responsible for architecture because we had no tech lead, but what everybody wanted from me was those team productivity. Now I know that I was engineering manager, and Instead of making architectural decisions, I should have hired tech leads. hire tech leads. ",
        ]),
        li(["Mentors are important. Both having and being one."]),
        li(["1-1s are super important for everybody."]),
      ],
    }),
    p([
      b("Original Title:"),
      " The Manager's Path: A Guide for Tech Leaders Navigating Growth and Change",
    ]),
    p([b("ISBN:"), " 1491973897 (ISBN13: 9781491973899)"]),
    p([
      b("GoodReads:"),
      " ",
      a({
        url: "https://www.goodreads.com/book/show/33369254-the-manager-s-path",
        text: "4.20 / 5",
      }),
    ]),
  ],
};
