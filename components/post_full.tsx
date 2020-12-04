import React from "react";
import { Item, Header, Divider, Grid } from "semantic-ui-react";
import { PostInterface } from "../models/posts";
import { getPostMeta } from "./post_meta";
import { Tag } from "./post_tags";
import styles from './post_full.module.css';
import { Comments } from "./comments";

export const PostFull: React.FC<PostInterface> = ({ Full, ...rest }) => {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column computer={10} mobile={16}>
          <Item>
            <Item.Content className={styles.content}>
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
              <Item.Description className={styles.pad}>
                <Full/>
              </Item.Description>
              <Divider/>
              <Item.Extra className={styles.pad}>
                <Comments slug={rest.pid} id={rest.pid} title={rest.header}/>
              </Item.Extra>
            </Item.Content>
          </Item>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}
