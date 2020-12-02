import React from "react";
import { Card, Image } from "semantic-ui-react";
import Link from "next/link";
import type { PostInterface } from "../models/posts";
import { PostMeta } from "./post_meta";
import styles from './post_preview.module.css'

export const PostPreview: React.FC<PostInterface> = ({ Preview, Full, ...rest }) => {

  return (
    <Card>
      {rest.image &&
      <Link as={`/post/${rest.pid}`} href={`/post/[pid]`}>
        <Image src={rest.image} wrapped ui={false} className={styles.header_image} href={`/post/${rest.pid}`}/>
      </Link>
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
