import React from "react";
import { List } from "semantic-ui-react";

const WhyPreview: React.FC = () => {
  return (
    <>
      <p>Since English is not my native language, it’s hard for me to express my thoughts on it. I hope that writing
        posts regularly (!important) will improve my speaking skills.</p>
    </>
  )
}

const WhyFull: React.FC = () => {
  return (
    <>
      <WhyPreview/>
      <p>The second reason is education. Being a developer means that you are constantly learning, at least if you want
        to progress. The best way to learn is to explain what you are learning. I'm not sure if this works with
        everyone, but it works with me.</p>
      <p>So, be ready to read about:</p>
      <List as="ul">
        <List.Item>Building software.</List.Item>
        <List.Item>Adventure motorcycle riding.</List.Item>
        <List.Item>Fishing.</List.Item>
        <List.Item>Camping.</List.Item>
      </List>
      <p>And music. God, I love music. Someday, here you will find an archive of all my favorite albums with covers and
        links to listen.</p>
    </>
  )
}

export const why = {
  pid: "why",
  header: "Why?",
  time: 1593701715703,
  image: '/img/why.jpg',
  tags: ['blog'],
  description: "",
  Preview: WhyPreview,
  Full: WhyFull
}
