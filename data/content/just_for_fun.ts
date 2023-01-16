import { a, p, b } from "../../models/tree";
import { PostInterface } from "../../models/posts";

const preview =
  "All my nerdy senses were pleased by this book. I highly recommend it.";

export const just_for_fun: PostInterface = {
  pid: "just_for_fun",
  header:
    "Just for Fun: The Story of an Accidental Revolutionary by Linus Torvalds and David Diamond",
  time: 1634063874636,
  image:
    "https://res.cloudinary.com/barhamon/image/upload/c_scale,h_800,q_auto/v1634063604/header/just_for_fun.jpg",
  tags: ["book"],
  description: preview,
  preview: [p([preview])],
  full: [
    p([preview]),
    p([
      "Linus was (and still is) my Hero with capital H for a long time. But just recently, I found out that there is a book from/about him. So I bought it, and boy, it is good. All my nerdy memories (someday I will write stuff about school days, how we with my friends tried to create our operating system because windows suck) were alive again while I read it.",
    ]),
    p([
      "If you somehow missed it, as I did, and you are a nerd yourself or want to understand nerds - I highly recommend it.",
    ]),
    p([
      "And couple more words about role models. I get why guys like Steve Jobs, Mark Zuckerberg, or Elon Musk are considered role models for many people. But I don't think that we as humanity need more Steves or Marks, or even more Elon's. But I am 100% sure that we need a lot more people like Linus. The engineers that build all stuff we are using and relying on.",
    ]),
    p([
      b("Original Title:"),
      " Just for Fun: The Story of an Accidental Revolutionary",
    ]),
    p([b("ISBN:"), " 0066620732 (ISBN13: 9780066620732)"]),
    p([
      b("GoodReads:"),
      " ",
      a({
        url: "https://www.goodreads.com/book/show/160171.Just_for_Fun",
        text: " 3.94 / 5",
      }),
    ]),
  ],
};
