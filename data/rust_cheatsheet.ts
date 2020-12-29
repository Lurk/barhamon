import { code, createAccordion, p, PostInterface } from "../models/posts";

const forloop = `for z in (0..100).rev(){
  println!("{:?}", z);
}`

const concatenateVectors = `let mut a = vec![1, 2, 3];
let mut b = vec![4, 5, 6];
a.append(&mut b);`;

const removeAllDuplicatesFromVector = `let mut v = vec![1,3,10,2,5,3,6,1,8]
//sort is the key
v.sort();
v.dedup(); //[1,2,3,5,6,8,10] `;

const preview = p("I start to learn Rust programming language. This is a post where I collect tips and tricks about Rust");

export const rust_cheatsheet: PostInterface = {
  pid: "rust_cheatsheet",
  header: 'Rust cheatsheet',
  time: 1596702315320,
  image: "/img/rust-programming-language-logo.png",
  description: "I start to learn Rust programming language. This is a post where I collect tips and tricks about Rust",
  tags: ['rust', 'cheatsheet'],
  preview: [preview],
  full: [
    preview,
    p("This post will be updated (I hope often :)"),
    createAccordion([
      { header: "how to loop backwards with for loop", text: p([code({ content: forloop, lang: "rust" })]) },
      { header: "is even", text: p([code({ content: `x & 1 == 1;`, lang: "rust" })]) },
      { header: "concatenate vectors", text: p([code({ content: concatenateVectors, lang: "rust" })]) },
      {
        header: "remove all duplicates from vector",
        text: p([code({ content: removeAllDuplicatesFromVector, lang: "rust" })])
      },
    ])
  ]
};

