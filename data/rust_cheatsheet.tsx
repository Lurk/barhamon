import React, { useState } from "react";
import { Accordion, Icon } from "semantic-ui-react";
import { Code } from "../components/code";

interface AccProps {
  index: number
  active: boolean,
  handleClick: (e, titleProps) => void
  title: string,
  code: string
}

const Acc: React.FC<AccProps> = ({ active, handleClick, code, title, index }) => {
  return (
    <>
      <Accordion.Title
        active={active}
        index={index}
        onClick={handleClick}
      >
        <Icon name='dropdown'/>
        {title}
      </Accordion.Title>
      <Accordion.Content active={active}>
        <Code language="rust">
          {code}
        </Code>
      </Accordion.Content>
    </>
  )
}

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
        <Acc
          active={active === 0}
          code={forloop}
          title="how to loop backwards with for loop"
          handleClick={handleClick}
          index={0}
        />
        <Acc
          active={active === 1}
          code={`x & 1 == 1;`}
          title="is even"
          handleClick={handleClick}
          index={1}
        />
        <Acc
          active={active === 2}
          code={concatenateVectors}
          title="concatenate vectors"
          handleClick={handleClick}
          index={2}
        />
        <Acc
          active={active === 3}
          code={removeAllDuplicatesFromVector}
          title="remove all duplicates from vector"
          handleClick={handleClick}
          index={3}
        />
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

