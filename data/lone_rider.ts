import { a, p, b } from "../models/tree";
import { PostInterface } from "../models/posts";

const preview = p(["by Elspeth Beard"]);

export const lone_rider: PostInterface = {
  pid: "lone_rider",
  header: "Lone Rider",
  time: 1638029785631,
  image:
    "https://res.cloudinary.com/barhamon/image/upload/c_scale,h_800,q_auto/v1638029283/header/lone_rider.jpg",
  tags: ["book"],
  description: "The First British Woman to Motorcycle Around the World",
  preview: [preview],
  full: [
    preview,
    p([
      "Everyone who knows me knows that I am quite an adventurous person. And one of my big dreams is to make motorcycle trip around the world. That is the reason why I started this book. Elseph made my dream trip almost 40 years ago. And that was Adventure with capital A. The story is also very personal. Reading it felt like your friend telling you the stories from her life.",
    ]),
    p([
      "And it confirms all my biases about the countries she passed through. All except Australia. I was waiting for stories about venomous spiders riding giant snakes but got Goldwing riding scum instead. And Nepal, now I want to visit this gorgeous country even more. ",
    ]),
    p([
      "Must read if you are an adventurous person, even more, if you are motorcycle adventurous :)",
    ]),
    p([
      b("Original Title:"),
      " Lone Rider: The First British Woman to Motorcycle Around the World",
    ]),
    p([b("ISBN:"), " 1782439625 (ISBN13: 9781782439622)"]),
    p([
      b("GoodReads:"),
      " ",
      a({
        url: "https://www.goodreads.com/book/show/35000047-lone-rider",
        text: " 4.5 / 5",
      }),
    ]),
  ],
};
