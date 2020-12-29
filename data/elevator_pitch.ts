import type { PostInterface } from "../models/posts";
import { p } from "../models/tree";


const preview = p("Here is a short version of the upcoming \"About me\" book :)");

export const elevator_pitch: PostInterface = {
  pid: "elevator_pitch",
  header: "Elevator pitch",
  time: 1608824901070,
  image: '/img/elevator_pitch.jpeg',
  tags: ['interview', 'me'],
  description: "A short version of the upcoming \"About me\" book :)",
  preview: [preview],
  full: [
    preview,
    p("I have been lucky to have my first computer at age six. It was Atari 65XE, with BASIC programming language built-in. Since then, computers is my passion, and I never really stop programming. My first web project came online in 2007, and it is still there. I got my first job as a developer in 2009."),
    p("My second passion is traveling. Only through traveling one can get a first-hand experience of foreign cultures and the beauties of nature. I like and do all sorts of traveling, planes, trains, cars, boats, bikes, on foot. This year, I tried kayaks (we have done something around 200 km in three days) and a motorcycle, which is now my favorite way of getting to remote areas."),
    p("Overall I can describe myself as a friendly and communicable person.")
  ],
}
