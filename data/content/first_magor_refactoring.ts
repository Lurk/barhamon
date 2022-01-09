import { a, p } from "../../models/tree";
import { PostInterface } from "../../models/posts";

const preview = p([
  'Initially, I wanted to separate the "engine" from the data.',
]);

export const first_major_refactoring: PostInterface = {
  pid: "first_major_refactoring",
  header: "First major refactoring",
  time: 1609268054600,
  image: "/img/refactoring.jpg",
  tags: ["blog", "ts", "nextjs", "react"],
  description: "the birthday of the Bar part of barhamon.com",
  preview: [preview],
  full: [
    preview,
    p([
      "Today I did the first step in this direction. Pull request ",
      a({
        url: "https://github.com/Lurk/barhamon/pull/92",
        text: "#92",
      }),
    ]),
    p([
      "Now posts are stored not as React components but as a serializable tree.",
    ]),
    p([
      'This refactoring will allow not only to separate the "engine" from the data but also to separate the templates into a separate package. That means that sooner or later, there will be more than one theme :)',
    ]),
    p([
      "And the data itself can now be stored anywhere, which means that there will be connectors to MongoDB, Postgres, or JSON files.",
    ]),
    p([
      "It means that today is the birthday of the Bar part of barhamon.com :)",
    ]),
  ],
};
