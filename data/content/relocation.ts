import { b, img, p, a } from "../../models/tree";
import { PostInterface } from "../../models/posts";

const preview = p([
  "My friend asked me if I am writing somewhere about my relocation. So here I am.",
]);

export const relocation: PostInterface = {
  pid: "relocation",
  header: "Relocation. Part one.",
  time: 1616186342459,
  image:
    "https://res.cloudinary.com/barhamon/image/upload/c_scale,h_650,q_auto/v1616187059/header/relocate.jpg",
  tags: ["blog", "relocation"],
  description:
    "Part one of the tail about our relocation from Kyiv to Munich process. Or how to deal with stress of moving.",
  preview: [preview],
  full: [
    preview,
    p([
      b("To give you some context:"),
      " I got a new job, and we (my wife, my cat and me) are moving from Kyiv to Munich. It is exciting and a little bit scary. Especially the speed. We decided to try living in Europe on 20 November 2020. I make a deal with ",
      a({ url: "https://check24.de", text: "Check24.de" }),
      " on 27 January 2021. On 19 February 2021, I had an appointment at the German embassy. A week later, I got my passport back with a visa starting on 5 April 2021.",
    ]),
    p([
      b("The plan."),
      ' I am going to Munich first to do a "registration at the Citizens office."  Then Mary, through the family reunion program, joins me with our cat. We have anecdotal evidence that it takes two or three months. And we are kind of okay with that because we have the cat problem. To get our cat with us, she should have a laboratory report that she does not have rabies. And after that, she should be quarantined for 90 days. To get this report, Amidala, the cat, should have a particular type of passport. And some disaster happened two months ago. Nobody in Ukraine can issue such kinds of documents anymore. And it seems like nobody knows when somebody will. So we are actively looking for workarounds.',
    ]),
    p([
      'Sometimes I woke up in a morning with a thought, "Shit. We are doing it". Then I got overwhelmed with the count of things I should do. To deal with that, I open my to-do list. And after a while, I am thinking, "Shit. We are doing it". But with a smile. Highly recommend.',
    ]),
    p([
      b("Also"),
      ", we are selling our car and motorcycle. So if you need a good bike or/and car in Ukraine - drop me a message.",
    ]),
  ],
};
