import { b, code, a, createMessage, p } from "../../models/tree";
import { PostInterface } from "../../models/posts";

const c = `interface CloudinaryTagResponse {
  resources: Array<{
    "public_id": string,
    "version": number,
    "format": string,
    "width": number,
    "height": number,
    "type": string,
    "created_at": string,
  }>,
  "updated_at": string,
}`;

const preview = p(["As you can see in my previous posts, I like photography."]);

export const cloudinary: PostInterface = {
  pid: "cloudinary",
  header: "Image gallery with Cloudinary",
  time: 1607893775602,
  image: "/img/cloudinary.png",
  tags: ["blog", "cdn", "images", "react", "ts", "nextjs"],
  description: "Here's how I build an image gallery with Cloudinary",
  preview: [preview],
  full: [
    preview,
    p([
      "Not like I am particularly good at that, but I enjoy seeing those moments later. That brings me to CDN's because those photos should be stored and delivered.",
    ]),
    p([
      "After some googling, I choose Cloudinary because it has some nice features and a decent free plan - 25000 transformations or 25 GB storage or 25 GB bandwidth monthly.",
    ]),
    createMessage({
      content: [
        p([
          "I will receive more free services for every registered user. So if you like my photos, go on, click on that link, and register. ",
          a({
            url: "https://cloudinary.com/invites/lpov9zyyucivvxsnalc5/hqd3swadmblfw3ivxjmv",
            text: "That link",
          }),
        ]),
      ],
      header: "More free stuff for me",
      icon: "linkify",
    }),
    p([
      "Cloudinary has a react library, but I did not find any image gallery. So here is how I did it.",
    ]),
    p([
      "After uploading images to Cloudinary servers, I tag them. After that, I fetch the list of photos by this URL:",
    ]),
    code({
      content:
        "`https://res.cloudinary.com/${your_username}/image/list/${tag}.json`",
      lang: "typescript",
    }),
    p(["response type:"]),
    code({ content: c, lang: "typescript" }),
    p([
      "Here is source code ",
      a({
        url: "https://github.com/Lurk/barhamon/blob/master/components/cloudinary.tsx",
        text: "cloudinary.tsx",
      }),
      " how I use it with ",
      a({
        url: "https://github.com/xiaolin/react-image-gallery",
        text: "React Carousel Image Gallery",
      }),
    ]),
    p([
      "If you look at lines 64 and 65, you will notice the ",
      b("srcSet"),
      " and ",
      b("sizes"),
      " field. You may ask how I calculate those params? I did not :)",
    ]),
    p([
      "I used the excellent ",
      a({ url: "https://github.com/ausi/respimage", text: "RespImageLint" }),
      " tool created by Martin Auswöger.",
    ]),
  ],
};
