import { a, img, li, p, ul } from "../../models/tree";
import { PostInterface } from "../../models/posts";
import { prepareImgProps } from "../../utils";

const description =
  "I missed my motorcycle adventures so much, and this spring, I will finally have a new one.";

const preview = p([description]);

export const tet_turkey: PostInterface = {
  pid: "tet_turkey",
  header: "Preparations for the part of the TET Turkey ride",
  time: 1676228294524,
  image:
    "https://res.cloudinary.com/barhamon/image/upload/c_scale,h_800,q_auto/v1676228073/header/tet-turkey.png",
  tags: ["adventure", "motorcycle"],
  description,
  preview: [preview],
  full: [
    preview,
    p([
      "This will be one week's trip. The plan is to arrive in Istanbul on a plane, rent a motorcycle, and ride a loop around 2000 kilometers long. The first half will follow the ",
      a({
        text: "TET Turkey",
        url: "https://transeurotrail.org/turkey/#2.22/53.69/6.35",
      }),
      " route, but then we will ride back to Istanbul along the coast of the black sea. The daily distance budget is 250 - 350 kilometers. I tried to plan the route that way so we would camp on the banks of a river or a lake. Here is the link to the route: ",
      a({
        text: "Turkey adventure.",
        url: "https://www.komoot.com/tour/1012453925",
      }),
      " I am a big fan of ",
      a({ text: "Komoot", url: "https://www.komoot.com/" }),
      " for route planning. Highly recommend.",
    ]),
    img({
      ...prepareImgProps({
        file: "tet-turkey/gear_packing.jpg",
        username: "barhamon",
        version: 1620243822,
      }),
      src: "https://res.cloudinary.com/barhamon/image/upload/v1676229058/tet-turkey/gear_packing.jpg",
      alt: "gear packing",
    }),
    p([
      "I wanted to bring my fishing rod, but I do not have enough space in my luggage. Here is the list of things I packed:",
    ]),
    ul({
      type: "dot",
      content: [
        li(["Tent"]),
        li(["Sleeping bag"]),
        li(["Sleeping mat"]),
        li(["Chair"]),
        li(["Cookset (gas stove, pot, utensils, etc.)"]),
        li(["Water filter"]),
        li(["Boots"]),
        li(["Jacket"]),
        li(["Gloves (two pairs)"]),
        li(["Helmet liners"]),
        li(["Rain gear"]),
        li(["Bunch of straps, paracord, net, carabiners, metal zip ties"]),
        li(["Knife"]),
        li(["Small wrench"]),
      ],
    }),
    p([
      "All that is already 20 kilograms, so maybe I need to rethink what to bring with me or finally buy a new lightweight tent or wear boots instead of sneakers on the plane. I will also carry a helmet and a backpack with my clothes. Yeah, surprisingly, a lot of stuff.",
    ]),
    img({
      ...prepareImgProps({
        file: "tet-turkey/jacket.jpg",
        username: "barhamon",
        version: 1620243822,
      }),
      src: "https://res.cloudinary.com/barhamon/image/upload/v1676229679/tet-turkey/jacket.jpg",
      alt: "my trustworthy CAYENNE jacket",
    }),
    p([
      "I think I might need a waterproof bag, because the idea is to rent something like CRF300L, and I doubt it will be equipped with a luggage system. But I am waiting for the information from my riding buddy, who now lives in Istanbul. He will check out rentals as soon as the riding season starts. So I will have more info on the bikes and what I need to bring with me or buy there on arrival. For sure, I want to have a tire repair kit and spare tube.",
    ]),
    img({
      ...prepareImgProps({
        file: "tet-turkey/perseverance.jpg",
        username: "barhamon",
        version: 1620243822,
      }),
      src: "https://res.cloudinary.com/barhamon/image/upload/v1676229889/tet-turkey/perseverance.jpg",
      alt: "my happy face",
    }),
    p([
      "While preparing gear I found out that I am barely able to zip up my jacket. But I still have a couple of months to fix that, and now I am a salad guy. Wish me luck and perseverance.",
    ]),
  ],
};
