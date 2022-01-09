import { a, p, h3, ul, li, createMessage } from "../../models/tree";
import { PostInterface } from "../../models/posts";

const preview = "A couple of times in a year, I got asked something like:";

export const idkfa: PostInterface = {
  pid: "idkfa",
  header: "IDKFA",
  time: 1617354779840,
  image:
    "https://res.cloudinary.com/barhamon/image/upload/c_scale,h_450,q_auto,w_600/v1617355059/header/idkfa_gcd5ox.png",
  tags: ["software"],
  description:
    'If you googled something like "I have this idea, with what I should build it.", here is my take on it.',
  preview: [p([preview])],
  full: [
    p([
      preview,
      ' "what language/technology I should learn" or "I have this idea, with what I should build it".',
    ]),
    p(["Here is what and why:"]),
    h3(["Language:"]),
    p([
      "If you are asking, the chances are high that you are don't know what you are doing. So go with JS. JS (TS is slightly better, but the learning curve is steeper) will allow you to do quick and dirty prototypes for everything. And I mean, it. You can do frontend, backend, mobile, desktop, ML all in one language (I even saw microcontrollers with JS support. How crazy is that?). This means you don't need to switch context too often, which means you are more productive. Big community is a bonus.",
    ]),
    p([
      "Sure, JavaScript is not perfect, and there are better alternatives for:",
    ]),
    ul({
      type: "dot",
      content: [
        li(["Sciency or ML - Python. "]),
        li(["Blazing fast or/and close to the hardware - Rust"]),
        li(["iOS - Swift"]),
        li(["Android - Kotlin"]),
        li(["Microcontrollers - C"]),
        li(["Scalable AF - Erlang"]),
      ],
    }),
    p([
      "And still, you will need JS to do the frontend. So learn one language. Do everything, and when you know which part of your product should be rewritten with more suited language - you will do it. ",
    ]),
    h3(["Database:"]),
    p([
      "My go-to choice is MongoDB. It is pretty simple, and you can do whatever you want with the schema while you are prototyping. Also, you will scale It effortlessly when your prototype became a production.",
    ]),
    p([
      "I also often use Redis when performance is the primary concern. And nowadays it has all bells and whistles you can think of, including queues and time series.",
    ]),
    p([
      "And sometimes, when persistence is not required, no DB is also an option.",
    ]),
    h3(["REST vs. GraphQL:"]),
    p([
      "I will choose GraphQL over REST because I never saw REST API, which was working as intended. And because of that, documentation is often missing or outdated. Swagger kind of slowed this issue, but for me, it is a half-assed solution. Because your OpenAPI specification does not depend on actual code, you need to describe APIs twice. While using libraries like type-graphql - documentation and playground reflect your current code. So you write your code and get documentation and playground for your API for free.",
    ]),
    p([
      "If you came here with questions like questions in the first paragraph, I hope this post will somehow help you.",
    ]),
    createMessage({
      content: [p(["ID, Keys, Firearms, Armor (cheat in the Doom game)"])],
      header: "IDKFA",
      icon: "lightbulb",
    }),
  ],
};
