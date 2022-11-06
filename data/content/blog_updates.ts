import { li, p, ul, createMessage, a } from "../../models/tree";
import { PostInterface } from "../../models/posts";

const preview = p([
  "In one of the first posts, I promised to post the music here. This time has come.",
]);

export const blog_updates: PostInterface = {
  pid: "blog_updates",
  header: "Blog updates",
  time: 1667771231007,
  image:
    "https://res.cloudinary.com/barhamon/image/upload/c_scale,h_800,q_auto/v1667771702/header/IMG_8826_rwtang.jpg",
  tags: ["blog"],
  description:
    "In one of the first posts, I promised to post the music here. This time has come.",
  preview: [preview],
  full: [
    preview,
    p([
      "I have a Telegram channel where I have been posting music for quite some time for my friends. The first step is to move all the entries I already posted there. It is pretty simple to download the channel archive from telegram. And, because I can, I wrote some tools on Rust to convert data to a format my blog will understand, upload images, and so on.",
    ]),
    createMessage({
      content: [
        p([
          "If you are interested in code, check those GitHub repos: ",
          a({
            url: "https://github.com/Lurk/telegram-post-converter",
            text: "telegram-post-converter",
          }),
          " and ",
          a({
            url: "https://github.com/Lurk/cloudinary_rs",
            text: "Cloudinary SDK",
          }),
          ". Maybe I will make an effort to make something resembling a crate from the Cloudinary SDK repo.",
        ]),
      ],
      icon: "microchip",
    }),
    p([
      "The second step is translating old descriptions into English, checking for broken links, and so on. This is a work in progress. You can already check the stuff here: ",
      a({ url: "/tag/music", as: "/tag/music", text: "music" }),
      ". I wouldn’t say I like how it looks, so expect some change in design.",
    ]),
    p([
      "I also think about implementing ",
      a({ url: "https://activitypub.rocks/", text: "ActivityPub" }),
      " as part of a migration to Rust. But it took me two years to start migrating my music posts here, so no promises.",
    ]),
  ],
};
