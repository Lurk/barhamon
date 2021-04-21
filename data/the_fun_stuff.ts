import {
  a,
  createCloudinaryGallery,
  createDivider,
  createYoutubeVideo,
  p,
} from "../models/tree";
import { PostInterface } from "../models/posts";

const preview = p(
  "This post is about the good stuff I have done during my sabbatical."
);

export const the_fun_stuff: PostInterface = {
  pid: "the_fun_stuff",
  header: "The fun stuff",
  time: 1607029309563,
  image:
    "https://res.cloudinary.com/barhamon/image/upload/c_scale,f_auto,q_auto,w_600/v1609663926/header/the_fun_stuff_dpfgic.jpg",
  tags: ["personal", "adventure", "mountains"],
  description:
    "You can do all sorts of things while unemployed. Here is a list of what I`ve done",
  preview: [preview],
  full: [
    preview,
    p([
      "I wrote already about my ",
      a({
        url: "/post/[pid]",
        as: "/post/central_ukraine",
        text: "two-day motorcycle trip",
      }),
      ". Also, I`ve made many short one-day trips, they are still fun and exciting. The thing I like the most about adventure motorcycling is the freedom to choose the way. You can go wherever you want, even if there are no roads. Time is the only constraint, but you can go pretty far and see a lot on a motorcycle.",
    ]),
    p("Here some pictures I took during those one-day trips:"),
    createCloudinaryGallery("barhamon", "sma_20202"),
    createDivider(),
    p(
      "I also went fishing with my friends. We lived almost a week in tents on a border between Ukraine and Belarus. It was terrific. Our home was a small island between Dnepr and Starik rivers, with nobody around. We caught enough fish to cook it every day, and mushrooms grew just behind our tents."
    ),
    p(
      "We are very fortunate with the weather. Have no rain, and some days were so sunny, I even think of swimming, but the river was icy. And that was the end of October."
    ),
    p(
      "One night, we go for a walk around our island. It was a little bit scary, and also very beautiful. You know, trees in the light of flashlights, the shadows, sounds of birds and animals, found some plants that glowed in the dark. Unfortunately, no photo can convey what it was. So you have to take my word for it."
    ),
    p("Here some photos from that week:"),
    createCloudinaryGallery("barhamon", "fo_2020"),
    createDivider(),
    p(
      "Also, for the first time in my life, I hiked to the mountain summit. It was not something like Everest, only 1500 height. But that was awesome, and I think I got a new hobby :)"
    ),
    p(
      "My wife Mari and I spend ten days in the Carpathian mountains. Almost every day we go on a hike. Drank water from mountain streams, cooked food on our small gas stove. Even found a new friend, a little doggo with no name, but we call it Palkan."
    ),
    p("And here some foto as well: "),
    createCloudinaryGallery("barhamon", "cm_2020"),
    createDivider(),
    p(
      "We even shot a short clip on the way home because what can be better than mountains?"
    ),
    p("Plug your headphones, make it 4k and fullscreen"),
    createYoutubeVideo("OmiYnAqKotM"),
    createDivider(),
    p(
      "This is not a full list of activities, but you should get the idea of what makes me happy :)"
    ),
  ],
};
