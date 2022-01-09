import { img, p, a } from "../../models/tree";
import { PostInterface } from "../../models/posts";
import { prepareImgProps } from "../../utils";

const preview = p([
  "Now, when Mari got a visa, it was time to move to Munich for real.",
]);

export const moving_our_stuff: PostInterface = {
  pid: "moving_our_stuff",
  header: "Moving our stuff",
  time: 1633260449826,
  image:
    "https://res.cloudinary.com/barhamon/image/upload/c_scale,h_800,q_auto/v1633260268/moving_our_suff/moving_our_stuff.jpg",
  tags: ["blog", "relocation"],
  description: "Moving stuff from Kyiv to Munich. With back pain and cat.",
  preview: [preview],
  full: [
    preview,
    p([
      "The plan was simple. We pack our stuff in a couple of days send them to Munich. After that, we have a week to meet all our friends and family. Then we will fly to Munich, and we still had four days from my two weeks vacation left. Should I say that plan was over-optimistic?",
    ]),
    img({
      ...prepareImgProps({
        file: "moving_our_suff/42_kg_of_vinyl.jpg",
        username: "barhamon",
        version: 1626984426,
      }),
      src: "https://res.cloudinary.com/barhamon/image/upload/v1633260267/moving_our_suff/42_kg_of_vinyl.jpg",
      alt: "42 kilos of vinyl",
    }),
    p([
      "When we moved from Moscow to Kyiv eight years ago, all our stuff fit in the back of Skoda Fabia. But now. Now we have roughly 500 kg of things that we want to have with us. And some stuff that we do not want with us and don't want to throw away. So yeah, at the moment of writing this, I still feel pain in my back. But we did what we planned in 10 days. Packed and shipped all stuff we wanted to Munich (now I know that we have 42 kilos of vinyl). We took things that we didn't want with us to my mother's house. Renewed passport for our cat. I changed the screen in my mbp (that went really fine). We bought an extra luggage case last night before the flight. ",
    ]),
    img({
      ...prepareImgProps({
        file: "moving_our_suff/new_laptop_screen.jpg",
        username: "barhamon",
        version: 1626984426,
      }),
      src: "https://res.cloudinary.com/barhamon/image/upload/v1633260263/moving_our_suff/new_laptop_screen.jpg",
      alt: "my new mbp screen",
    }),
    p([
      "If I do that again, I will budget at least two weeks only for packing stuff.",
    ]),
    p([
      "We chose ",
      a({
        text: "Ukr-Trans-Express",
        url: "https://ukr-trans-express.com.ua/",
      }),
      " company to move our stuff. The competition was between them and ",
      a({
        text: "Gosselin",
        url: "https://gosselin-moving.com/en",
      }),
      ", but Gosselin was way out of our budget.  Everything went really smoothly. We hoped that cargo would arrive two or three weeks later, but in fact, it arrived at our new flat in Munich precisely one week after we put it in the cargo van in Kyiv. So instead of using leftovers from my vacation on chilling, we unpack and shuffle around our belongings.",
    ]),
    img({
      ...prepareImgProps({
        file: "moving_our_suff/ART.jpg",
        username: "barhamon",
        version: 1626984426,
      }),
      src: "https://res.cloudinary.com/barhamon/image/upload/v1633260263/moving_our_suff/ART.jpg",
      alt: "our pictures hanging on the wall",
    }),
    p([
      "I am happy that the flat is equipped with a basement. Because otherwise, there will be no living space at all. I have barely fitted our sound system in it.",
    ]),
    img({
      ...prepareImgProps({
        file: "moving_our_suff/sound_system.jpg",
        username: "barhamon",
        version: 1626984426,
      }),
      src: "https://res.cloudinary.com/barhamon/image/upload/v1633260267/moving_our_suff/sound_system.jpg",
      alt: "our 'little' sound system",
    }),
    p([
      "And I am really happy that the three of us are finally together, doing breakfast on the balcony, hikes on the mountains, and weekday living with all things you do on a regular weekday.",
    ]),
  ],
};
