import { a, p, code } from "../models/tree";
import { PostInterface } from "../models/posts";

const preview = [
  p("My first rust app that works and does something useful."),
  p("What does it do?")
];

export const clink: PostInterface = {
  pid: "clink",
  header: "Clink",
  time: 1613305995389,
  image: "https://res.cloudinary.com/barhamon/image/upload/c_scale,q_auto,w_650/v1613307615/header/clink_buqa5t.png",
  tags: ["rust"],
  description: "My first rust app",
  preview: preview,
  full: [
    ...preview,
    p(
      "Have you ever pasted a link in messenger and deleted all those fbclid, utm_source, utm_campaign, utm_medium GET params by hands? Clink does that for you. It sits quietly in the background, and if you copy a link to the clipboard, Clink automatically removes those params for you."
    ),
    p([
      "Inspiration for this project was this ",
      a({
        url: "https://twitter.com/ftrain/status/1359138516681314311?s=21",
        text: "tweet",
      }),
      '. And yes, Clink has "your mom" mode :)',
    ]),
    p([
      "If you are interested, here is the link to the ",
      a({ url: "https://github.com/Lurk/clink", text: "Clink GitHub repo" }),
      ". And if you are not interested in reading source codes, ",
      a({ url: "https://github.com/Lurk/clink/releases", text: "here" }),
      " you can download the latest version of Clink for your operating system (macOS, Linux, Windows).",
    ]),
    p([
      "Usage is pretty straightforward:",
      code({
        content: `clink [OPTIONS]
    Options:
    -v, --verbose Be verbose.
    -m, --mode Mode of Clink. Available "remove" and "your_mom" modes (default: Remove)
    -h, --help Show this help message.`,
        lang: "bash",
      }),
    ]),
    p("I learned a few things along the way and some things I want to learn in the near future. Like is it ok to thread::sleep, or there is a better way. Or how to automatically build deb and dmg? And so on."),
    p("So yeah, stay tuned to more Rust content :)"),
  ],
};
