import { li, p, ul } from "../models/tree";
import { PostInterface } from "../models/posts";

const preview = p(
  "Since English is not my native language, it’s hard for me to express my thoughts on it. I hope that writing posts regularly (!important) will improve my speaking skills."
);

export const why: PostInterface = {
  pid: "why",
  header: "Why?",
  time: 1593701715703,
  image: "/img/why.jpg",
  tags: ["blog"],
  description: "",
  preview: [preview],
  full: [
    preview,
    p(
      "The second reason is education. Being a developer means that you are constantly learning, at least if you want to progress. The best way to learn is to explain what you are learning. I'm not sure if this works with everyone, but it works with me."
    ),
    p("So, be ready to read about:"),
    ul({
      content: [
        li("Building software."),
        li("Adventure motorcycle riding."),
        li("Fishing."),
        li("Camping."),
      ],
    }),
    p(
      "And music. God, I love music. Someday, here you will find an archive of all my favorite albums with covers and links to listen."
    ),
  ],
};
