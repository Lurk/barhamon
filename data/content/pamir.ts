import {
  a,
  createDivider,
  createImageGallery,
  createYoutubeVideo,
  h3,
  img,
  p,
} from "../../models/tree";
import { PostInterface } from "../../models/posts";

const firstSlider = new Array(18).fill(0).map((v, k) =>
  img({
    src: `/img/rls_pamir/1/${k + 1}.jpg`,
    thumbnail: `/img/rls_pamir/1/${k + 1}_tn.jpg`,
    alt: `A 3-day motorcycle adventure in the Carpathian mountains. Day 1. #${k}`,
  })
);
const secondSlider = new Array(31).fill(0).map((v, k) =>
  img({
    src: `/img/rls_pamir/2/2 - ${k + 1}.jpg`,
    thumbnail: `/img/rls_pamir/2/2 - ${k + 1}_tn.jpg`,
    alt: `A 3-day motorcycle adventure in the Carpathian mountains. Day 2. #${k}`,
  })
);
const thirdSlider = new Array(9).fill(0).map((v, k) =>
  img({
    src: `/img/rls_pamir/3/3 - ${k + 1}.jpg`,
    thumbnail: `/img/rls_pamir/3/3 - ${k + 1}_tn.jpg`,
    alt: `A 3-day motorcycle adventure in the Carpathian mountains. Day 3. #${k}`,
  })
);

export const pamir: PostInterface = {
  pid: "rls_pamir",
  header: "A 3-day motorcycle adventure in the Carpathian mountains",
  time: 1597939694799,
  image: "/img/rls_pamir/header.jpg",
  tags: ["motorcycle", "adventure", "mountains"],
  description:
    "A trip from Kyiv to abandoned military radar station 'Pamir' and back on two old Africa Twin motorcycles",
  preview: [
    p([
      'In just three days, we covered 1.315 km, visited abandoned military radar station "Pamir" and camp at beautiful sites.',
    ]),
  ],
  full: [
    p([
      'In just three days, we covered 1.315 km, visited abandoned military radar station "Pamir" and camp at beautiful sites. Considering all the adventures, I would like to have at least one more day because the last day was very tough. But first things first.',
    ]),
    createDivider(),
    h3(["Day 1:"]),
    p([
      "We met with my friend, Gleb, at 8 am and drove off after drinking coffee. About every 100 - 150 km, we made stops to rest, have a snack, and drink water.",
    ]),
    p([
      "The road surface in some places was so bad that after 400 km (at a stop in Kamenets-Podolsk), we decided that it was time to look for a place to camp. Since the Dnister river is near, we decided to get there and find the right place on the shore. The site was not found right away, since, in those parts of the Dnister, there are rather steep banks, and where there is a gentle entrance to the water, people live.",
    ]),
    p([
      a({
        url: "https://scenicapp.space/viewRide.php?rid=WonZKFHA",
        text: "Track for this day",
      }),
    ]),
    createImageGallery(firstSlider),
    createDivider(),
    p([
      "After breakfast, we packed up and drove towards our finish point. The first few kilometers, we drove along a gravel road, and then a winding road began with very decent asphalt. I don't know why, but I didn't turn on the camera, which I regret now.",
    ]),
    p([
      'In Starozhinets, the locals advised us to the "',
      a({ url: "https://goo.gl/maps/KJhKEwzmU6T2aGEF9", text: "Dzvony" }),
      "\" canteen, and if you are hungry in this region, I highly recommend it. We ate very tastily at 120 UAH. (~ $ 4.5). But they don't work on Sunday. So on the way back, we had to look for alternatives.",
    ]),
    p([
      "After Dolishnii Shepit, the asphalt ends, and the fun begins. And I finally remembered that I took the camera and turned it on. You can estimate the quality of the road surface and the complexity of the route from the video below.",
    ]),
    p([
      "At the border post, which was locked with a key, we discovered that Gleb had caught the drill with his rear wheel. From passing locals, we found out where the nearest tire service is, and having tied the rear wheel to my motorcycle, I went to the service.",
    ]),
    p([
      "I hope it won't come in handy, but the tire service is in Selyatyn village (",
      a({
        url: "https://goo.gl/maps/3H41rM2UzVBY9PQ59",
        text: "here's a point on the map",
      }),
      "). The owner is not very fond of bikers. But luckily he is a fisherman, like me, so we find a common language.",
    ]),
    p([
      "It was not possible to seal the tube because the drill tore it up a lot. But luckily I had a spare with me. So we quickly changed it, pumped it up, strapped the wheel back to the bike, and I go back to Gleb. When we put back his bike together and pack our luggage, we rushed on.",
    ]),
    p([
      "After the village of Shepit, real adventures begin. The road is sometimes crossed by a river, sometimes there are huge stones and sometimes soggy and slippery clay.",
    ]),
    p([
      "At some point, we caught up with a convoy of 4x4 folks. For some reason, I turned off the camera, and then forgot to turn it back on, which I regret, because the most exciting thing was just beginning.",
    ]),
    p([
      "Overtaking one of the vehicles, I did not fit into the turn and put my bike down. I crumpled the top case, and, as it turned out later, the air got into the rear brake system, which led to the fact that the rear brakes were gone.",
    ]),
    p([
      "Going down the mountain without a rear brake is not very pleasant. But we did it and found a great place on the bank of a mountain river.",
    ]),
    p([
      a({
        url: "https://scenicapp.space/viewRide.php?rid=cYcgusma",
        text: "Track for this day",
      }),
    ]),
    createImageGallery(secondSlider),
    createDivider(),
    h3(["Day 3:"]),
    p([
      "Raspberry bushes grew right behind our tent, so we had oatmeal with raspberries for breakfast :)",
    ]),
    p([
      "After cleaning the campsite, we moved to a home. The navigator showed 613 km. On the nearest gas station, we fixed my rear brakes.",
    ]),
    p([
      "Before finding a place to dine,we bought a watermelon, and it was the most delicious watermelon in my life :)",
    ]),
    p([
      "Since we continued the shortest route from the very morning, the navigator led us mainly by secondary roads through the fields. And I was pleased about that because most of the way we drove along completely empty roads.",
    ]),
    p(["We reached Kyiv after midnight."]),
    p([
      a({
        url: "https://scenicapp.space/viewRide.php?rid=fuaaewUz",
        text: "Track for this day:",
      }),
    ]),
    createImageGallery(thirdSlider),
    createDivider(),
    p([
      "I'm happy we did it. Even though the last day was very tough, especially the last 100 km to home. I would repeat without hesitation)",
    ]),
    p([
      "Halfway home, we already started discussing where we would go next, so I'm sure this was not our last adventure.",
    ]),
    createDivider(),
    h3(["Here is the video I promised:"]),
    createYoutubeVideo("9KvGQ8raiac"),
  ],
};
