import { code, p, a, b, img, ul, li, createMessage } from "../models/tree";
import { PostInterface } from "../models/posts";
import { prepareImgProps } from "../utils";
import { Icon } from "semantic-ui-react";

const preview = [
  "I reach the next level of understanding how ",
  b("NSString::UTF8String"),
  " works under the hood.",
];

export const rust_and_nsstring_part_2: PostInterface = {
  pid: "rust_and_nsstring_part_2",
  header: "Rust and NSString part 2",
  time: 1636202859434,
  image:
    "https://res.cloudinary.com/barhamon/image/upload/v1626989237/rust_and_nsstring/header.png",
  description: "How NSString::UTF8String actually works",
  tags: ["rust", "software", "objc"],
  preview: [p(preview)],
  full: [
    p([
      ...preview,
      " If you are interested in how I get here, please read my ",
      a({
        url: "/post/[pid]",
        as: "/post/rust_and_nsstring",
        text: "previous post.",
      }),
    ]),
    createMessage({
      content: [
        p([
          "Because docs are hard to understand and the source code of the runtime is closed, everything below is based on poking around, reading various GitHub issues, and pull requests. I am trying to say that I can not guarantee that there is no next level, but there are far fewer unanswered questions than before.",
        ]),
      ],
      icon: "lightbulb",
      header: "Disclaimer:",
    }),
    p([
      "So, we need to know that despite ",
      b("NSString::UTF8String"),
      " in ",
      a({
        text: "apple doc",
        url: "https://developer.apple.com/documentation/foundation/nsstring/1411189-utf8string?language=objc",
      }),
      " noted as a property, it is a method. It creates ",
      a({
        text: "Data",
        url: "https://developer.apple.com/documentation/foundation/data?language=objc",
      }),
      " with null-terminated cstring in it and then autorelease it. In one stack overflow thread, which I can not find now, I read that it creates new Data only if NSString contains characters outside ASCII. That would explain why UTF8String behavior differs from documentation most of the time, memory is not freed when NSString receives release message, but sometimes it actually works as expected. But my ",
      a({
        text: "tests",
        url: "https://github.com/Lurk/nsstring_leak/blob/main/src/lib.rs",
      }),
      " do not confirm this theory. So I still don't know why runtime sometimes frees memory.",
    ]),
    p([
      a({
        text: "Autorelease",
        url: "https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/MemoryMgmt/Articles/mmAutoreleasePools.html#//apple_ref/doc/uid/20000047",
      }),
      " is a new concept for me. The idea is to have blocks, outside of which autoreleased memory is actually released. Every app that runs on macOS is wrapped in one of those blocks. And if you do not add one yourself, all autoreleased memory will be released at the end of the app. That was the actual reason for the memory leak I fought. ",
    ]),
    p([
      "One more question is why ",
      b("NSString::UTF8String"),
      " is slower than ",
      b("NSString::getCString"),
      "? My ",
      a({
        text: "benchmark",
        url: "https://github.com/Lurk/nsstring_leak/blob/main/benches/my_benchmark.rs",
      }),
      " shows 12.998us vs. 10.208us. Which in absolute numbers does not look like a big deal, but it is more than 20% which is huge. Here is the ",
      a({ text: "repo", url: "https://github.com/Lurk/nsstring_leak" }),
      " with test cases and benchmarks. If you know where this difference comes from or spot an error in the benchmark, please let me know.",
    ]),
    p([
      "I wish I knew how to write proper tests for memory leaks, but I still don't know. So, please, send help. ",
    ]),
  ],
};
