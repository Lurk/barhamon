import { img, p } from "../models/tree";
import { PostInterface } from "../models/posts";

export const this_year_i_changed_the_motorcycle_class: PostInterface = {
  pid: "this_year_i_changed_the_motorcycle_class",
  header: "This year I changed the motorcycle class.",
  time: 1594637841514,
  image: "/img/this_year_i_changed_the_motorcycle_class.jpg",
  tags: ["motorcycle", "X11", "Africa Twin"],
  description:
    "I used to drive a Honda X11. And this is a great bike that I still love. But I want to ride not only on asphalt. And so I took an even more ancient but no less legendary Africa Twin RD04 motorcycle.",
  preview: [p("I used to drive a Honda X11.")],
  full: [
    p(
      "I used to drive a Honda X11. And this is a great bike that I still love. But I want to ride not only on asphalt. So I bought an even more ancient but no less legendary Africa Twin RD04 motorcycle."
    ),
    img({ src: "/img/x11.jpg", alt: "My old Honda X11" }),
    p(
      "It is already 30 years old, and I had to go after it 600 km, one way and halfway back on it (thanks to Igor, Denis, and Vlad for the adventure). But I am satisfied a little more than completely because I drove into such places on it that I could not have at X11. But, from some, I could not get out on my own."
    ),
    img({ src: "/img/at.jpg", alt: "My new (old) Honda Africa Twin (XRV750)" }),
    p(
      "And if I had a time machine, I would send me to the past and persuade the younger myself to take some kind of dirt bike instead of a street bike."
    ),
    img({ src: "/img/at_adventure.jpg", alt: "Africa Twin adventure" }),
  ],
  readTime: 1,
};
