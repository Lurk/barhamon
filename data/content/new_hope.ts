import { p } from "../../models/tree";
import { PostInterface } from "../../models/posts";

const preview = [
  p([
    "I want to write a blog as long as blogs exist. Now I'm doing it (hopefully).",
  ]),
  p(["Let`s start from the beginning."]),
  p(["My name Serhiy and I am a software engineer."]),
];

export const new_hope: PostInterface = {
  pid: "new_hope",
  header: "New Hope ;)",
  time: 1593538782006,
  image: "/img/avatar.jpg",
  description: "",
  tags: ["bio"],
  preview: preview,
  full: preview,
};
