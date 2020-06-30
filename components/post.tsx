import React from "react";
import { formatDistance } from "date-fns"
import { Item } from "semantic-ui-react";

export interface PostProps {
  header: string,
  time: number
}

export const Post: React.FC<PostProps> = (props) => {
  return (
    <Item>
      <Item.Content>
        <Item.Header>{props.header}</Item.Header>
        <Item.Meta>({formatDistance(new Date(props.time), new Date())} ago)</Item.Meta>
        <Item.Description>
          {props.children}
        </Item.Description>
      </Item.Content>
    </Item>
  )
}
