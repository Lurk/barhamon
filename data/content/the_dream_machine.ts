import { a, p, b, createMessage } from "../../models/tree";
import { PostInterface } from "../../models/posts";

const preview = "A 500ish page instruction on how to dream big.";

export const the_dream_machine: PostInterface = {
  pid: "the_dream_machine",
  header: "The Dream Machine by M. Mitchell Waldrop",
  time: 1673695512290,
  image:
    "https://res.cloudinary.com/barhamon/image/upload/c_scale,h_800,q_auto/v1673690028/header/the_dream_machine.jpg",
  tags: ["book"],
  description: preview,
  preview: [p([preview])],
  full: [
    p([preview]),
    p([
      "This book is about how we got here. How all that connectivity and supercomputers in our pockets were envisioned and born.",
    ]),
    p([
      "We are living in a world that was the dream of a really small group of people. I am not sure if it is a manifestation of genius, or right time in the right place thing, or both. But I am glad that those particular, no doubt brilliant, people were in that place at that time. And that is one more reinforcement of the idea that people do matter.",
    ]),
    p([
      "And also how open standards eventually win. Two opposite examples are networking and printing. Networking is built mainly on open standards. Printing is primarily the opposite. The network is flourishing, and printing as an activity is universally hated. This is ironic if you consider that both ideas were under active development in PARC.",
    ]),
    p([
      "At the end of the book, you can find “Man-Computer Symbiosis” by J.C.R. Licklider. It is a must-read, even if you want to skip the book. It is pretty short and densely packed with ideas. There is no excuse not to read it, so here is the link: ",
      a({
        text: "Man-Computer Symbiosis",
        url: "https://groups.csail.mit.edu/medg/people/psz/Licklider.html",
      }),
      ". In the book, there are two more texts, “",
      a({
        text: "Intergalactic Network",
        url: "https://www.kurzweilai.net/memorandum-for-members-and-affiliates-of-the-intergalactic-computer-network",
      }),
      "” by J.C.R. Licklider and “",
      a({
        text: "The computer as a communication device",
        url: "https://internetat50.com/references/Licklider_Taylor_The-Computer-As-A-Communications-Device.pdf",
      }),
      '" by J.C.R. Licklider, co-authored with Robert Taylor. They are also worth reading.',
    ]),
    p([
      "I found so many thoughts and ideas in this book that still holds that I will need to copy-paste half of it to discuss. Instead, I finish with one quote from the book, which is a quote from “Man-Computer Symbiosis” I mentioned earlier. It is about man part of Man-Computer Symbiosis.",
    ]),
    createMessage({
      content: [
        p([
          'About 85 percent of my "thinking" time was spent getting into a position to think to make a decision, to learn something I needed to know. Much more time went into finding or obtaining information than into digesting it.',
        ]),
      ],
      icon: "quote left",
    }),
    p([
      "I can say that, 60 years later, it is true. At least for me. While information access has become infinitely faster, I still spend more than half of my “thinking“ time searching and digesting the information I need to solve current tasks, which is terrible in terms of my efficiency. But also good because I consider it as an indication that I am not solving the same problem over and over, which would be boring.",
    ]),
    p([
      "And that is what I am really curious about. How much time do people spend searching and digesting information nowadays? If you have seen some studies about that, please send me a link. Or/And write me about your personal experience.",
    ]),
    p([b("Original Title:"), " The Dream Machine"]),
    p([b("ISBN:"), " 1732265119 (ISBN13: 9781732265110)"]),
    p([
      b("GoodReads:"),
      " ",
      a({
        url: "https://www.goodreads.com/book/show/41438647-the-dream-machine",
        text: "4.57 / 5",
      }),
    ]),
  ],
};
