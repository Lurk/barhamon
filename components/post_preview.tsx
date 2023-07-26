import React, { memo } from "react";
import { Card } from "semantic-ui-react";
import Link from "next/link";
import type { PostInterface } from "../models/posts";
import { PostMeta } from "./post_meta";
import styles from "./post_preview.module.css";
import { useRouter } from "next/router";
import { RenderPost } from "./render";

export const PostPreview: React.FC<PostInterface> = memo(
  ({ preview, full, ...rest }) => {
    const router = useRouter();
    return (
      <Card className={styles.card}>
        {rest.image && (
          <div
            style={{ backgroundImage: `url(${rest.image})` }}
            className={styles.header_image}
            onClick={() =>
              router
                .push("/post/[pid]", `/post/${rest.pid}`)
                .then(() => window.scrollTo(0, 0))
            }
          />
        )}
        <Card.Content>
          <Card.Header>
            <Link
              as={`/post/${rest.pid}`}
              href={"/post/[pid]"}
              className={styles.header_link}
            >
              {rest.header}
            </Link>
          </Card.Header>
          <PostMeta readTime={rest.readTime} time={rest.time} />
          <Card.Description>
            <RenderPost data={preview} />
            {full !== preview && (
              <p>
                <Link as={`/post/${rest.pid}`} href={"/post/[pid]"}>
                  Read more
                </Link>
              </p>
            )}
          </Card.Description>
        </Card.Content>
      </Card>
    );
  },
);

PostPreview.displayName = "PostPreview";
