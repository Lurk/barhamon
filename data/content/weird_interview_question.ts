import { img, p, b, embed } from "../../models/tree";
import { PostInterface } from "../../models/posts";
import { prepareImgProps } from "../../utils";

const preview = p([
  "Some time ago, I saw interview question: given a function that produces uniformly distributed random numbers between zero and one. Calculate the Pi.",
]);

export const weird_interview_question: PostInterface = {
  pid: "weird_interview_question",
  header: "Weird interview question",
  time: 1631433960195,
  image:
    "https://res.cloudinary.com/barhamon/image/upload/c_scale,h_800,q_auto/v1631429564/header/weird_interview_question_lsyt0s.png",
  tags: ["interview", "rust"],
  description:
    "Given a function that produces uniformly distributed random numbers between zero and one. Calculate the Pi.",
  preview: [preview],
  full: [
    preview,
    p([
      "Wtf was my initial reaction. Who in the right mind would ask a question like this? But then I needed an excuse for not doing the dishes, and here we go.",
    ]),
    p([
      "My first association with Pi number is the circle area formula ",
      b("Pi*r^2"),
      ". How can we relate our random numbers to a circle? Let say the distance between min(0) and max(1) is our radius. You can picture it like this:",
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
      "The next question is how to plot our random number on 2d plane? We will call it twice. One for ",
      b("X"),
      " and second for ",
      b("Y"),
      ". ",
    ]),
    img({
      ...prepareImgProps({
        file: "random_dots/dots_ghjllu.png",
        username: "barhamon",
        version: 1626984426,
      }),
      src: "https://res.cloudinary.com/barhamon/image/upload/v1631391738/random_dots/dots_ghjllu.png",
      alt: "look at those beautiful dots",
    }),
    p([
      "If we repeat this enough times we get a square with a side length that equals 1",
    ]),
    img({
      ...prepareImgProps({
        file: "random_dots/square_tpmwws.png",
        username: "barhamon",
        version: 1626984426,
      }),
      src: "https://res.cloudinary.com/barhamon/image/upload/v1631391738/random_dots/square_tpmwws.png",
      alt: "look at this beautiful square",
    }),
    p(["Now we need to combine our circle and square."]),
    p([
      "Looking on it, Pi should be the difference between the area of a square and the area of a quarter of a circle.",
    ]),
    p(["It is time to dust off my math skills."]),
    p(["Area of a circle - ", b("Pi*r^2")]),
    p(["Area of a quarter of a circle (QC) - ", b("(Pi*r^2)/4")]),
    p(["four quarters equals full circle (obviously) - ", b("4*QC = Pi*r^2")]),
    p(["then - ", b("Pi = (4*QC)/r^2")]),
    p(["What is ", b("r^2"), "? It is area of a square (AS) "]),
    p(["then - ", b("Pi = (4*QC)/AS")]),
    p([
      "In English, that would be Pi equals area of e circle divided by the area of a square where the radius of a circle equals side of the square.",
    ]),
    p([
      "Now, how can we know the area of the square? Remember when we draw a square with our random dots? So count of those dots will be our area.",
    ]),
    p([
      "And the area of our quarter of a circle would be a count of dots with distance from the 0 less or equal 1. The distance formula is ",
      b("d = sqrt((x2-x1)^2+(y2-y1)^2)"),
      ".",
    ]),
    p([
      "But since we want distance from 0,0 we can simplify that to ",
      b("d = sqrt(x^2+y^2)"),
      ".",
    ]),
    p(["Where x and y are the coordinates of our random dot."]),
    p(["It is time to write some code."]),
    embed(
      "https://replit.com/@SergeyBar/rustrandom?lite=icon_title_nologo&theme=replitLight",
    ),
    p([
      "I would not recommend using this method to calculate Pi for something serious. First. How to say it lightly. The accuracy of this method is not the best on the market. And second, to get stable accuracy to the second digit, you need 10 000 000 dots. So yeah, performance-wise, it is not the best method either. But it was fun.",
    ]),
    p(["Now I don't have any excuses left."]),
  ],
};
