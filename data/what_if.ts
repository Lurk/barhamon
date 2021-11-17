import { a, p, b } from "../models/tree";
import { PostInterface } from "../models/posts";

const preview = p(["by Randall Munroe"]);

export const what_if: PostInterface = {
  pid: "what_if",
  header:
    "What If? Serious Scientific Answers to Absurd Hypothetical Questions",
  time: 1637182052756,
  image:
    "https://res.cloudinary.com/barhamon/image/upload/c_scale,h_800,q_auto/v1637181907/header/what_if.jpg",
  tags: ["book"],
  description:
    "If you have been on the internet for a long enough time, you know the XKCD and Randall Munroe. And he wrote the book. Good one.",
  preview: [preview],
  full: [
    preview,
    p([
      "If you have been on the internet for a long enough time, you know the XKCD and Randall Munroe. And he wrote the book. Good one.",
    ]),
    p([
      "The book teaches you about physics, and chemistry, and biology, and history, and all other boring stuff in a fun and entertaining way.",
    ]),
    p([
      "There is not much to say about it without spoilers, but the book does what the headline says - scientific answers to stupid questions. You can go to the xkcd website and read some of them. One of my favorites is about baseball and the speed of light.",
    ]),
    p([
      b("Original Title:"),
      " What If? Serious Scientific Answers to Absurd Hypothetical Questions",
    ]),
    p([b("ISBN:"), " 0544272994 (ISBN13: 9780544272996)"]),
    p([
      b("GoodReads:"),
      " ",
      a({
        url: "https://www.goodreads.com/book/show/21413662-what-if-serious-scientific-answers-to-absurd-hypothetical-questions",
        text: " 4.12 / 5",
      }),
    ]),
  ],
};
