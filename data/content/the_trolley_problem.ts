import { p } from "../../models/tree";
import { PostInterface } from "../../models/posts";

const preview =
  "I don’t know how closely you follow the news around the Russian invasion of Ukraine.";

export const the_trolley_problem: PostInterface = {
  pid: "the_trolley_problem",
  header: "The trolley problem, but the real one.",
  time: 1666259142495,
  image:
    "https://res.cloudinary.com/barhamon/image/upload/c_mpad,g_center,h_800/v1666258773/header/the_trolley_problem.jpg",
  tags: ["personal"],
  description: "IDK how to feel about all of that",
  preview: [p([preview])],
  full: [
    p([
      preview,
      " But recently, there was an accident with a Russian fighter jet. It happened in the city of Yeysk, which is about 70 kilometers from the Ukrainian border. Russian fighter jet en route to bomb Ukraine hit the nine-story apartment building and killed civilians in Russia.",
    ]),
    p([
      "It has already happened. You can not change it. Want it or not, this jet did kill civilians. So you can choose to be sorry for dead Russians or be happy about live Ukrainians.",
    ]),
    p(["If you can do both, please tell me how."]),
  ],
};
