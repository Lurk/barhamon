import { img, p, a, createMessage } from "../../models/tree";
import { PostInterface } from "../../models/posts";
import { prepareImgProps } from "../../utils";

const preview =
  "Unbelievable how relative time is. It feels like we have lived here for at least twice as long.";

export const two_years: PostInterface = {
  pid: "two_years",
  header: "Two years in Munich",
  time: 1681498952405,
  image:
    "https://res.cloudinary.com/barhamon/image/upload/c_scale,h_800,q_auto/v1681502106/two-years/two_years.jpg",
  tags: ["blog", "relocation"],
  description: preview,
  preview: [p([preview])],
  full: [
    p([preview]),
    p([
      "There is a stereotype that Germans are cold and grumpy. IDK, everyone I met was helpful, polite, and welcoming. And since we are on the stereotypes page, bureaucracy. I did not notice anything unreasonable. Maybe it is my thing. Germany is the fifth country where I live, and perhaps I developed subconscious routines to avoid all of it. Maybe. But yeah, I do not have much to complain about. Oh no! You know, I have a thing to complain about. In Munich, we have self-service bike stations, you know, essential tools, air pumps, and so on. They are scattered across the whole city. And you know what? On most of them, the air pump is broken. As Germans would say - this is unacceptable.",
    ]),
    img({
      ...prepareImgProps({
        file: "two-years/nothing_to_complain.jpg",
        username: "barhamon",
        version: 1620243822,
      }),
      src: "https://res.cloudinary.com/barhamon/image/upload/v1681502257/two-years/nothing_to_complain.jpg",
      alt: "Nothing to complain about",
    }),
    p([
      "We visited a few other cities in Germany, and every time we thought that we would choose Munich again. We like the absence of skyscrapers in the city, the nature around it, the rhythm, and the density of cultural events. We are still thinking about moving to the not far countryside. But it is so convenient to have 20 minutes commute time and one hour to the mountains that moving is still on the back burner.",
    ]),
    img({
      ...prepareImgProps({
        file: "two-years/our_tiny_flat.jpg",
        username: "barhamon",
        version: 1620243822,
      }),
      src: "https://res.cloudinary.com/barhamon/image/upload/v1681502509/two-years/our_tiny_flat.jpg",
      alt: "Our tiny flat",
    }),
    p([
      "Still no car and no motorcycle. We do not feel like we need a car. Despite all the complaints you can find online, public transport in Munich is excellent. Of course, I want to ride a motorcycle, but I also enjoy bicycle rides and knowing myself, I will stop riding a bicycle the moment I get a bike. Which I do not want to happen.",
    ]),
    img({
      ...prepareImgProps({
        file: "two-years/bicycle_trip.jpg",
        username: "barhamon",
        version: 1620243822,
      }),
      src: "https://res.cloudinary.com/barhamon/image/upload/v1681502739/two-years/bicycle_trip.jpg",
      alt: "Bicycle trip",
    }),
    p([
      "Language-wise, I can manage a micro talk. But Mari is making tremendous progress. She can have a meaningful conversation with a stranger on the street while I nod and smile. This outstanding achievement of mine was brought to you by doing daily Duolingo exercises. I started to think about coming back to the language course. My previous attempt finished at the A2.1 level, cos there was not much sense in continuing with my tiny vocabulary. Still not sure when, maybe after this year adventure.",
    ]),
    img({
      ...prepareImgProps({
        file: "two-years/adventure.jpg",
        username: "barhamon",
        version: 1620243822,
      }),
      src: "https://res.cloudinary.com/barhamon/image/upload/v1681502862/two-years/adventure.jpg",
      alt: "We like our adventures",
    }),
    p([
      "I got a promotion. My current position is the lead developer at Check24. Now I officially have less time to focus and more time to talk. But yeah, I am pretty glad about that. Apart from promotion, there was a 3-year LTC, which is basically our (employee/employer) mutual agreement that we want to work together for at least three years more. I needed some time to think about it before I signed. It felt like I am getting too comfortable in my comfort zone, and that commitment will force me to stay in it for three years more. But then, I thought I would have my stress out of the language courses and obtaining permanent residency in Germany, so at least I would not need to look for a new job.",
    ]),
    img({
      ...prepareImgProps({
        file: "two-years/portable_music_station.jpg",
        username: "barhamon",
        version: 1620243822,
      }),
      src: "https://res.cloudinary.com/barhamon/image/upload/v1681503053/two-years/portable_music_station.jpg",
      alt: "Playing music in the train",
    }),
    p([
      "When I say I am getting too comfortable, I am not joking. I have an indicator for that - my music. In total, I recorded six tracks in seven years—four of those tracks I recorded this year. And I like that very much. I even massage the thought of having a vinyl record with those records. It is not as complicated/expensive as I initially thought. A few more tracks, and you will be able to preorder it.",
    ]),
    img({
      ...prepareImgProps({
        file: "two-years/freedom_for_ukraine.jpg",
        username: "barhamon",
        version: 1620243822,
      }),
      src: "https://res.cloudinary.com/barhamon/image/upload/v1681503200/two-years/freedom_for_ukraine.jpg",
      alt: "Playing music in the train",
    }),
    p(["See you in a year!"]),
    createMessage({
      content: [
        p(["This is a series of universary posts."]),
        p([
          "The previous one you can read here: ",
          a({
            text: "A year has passed since we moved to Munich",
            as: "/post/a_year",
            url: "/post/[pid]",
          }),
          ".",
        ]),
      ],
      icon: "birthday cake",
    }),
  ],
};
