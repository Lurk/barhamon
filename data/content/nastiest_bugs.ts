import { h3, a, createMessage, p } from "../../models/tree";
import { PostInterface } from "../../models/posts";

const preview = p([
  "One of the questions I usually get on an interview - Tell me about a time that you had to deal with a tricky bug.",
]);

export const nastiest_bugs: PostInterface = {
  pid: "nastiest_bugs",
  header: "Nastiest bugs in my life",
  time: 1608495507913,
  image: "/img/this_is_fine.jpg",
  tags: ["interview", "bugs"],
  description: "Here is tail about the nastiest bugs in my life.",
  preview: [preview],
  full: [
    preview,
    p([
      "Oh boy. What to choose? Throughout my career, I dealt with many tricky bugs, one tricker than the other. But two of them stand out. So buckle up. Here is tail about the nastiest bugs in my life.",
    ]),
    h3(["Bug with blurry images."]),
    p([
      "Once upon a time, I did a UI framework for IPTV set-top boxes. It was React + Redux app, on top of a Chromium custom build, on top of 4.4.2 Android.",
    ]),
    p([
      "One day, I got a bug report - Channel icons are somewhat blurry. And two weeks of fun begins.",
    ]),
    p([
      "First of all, I checked the obvious things. Like maybe images are blurry in the first place? Or perhaps somehow I screwup the viewport in Head. Or whatever. But no, everything was fine except blurry images.",
    ]),
    p([
      'And finally, after a couple of weeks of reading documentation, make files, and source code of Chromium, I found out that there was a "feature" in Chromium with pixel density. The browser was detecting the Full HD screen on the Android device, which means we have a high dpi screen, but we do not. So every image, before rendering, first gets scaled up and then scaled down by the browser.',
    ]),
    p([
      "The only reasonable solution was to hardcode scale. So I patched our version of Chromium to use the constant scale.",
    ]),
    h3([
      "The server is on fire, customers on fire, me, also on fire. TCP.LAST_AKK timeout 60 seconds.",
    ]),
    p([
      "One day one of our video delivery edges began to behave strangely. No significant load increase was detected, no new software was deployed, no CPU spikes, no memory leaks, no SSD were damaged. But service experienced a considerable downgrade.",
    ]),
    p([
      "Only one thing was not normal - the count of connections in the LAST_AKK state was too high. That were connections to our access control service on localhost. Since the same service was deployed on other edges and everything was ok with them, I was like, WAT?",
    ]),
    createMessage({
      content: [
        p([
          "The patch, which enables control of LAST_AKK timeout by finwait2_timeout option, sits in the FreeBSD tracker since 2001",
        ]),
      ],
    }),
    p([
      "I read everything I can about TCP, connection states, timeouts, how it was implemented in FreeBSD, how to tune FreeBSD network, and so on. Spend two or three weeks on this.",
    ]),
    createMessage({
      content: [
        p([
          "If you are running a FreeBSD server, this is the ",
          a({
            url: "https://calomel.org/freebsd_network_tuning.html",
            text: "best article about performance tuning",
          }),
          " I ever read.",
        ]),
      ],
    }),
    p([
      "Honestly, I still don't know why exactly it has happened. But the fix and the lesson was - do not use HTTP for local services, use Unix sockets instead.",
    ]),
  ],
};
