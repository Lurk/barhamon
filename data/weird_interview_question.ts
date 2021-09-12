import { createCloudinaryGallery, img, p, a, b } from "../models/tree";
import { PostInterface } from "../models/posts";
import { prepareImgProps } from "../utils";

const preview = p(
  "Some time ago, I saw interview question: given a function that produces uniformly distributed random numbers between zero and one. Calculate the Pi."
);

export const weird_interview_question: PostInterface = {
  pid: "weird_interview_question",
  header: "Weird interview question",
  time: 1631381169124,
  image:
    "https://res.cloudinary.com/barhamon/image/upload/c_scale,h_800,q_auto/v1631429564/header/weird_interview_question_lsyt0s.png",
  tags: ["interview", "rust"],
  description: "Weird technical question on interview",
  preview: [preview],
  full: [
    preview,
    p(
      "Wtf was my initial reaction. Who in the right mind would ask a question like this? But then I needed an excuse why I don't do dishes and here we go. "
    ),
    p([
      "My first association with Pi number is the circle area formula ",
      b("Pi*R^2"),
      ". How can we relate our random numbers to a circle? Let say the distance between min and max is our radius. You can picture it like this:",
    ]),
    img({
      ...prepareImgProps({
        file: "random_dots/circle_nbe72s.png",
        username: "barhamon",
        version: 1626984426,
      }),
      src: "https://res.cloudinary.com/barhamon/image/upload/v1631391738/random_dots/circle_nbe72s.png",
      alt: "look at this beautiful circle",
    }),
    p([
      "If you wondered what is going on with that memory leak, I am trying to fix. I did a ",
      a({
        text: "repo",
        url: "https://github.com/Lurk/nsstring_leak",
      }),
      " with tests and benchmarks, filed an ",
      a({
        text: "issue",
        url: "https://github.com/SSheldon/rust-objc-foundation/issues/15",
      }),
      " in objc-foundation repo. Now just waiting for the maintainer.",
    ]),
    p(
      "And in the meantime I did a lot of hikes. Munich offers a lot of you are like hiking. I am thinking to start doing hike reports, but I will not promise it yet. Here are some nice pictures I took during my hikes."
    ),
    createCloudinaryGallery("barhamon", "first_hikes"),
    p(""),
    p(
      "What I definitely will do is a book's reviews. Lately, I am back to the book reading business. And will try my best to give you a summary of what I read."
    ),
    p(
      "But before that, I need to fix my old and trustworthy MBP, the screen of which went dead after eight years of service. Luckily for me, my friend has a spare one with some dead pixels. So maybe by the end of the week, I will have my laptop back."
    ),
  ],
};
