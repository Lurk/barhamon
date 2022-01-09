import { createCloudinaryGallery, img, p, a } from "../../models/tree";
import { PostInterface } from "../../models/posts";
import { prepareImgProps } from "../../utils";

const preview = p(["Good news, everyone."]);

export const good_news_everyone: PostInterface = {
  pid: "good_news_everyone",
  header: "Status update",
  time: 1631381161324,
  image:
    "https://res.cloudinary.com/barhamon/image/upload/c_scale,h_800,q_auto/v1631384183/header/not_so_good_for_my_laptop.jpg",
  tags: ["blog", "relocation"],
  description: "Life updates",
  preview: [preview],
  full: [
    preview,
    p([
      "Mari finally got a visa, so we are packing our stuff in Kyiv. And I got my residence permit. So soon, we will be deep into the integration process. Learning the language, revising driver's license, searching for a new flat, getting bicycles, etc.",
    ]),
    p([
      "And since I will be in Kyiv soon, I will visit my barber. This gorgeous beard and mustache that grew while I waited for Mari will be gone. Not completely, of course.",
    ]),
    img({
      ...prepareImgProps({
        file: "header/good_news_everyone.jpg",
        username: "barhamon",
        version: 1626984426,
      }),
      src: "https://res.cloudinary.com/barhamon/image/upload/c_scale,h_800,q_auto/v1631382491/header/good_news_everyone.jpg",
      alt: "gorgeous beard and mustache",
    }),
    p([
      "If you wondered what is going on with that memory leak, I am trying to fix. I did a ",
      a({
        text: "repo",
        url: "https://github.com/Lurk/nsstring_leak",
      }),
      " with tests and benchmarks, filed an ",
      a({
        text: "issue",
        url: "https://github.com/SSheldon/rust-objc-foundation/issues/15",
      }),
      " in objc-foundation repo. Now just waiting for the maintainer.",
    ]),
    p([
      "And in the meantime I did a lot of hikes. Munich offers a lot of you are like hiking. I am thinking to start doing hike reports, but I will not promise it yet. Here are some nice pictures I took during my hikes.",
    ]),
    createCloudinaryGallery("barhamon", "first_hikes"),
    p([""]),
    p([
      "What I definitely will do is a book's reviews. Lately, I am back to the book reading business. And will try my best to give you a summary of what I read.",
    ]),
    p([
      "But before that, I need to fix my old and trustworthy MBP, the screen of which went dead after eight years of service. Luckily for me, my friend has a spare one with some dead pixels. So maybe by the end of the week, I will have my laptop back.",
    ]),
  ],
};
