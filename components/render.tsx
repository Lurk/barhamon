// until https://github.com/Semantic-Org/Semantic-UI-React/pull/4356 is merged
// @ts-nocheck

import React from "react";
import { Divider, Image, List } from "semantic-ui-react";
import { Elements, PostFull, Types } from "../models/tree";
import { CloudinaryGal } from "./cloudinary";
import { Code } from "./code";
import { ImageGallery } from "./image_gallery";
import { Accordion, AccordionTab } from "./accordion";
import { Message } from "./message";
import { Link } from "./link";

import styles from "./render.module.css";

const Render: React.FC<{ data: Elements | string }> = ({ data }) => {
  if (typeof data === "string") {
    return <>{data}</>;
  }
  switch (data.type) {
    case Types.LINE_THROUGH:
      return (
        <s>
          {data.value.map((data, i) => (
            <Render data={data} key={i} />
          ))}
        </s>
      );
    case Types.ACCORDION:
      return (
        <Accordion>
          {data.value.map((a, i) => (
            <AccordionTab key={i} index={i} header={a.value.header}>
              <Render data={a.value.content} />
            </AccordionTab>
          ))}
        </Accordion>
      );
    case Types.LIST_ITEM:
      return (
        <List.Item>
          {data.value.map((data, i) => (
            <Render data={data} key={i} />
          ))}
        </List.Item>
      );
    case Types.LIST:
      return (
        <List
          bulleted={data.value.type === "dot"}
          ordered={data.value.type === "number"}
        >
          {data.value.content.map((i, n) => (
            <Render data={i} key={n} />
          ))}
        </List>
      );
    case Types.IMAGE_GALLERY:
      return (
        <ImageGallery
          items={data.value.map((o) => ({
            original: o.value.src,
            srcSet: o.value.srcSet,
            sizes: o.value.sizes,
            thumbnail: o.value.thumbnail,
            alt: o.value.alt,
          }))}
        />
      );
    case Types.IMAGE:
      return (
        <Image
          className={styles.embed}
          src={data.value.src}
          alt={data.value.alt}
          srcSet={data.value.srcSet}
          sizes={data.value.sizes}
        />
      );
    case Types.CODE:
      return <Code language={data.value.lang}>{data.value.content}</Code>;
    case Types.MESSAGE:
      return (
        <Message data={data}>
          {data.value.content.map((data, i) => (
            <Render data={data} key={i} />
          ))}
        </Message>
      );
    case Types.HEADER:
      return (
        <h3>
          {data.value.map((data, i) => (
            <Render data={data} key={i} />
          ))}
        </h3>
      );
    case Types.CLOUDINARY_GALLERY:
      return (
        <CloudinaryGal username={data.value.username} tag={data.value.tag} />
      );
    case Types.LINK:
      return <Link data={data} />;
    case Types.YOUTUBE_VIDEO:
      return (
        <iframe
          style={{ width: "100%", height: "300px" }}
          src={`https://www.youtube.com/embed/${data.value}`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      );
    case Types.DIVIDER:
      return <Divider />;
    case Types.PARAGRAPH:
      return (
        <p>
          {data.value.map((data, i) => (
            <Render data={data} key={i} />
          ))}
        </p>
      );
    case Types.BOLD:
      return <b>{data.value}</b>;
    case Types.EMBED:
      return (
        <iframe className={styles.embed} height="500px" src={data.value} />
      );
    default:
      return <p>Unknown data type {data.type} look at render.tsx</p>;
  }
};

export const RenderPost: React.FC<{ data: PostFull[] }> = ({ data }) => {
  return (
    <>
      {data.map((line, i) => (
        <Render data={line} key={i} />
      ))}
    </>
  );
};
