import { img, p, a, createMessage, ul, li } from "../../models/tree";
import { PostInterface } from "../../models/posts";
import { prepareImgProps } from "../../utils";

const preview = "That was a tough year, no doubt.";

export const the2022: PostInterface = {
  pid: "2022",
  header: "The year 2022",
  time: 1672428835705,
  image:
    "https://res.cloudinary.com/barhamon/image/upload/c_scale,h_800,q_auto/v1661280156/e5_hike_preparations/trowel.jpg",
  tags: ["blog"],
  description:
    "This is my 2022 review. For obvious reasons, this year has a titanium shit shovel as a mascot. ",
  preview: [p([preview])],
  full: [
    p([
      preview,
      " In January, I was happy and planned our summer adventure. We wanted to hike the Everest base camp trail.  And in February, I cried between phone calls, helping refugees cross the border and find transport or accommodation. ",
    ]),
    p([
      "It's unbelievably dumb. Every time I think about it, it does not make any sense. No gain can justify so much death, destruction, and suffering. And the worst thing is that there is no end to this madness.",
    ]),
    createMessage({
      header: "If you want to help Ukrainians, here is where you can do it",
      content: [
        p([""]),

        p([
          "- There are many pets in the fighting area whose owners were killed or displaced. They need food and medical care. ",
          a({ url: "https://uanimals.org" }),
        ]),
        p([
          "- There are thousands of artists who defend their freedom. You can help them through this foundation. ",
          a({ url: "https://shpytal.com/musicians-defend-ukraine/" }),
        ]),
        p([
          "- I know those guys from my motorcycle life in Ukraine. They were saving life then and do the same now. ",
          a({ url: "https://motohelp.ua" }),
        ]),
        p([
          "- Those guys are risking lives saving others on the front line: ",
          a({ url: "https://www.hospitallers.life" }),
        ]),
        p([
          "- And most importantly, all of that does not make a lot of sense if the army of Ukraine does not have enough rounds, warm clothes, vehicles, etc. ",
          a({ url: "https://prytulafoundation.org/en" }),
        ]),
      ],
      icon: "handshake",
    }),
    img({
      ...prepareImgProps({
        file: "e5/day%2010/10_ibvnqt.jpg",
        username: "barhamon",
        version: 1620243822,
      }),
      src: "https://res.cloudinary.com/barhamon/image/upload/v1663791911/e5/day%2010/10_ibvnqt.jpg",
      alt: "Me standing in front of the melting glacier",
    }),
    p([
      "At some point, my wife and I agreed that we needed to disconnect because it was overwhelming. We went on a two-week hike, which turned out to be the best vacation we ever had. You can read about it here: ",
      a({
        url: "/post/[pid]",
        as: "/post/crossers_of_the_alps",
        text: "We crossed the Alps",
      }),
      ".",
    ]),
    p([
      "Job-wise, there are no significant changes. I've done a ton of technical interviews. And I got much better at helping candidates navigate through the task. Oh, I got an email saying management put me on the top performer's list. It looks like I am doing a good job.",
    ]),
    p([
      "I was not as active as I wanted to be in the open-source side of building software thing. Those are the pull requests I closed:",
    ]),
    ul({
      type: "dot",
      content: [
        li([
          a({ url: "https://github.com/Semantic-Org", text: "Semantic-Org" }),
          " / ",
          a({
            url: "https://github.com/Semantic-Org/Semantic-UI-React",
            text: "Semantic-UI-React",
          }),
          " / ",
          a({
            url: "https://github.com/Semantic-Org/Semantic-UI-React/pull/4356",
            text: "fix: make typings compatible with @types/react@18 #4356",
          }),
        ]),
        li([
          a({ url: "https://github.com/vityafx", text: "vityafx" }),
          " / ",
          a({ url: "https://github.com/vityafx/serde-aux", text: "serde-aux" }),
          " / ",
          a({
            url: "hhttps://github.com/vityafx/serde-aux/pull/28",
            text: "field_attributes: add deserialize_datetime_utc_from_seconds #28",
          }),
        ]),
      ],
    }),
    p(["And those are the books I read this year:"]),
    ul({
      type: "dot",
      content: [
        li([
          a({
            url: "/post/[pid]",
            as: "/post/the_managers_path",
            text: "The Manager's Path",
          }),
        ]),
        li([
          a({
            url: "/post/[pid]",
            as: "/post/linux_kernel_development",
            text: "Linux Kernel Development",
          }),
        ]),
        li([
          a({
            url: "/post/[pid]",
            as: "/post/the_end_of_everything",
            text: "The End of Everything",
          }),
        ]),
        li([
          a({
            url: "/post/[pid]",
            as: "/post/rust_for_rustaceans",
            text: "Rust for Rustaceans",
          }),
        ]),
      ],
    }),
    p(["I hope that next year will be more productive."]),
    img({
      ...prepareImgProps({
        file: "2022/cat.jpg",
        username: "barhamon",
        version: 1620243822,
      }),
      src: "https://res.cloudinary.com/barhamon/image/upload/v1672412787/2022/cat.jpg",
      alt: "Oil painting on the wall. No cat in sight.",
    }),
    p([
      "At some point, I wanted to draw a cat. And you know, cats are hard to draw. I also spent some time making noises, but not enough to publish it somewhere. Maybe next year.",
    ]),
    img({
      ...prepareImgProps({
        file: "2022/fosdinovo.jpg",
        username: "barhamon",
        version: 1620243822,
      }),
      src: "https://res.cloudinary.com/barhamon/image/upload/v1672412787/2022/fosdinovo.jpg",
      alt: "Fosdinovo castle neighborhood",
    }),
    p([
      "Yeah, life is so unpredictable. If in January, someone told me that instead of everything I wanted to happen, Russia would invade Ukraine, then we would cross the Alps and finish the year next to the castle of Fosdinovo, I would be surprised. And that looks like a lesson that there is no reason to plan something big. Which I refuse to learn.",
    ]),
    p(["See you next year."]),
  ],
};
