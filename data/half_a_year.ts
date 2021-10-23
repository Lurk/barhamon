import { b, img, p, a, createMessage, ul, li } from "../models/tree";
import { PostInterface } from "../models/posts";
import { prepareImgProps } from "../utils";

const preview = p([
  "More than half a year has passed since I moved to Munich.",
]);

export const half_a_year: PostInterface = {
  pid: "half_a_year",
  header: "Half a year",
  time: 1634986093792,
  image:
    "https://res.cloudinary.com/barhamon/image/upload/c_scale,h_800,q_auto/v1634986448/half_a_year/header.jpg",
  tags: ["blog", "relocation"],
  description: "I have lived in Munich for half a year already. Do I like it?",
  preview: [preview],
  full: [
    preview,
    p([
      "Six months have passed since I moved to Germany. Locals say that Bavaria is different from all other Germany, but I don't fill it yet. Maybe that's because I was outside Bavaria only in Dresden. Dresden is undoubtedly different, but I don't know two exact cities, so this does not count. Anyway, when you read Germany - I mean Munich, Bavaria.",
    ]),
    img({
      ...prepareImgProps({
        file: "half_a_year/bavaria.jpg",
        username: "barhamon",
        version: 1620243822,
      }),
      src: "https://res.cloudinary.com/barhamon/image/upload/v1634986223/half_a_year/bavaria.jpg",
      alt: "Bavaria is quite a lovely place to live.",
    }),
    p([
      "I still like it very much, especially now when our family is finally together. Despite our initial information that our reunion would take three months, it took roughly six. If you want to use our experience, keep in mind that I do not have a formal degree and can not apply for a blue card. With a blue card, things are different. ",
    ]),
    p(["Here is our timeline:"]),
    ul({
      content: [
        li(["27 January - I got a contract"]),
        li(["26 February - I got a visa"]),
        li(["5 April - I moved to Munich"]),
        li(["27 April - I got a registration"]),
        li(["7 July - I applied for my residence permit"]),
        li(["27 August - Mari applied for a visa"]),
        li([
          "2 September - Mari got a visa, and I got my residence permit on the same day",
        ]),
      ],
    }),
    img({
      ...prepareImgProps({
        file: "half_a_year/flat.jpg",
        username: "barhamon",
        version: 1620243822,
      }),
      src: "https://res.cloudinary.com/barhamon/image/upload/v1634986686/half_a_year/flat.jpg",
      alt: "Real mountains",
    }),
    p([
      "As I said, I still like how things are going here, and it looks like Mari is also like it here. A big part of it plays our flat, which is tiny but cozy, and the location is perfect, and the view from the balcony is fantastic. The bar is so high we have trouble finding something better in our budget. Munich itself is comfortable and ideally located. You know, one hour and you are in the proper mountains. Or, fly around Europe for 20 euros, which is mind-blowing for me. Or, if you are lazy today, put a hammock in one of the parks and chill the shit out of it.",
    ]),
    img({
      ...prepareImgProps({
        file: "half_a_year/alps.jpg",
        username: "barhamon",
        version: 1620243822,
      }),
      src: "https://res.cloudinary.com/barhamon/image/upload/v1634986546/half_a_year/alps.jpg",
      alt: "Real mountains",
    }),
    p([
      "Also, six months have passed since I joined Check24 as a software engineer. My probation period ended on 1 October, and I got a promotion at the end of it. So, now I am a senior software engineer. The last time I had the senior prefix in the job title was in 2013. But you know, the list of things I do daily did not really change with the title. I still do a lot of code reviews, technical discussions, interviews, and of course, do the code. But now it is in my job description.",
    ]),
    createMessage({
      content: [
        p([
          "I reread that last paragraph, and it looks like I am not excited. But I am. It is always nice to know that not only your mum thinks you are good at what you are doing.",
        ]),
      ],
      icon: "smile",
    }),
    p([
      "With the end of quarantine restrictions, the number of people I interact with has increased, but everybody is still relaxed. And I like that a lot. So yeah, after my previous endeavors, this one feels chill, despite all the hustle with moving to another country. And I am still looking forward to not changing my mind. ",
    ]),
    img({
      ...prepareImgProps({
        file: "half_a_year/alps_in_bavaria.jpg",
        username: "barhamon",
        version: 1620243822,
      }),
      src: "https://res.cloudinary.com/barhamon/image/upload/v1634986810/half_a_year/alps_in_bavaria.jpg",
      alt: "Feels good here",
    }),
    p(["See you in the next annual post in half a year. "]),
  ],
};
