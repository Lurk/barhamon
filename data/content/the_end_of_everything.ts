import { a, p, b } from "../../models/tree";
import { PostInterface } from "../../models/posts";

const preview = p(["by Katie Mack"]);

export const the_end_of_everything: PostInterface = {
  pid: "the_end_of_everything",
  header: "The End of Everything",
  time: 1655379922743,
  image:
    "https://res.cloudinary.com/barhamon/image/upload/c_scale,h_800,q_auto/v1655379868/header/the_end_of_everything.jpeg",
  tags: ["book"],
  description: "The End of Everything - nerdy jokes and ultimate death.",
  preview: [preview],
  full: [
    preview,
    p([
      "I do not know if it is only me or if it is like that for everybody, but I do not have any mental model for thinking about the early times of the universe. And I celebrate moments when I found a good one. ",
    ]),
    p([
      "As I get it -  in The big bang time, universe was so full of energy that all forces we know behaved differently. By differently, I mean there was no gravity or electromagnetic, or any other known to us, force. So yeah, no need to go to the gym because there is no mass. Then, due to a rapid space expansion (please don't ask me why it expands), the energy level in every part of the universe dropped enough to change the State. Katie Mack, suggests water as an analogy. The water state is different depending on how much energy (heat) you put in. And this analogy had more value for me than the entire A brief history of time.",
    ]),
    p([
      "And even if the water thingy is no good for you, the book is fun to read if you like nerdy jokes.",
    ]),
    p([
      b("Original Title:"),
      " The End of Everything (Astrophysically Speaking)",
    ]),
    p([b("ISBN:"), " 198210354X (ISBN13: 9781982103545)"]),
    p([
      b("GoodReads:"),
      " ",
      a({
        url: "https://www.goodreads.com/book/show/52767659-the-end-of-everything",
        text: "4.26 / 5",
      }),
    ]),
  ],
};
