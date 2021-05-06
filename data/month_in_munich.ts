import { b, img, p, a, createMessage, ul, li } from "../models/tree";
import { PostInterface } from "../models/posts";
import { prepareImgProps } from "../utils";

const preview = p(
  "The most frequently asked question is - do I like it? And the short answer is yes."
);

export const month_in_munich: PostInterface = {
  pid: "month_in_munich",
  header: "Relocation part two, or month in Munich",
  time: 1620242638222,
  image:
    "https://res.cloudinary.com/barhamon/image/upload/c_scale,q_auto,w_650/v1620243049/header/month_in_munich.jpg",
  tags: ["blog", "relocation"],
  description:
    "Part two of the tail about our relocation from Kyiv to Munich process. Buying a local sim, get tax ID, self isolation, usual stuff :)",
  preview: [preview],
  full: [
    preview,
    p("What I like the most - everybody seems to be chill."),
    p(
      "Did I find something that annoys me? I did not. Except, maybe, the real estate market, but you know, it is like being annoyed by rain."
    ),
    p(
      "The first week I was on self-isolation, so yeah, it was boring. But since it was snowy outside, and the flat has a balcony, I was able to make a friend :)"
    ),
    img({
      ...prepareImgProps({
        file: "month_in_munich/friend.jpg",
        username: "barhamon",
        version: 1620243822,
      }),
      src:
        "https://res.cloudinary.com/barhamon/image/upload/v1620243822/month_in_munich/friend.jpg",
      alt: "my first friend in Munich",
    }),
    p([
      "Two things you should know about apartments in Munich. First - it is crazy expensive to rent a flat. Second - it is tough to rent. The only real option to rent an apartment remotely is ",
      a({ text: "MrLodge", url: "https://www.mrlodge.com/" }),
      ". And I can recommend them. Everything was smooth, and the flat was exactly as in pictures from the website. ",
    ]),
    p(
      "While I was at home, I tried to get a phone contract but failed because to get a proper one, you should have a bank account, and to have a bank account, you need to have a tax id. I heard that I could open an account in N26 bank, but they rejected my passport. So I ended up with a prepaid number by Aldi Talk. I ordered it online, but by the time the actual sim card arrived, my self-isolation was over, and I could buy it at any Lidl shop."
    ),
    p(
      "How to end self-isolation? You have two options. One is to wait five days, make a corona test, and if it is negative, you are free. Second, wait ten days, and you are free. I chose the first option, and on the morning of 10 April, I was tested negative and free to move around. After 10 km walking, I went to the grocery store,  bought charcoal, sausages, and beer. And in the evening I had a BBQ party on the balcony."
    ),
    img({
      ...prepareImgProps({
        file: "month_in_munich/bbq.jpg",
        username: "barhamon",
        version: 1620249895,
      }),
      src:
        "https://res.cloudinary.com/barhamon/image/upload/v1620249895/month_in_munich/bbq.jpg",
      alt: "my first BBQ in Munich",
    }),
    p([
      "To get a tax ID, you should register yourself in KVR. Since it is corona time, you can do it remotely. To do that, you need to send an email to this address: ",
      b("buergerbuero.kvr@muenchen.de"),
      '. In attachments should be a filled by you PDF form "',
      a({
        text: "Anmeldeformular und Vollmacht",
        url:
          "https://www.muenchen.de/rathaus/dms/Home/Stadtverwaltung/Kreisverwaltungsreferat/fachspezifisch/HA-II/Buergerbuero/Dokumente/anmeldung_meldebehoerde.pdf",
      }),
      '", another PDF form "',
      a({
        text: "Wohnungsgeberbestätigung",
        url:
          "https://www.muenchen.de/rathaus/dms/Home/Stadtverwaltung/Kreisverwaltungsreferat/fachspezifisch/HA-II/Buergerbuero/Dokumente/Wohnungsgeberbest-tigung_Internet.pdf",
      }),
      '" supplied by your landlord, your passport, and your visa.',
    ]),
    createMessage({
      content: p([
        "Before you download those forms and fill them, go to ",
        a({ url: "https://www.muenchen.de/" }),
        " and check if they are still valid.",
      ]),
      header: "IMPORTANT",
      icon: "warning sign",
    }),
    p(
      "Since I did not find any advice on what to write in the header and body of the letter, I wrote:"
    ),
    createMessage({
      header: "registration",
      content: [
        p(
          "Hi, my name is Serhiy Barhamon. I just moved to Munich and want to register myself. In the attachment to this letter you will find:"
        ),
        p(" - Anmeldeformular und Vollmacht"),
        p(" - Wohnungsgeberbestätigung"),
        p(" - My passport"),
        p(" - My visa"),
        p(
          "In case you have any questions, please contact me by phone ...  or email ...."
        ),
        p("Best regards"),
      ],
      icon: "envelope",
    }),
    p(
      "I received my registration after two weeks and still waiting for my tax ID. Side note, do not forget to put your name on postbox."
    ),
    p(
      "A couple of times I went to the office on foot (an hour, free), most of the time I rent a bicycle (25 minutes, 2.4 euro) and when the weather is bad I use S-Bahn (25 minutes, 3.5 euro). Thinking about buying a bike but again, since this is a corona time, it is not easy to get to the offline shop, and online shops do not accept cache. So yeah, it is a good idea to have some money in your bank account when you're moving to another country. Don't be like me."
    ),
    img({
      ...prepareImgProps({
        file: "month_in_munich/bike.jpg",
        username: "barhamon",
        version: 1620252813,
      }),
      src:
        "https://res.cloudinary.com/barhamon/image/upload/v1620252813/month_in_munich/bike.jpg",
      alt: "my first BBQ in Munich",
    }),
    p("I hope, if you are reading this, somehow it will help you. See ya"),
  ],
};
