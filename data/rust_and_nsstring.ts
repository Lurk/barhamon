import { code, p, a, img, ul, li } from "../models/tree";
import { PostInterface } from "../models/posts";
import { prepareImgProps } from "../utils";

const installation = `xcode-select --install
brew install cargo-instruments            
`;

const pasteboard_main = `use clipboard::{ClipboardContext, ClipboardProvider};

fn main() {
    let mut ctx: ClipboardContext = ClipboardProvider::new().unwrap();
    for _ in 0..20_000 {
        match ctx.get_contents() {
            Ok(str) => println!("{}", str.chars().count()),
            Err(_e) => println!("{:?}", _e),
        }
    }
}
`;

const extern_c_code = `#[link(name = "AppKit", kind = "framework")]
extern "C" {
  pub static NSPasteboardTypeString: Sel;
}`;

const nsstring_to_rust_string = `fn nsstring_to_rust_string(nsstring: *mut NSString) -> Result<String, Box<dyn Error>> {
  unsafe {
      let string_size: usize =
          msg_send![nsstring, lengthOfBytesUsingEncoding: NSUTF8StringEncoding];
      //we need +1 because getCString will return null terminated string
      let char_ptr = libc::malloc(string_size + 1);
      let res: bool = msg_send![nsstring, getCString:char_ptr  maxLength:string_size + 1 encoding:NSUTF8StringEncoding];
      if res {
          let c_string = CStr::from_ptr(char_ptr as *const i8);
          libc::free(char_ptr);
          Ok(c_string.to_string_lossy().into_owned())
      } else {
          libc::free(char_ptr);
          Err(err("Casting from NSString to Rust string has failed"))
      }
  }
}`;

const preview = p([
  "So yeah. You want to learn Rust and have a small project in mind. Like one hour adventure. In and out.",
]);

