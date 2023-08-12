import { a, p, b } from "../../models/tree";
import { PostInterface } from "../../models/posts";

const preview =
  "Designing Data-Intensive Applications - the one book to read to understand software development.";

export const designing_data_intensive_applications: PostInterface = {
  pid: "designing_data_intensive_applications",
  header: "Designing Data-Intensive Applications by Martin Kleppmann",
  time: 1691833621279,
  image:
    "https://res.cloudinary.com/barhamon/image/upload/c_scale,h_800,q_auto/v1691833825/header/designing_data_intensive_applications.jpg",
  tags: ["book"],
  description: preview,
  preview: [p([preview])],
  full: [
    p([
      `If you ask me today what one book of all books I must read to understand software development, this is it. It 
goes into every little detail about how the software will break and gives you tools to avoid that.`,
    ]),
    p([
      `The name is a bit misleading. For some reason, I was expecting terabyte-crunching algorithms from the beginning.
But no, the book covers cases from your load that can fit into the memory of one machine, and one core is enough - to
multi-datacenter transactions and batch processing.`,
    ]),
    p([
      "My only complaint - it is huge. Which is understandable, given the number of topics covered.",
    ]),
    p([b("Original Title:"), " Designing Data-Intensive Applications"]),
    p([b("ISBN:"), " 1449373321 (ISBN13: 9781449373320)"]),
    p([
      b("GoodReads:"),
      " ",
      a({
        url: "https://www.goodreads.com/book/show/23463279-designing-data-intensive-applications",
        text: "4.71 / 5",
      }),
    ]),
  ],
};
