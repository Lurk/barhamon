import React from "react";
import { format, formatDistance } from "date-fns"
import { Card } from "semantic-ui-react";

export interface PostMeta {
  time: number,
  readTime?: number
}

export const PostMeta: React.FC<PostMeta> = ({ time, readTime }) => {

  return (
    <Card.Meta>{getPostMeta(time, readTime)}</Card.Meta>
  )
}

export function getPostMeta(time: number, readTime?: number) {
  let formattedTime;
  if ((Date.now() - time) > 7 * 24 * 60 * 60 * 1000) {
    formattedTime = format(time, 'MMMM d, yyyy')
  } else {
    formattedTime = `${formatDistance(new Date(time), new Date())} ago`;
  }

  return `${formattedTime}${readTime ? ` · ${readTime} min read` : ''}`;
}