export const rust_and_nsstring: PostInterface = {
  pid: "rust_and_nsstring",
  header: "Rust and NSString",
  time: 1626983585418,
  image:
    "https://res.cloudinary.com/barhamon/image/upload/v1626989237/rust_and_nsstring/header.png",
  description:
    "How to find and fix memory leaks in programs written in Rust for Mac os",
  tags: ["rust", "software"],
  preview: [preview],
  full: [
    preview,
    p([
      "My small project was ",
      a({ text: "Clink", url: "https://github.com/Lurk/clink" }),
      ". The idea is pretty simple, get data from the clipboard, check if there link, clean the link from tracking params, put the cleaned link back to the clipboard. The first version of it (",
      a({ text: "0.1.0", url: "https://github.com/Lurk/clink/tree/0.1.0" }),
      ") was done maybe in two hours. This is not because I am smart, but because Rust is an awesome programming language. Then I posted a link to the GitHub repo on the ",
      a({
        text: "Rust subreddit",
        url: "https://www.reddit.com/r/rust/comments/lkdeoa/side_project_clink_cleans_links_for_you/",
      }),
      " and gathered some feedback. Project stabilized, aka I run out of ideas, at version ",
      a({ text: "0.6.0", url: "https://github.com/Lurk/clink/tree/0.6.0" }),
      ". All that time, I was a happy user, until I looked at Activity Monitor and saw that:",
    ]),
    img({
      ...prepareImgProps({
        file: "rust_and_nsstring/activity_monitor.jpg",
        username: "barhamon",
        version: 1626984426,
      }),
      src: "https://res.cloudinary.com/barhamon/image/upload/v1626984426/rust_and_nsstring/activity_monitor.jpg",
      alt: "Activity Monitor",
    }),
    p(["That is when real adventure starts."]),
    p([
      "Usually, you write software for mac using Objective C or Swift. Sometimes you are crazy enough to do it in C, and the Objective C runtime exposes the C interface for you. But sometimes, for no particular reason, you want to learn Rust. And for that occasion, ",
      a({ text: "Steven Sheldon", url: "http://sasheldon.com/" }),
      " created a ",
      a({
        text: "Rust wrapper around Objective C runtime",
        url: "https://crates.io/crates/objc",
      }),
      ". If you are interested in details here is ",
      a({
        text: "the link",
        url: "http://sasheldon.com/blog/2014/11/28/interoperating-between-objective-c-and-rust/",
      }),
      " to his blog post where he explains what and why is going on.",
    ]),
    p([
      "How do you approach tasks like finding and fixing a memory leak in a program written in a language you barely know, which calls API you don't know? Good question.",
    ]),
    p([
      "First things first - tools. After some googling, I found that nowadays everything is easy.",
    ]),
    p(["installation is easy:"]),
    code({
      lang: "bash",
      content: installation,
    }),
    p(["usage also easy:"]),
    code({
      lang: "bash",
      content: "cargo instruments -t Allocations",
    }),
    p([
      "And I get nothing. After some thinking, I figured out that Clink is never stopping, and that's why I do not get any traces. So I come up with this:",
    ]),
    code({
      lang: "rust",
      content: pasteboard_main,
    }),
    p([
      "The idea is simple - get 20 000 times the value from the clipboard and, to be sure that there is something, print the count of chars. I know that I should count graphemes, but in this case, it does not matter. Here is what I got:",
    ]),
    img({
      ...prepareImgProps({
        file: "rust_and_nsstring/full_glory.jpg",
        username: "barhamon",
        version: 1626986443,
      }),
      src: "https://res.cloudinary.com/barhamon/image/upload/v1626986443/rust_and_nsstring/full_glory.jpg",
      alt: "full glory",
    }),
    p([
      "Yeah. It produces a nice graph (there are no values on the axis, but the last value is 2.67 GB). But how to find what is actually leaking? I did not come up with a better idea than check all repeating allocations if there is corresponding free. Here is how good allocation looks like:",
    ]),
    img({
      ...prepareImgProps({
        file: "rust_and_nsstring/good_allocation.jpg",
        username: "barhamon",
        version: 1626986602,
      }),
      src: "https://res.cloudinary.com/barhamon/image/upload/v1626986602/rust_and_nsstring/good_allocation.jpg",
      alt: "good allocation",
    }),
    p(["And this is bad allocation:"]),
    img({
      ...prepareImgProps({
        file: "rust_and_nsstring/bad_allocation.jpg",
        username: "barhamon",
        version: 1626986710,
      }),
      src: "https://res.cloudinary.com/barhamon/image/upload/v1626986710/rust_and_nsstring/bad_allocation.jpg",
      alt: "bad allocation",
    }),
    p([
      "The stack trace is on the right side of the window. So now, finding where the memory leak is not a problem. In my case, the Clipboard crate calls NSPasteboard.readObjectsForClasses to get current clipboard content, but not Rust nor Objective C runtime knows who is responsible for freeing memory, so nobody frees it. Surprise! Here you can suggest - choose another crate to work with the clipboard. But the problem is that every other rust clipboard implementation for mac, in one way or another, copies ",
      a({
        text: "Avi Weinstock's implementation",
        url: "https://github.com/aweinstock314/rust-clipboard/blob/9b35e2c7363d04d336309485503faa2de663f837/src/osx_clipboard.rs",
      }),
      " and leaks :( ",
    ]),
    p([
      "So my first step was to simplify the code a little bit. Since the get_contents method from the ClipboardProvider trait returns a String, we can use NSPasteboard.stringForType, which produces NSString, and this is as close to the Rust String as it can get. For calling this method, and by calling method, I mean sending the message, we need to pass an enum value NSPasteboardTypeString as a param. I spent at least a couple of evenings trying to figure out where I can get this enum value. As always, everything is simple when you know it:",
    ]),
    code({
      lang: "rust",
      content: extern_c_code,
    }),
    p([
      "Now we got our NSString, convert it to Rust string, and send the release to NSString after.",
    ]),
    img({
      ...prepareImgProps({
        file: "rust_and_nsstring/disappointment.jpg",
        username: "barhamon",
        version: 1626987261,
      }),
      src: "https://res.cloudinary.com/barhamon/image/upload/v1626987261/rust_and_nsstring/disappointment.jpg",
      alt: "disappointment",
    }),
    p([
      "This is how disappointment looks like. But if you look at this screenshot long enough, you will see that leak is more than three times lower. The first allocations dump showed more than two and a half gigs of RAM, but this one is only 775 megabytes. So this means two things:",
    ]),
    p(["First - this is a huge win."]),
    p(["Second - there is at least one more leak."]),
    p([
      "The next leak was found in the INSString.as_str() method. You may ask WTF is INSString, and this would be a trait from the ",
      a({
        text: "obj-foundation",
        url: "https://crates.io/crates/objc-foundation",
      }),
      " crate. We convert NSString to C string, by reading data from a pointer which we get from NSString.UTF8String. This pointer, according to ",
      a({
        text: "Apple documentation",
        url: "https://developer.apple.com/documentation/foundation/nsstring/1411189-utf8string?language=objc",
      }),
      " should be freed at the time when NSString itself will be released or sooner. In reality, it is mostly true, except when you have characters outside the ASCII range. So it is leaking on the Objective C runtime level, or I again don’t understand how things are working. The solution that worked looks like that:",
    ]),
    code({
      lang: "rust",
      content: nsstring_to_rust_string,
    }),
    p(["What is going on:"]),
    ul({
      type: "number",
      content: [
        li([
          "We get the size of a string in NSUTF8StringEncoding. I did not find a way to import NSUTF8StringEncoding from anywhere, but according to ",
          a({
            text: "Apple docs",
            url: "https://developer.apple.com/documentation/foundation/1497293-string_encodings/nsutf8stringencoding?language=objc",
          }),
          " it equals 4",
        ]),
        li([
          "We are allocating memory of a size we got on a first step plus one. Plus one is needed because getCString returns a null-terminated string",
        ]),
        li([
          "By calling getCString, we ask to write a null-terminated string in UTF8 encoding to memory we allocated on step two",
        ]),
        li(["If the third step was successful"]),
        li(["We creating a C string from a pointer we got on a second step"]),
        li(["Free memory we allocated on a second step"]),
        li(["Convert C string to Rust string and return it"]),
        li(["If the third step was unsuccessful"]),
        li(["Free memory we allocated on a second step"]),
        li(["Return error"]),
      ],
    }),
    p(["And here is the result:"]),
    img({
      ...prepareImgProps({
        file: "rust_and_nsstring/final_result.jpg",
        username: "barhamon",
        version: 1626988109,
      }),
      src: "https://res.cloudinary.com/barhamon/image/upload/v1626988109/rust_and_nsstring/final_result.jpg",
      alt: "final result",
    }),
    p([
      "Now, this is how the win looks like. And Clink, after running a couple of days, still uses one MB of ram. If you are using Clink on a mac, which is very unlikely, update to version 0.6.1. I hope it is finally fixed :)",
    ]),
  ],
};
