import React from "react";
import { Accordion, Icon } from "semantic-ui-react";
import { Code } from "./code";

interface AccProps {
  index: number
  active: boolean,
  handleClick: (e, titleProps) => void
  title: string,
  code: string
}

export const Acc: React.FC<AccProps> = ({ active, handleClick, code, title, index }) => {
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
