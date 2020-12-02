import React from "react";
import { Card } from "semantic-ui-react";
import Link from "next/link";
import type { PostInterface } from "../models/posts";
import { PostMeta } from "./post_meta";
import styles from './post_preview.module.css'
import { useRouter } from "next/router";

export const PostPreview: React.FC<PostInterface> = ({ Preview, Full, ...rest }) => {
  const router = useRouter();
  return (
    <Card>
      {rest.image &&
        <div
          style={{ backgroundImage: `url(${rest.image})`}}
          className={styles.header_image}
          onClick={()=>router.push(`/post/[pid]`, `/post/${rest.pid}`)}
        />
      }
      <Card.Content>
        <Card.Header>
          <Link as={`/post/${rest.pid}`} href={`/post/[pid]`}><a className={styles.header_link}>{rest.header}</a></Link>
        </Card.Header>
        <PostMeta readTime={rest.readTime} time={rest.time}/>
        <Card.Description>
          <Preview/>
          {Full !== Preview && <p><Link as={`/post/${rest.pid}`} href={`/post/[pid]`}><a>Read more</a></Link></p>}
        </Card.Description>
      </Card.Content>
    </Card>
  )
}
