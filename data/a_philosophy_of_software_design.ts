import { a, p, b } from "../models/tree";
import { PostInterface } from "../models/posts";

const preview = p(["by John Ousterhout"]);

export const a_philosophy_of_software_design: PostInterface = {
  pid: "a_philosophy_of_software_design",
  header: "A Philosophy of Software Design",
  time: 1632772104907,
  image:
    "https://res.cloudinary.com/barhamon/image/upload/c_scale,h_800,q_auto/v1632772550/header/a_philosophy_of_software_design.jpg",
  tags: ["book"],
  description: "Thinking, Fast and Slow - the most useful book you can read.",
  preview: [preview],
  full: [
    preview,
    p([
      "I would say that this is the best book I have read so far on the «building good software» topic.",
    ]),
    p([
      "Pretty often, authors forget that every technic, pattern, or trick they describe as good can be taken too far. But John Ousterhout does not fall into this trap and writes “taking it too far” chapters. Literally.",
    ]),
    p([
      "In general, every piece of advice he gives resonates with my experience. I am not sure if I would fully appreciate these advices early in my career. But still will recommend this book for everyone who wants to write good software.",
    ]),
    p([
      "And, it is short. You will not loose much time reading it. So if you into building software read it :)",
    ]),
    p([b("Original Title:"), " A Philosophy of Software Design"]),
    p([b("ISBN:"), " 1732102201 (ISBN13: 9781732102200)"]),
    p([
      b("GoodReads:"),
      " ",
      a({
        url: "https://www.goodreads.com/book/show/39996759-a-philosophy-of-software-design",
        text: "4.17 / 5",
      }),
    ]),
  ],
};
