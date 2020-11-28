import React from "react";
import { Icon, Card, Label } from "semantic-ui-react";
import Link from "next/link";
import { useRouter } from "next/router";

export interface PostTags {
  tags?: string[],
}

export const PostTags: React.FC<PostTags> = ({ tags }) => {
  return (
    <Card.Content extra>
      {
        tags && tags.map((t, i) => <Tag key={i} id={i} tag={t}/>)
      }
    </Card.Content>
  )
}

interface TagProps {
  id: number,
  tag: string,
  className?: string
}

export const Tag: React.FC<TagProps> = ({ id, tag, className }) => {
  const router = useRouter();
  const active = router.asPath === `/tag/${tag}`;

  return (
    <Label key={id} color="teal" className={className}>
      <Icon name="tag"/>
      {active ? tag : <Link href={`/tag/${tag}`}><a>{tag}</a></Link>}
    </Label>
  )
}
