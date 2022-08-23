import { a, img, p } from "../../models/tree";
import { PostInterface } from "../../models/posts";
import { prepareImgProps } from "../../utils";

const description =
  "This year was my turn to come up with a vacation plan. And guess what? This September, we will hike from Germany to Italy.";

const preview = p([description]);

export const e5_hike_preparations: PostInterface = {
  pid: "e5_hike_preparations",
  header: "Preparations for the Austrian section of the E5 route",
  time: 1661280723009,
  image:
    "https://res.cloudinary.com/barhamon/image/upload/c_scale,h_800,q_auto/v1661083343/e5_hike_preparations/map.jpg",
  tags: ["adventure", "hike"],
  description,
  preview: [preview],
  full: [
    preview,
    p([
      "What is E5, you may ask? And that is a perfectly valid question because I did not know anything about this, or any other, route until this summer (thank you, Michele). So, E5 is one of the European long-distance hiking paths. It starts in Pointe du Raz, France, and ends in Venice, Italy. The length of the whole path is a whopping 3200 km. We will have only two weeks, and that is not enough to hike the entire route. That's why the Austrian section, which is only 175 km.",
    ]),
    img({
      ...prepareImgProps({
        file: "e5_hike_preparations/actual_map.jpg",
        username: "barhamon",
        version: 1620243822,
      }),
      src: "https://res.cloudinary.com/barhamon/image/upload/v1661113048/e5_hike_preparations/actual_map.jpg",
      alt: "base weight",
    }),
    p([
      "Our way will start at Oberstdorf, Germany, and end in Merano, Italy. They are on E5, but the whole path will diverge slightly from the official E5 route because everything is already booked. As wild camping is prohibited in Austria, we will sleep in guest houses, mountain huts, and hotels. You need to book it in advance because when we did it two months before the hike, finding accommodation along the route was challenging. Here is the link to the route on komoot: ",
      a({
        url: "https://www.komoot.com/tour/823062954",
        text: "From Oberstdorf to Merano",
      }),
    ]),
    img({
      ...prepareImgProps({
        file: "e5_hike_preparations/gear.jpg",
        username: "barhamon",
        version: 1620243822,
      }),
      src: "https://res.cloudinary.com/barhamon/image/upload/v1661112304/e5_hike_preparations/gear.jpg",
      alt: "it is nice to hike knowing that you do not need to carry food for a week",
    }),
    p([
      "I am glad that we don’t need to carry our tent, sleeping pad, cook kit, etc., because we bought that gear a long time ago without hiking in mind, so it is heavy and bulky. We still need our sleeping bags because that’s how you sleep in a mountain hut. Since we never actually did multi-day hikes, some gear we additionally bought for this adventure. That was backpacks, hiking boots, and a trowel (shit shovel).",
    ]),
    img({
      ...prepareImgProps({
        file: "e5_hike_preparations/trowel.jpg",
        username: "barhamon",
        version: 1620243822,
      }),
      src: "https://res.cloudinary.com/barhamon/image/upload/v1661280156/e5_hike_preparations/trowel.jpg",
      alt: "The trowel (shit shovel)",
    }),
    p([
      "Yep. A shit shovel. It is an essential piece of gear on a hike. Finally, we bought one, and from now on, we will dig catholes with style. That's actually funny how life is full of random stuff. If ten years ago someone would tell me that I would be the happy owner of a titanium shit shovel, I’d laugh my ass off.",
    ]),
    img({
      ...prepareImgProps({
        file: "e5_hike_preparations/base_weight.jpg",
        username: "barhamon",
        version: 1620243822,
      }),
      src: "https://res.cloudinary.com/barhamon/image/upload/v1661112719/e5_hike_preparations/base_weight.jpg",
      alt: "base weight",
    }),
    p([
      "After testing and reading, we chose Osprey Exos 38 liter as our backpacks. I initially thought about a frameless ultralight backpack, but after trying them and Exos, we bought Exos. Yes, it is heavier than frameless options, but because the weight distribution is better, the same load feels much lighter. We packed them multiple times and dialed our base weight to about 8 kilos. Of course, I will weigh our backpacks before departure to know how much we will carry. Maybe, after all, I do not need that book with me :)",
    ]),
    img({
      ...prepareImgProps({
        file: "e5_hike_preparations/hiking_boots.jpg",
        username: "barhamon",
        version: 1620243822,
      }),
      src: "https://res.cloudinary.com/barhamon/image/upload/v1661280054/e5_hike_preparations/hiking_boots.jpg",
      alt: "Hiking boots",
    }),
    p([
      "Boots. At first, I thought about going with my trail runners, but then we decided to be on the safe side and bought proper hiking boots. There is a ton of info on choosing the hiking boot, so I will not repeat it. I would add that the proper insole is a game changer.",
    ]),
    img({
      ...prepareImgProps({
        file: "e5_hike_preparations/say_hallo_to_the_alps.jpg",
        username: "barhamon",
        version: 1620243822,
      }),
      src: "https://res.cloudinary.com/barhamon/image/upload/v1661202129/e5_hike_preparations/say_hallo_to_the_alps.jpg",
      alt: "say hallo to the Alps",
    }),
    p(["Wish us luck, and be ready for the lovely photos from the hike."]),
  ],
};
