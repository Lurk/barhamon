import { a, p, ul, li, createCloudinaryGallery } from "../../models/tree";
import { PostInterface } from "../../models/posts";

const preview = p(["Now with a memory leak 🎉"]);

export const clink_2: PostInterface = {
  pid: "clink_2",
  header: "Clink",
  time: 1624222000532,
  image:
    "https://res.cloudinary.com/barhamon/image/upload/v1624223477/header/clink_now_with_a_memory_leak.png",
  tags: ["rust", "software"],
  description: "Rust and memory leaks",
  preview: [preview],
  full: [
    preview,
    p([
      "Since my first ",
      a({ text: "mention", url: "/post/[pid]", as: "/post/clink" }),
      " of it, I've made a lot of changes. If you interested in changelog you can look at the ",
      a({ text: "releases", url: "https://github.com/Lurk/clink/releases" }),
      " page.",
    ]),
    p([
      "But most important thing that I noticed is a memory leak. To be completely honest, I am not sure if there is a memory leak, but it looks there is. So yeah, I noticed that after couple of weeks clink process consumes more than 600mb of RAM. I found it wrong because this is a small app, and my expectation is that it should be less than a megabyte.",
    ]),
    p([
      "I still did not find the time to do a proper analysis what is going on. So far, I have a couple of theories :",
    ]),
    ul({
      type: "dot",
      content: [
        li([
          "I am so “talented” that even languages with “memory safe“ selling point are leaking in my hands. ",
        ]),
        li([
          "There is something that I don't know about how memory allocation works on Mac OS",
        ]),
        li([
          "I am using the ",
          a({
            text: "clipboard@0.5.0",
            url: "https://crates.io/crates/clipboard/0.5.0",
          }),
          " crate, and the leak is there.",
        ]),
      ],
    }),
    p([
      "I read a couple of blog post about how to approach tasks like that, and it feels like takes couple of days😔",
    ]),
    p([
      "And one more thing™ - when I packed my stuff, I noticed that I am running low on T-shirts. And guess what? Now I have the clink T-Shirt. At first, I did not liked it. I mean printing quality was not that impressive, but the longer I have it, more I like it. Maybe, when I will have time or inspiration there will be 1.1 version of it. Right now I do not know why you will want one, but if you do - drop me a message.",
    ]),
    createCloudinaryGallery("barhamon", "clink_tshirt"),
  ],
};
