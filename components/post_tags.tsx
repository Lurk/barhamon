import React from "react";
import { Icon, Item, Label } from "semantic-ui-react";
import Link from "next/link";
import { useRouter } from "next/router";

export interface PostTags {
  tags?: string[]
}

export const PostTags: React.FC<PostTags> = ({ tags }) => {
  return (
    <Item.Extra>
      {
        tags && tags.map((t, i) => <Tag key={i} id={i} tag={t}/>)
      }
    </Item.Extra>
  )
}

interface TagProps {
  id: number,
  tag: string
}

const Tag: React.FC<TagProps> = ({ id, tag }) => {
  const router = useRouter();
  const active = router.asPath === `/tag/${tag}`;

  return (
    <Label key={id}>
      <Icon name="tag"/>
      {active ? tag : <Link href={`/tag/${tag}`}><a>{tag}</a></Link>}
    </Label>
  )
}
