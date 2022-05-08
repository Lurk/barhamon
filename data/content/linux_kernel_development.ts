import { a, p, b, ul, li } from "../../models/tree";
import { PostInterface } from "../../models/posts";

const preview = p(["by Robert Love"]);

export const linux_kernel_development: PostInterface = {
  pid: "linux_kernel_development",
  header: "Linux Kernel Development",
  time: 1652015821697,
  image:
    "https://res.cloudinary.com/barhamon/image/upload/c_scale,h_800,q_auto/v1652015496/header/linux_kernel_development.jpeg",
  tags: ["book"],
  description:
    "A thorough guide to the design and implementation of the Linux kernel",
  preview: [preview],
  full: [
    preview,
    p([
      "Although the book is outdated, it is an excellent overview of the Linux kernel internals. I don't think that it will be helpful for someone who already knows how the kernel works, but for a beginner like me, it is fantastic.",
    ]),
    p([
      "Now I want to know more. If you know good books on the OS design topic in general or I/O in particular - please let me know.",
    ]),
    p([
      b("Original Title:"),
      " Linux Kernel Development: A thorough guide to the design and implementation of the Linux kernel",
    ]),
    p([b("ISBN:"), " 0672329468 (ISBN13: 9780672329463)"]),
    p([
      b("GoodReads:"),
      " ",
      a({
        url: "https://www.goodreads.com/book/show/8474434-linux-kernel-development",
        text: "4.33 / 5",
      }),
    ]),
  ],
};
