import React from "react";
import { Item, Header } from "semantic-ui-react";
import { PostInterface } from "../data/posts";
import { getPostMeta } from "./post_meta";
import { Tag } from "./post_tags";
import styles from './post_full.module.css';

export const PostFull: React.FC<PostInterface> = ({ Full, ...rest }) => {
  return (
    <Item>
      <Item.Content>
        <div style={{ backgroundImage: `url(${rest.image})` }} className={styles.header_container}>
          <div className={styles.header_text}>
            <Header inverted size="large">
              <Header.Content>{rest.header}</Header.Content>
              <Header.Subheader>{getPostMeta(rest.time, rest.readTime)}</Header.Subheader>
            </Header>
          </div>
          <div className={styles.header_tags}>
            {rest.tags.map((tag, id) => <Tag tag={tag} id={id} key={id} className={styles.tag}/>)}
          </div>
        </div>
        <Item.Description>
          <Full/>
        </Item.Description>
      </Item.Content>
    </Item>
  )
}
