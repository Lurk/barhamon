import { code, p, a, b, img, ul, li, createMessage } from "../models/tree";
import { PostInterface } from "../models/posts";
import { prepareImgProps } from "../utils";
import { Icon } from "semantic-ui-react";

const preview = ["I was fascinated with operating systems for a long time."];

export const kerla: PostInterface = {
  pid: "kerla",
  header: "Kerla",
  time: 1640116329881,
  image:
    "https://res.cloudinary.com/barhamon/image/upload/c_mpad,h_800/v1640116267/header/kerla.jpg",
  description: "How NSString::UTF8String actually works",
  tags: ["rust", "software", "linux"],
  preview: [p(preview)],
  full: [
    p([
      ...preview,
      " And the thought of learning more about them always sits at the back of my mind. But I can identify at least a couple of reasons why I never did something in that domain. While I can read C-like languages, and with some effort, understand the code, every time I looked at Linux kernel source code, I saw unicorns and fairies. I would say that the kernel is not beginner-friendly, which is not a bad thing. But I felt like I needed to invest a lot of time before contributing. And some things were more fun and sometimes profitable than properly learning C and understanding kernel. So I never did.",
    ]),
    p([
      "Despite all of that, I occasionally read articles or news on that topic. And when I saw ",
      a({
        url: "https://seiya.me/writing-linux-clone-in-rust",
        text: "“Just for fun”™ Linux on Rust rewrite",
      }),
      ", I immediately jumped in. Maybe “jumped in” sounds over-enthusiastic because I know nothing about the kernel development and still don't feel comfortable with Rust. But anyway, I can read and navigate the source code, identify spots that I can fix, and fix them. Which is a vast improvement over the original kernel for me :)",
    ]),
    p([
      "If you can relate to what I wrote above, check out ",
      a({ url: "https://github.com/nuta/kerla", text: "Kerla" }),
      ". It is in the early stages of development, so people with all levels of knowledge can find what to do. There are a lot of decisions to make, a lot of code to write. ",
    ]),
    p(["And yes, it is fun"]),
  ],
};
