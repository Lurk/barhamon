import React from "react";
import { Divider, Image, List } from "semantic-ui-react";
import { AccordionTab as IAccordionTab, Elements, PostFull, Types } from "../models/tree";
import { CloudinaryGal } from "./cloudinary";
import { Code } from "./code";
import { ImageGallery } from "./image_gallery";
import { Accordion, AccordionTab } from "./accordion";
import { Message } from "./message";
import { Link } from "./link";

export const RenderPost: React.FC<{ data: PostFull[] }> = ({ data }) => {
  return (
    <>
      {data.map((line, i) => <Render data={line} key={i}/>)}
    </>
  );
}

const Render: React.FC<{ data: Elements }> = ({ data }) => {
  switch (data.type) {
    case Types.LINE_THROUGH:
      return (<s>{data.value}</s>);
    case Types.ACCORDION:
      return (
        <Accordion>
          {data.value.map((a, i) => (
            <AccordionTab key={i} index={i} header={a.value.header}>{getVal(a.value.content)}</AccordionTab>))}
        </Accordion>);
    case Types.LIST_ITEM:
      return (<List.Item>{getVal(data.value)}</List.Item>)
    case Types.LIST:
      return (
        <List bulleted={data.value.type === 'dot'} ordered={data.value.type === "number"}>
          {data.value.content.map((i, n) => <Render data={i} key={n}/>)}
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
            alt: o.value.alt
          }))}/>
      );
    case Types.IMAGE:
      return (<Image src={data.value.src} alt={data.value.alt} srcSet={data.value.srcSet} sizes={data.value.sizes}/>);
    case Types.CODE:
      return (<Code language={data.value.lang}>{data.value.content}</Code>);
    case Types.MESSAGE:
      return (<Message data={data}>{getVal(data.value.content)}</Message>);
    case Types.HEADER:
      return (<h3>{getVal(data.value)}</h3>);
    case Types.CLOUDINARY_GALLERY:
      return (<CloudinaryGal username={data.value.username} tag={data.value.tag}/>);
    case Types.LINK:
      return (<Link data={data}/>);
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
      return (<Divider/>);
    case Types.PARAGRAPH:
      return (<p>{getVal(data.value)}</p>);
    case Types.BOLD:
      return (<b>{data.value}</b>);
    default:
      return (<p>Unknown data type {data.type} look at render.tsx</p>);
  }
}

function isAccordionTabValue(obj: any): obj is IAccordionTab['value'] {
  return obj.hasOwnProperty('content')
}

//TODO there should be a better way than "T extends any"
const getVal = <T extends any>(value: T, i?: number) => {
  let val;
  if (typeof value === "string") {
    val = value
  } else if (Array.isArray(value)) {
    val = value.map(getVal);
  } else if (value && value.hasOwnProperty('type')) {
    val = <Render data={value as PostFull} key={i}/>
  } else if (isAccordionTabValue(value)) {
    val = getVal(value.content);
  } else {
    val = `Unknown value type in getVal\n\t data is: \n ${JSON.stringify(value, null, 2)}`;
    console.error(val);
  }
  return val;
}
