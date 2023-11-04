import {
  a,
  createDivider,
  createImageGallery,
  img,
  li,
  p,
  ul,
} from "../../models/tree";
import { PostInterface } from "../../models/posts";

const firstSlider = [
  img({
    src: `/img/rtw/AnneFranceDautheville.jpg`,
    thumbnail: `/img/rtw/AnneFranceDautheville.jpg`,
    alt: "Anne-France Dautheville 1",
  }),
  img({
    src: `/img/rtw/AnneFranceDautheville2.jpg`,
    thumbnail: `/img/rtw/AnneFranceDautheville2.jpg`,
    alt: "Anne-France Dautheville 2",
  }),
  img({
    src: `/img/rtw/AnneFranceDautheville3.jpg`,
    thumbnail: `/img/rtw/AnneFranceDautheville3.jpg`,
    alt: "Anne-France Dautheville 3",
  }),
];
const secondSlider = [
  img({
    src: `/img/rtw/CarlStearnsClancy.jpg`,
    thumbnail: `/img/rtw/CarlStearnsClancy.jpg`,
    alt: "Carl Stearns Clancy 1",
  }),
  img({
    src: `/img/rtw/CarlStearnsClancy2.png`,
    thumbnail: `/img/rtw/CarlStearnsClancy2.png`,
    alt: "Carl Stearns Clancy 2",
  }),
];
const thirdSlider = [
  img({
    src: `/img/rtw/ElspethBeard.webp`,
    thumbnail: `/img/rtw/ElspethBeard.webp`,
    alt: "Elspeth Beard 1",
  }),
  img({
    src: `/img/rtw/ElspethBeard2.jpg`,
    thumbnail: `/img/rtw/ElspethBeard2.jpg`,
    alt: "Elspeth Beard 2",
  }),
  img({
    src: `/img/rtw/ElspethBeard3.jpg`,
    thumbnail: `/img/rtw/ElspethBeard3.jpg`,
    alt: "Elspeth Beard 3",
  }),
];
const fourthSlider = [
  img({
    src: `/img/rtw/lwr.webp`,
    thumbnail: `/img/rtw/lwr.webp`,
    alt: "Ewan McGregor and Charley Boorman 1",
  }),
  img({
    src: `/img/rtw/lwr2.webp`,
    thumbnail: `/img/rtw/lwr2.webp`,
    alt: "Ewan McGregor and Charley Boorman 2",
  }),
];
const fifthSlider = [
  img({
    src: `/img/rtw/SjaakLucassen.jpg`,
    thumbnail: `/img/rtw/SjaakLucassen.jpg`,
    alt: "Sjaak Lucassen 1",
  }),
  img({
    src: `/img/rtw/SjaakLucassen2.jpg`,
    thumbnail: `/img/rtw/SjaakLucassen2.jpg`,
    alt: "Sjaak Lucassen 2",
  }),
];

export const rtw_trip: PostInterface = {
  pid: "rtw_trip",
  header: "Round the world trip on a motorcycle",
  time: 1599397333336,
  image: "/img/rtw/rtw.jpg",
  tags: ["motorcycle", "adventure", "around the world"],
  description:
    "I dream about a trip around the world on a motorcycle. Here you can find people who inspire me and maybe will inspire you",
  preview: [
    p([
      "I was fascinated by long motorcycle journeys since my first bike but started to think about it seriously while watching ",
      a({
        url: "https://www.longwayround.com/long-way-round",
        text: '"Long way round"',
      }),
      " a year ago.",
    ]),
  ],
  full: [
    p([
      "I was fascinated by long motorcycle journeys since my first bike but started to think about it seriously while watching ",
      a({
        url: "https://www.longwayround.com/long-way-round",
        text: '"Long way round"',
      }),
      " a year ago. If you didn't watch it, I strongly recommend watching it even if you do not ride bikes. Because, you know, Adventure :)",
    ]),
    createDivider(),
    p([
      "I do not have a team to manage visas and other boring stuff. So it will be at least a half-year journey. Thus I still don't know how to do it because of family, work, etc.",
    ]),
    p([
      "But I read a lot about it, so here is a couple of examples for inspiration:",
    ]),
    ul({
      type: "dot",
      content: [
        li([
          "The first woman who did solo round the world trip was ",
          a({
            url: "https://www.facebook.com/annefrancedautheville",
            text: "Anne-France Dautheville",
          }),
          ". I didn't find a lot of info about that trip, but I can imagine that it was a hell of an Adventure in 1972. Just imagine no phones, no GPS, no fancy adventure bikes.",
          createImageGallery(firstSlider),
        ]),
        li([
          "The first man who made a solo motorcycle trip around the world was ",
          a({
            url: "https://en.wikipedia.org/wiki/Carl_Stearns_Clancy",
            text: "Carl Stearns Clancy",
          }),
          ". He made that in 1912 - 1913. At that time, I am not sure even the roads were there. If you think you need some unique bike for travel, look at his.",
          createImageGallery(secondSlider),
        ]),
        li([
          a({ url: "https://www.elspethbeard.com/", text: "Elspeth Beard" }),
          ". Her story remains unknown for 30 years. Go to her web site you won't be disappointed. (I know that Dave Calderwood apologized, but that letter steel makes me angry)",
          createImageGallery(thirdSlider),
        ]),
        li([
          a({
            url: "https://www.longwayround.com/",
            text: "Ewan McGregor and Charley Boorman",
          }),
          " whos journey inspired a lot of people, included me. Also, they do a new show right now - ",
          a({
            url: "https://www.youtube.com/watch?v=611fw81BN98&ab_channel=AppleTV",
            text: "Long way up",
          }),
          createImageGallery(fourthSlider),
        ]),
        li([
          a({
            url: "https://www.youtube.com/channel/UCYf4z6G9EqeJeOHnBu7l-mQ",
            text: "Sjaak Lucassen",
          }),
          " - 2001 until 2006 on a Yamaha YZF R1 (250,000 km). I heard a lot about him but just recently found his youtube channel. So go and subscribe, hit like buttons, and share because he deserved to be famous.",
          createImageGallery(fifthSlider),
        ]),
      ],
    }),
  ],
};
