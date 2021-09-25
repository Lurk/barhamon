import { li, p, ul } from "../models/tree";
import { PostInterface } from "../models/posts";

const preview = p([
  "If you are in tech twitter, especially in the JS part, you definitely read something about how bad redux is. Let me disagree :)",
]);

export const redux_is_not_bad: PostInterface = {
  pid: "redux_is_not_bad",
  header: "Redux is not bad",
  time: 1623521323436,
  image:
    "https://res.cloudinary.com/barhamon/image/upload/c_scale,q_auto,w_650/v1623521732/header/redux_logo_1.jpg",
  tags: ["software", "frontend"],
  description:
    "This is why you should use redux as a state manager for your app",
  preview: [preview],
  full: [
    preview,
    p([
      "Yes, redux is complex, but not because of redux itself but because of the domain. We, as an industry, figured out that managing data is a complex activity a long time ago. So we invent all sorts of stuff to make life easier, including a couple of languages explicitly designed for data management. If you think this is an old man's tail, look around, and you will find a live DBA. But when the time comes to frontend, we somehow forget about all of that and treat app state management as unimportant. That must be the opposite. The frontend is, arguably, the second, after finances, important thing. Because if you mess up finances, you most probably go to jail. If you mess up your frontend, you will probably not have any finances to begin with (who wants to use software that feels slow and glitchy, right?). And the most crucial thing in your front end is the state. So yeah, if your app is complex, then you will have a complex state, which is complex by definition. But it Is not complicated unless you make it. Redux, like any other generic tool, does not prevent you from making your code complicated.",
    ]),
    p([
      "And, yes, redux requires some boilerplate code. But, let's stop for a minute and think about it. Redux is a state management tool. And the state is data. I  can say from my experience that if you want your data to have predictable properties, you will define models with types and relationships between them — every time. So yeah, it is a boilerplate, but it is a small price to pay for consistent data flow. You can argue with me about that, but before you do, take to account two things: ",
    ]),
    ul({
      type: "dot",
      content: [
        li([
          "predictability - at any moment of a lifetime, you can easily take/load a snapshot of the whole application state. With this feature, application support and debugging became an easy task instead of a hard burden. I will happily trade any complication during the support lifecycle on 10x difficulties during development time because I know that my today's code will become legacy tomorrow. ",
        ]),
        li([
          "performance - some time ago, I tried all the options on the market. Redux was the fastest. Not by a significant margin, but I had to take into account devices with very slow CPUs, so every fraction of a millisecond on my desktop translated to milliseconds on a device. And yeah, that led me to the “discovery” of this simple truth - if you add something on top of Object.assign (what every state manager is doing), you will pay the price in performance.",
        ]),
      ],
    }),
    p([
      "What I am trying to say: if you hope that some state library will magically make state of your app better - I have bad news for you. Most probably, the problem is not Redux, and you need to rethink your approach in general. At this point, I feel like I must give some examples, but I won’t. Because every app is different every example will be bad for some cases. Advice that helped me - remove all logic from the reducer, and keep your actions as simple as possible. Usually I end up with a way to dispatch array of actions when I need complex state change. ",
    ]),
    p(["Thank you for your attention :)"]),
  ],
};
