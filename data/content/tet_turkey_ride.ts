import {
  a,
  createCloudinaryGallery,
  createDivider,
  createYoutubeVideo,
  p,
  h2,
  h3,
  h4,
  img,
} from "../../models/tree";
import { PostInterface } from "../../models/posts";
import { prepareImgProps } from "../../utils";
const description = `I convinced Dima that it is a good idea (that was easy), and we rode 2067 
                    kilometers in eight days on motorcycles in May 2023.`;

export const tet_turkey_ride: PostInterface = {
  pid: "tet_turkey_ride",
  header: "The southern part of TET Turkey ride",
  time: 1684070627694,
  image:
    "https://res.cloudinary.com/barhamon/image/upload/c_scale,h_800,q_auto/v1684077303/tet_turkey/ride/route/1_-_37_b2byhh.jpg",
  tags: ["adventure", "motorcycle"],
  description,
  preview: [p([description])],
  full: [
    p([description]),
    h2(["The route"]),
    p([
      `Half of our route was based on `,
      a({ text: "TET Turkey", url: "https://www.transeurotrail.org/turkey/" }),
      `. Most of the time, it is a pleasant gravel, dirt, or small road.Sometimes it is a wide highway. 
There are thousands of switchbacks in every shape and form. Tight, wide, left, right, up, down, steep, 
gentle, wet mud, dry mud, big rocks, small stones, gravel, sand, good asphalt, bad asphalt, snow, and 
any combination of all of the above. Sometimes trail disappears. Sometimes, it crosses a river, and 
sometimes it goes through a dead village. One section was on the dried creek bed, with big stones and a 
steep incline. I was dying on that hill, like, for real. My lungs were exploding. My heart was jumping 
out of my chest. I spent all my energy fighting that hill. But we managed to conquer it despite the lack 
of experience. It was cold when we reached the first high mountain covered with snow. We turned around a 
lot cos our way was blocked by deep snow. It felt like we were stuck there forever.At some point, we were 
riding through one of those dead villages, and I thought we needed to break into one of the houses, 
start burning furniture, hunt stray dogs, and wait for spring. A couple of days later, we drove through 
the snowy summit again. I don't know if that was gained experience or the sun shining, but it felt much 
less dramatic and easier to drive. Whenever I thought I had seen everything, something new and beautiful 
came around the corner. One day we were climbing up through the canyon and ended up on a vast rocky 
plane with patches of cultivated soil here and there. It was unbelievably beautiful under the morning 
sun. And once we had long and tiresome descent from the mountain on a dirt road destroyed by the stream, 
which ended up with a wide and empty highway. It felt like a treat after hard work. At the end of the 
first half of our route was a 3000m summit. We decided that we had enough snow already and skipped it.`,
    ]),
    p([
      `I planned the route back to Antalya, choosing the smallest roads on a map. A lot of those roads 
      are gravel or dirt ones. The trail is still through the mountains but much lower than the way there.
      And, of course, we had our bit of adventures. Once the road ended up in a newly constructed water 
      reservoir. The other time we ran into logs lying across our way. So yeah, there were a few 
      turnarounds and searches for an alternative route.`,
    ]),
    p([
      `Overall it is a diverse and beautiful route. Sometimes it challenged us, but newer to the point of 
      giving up.`,
    ]),
    p([`And that smell when you drive into the forest.`]),
    createCloudinaryGallery("barhamon", "s_p_tet_turkey_ride_route_2023"),
    createDivider(),
    h2(["Navigation"]),
    p([
      `I used Komoot for route planning because the desktop version is the best. The problem is the 
      navigation part. It is not built for a multi-day motorcycle adventure. It starts glitching after 
      around 300 km and refuses to load the app after 1300km. That's why our recorded track has gaps. 
      Those parts we did not manage to salvage from two phones. Which is not that bad, but next time I 
      will use something else for navigation and trail recording. Good thing, though, Komoot allows you 
      to download GPX of the planned route, so I can still use it for route planning.`,
    ]),
    p([
      "Here is our ",
      a({
        text: "planned route",
        url: "https://www.komoot.com/tour/1046129032/zoom",
      }),
      ".",
    ]),
    p([
      "Here is our ",
      a({
        text: "recorded track",
        url: "https://www.komoot.com/tour/1113525883/zoom",
      }),
      ".",
    ]),
    img({
      ...prepareImgProps({
        file: "tet_turkey/ride/navigation/1_-_1_baulhh.jpg",
        username: "barhamon",
        version: 1684077397,
      }),
      src: "https://res.cloudinary.com/barhamon/image/upload/v1684077397/tet_turkey/ride/navigation/1_-_1_baulhh.jpg",
      alt: "Komoot route planer",
    }),
    createDivider(),
    h2(["Nights"]),
    p([
      `All nights, except one, we spent wild camping. We were too cold and tired that day to look for a camping 
      spot. It was already evening when we reached civilization in the form of an asphalt road and a sign with 
      the distance to the city of Tashkent. In Tashkent, we drove past the hotel that looked abandoned twice 
      before we decided to try the doors. For the 15 euros, we got two rooms with a view, breakfast, and a 
      shower. I have never enjoyed a warm shower that much in my life. On all other days, we started to look for 
      the camping spot around 5 pm. Our requirements were simple: fresh water, no snow, and as far from 
      civilization as possible. We could always find a place within 50km of our position. Sometimes it was 
      relatively easy to reach, and sometimes, it was not easy at all. I vividly remember how I was tumbling down 
      the hill and praying that my motorcycle does not follow me. Thankfully it did not. That was 100 meters from 
      only one flat patch of the land, big enough to put a tent there. But the spot was worth it.`,
    ]),
    createCloudinaryGallery("barhamon", "s_p_tet_turkey_ride_nights_2023"),
    createDivider(),
    h2(["Bikes"]),
    p([
      `We got two `,
      a({
        text: "Honda CRF 250 Rally",
        url: "https://www.honda.co.jp/CRF250RALLY/",
      }),
      ` bikes in the `,
      a({ text: "Turkey Bike Rent", url: "http://www.turkeybikerent.com/" }),
      `. One had 600 km on the clock, and the second had 16000 km. A guy said upfront that clutch is a weak 
      spot of those bikes and that we should not ride deep sand or any other terrain that involves heavy clutch 
      usage. If we do and run out of the clutch, it will be our problem. The older bike ran out of the clutch on a 
      second day. I am sure it was not our fault, but that was our problem. The closest city where that clutch 
      could be replaced was 60 km away. Those were the longest 60 km in my life, and I even was not riding a faulty 
      bike. When we reached Isparta city, the clutch was replaced in an hour and 100 euros. On the same day, but later, 
      I lost my license plate. I rode to the point where it was seen last time with no luck. It had already tried to 
      escape on the first day, and we tied it with straps, but apparently, it was not enough. I asked the rental what 
      I should do about that, and the answer was - nothing. So I rode half of Turkey without a license plate and any 
      problem with the police or anybody else.`,
    ]),
    p([
      `Other than these two things, everything was smooth and without surprises. Rental did not try to charge too much 
      for all the beating we put bikes through. And the bikes performed so well that I would like to have one of those. 
      There is one thing, though: you must change the seat on those bikes. It is impossible to sit on that seat for 
      more than two hours. It hurts. I don't know why Honda hates butts so much.`,
    ]),
    createCloudinaryGallery("barhamon", "s_p_tet_turkey_ride_bikes_2023"),
    createDivider(),
    h2(["Food"]),
    p([
      `We had a drip coffee (you can find it in `,
      a({ text: "A101", url: "https://www.a101.com.tr" }),
      ` shops) with some chocolate bars for breakfast. We cooked something on our gas stove for dinner, and for the 
      lunches, we stopped in different places. Once, we stopped at the village's central square, and there was some 
      gathering. We were guessing that it was either a funeral or a wedding. Locals invited us to the table and fed us—all 
      in sign language. You should see our happy/surprised faces. Nobody asked for money or something, but we left some 
      anyway. Later we were told that, most probably, it was a wedding when people from that and neighboring villages 
      gathered for a feast.`,
    ]),
    p([
      `Sometimes we asked locals where they eat, and occasionally entered first thing with the food we saw. On the first 
      day, we saw many people sitting on the street. There was one free table. We decided that that was the place and rushed 
      there. It turned out it was a game club where people played dominoes. Anyway, we got directions to the closest canteen.`,
    ]),
    p([
      `Once, we visited a butchery, and the guy asked how much food we wanted. That was a new way of ordering food, so I 
      asked for half a kilo. Then he got the whole lamb out of a fridge, cut a piece of meat, and cooked it for us. Should I 
      say that it was delicious? It was. As soon as we got food on our table, at least ten cats appeared and started demanding 
      their share. Since then, if we saw butchery at lunchtime, we went straight there. And every time, it was awesome.`,
    ]),
    createCloudinaryGallery("barhamon", "s_p_tet_turkey_ride_food_2023"),
    createDivider(),
    h2(["People"]),
    p([
      `We drove through tough places where life is not easy and met few people. All of them were ready to help, show directions, 
      fix our motorcycle, and give advice, tools, or food.`,
    ]),
    p([
      `We asked one of those butchers to guide us to a good camping and fishing place. He gave us directions and said that 
      fishing is prohibited there, but if someone (police) caught us, we should call him, and he will deal with that. Since 
      then, we have a joke that we have a butcher in Turkey that can deal with the police.`,
    ]),
    p([
      `Once, we met young guys on motorcycles, they wanted to race with us, and we wanted to know where the closest food and 
      gas station was. We did not understand each other, but I am sure we are stars now in the Turkish part of TikTok. And 
      once police officer helped us to find the nearest gas station because the one we were standing on was under construction. 
      Now I have a police officer as an Instagram friend.`,
    ]),
    createCloudinaryGallery("barhamon", "s_p_tet_turkey_ride_people_2023"),
    createDivider(),
    h2(["Gear"]),
    p([
      `At the last minute, I changed the chair to the hammock. There was no space for them, so I needed to choose. I used that 
      hammock only once and wanted a chair every evening. What really I missed was the multi-tool with pliers. There were a few 
      instances when life would be much simpler if we had one with us. Once we borrowed them from locals, all other times, we 
      were inventive. Also, at the last second, I put a waterproof poncho (`,
      a({
        text: "molfar",
        url: "https://www.turbat.ua/turbat_ukrainian/tent-poncho-turbat-molfar.html",
      }),
      `) that also can be used as a tarp. We never used it as a tarp or a poncho, but we used it as a ground cloth daily. It was a 
      crucial piece of equipment for loading/unloading, outfit change, and other camping activities.`,
    ]),
    p([
      `This year I got a sleeping pad (`,
      a({
        text: "Therm-a-rest NeoAir® XTherm™ NXT MAX",
        url: "https://www.thermarest.com/de/isomatten/fast-and-light/neoair-xtherm-nxt-max-isomatten/neoair-xtherm-nxt-max.html",
      }),
      `) as a birthday present from my wife. I finally battle-tested it, and it is the most comfortable sleeping pad I ever had. 
      We slept on rocks multiple times, and I felt nothing pointy. The first half of the trip nights were freezing. I even slept in 
      my puffy jacket. So yeah, I am pretty sure our next big outdoor purchase will be three-season dawn sleeping bags. If you have 
      recommendations, I am all ears.`,
    ]),
    p([
      `I rode in my AVG K3 helmet, which I like, but I mostly rode with a wide-open visor, and the sun burned my nose and cheeks 
      like never before. I want a helmet with a peak to reduce sunburns next time. One of the first gear for motorcycle traveling 
      I bought was rain gear. It was long ago, and I was lucky enough never to use it. On the last day of this adventure, the 
      pouring rain with thunderstorms and all that fun started right when we strapped all our gear to motorcycles. So I finally 
      used it. What can I say? I need a bigger one.`,
    ]),
    p([
      `We brought fishing gear with us and had the opportunity to use it only twice. Success was only last night when we bought 
      canned corn as bait. Because of the rain, we have not cooked our catch but left it in the closest village for the cats.`,
    ]),
    createCloudinaryGallery("barhamon", "s_p_tet_turkey_ride_gear_2023"),
    createDivider(),
    p([
      `Yeah! That was the one that you finish with a grin and yell - We did it. The only thing left is to cut the 7 hours of video 
      from GoPro.`,
    ]),
    createCloudinaryGallery("barhamon", "s_p_tet_turkey_ride_end_2023"),
  ],
};
