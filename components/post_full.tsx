import React from "react";
import { Item, Image, Card, Header } from "semantic-ui-react";
import { PostInterface } from "../data/posts";
import { getPostMeta, PostMeta } from "./post_meta";
import { PostTags, Tag } from "./post_tags";
import styles from './post_full.module.css';

export const PostFull: React.FC<PostInterface> = (props) => {
  return (
    <Item>
      <Item.Content>
        <div style={{ backgroundImage: `url(${props.image})` }} className={styles.header_container}>
          <div className={styles.header_text}>
            <Header inverted size="large">
              <Header.Content>{props.header}</Header.Content>
              <Header.Subheader>{getPostMeta(props.time, props.readTime)}</Header.Subheader>
            </Header>
          </div>
          <div className={styles.header_tags}>
            {props.tags.map((tag, id) => <Tag tag={tag} id={id} key={id}/>)}
          </div>
        </div>
        <Item.Description>
          {props.full}
        </Item.Description>
      </Item.Content>
    </Item>
  )
}
