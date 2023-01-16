import { a, p, b } from "../../models/tree";
import { PostInterface } from "../../models/posts";

const preview = p(["The most useful book you can read."]);

export const thinking_fast_and_slow: PostInterface = {
  pid: "thinking_fast_and_slow",
  header: "Thinking, Fast and Slow by Daniel Kahneman",
  time: 1631967114351,
  image:
    "https://res.cloudinary.com/barhamon/image/upload/c_scale,h_800,q_auto/v1631968045/header/thinking_fast_and_slow.jpg",
  tags: ["book"],
  description: "Thinking, Fast and Slow - the most useful book you can read.",
  preview: [preview],
  full: [
    preview,
    p([
      "Have you been in a situation where you are reading a book and your thoughts run away so far that you need to reread a couple of pages when they come back? That was constantly happening with me when I was reading this book. Not because it is not interesting, but because almost on every page, or at least on every chapter, I was like - oh, that's why I do this. Or - oh, that's why advertisement, news, politics, science, etc., works like that.",
    ]),
    p([
      "Not every idea was new for me, but the book goes into a detailed explanation of every experiment that was done to prove or disprove the point. And it is fascinating.",
    ]),
    p([
      "I got this book in Russian translation, and I feel that some bits are missing during translation. The title translated like 'Think slowly decide quickly', which is far from the the original. So yeah, I definitely will reread this book in English. ",
    ]),
    p([b("Original Title:"), " Thinking, Fast and Slow"]),
    p([b("ISBN:"), " 0374275637 (ISBN13: 9780374275631)"]),
    p([
      b("GoodReads:"),
      " ",
      a({
        url: "https://www.goodreads.com/book/show/11468377-thinking-fast-and-slow",
        text: "4.16 / 5",
      }),
    ]),
  ],
};
