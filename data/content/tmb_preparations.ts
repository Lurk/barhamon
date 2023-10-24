import { a, img, p } from "../../models/tree";
import { PostInterface } from "../../models/posts";
import { prepareImgProps } from "../../utils";

const description =
  "This year is my wife's turn to come up with a vacation plan, and we will go on a two-week hike around Mont Blanc Mountain.";

export const tmb_preparations: PostInterface = {
  pid: "tmb_preparations",
  header: "Preparations for the TMB hike",
  time: 1690394854100,
  image:
    "https://res.cloudinary.com/barhamon/image/upload/c_scale,h_800,q_auto/v1690394689/tmb-preparations/header.jpg",
  tags: ["adventure", "hike"],
  description,
  preview: [p([description])],
  full: [
    p([
      description,
      "There is a well-known hiking trail named, surprise, ",
      a({
        url: "https://en.wikipedia.org/wiki/Tour_du_Mont_Blanc",
        text: "Tour du Mont Blanc",
      }),
      ", which is around 160 kilometers long and crosses three countries: Switzerland, Italy, and France.",
    ]),
    p([
      `While researching the trail, we discovered a picturesque lake in the mountains where wild camping is allowed.
      And because of that, of course, we need a new lightweight tent and sleeping pads. Our old and trustworthy tent
      weighs 4.7 kilos, and our very comfortable self-inflating sleeping pad is as big as my backpack.`,
    ]),
    img({
      ...prepareImgProps({
        file: "tmb-preparations/thermarest_neoair_max.jpg",
        username: "barhamon",
        version: 1690395823,
      }),
      src: "https://res.cloudinary.com/barhamon/image/upload/v1690395823/tmb-preparations/thermarest_neoair_max.jpg",
      alt: "Therm-A-Rest NeoAir XTherm Max",
    }),
    p([
      "After reading thousands of reviews, we chose the ",
      a({
        text: "Therm-A-Rest NeoAir XTherm Max",
        url: "https://www.thermarest.com/de/isomatten/fast-and-light/neoair-xtherm-nxt-max-isomatten/neoair-xtherm-nxt-max.html",
      }),
      " as our sleeping pads. Nothing can beat its insane R-value at that weight, volume, and price. I battle-tested it in my ",
      a({
        text: "Turkey adventure",
        url: "/post/[pid]",
        as: "/post/tet_turkey_ride",
      }),
      ". It is super comfy and warm. We had two contenders for the tent, ",
      a({
        text: "MSR Huba Huba NX 2",
        url: "https://www.msrgear.com/ie/tents/backpacking-tents/hubba-hubba-nx-2-person-backpacking-tent/06204.html",
      }),
      " and ",
      a({
        text: "Big Agnes Copper Spur",
        url: "https://www.bigagnes.com/products/copper-spur-hv-ul2",
      }),
      `. Both tents are around 1.5 kilos. Both can fit two wide sleeping pads. Copper Spur is lighter and has more
      storage options, while Huba Huba feels sturdier. It was a tough choice, but MSR won in the end. I have already
      used it on a few short adventures, and it is the best tent I tried in my life.`,
    ]),
    img({
      ...prepareImgProps({
        file: "tmb-preparations/msr_huba_huba_nx_2.jpg",
        username: "barhamon",
        version: 1690395852,
      }),
      src: "https://res.cloudinary.com/barhamon/image/upload/v1690395852/tmb-preparations/msr_huba_huba_nx_2.jpg",
      alt: "it is nice to hike knowing that you do not need to carry food for a week",
    }),
    p([
      `Camping means cooking food. We want to bring our gas stove, a small aluminum pot, foldable silicon cups, and
      freeze-dried food. Of course, we prefer cooking real food, but we tested freeze-dried meals, and some are good.
      And coffee, judging by my wife’s determination, half of her backpack will be coffee beans. The good thing
      is - that we don't need to carry all the food from the start because there are plenty of places to resupply.`,
    ]),
    img({
      ...prepareImgProps({
        file: "tmb-preparations/cooking_food.jpg",
        username: "barhamon",
        version: 1690395836,
      }),
      src: "https://res.cloudinary.com/barhamon/image/upload/v1690395836/tmb-preparations/cooking_food.jpg",
      alt: "Hiking cook set in action",
    }),
    p([
      `It looks like our base weight will be around nine kilos. Judging by the online information, you do not need
      more than one liter of water for a day on that trail. So it plus one kilo. The longest stretch without food
      resupply is three days. If we want a meal three times daily, that's nine packs per person. There will be plenty
      of places to eat, but shops with trekking food are rare, so those nine packs include an emergency stash. Each
      bag is around 210 grams, which is 1890 grams in total. Summing all that up, the whole backpack should be around
      12 kilos. It is a good weight, I would even consider adding a chair, but the backpack has no room left.`,
    ]),
    img({
      ...prepareImgProps({
        file: "tmb-preparations/gear_for_the_tmb.jpg",
        username: "barhamon",
        version: 1690395845,
      }),
      src: "https://res.cloudinary.com/barhamon/image/upload/v1690395845/tmb-preparations/gear_for_the_tmb.jpg",
      alt: "Gear for the TMB",
    }),
    p([
      "This is how our route looks like - ",
      a({ text: "TMB", url: "https://www.komoot.com/tour/1010233496" }),
      `. We roughly planned the route on Komoot (they do not pay me, I like their route planner), then looked for
      sleeping options so the daily distance stays reasonable, and then booked whatever we needed to book. One Hütte
      was booked out for the night we wanted to stay—nine (9) months in advance. But, because we will carry our
      camping gear anyway, it is not a big deal.`,
    ]),
    img({
      ...prepareImgProps({
        file: "tmb-preparations/tmb_route_map.png",
        username: "barhamon",
        version: 1690395857,
      }),
      src: "https://res.cloudinary.com/barhamon/image/upload/v1690395857/tmb-preparations/tmb_route_map.png",
      alt: "Tour du Mont Blanc route map",
    }),
    p([
      "The only thing left to do is to renew tips on our trekking poles. Ah, and buy tickets to Switzerland.",
    ]),
    p(["See you on the trail."]),
  ],
};
