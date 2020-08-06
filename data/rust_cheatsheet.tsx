import React, { useState } from "react";
import { Accordion, Icon } from "semantic-ui-react";
import { Code } from "../components/code";


const forloop = `for z in (0..100).rev(){
  println!("{:?}", z);
}`
const RustCheatSheetPreview: React.FC = () => {
  return (
    <>
      <p>I start to learn Rust programming language. This is a post where I collect tips and tricks about Rust</p>
      <p>This post will be updated(I hope often :)</p>
    </>
  )
}
const RustCheatSheetFull: React.FC = () => {
  const [active, updateActive] = useState(0)
  const handleClick = (e, titleProps) => {
    const { index } = titleProps
    const newIndex = active === index ? -1 : index
    updateActive(newIndex);
  }
  return (
    <>
      <RustCheatSheetPreview/>
      <Accordion styled>
        <Accordion.Title
          active={active === 0}
          index={0}
          onClick={handleClick}
        >
          <Icon name='dropdown' />
          how to loop backwards with for loop
        </Accordion.Title>
        <Accordion.Content active={active===0}>
          <Code language="rust">
            {forloop}
          </Code>
        </Accordion.Content>
      </Accordion>
    </>
  )
}

export const rust_cheatsheet = {
  pid: "rust_cheatsheet",
  header: 'Rust cheatsheet',
  time: 1596702315320,
  image: "/img/rust-programming-language-logo.png",
  description: "I start to learn Rust programming language. This is a post where I collect tips and tricks about Rust",
  tags: ['rust', 'cheatsheet'],
  Preview: RustCheatSheetPreview,
  Full: RustCheatSheetFull
};

