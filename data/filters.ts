import { a, p, code } from "../models/tree";
import { PostInterface } from "../models/posts";

const preview = "Here is a problem that I am solving on almost every project:";

export const filters: PostInterface = {
  pid: "filters",
  header: "I published my first npm package: filters",
  time: 1617113988062,
  image:
    "https://res.cloudinary.com/barhamon/image/upload/c_scale,q_auto,w_650/v1617114422/header/filters_xuuptx.png",
  tags: ["software", "js", "ts"],
  description:
    "@barhamon/filters - generic way to manipulate data filtering options and pass them around",
  preview: [p([preview])],
  full: [
    p([
      preview,
      " I need to have a generic way to manipulate data filtering options and pass them around. For example, I am building a CMS with a lot of data visualization (like tables and charts). Good data visualization should have a filtering ability. So users can filter the shit out of it and then send a link to the results.",
    ]),
    p([
      "I kind of tired of doing the same thing every time and want to do yarn add. And from today (yesterday, to be honest, but I did not have time to write this post), I can. And you can do it too.",
    ]),
    code({ lang: "bash", content: "npm i @barhamon/filters" }),
    p(["Or, if you are a yarn user:"]),
    code({ lang: "bash", content: "yarn add @barhamon/filters" }),
    p([
      " I tried to do my best with ",
      a({
        text: "read.me",
        url: "https://github.com/Lurk/filters/blob/main/readme.md",
      }),
      " in the ",
      a({ text: "GitHub repo", url: "https://github.com/Lurk/filters" }),
      ". So, for the sake of consistency, I will not repeat API here. But want to share my ideas of how I want to improve this package.",
    ]),
    p([
      "There is already a method to transform filters to MongoDB query so they can be used easily with Mongoose or just MongoDB driver. And I want to add integrations with other ORM/ODM like TypeORM. Also, since the backend can be written in different than JS languages, I want to write a port of this idea on your, my friend, favorite language (I will sooooooo write Rust crate for this. Soooooooooo write). And there should be examples of how to use it with different UI libraries. And better documentation. And investigate more space-efficient ways to communicate between the backend and frontend. And so on :)",
    ]),
    p([
      "I will gladly answer any questions or issues or accept pull requests.",
    ]),
  ],
};
