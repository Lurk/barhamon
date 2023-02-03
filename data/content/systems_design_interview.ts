import { a, p, b } from "../../models/tree";
import { PostInterface } from "../../models/posts";

const preview =
  "The high-level design of different systems, from URL shorteners to YouTube.";

export const systems_design_interview: PostInterface = {
  pid: "systems_design_interview",
  header: "Systems desigh interview by Alex Xu",
  time: 1675421675071,
  image:
    "https://res.cloudinary.com/barhamon/image/upload/c_scale,h_800,q_auto/v1675421924/header/systems_design_interview.jpg",
  tags: ["book"],
  description: preview,
  preview: [p([preview])],
  full: [
    p([
      preview,
      "And It reads surprisingly fast. Sadly, I didn't read that book earlier. That would help to avoid some mistakes I made in the past.",
    ]),
    p([
      "I understand that this was not the author's aim, and it is probably impossible to contain all details in one book, but for me, it was not deep enough. Designing storage, CDN, video transcoder, or conflict resolution systems is hard, but that makes it exciting, right?",
    ]),
    p([
      "Anyway, I had a nice feeling while reading it. You know, when you read something and nod to it. I think the only surprise for me was the lack of Verimatrix in the list of DRM. But, to be honest, I do not know if they ever had a client of a YouTube size.",
    ]),
    p(["Overall I am glad that I read that book."]),
    p([b("Original Title:"), " System Design Interview – An Insider's Guide"]),
    p([b("ISBN:"), " 1736049100 (ISBN13: 9781736049105)"]),
    p([
      b("GoodReads:"),
      " ",
      a({
        url: "https://www.goodreads.com/book/show/58042887-system-design-interview-an-insider-s-guide",
        text: "4.29 / 5",
      }),
    ]),
  ],
};
