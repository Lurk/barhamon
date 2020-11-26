import { DiscussionEmbed } from "disqus-react"
import React from "react";

interface CommentsProps {
  slug: string,
  id: string,
  title: string
}

export const Comments: React.FC<CommentsProps> = ({ slug, title, id }) => {
  const config = {
    url: `${process.env.NEXT_PUBLIC_HOST}/post/${slug}`,
    identifier: id,
    title: title
  }
  return (
    <div>
      <DiscussionEmbed
        shortname={process.env.NEXT_PUBLIC_NAME}
        config={config}
      />
    </div>
  );
}
