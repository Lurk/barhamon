import { p } from "../models/tree";
import { PostInterface } from "../models/posts";

const preview = p(
  "One month ago was my first day at Check24 as a software developer."
);

export const month_in_check24: PostInterface = {
  pid: "month_in_check24",
  header: "Relocation part three. First month in Check24",
  time: 1620842997396,
  image:
    "https://res.cloudinary.com/barhamon/image/upload/c_scale,q_auto,w_650/v1620841615/header/month_in_check24.jpg",
  tags: ["blog", "relocation"],
  description:
    "Month since I started to work in Check24.de. Here is what I think about it",
  preview: [preview],
  full: [
    preview,
    p(
      "If it looks to you as a significant downgrade in my position, that's because it is. I choose the offer from Check24 for three reasons. First, it is a big product company, and I lack experience of that sort. Second I liked the interview process. It was easygoing, although I have never been on that side of a job interview in my life. The third reason is the location, and we really liked Munich. Each of the above is more important for my family and me than the job title, so I downgrade."
    ),
    p(
      "I can not say for sure about the whole company because it is big. And there are no events to socialize because of the corona. Even in my team, I saw only five people in person. So although it is big, it feels like a startup. The idea behind everything and engineering in general - every project has one team. While every team does whatever it wants, my team wants and does Next.JS, MongoDB, and a little bit of everything around that. I was skeptical about this approach because, sooner or later, there should be some problems in communication between teams. But it seems like it is working pretty fine."
    ),
    p(
      "What I like are code reviews. In my previous job, I had no professional feedback. On the other hand, I could do whatever I wanted to do, but I often had no idea how to do things better. And life is too short to not trying to do things better. Now, we, as a team, helping each other to leave things in better shape than we are found them, and code reviews are a massive part of it. Second favorite thing - technical discussions. Twice a week engineering part of the team spends an hour talking about technical challenges we face and how to solve them. That also helps a lot in knowledge sharing, learning stuff, and keeping up with new things in general."
    ),
    p(
      "To wrap it up - I am glad that I made that decision, and looking forward not to change my mind :)"
    ),
  ],
};
