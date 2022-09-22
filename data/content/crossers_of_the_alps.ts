import {
  a,
  createCloudinaryGallery,
  createDivider,
  createYoutubeVideo,
  p,
  h2,
  h3,
  h4,
} from "../../models/tree";
import { PostInterface } from "../../models/posts";

const preview = "We did it following the Austrian section of the E5 route.";

export const crossers_of_the_alps: PostInterface = {
  pid: "crossers_of_the_alps",
  header: "We crossed the Alps.",
  time: 1663793718697,
  image:
    "https://res.cloudinary.com/barhamon/image/upload/c_scale,h_800,q_auto/v1663791551/e5/crossers_of_the_alps.jpg",
  tags: ["personal", "adventure", "mountains"],
  description:
    "Hike the Austrian section of the E5 with detours and fun.",
  preview: [p([preview])],
  full: [
    p([
      preview,
      "Sometimes we diverged from the route, mainly because we decided to make that trip too late. People we meet on the way said they book everything from six to nine months in advance.",
    ]),
    h2(["First day"]),
    h4(["Oberstdorf to Rappensee hütte."]),
    p([
      "This is the first deviation from the original E5 route. We wanted to stay in Kemptner hütte, which is on the route, but it was booked out.",
    ]),
    p([
      "From the train station, we took bus number 7, which brought us to Alpe Eschbach. From there, we hiked to the Enzianhütte, where we had lunch. And after some rest and Radler, we walk to our destination. Overall it took us 6 or 7 hours. We drank too much beer celebrating the start of our trip, which ruined our next day. Don’t be like us. Two beers are more than enough.",
    ]),
    p([
      "At check-in, we upgraded from the common room to a room with four beds and a nice view from the window. The shower cost 4 euros for 3 minutes. There are only four cabins, so be aware of peak hours. Breakfast can be better, but it is an excellent hütte to spend a night or a couple of them.",
    ]),
    createCloudinaryGallery("barhamon", "e5_day_1"),
    createDivider(),
    h2(["Second day"]),
    h4(["Resting day at Rappensee hütte."]),
    p([
      "First of all, I am happy that we added resting days when we planned this trip. We needed it, especially with a hangover.",
    ]),
    p([
      "That day we walked around the lake, took a nap after lunch, and walked a bit more around the hütte.",
    ]),
    createCloudinaryGallery("barhamon", "e5_day_2"),
    createDivider(),
    h2(["Third day"]),
    h4(["Rappensee hütte to Stockach"]),
    p(["Still not E5, but we are getting closer to it."]),
    p([
      "We were choosing between two ways. First is to go down to the valley and then take the bus to our guest house. The second is to get upper to the mountain and walk down almost to today's destination. Both start the same, so we decided to reach the point when the path splits and then choose. And we chose the first one because we saw a rockfall on the second. And that was a good decision. The track down is stunningly beautiful and looks like it is not very popular. On the way down, we met only three people, which was lovely. Only two of us and this majestic landscape.",
    ]),
    p([
      "We booked a tiny room in Petra House, and it was awesome. The host, Petra, was very hospitable. The room was small but cozy. The breakfast was excellent. And almost all of the four cats were hugged. Highly recommend.",
    ]),
    createCloudinaryGallery("barhamon", "e5_day_3"),
    createDivider(),
    h2(["Fourth day"]),
    h4(["Stockach to Memminger hütte"]),
    p(["We are finally back to the E5 track."]),
    p([
      "After our breakfast, the owner of our guest house said there was a bus that goes from Bach to the start of a trail to the hütte. And most importantly, they will ride us to that bus stop. The bus picked us up at 8:30 AM. The track up to the hütte is beautiful. Most of the way, it rained, so we were wet. When we almost reached the hütte, we saw wild goats. They were so close that it seemed like you could touch them.",
    ]),
    p([
      "We slept in a small cabin with ten other people. One of them was snoring so hard that the earth was shaking. The lesson is - always bring your earplugs with you.",
    ]),
    p([
      "The hot water for the shower costs 6 euros for 3 minutes. Cold water is free. There are only two showers, be aware of peak hours. The breakfast was good.",
    ]),
    createCloudinaryGallery("barhamon", "e5_day_4"),
    createDivider(),
    h2(["Fifth day"]),
    h4(["Memminger hütte to Augsburger hütte."]),
    p([
      "This is not on E5. To stay on E5, you should go directly to Zams. I booked Augsburger hütte because I wanted to spend our eighth anniversary in the mountains, but Memminger hütte was booked out.",
    ]),
    p([
      "We did not make it. You should be in excellent physical and mental form for this track. I shit myself multiple times on the way. There are a few walls to climb, and when we saw the last one, we understood that it was well above our abilities. We turned around and headed down to the Zams. It was a long and physically demanding hike. We started at 7 am, saw the first human footprint around 6 pm, and got to the city at 11:40 pm. I do not think that I want to repeat that part of our adventure.",
    ]),
    p([
      "Having said all that, that was one of the most beautiful hikes I did. I never imagined I would be in a place like that one day. And again, we were alone the whole day, which is somehow a unique and precious thing for us—surrounded by mountains and wildlife. First time in my life, I saw a Weasel. He was curious and came close to us. That was something.",
    ]),
    p([
      "When we reached Zams, we booked the closest thing with a bed, and by happy coincidence, that turned out to be a lovely flat. We were sorry to wake everybody up to get our keys, but the alternative was to sleep on the bench in front of the house. I was ready to fall asleep right there, but Mari did not give up until we got the keys.",
    ]),
    p([
      "And boots! I do not know how many times I was thankful that we bought our boots on that day. I do not think we would have made it without them.",
    ]),
    createCloudinaryGallery("barhamon", "e5_day_5"),
    createDivider(),
    h2(["Sixth day"]),
    h4(["Resting day at Zams."]),
    p([
      "I only got up from bed when I went to the grocery store to buy us breakfast and wine. That day was our eighth anniversary. We planned to spend it high in the mountains, but instead, we spent it lying in bed with muscle pain. I think that was the first time we celebrated this day like that.",
    ]),
    p([
      "We lived in Apartmenthaus Juen. The apartments are big, bright, and nicely furnished. Owners are friendly and helpful. Those apartments were also the most expensive accommodation we had on our route, but in our case, we had no other choice, and I am glad we spent our muscle pain day there.",
    ]),
    createCloudinaryGallery("barhamon", "e5_day_6"),
    createDivider(),
    h2(["Seventh day"]),
    h4(["Zams to Moosanger."]),
    p([
      "We still did not fully recover from our previous hike, so we took a bus to the other side of the mountain. From there, we hiked to our next place to stay. On the way, we ate blueberries that grew right under our feet and picked enough mushrooms to cook dinner. When we reached our destination, the host drove us by car to the nearest grocery store, where we bought the missing ingredients for our dish.",
    ]),
    createCloudinaryGallery("barhamon", "e5_day_7"),
    createDivider(),
    h2(["Eight day"]),
    h4(["Rest day at Moosanger."]),
    p([
      "The plan was to get to the summit we skipped yesterday. We even had early breakfast. But after it, we accidentally fall asleep. Luckily forest was across the street from our apartment, and after lunch, we did a short walk in it. I have never seen so many mushrooms as in this forest.",
    ]),
    p([
      "For those two nights, we booked apartments in Tiroler Hasenhöhle. They were good, so if you are searching for a place to stay in that area, I recommend checking them out.",
    ]),
    createCloudinaryGallery("barhamon", "e5_day_8"),
    createDivider(),
    h2(["Ninth day"]),
    h4(["Moosanger to Tieflehn."]),
    p([
      "We walked through multiple villages to the MPrice supermarket at Wenns. There is a bus stop where you can hop on the 4204 bus that goes all the way to Tieflehn. At check-in, we received tickets for the cable car. We used them to get to Riffelseehütte, where we had lunch with an incredible view of the glacier we planned to reach the next day.",
    ]),
    p(["Our accommodation was Alpin Pension. I cannot complain."]),
    createCloudinaryGallery("barhamon", "e5_day_9"),
    createDivider(),
    h2(["Tenth day"]),
    h4(["Tieflehn to Vent."]),
    p([
      "Our initial plan was to go from Tieflehn to Vent with the help of a bus that brings you to the other side of a glacier. Bus saves you at least 10km of walking around the glacier. We woke up at 5 am to start the hike at 6 am, but it was raining till 7 am. So we started later than we thought, which did not matter much because when we got to Braunschweiger hütte, we understood that we had already had enough walking.",
    ]),
    p([
      "The way up is pretty steep, and elevation starts to kick in. We met a guy from Nepal on the way. He was going in circles around us like it was nothing, which was funny if you consider that I was dying. Mahindra, if you are somehow reading this, it was nice to meet you there.",
    ]),
    p([
      "The view gets crazier the higher you get. When we finally reached the glacier, I was literally and figuratively high. And again, like multiple times on this trip, I never imagined that someday I would reach a place like that.",
    ]),
    p([
      "When we reached Braunschweig hütte, we were already tired and hungry. I don't know if that was the chief’s achievement or if our hike did the trick, but that was the best goulashsuppe I had eaten. While eating, we talked to a couple, and they advised us of a better way to get to the bus station.",
    ]),
    p([
      "We got down to the valley and reached Vent on a different bus. Everything was straightforward, except the 30 minutes late bus.",
    ]),
    createCloudinaryGallery("barhamon", "e5_day_10"),
    createDivider(),
    h2(["Eleventh day"]),
    h4(["Rest day at Vent."]),
    p([
      "We got out the bad two times this day. One for breakfast and the second for dinner. Ah, we also washed our clothes.",
    ]),
    p([
      "Highly recommend the restaurant on the opposite side of the road from the church. The pizza, the pasta, the wine, everything was superb.",
    ]),
    createCloudinaryGallery("barhamon", "e5_day_11"),
    createDivider(),
    h2(["Twelve day"]),
    h4(["Vent to Rifugio Similaun."]),
    p([
      "Because way up has a gentle angle, that was one of the easiest hikes on the trip. Despite the altitude gain and light rain, it was more like a walk in the park. The stunning one, with mountains covered with snow on both sides, waterfalls, and clouds that hug hills.",
    ]),
    p([
      "On the way to Rifugio Similaun, you can have lunch in Martin-Busch hütte. We had apple strudel and warm tea. Some people we met on the way said that Rifugio Similaun is much better than this one. I can not confirm nor deny that claim because we spend there half an hour. But I can say that Similaun is good.",
    ]),
    p([
      "First time on this trip, I had trouble sleeping. I woke up multiple times in the night with the feeling that there was not enough air in the room. Maybe that was the altitude effect, but we did not have the time to check this theory.",
    ]),
    p([
      "The hütte itself is excellent. I want to spend a few days there and explore the area. Somehow the shower information does not look so important as in the first days of our trip, but I will add it anyway. There is only one shower cabin, and hot water costs money. They do not have online booking, so you should call by phone to book a sleeping place. But even I could do that, and I hate phone calls.",
    ]),
    createCloudinaryGallery("barhamon", "e5_day_12"),
    createDivider(),
    h2(["Thirteen day"]),
    h4(["Rifugio Similaun to Merano."]),
    p([
      "That was the last hiking day and the day with the nastiest weather. It started with snow, which gradually turned into rain. So yeah, one can say that we were blessed with the opportunity to compare hikes under the snow and the rain. I like snow more. When we reached the valley, the rain stopped, and we took the bus to Merano. The bus takes the scenic route, so be ready to enjoy the view.",
    ]),
    p([
      "In Merano, we booked a room in the Lux Garnì hotel (😎). It looks and smells like a nursing house, but the room is clean, the view from the balcony is gorgeous, and the breakfast is good. So, nothing to complain about.",
    ]),
    createCloudinaryGallery("barhamon", "e5_day_13"),
    createDivider(),
    h2(["Fourteen day"]),
    h4(["Rest day at Merano."]),
    p([
      "Merano is a lovely city. We have not visited anything in the city. We just walked around, ate pizza and ice, drank wine, and sunbathed on the river bank. Everybody told us that we should visit thermals, but we did not do that either. So maybe sometime in the future, we will revisit it.",
    ]),
    createCloudinaryGallery("barhamon", "e5_day_14"),
    createDivider(),
    h2(["Since I already received tons of questions, here is a small FAQ"]),
    h3(["Did I like it / would I do it again?"]),
    p(["Yes. We think it was the best vacation we have had so far."]),
    h3(["Was it hard?"]),
    p([
      "As long as you do not diverge from the official E5 route, it is not that hard. And when you do diverge, check the path in advance to avoid surprises.",
    ]),
    h3(["Do I need some special training beforehand?"]),
    p([
      "I can not say that we live a particularly healthy and sporty life. So yeah, if you can survive a regular day hike - you can do it.",
    ]),
    h3(["What about the gear?"]),
    p([
      "There is no need to carry a sleeping bag with you. Every hütte provides enough blankets to sleep with comfort. What you need instead is the sleeping bag liner. It will save you weight and volume in your backpack.",
    ]),
    p([
      "While I saw people in the trail runners, we were glad we had our boots. So yeah, I would strongly recommend having proper boots, especially if you are planning detours.",
    ]),
    p([
      "I had flip-flops as camping shoes. You know, this kind that has a thing between your toes. It turned out that sometimes you want to wear warm socks. So yeah, next time I will bring something else.",
    ]),
    p([
      "Earplugs. Find ones that fit you before the trip, and thank me later.",
    ]),
    h3(["Does it require two weeks?"]),
    p([
      "No. It is one week trek. But, if you have time to enjoy the way and the places, I highly suggest you to take your time. I am personally glad that we did it in two weeks.",
    ]),
    h3(["What would I change in our route?"]),
    p([
      "For obvious reasons, I would skip Augsburger hütte and go directly to Zams.",
    ]),
    p([
      "There is no point in staying in Tieflehn. Instead, I would book a place in Braunschweiger hütte.",
    ]),
    p([
      "And last but not least I would like to spend more time in Rifugio Similaun. I like the place and the nature around worth exploring.",
    ]),
    h3(["Have you used your shiny titanium shit shovel?"]),
    p([
      "Yes. I highly recommend carrying one with you. It makes your life so much easier in critical situations.",
    ]),
    createDivider(),
    p([
      "I think that's it. We got the Crosser of the Alps achievement, and, I hope, you enjoyed the photos and the story.",
    ]),
  ],
};
