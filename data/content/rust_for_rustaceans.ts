import { a, p, b } from "../../models/tree";
import { PostInterface } from "../../models/posts";

const preview = p(["by Jon Gjengset"]);

export const rust_for_rustaceans: PostInterface = {
  pid: "rust_for_rustaceans",
  header: "Rust for Rustaceans",
  time: 1664631424538,
  image:
    "https://res.cloudinary.com/barhamon/image/upload/c_scale,h_800,q_auto/v1664632340/header/rust_for.jpeg",
  tags: ["book"],
  description:
    "Rust for Rustaceans: idiomatic programming for experienced developers.",
  preview: [preview],
  full: [
    preview,
    p([
      "The book goes deep into interface design, memory layout, concurrency, testing, no std, and so on. Multiple times, while reading it, I had “oh, that's how it should be done” moments. So I would say If you are writing software using Rust, this book is must read. It does not repeat the Rust book, and assumes that you already familiar with the language. In general, I like how the author explains things, and if you are not subscribed to his ",
      a({
        text: "YouTube channel",
        url: "https://www.youtube.com/c/JonGjengset",
      }),
      ", I would suggest doing that.",
    ]),
    p([
      b("Original Title:"),
      " Rust for Rustaceans: idiomatic programming for experienced developers",
    ]),
    p([b("ISBN13:"), "9781718501850"]),
    p([
      b("GoodReads:"),
      " ",
      a({
        url: "https://www.goodreads.com/book/show/58244064-rust-for-rustaceans",
        text: "4.59 / 5",
      }),
    ]),
  ],
};
