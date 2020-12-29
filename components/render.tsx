import React, { useContext, useState } from "react";
import { Accordion as Acc, Divider, Icon, Image, List, Message, SemanticICONS } from "semantic-ui-react";
import L from "next/link";
import {
  Elements,
  Link,
  Message as IMessage,
  PostFull,
  Types
} from "../models/posts";
import { CloudinaryGal } from "./cloudinary";
import { Code } from "./code";
import { ImageGallery } from "./image_gallery";

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
      return (<Accordion>
        {data.value.map((a, i) => (
          <AccordionTab key={i} index={i} header={a.value.header}>{getVal(a.value.content)}</AccordionTab>))}
      </Accordion>);
    case Types.LIST_ITEM:
      return <List.Item>{getVal(data.value)}</List.Item>
    case Types.LIST:
      return (
        <List bulleted={data.value.type === 'dot'} ordered={data.value.type === "number"}>
          {data.value.content.map((i, n) => <Render data={i} key={n}/>)}
        </List>
      );
    case Types.IMAGE_GALLERY:
      return <ImageGallery items={data.value.map((o) => ({
        original: o.value.src,
        srcSet: o.value.srcSet,
        sizes: o.value.sizes,
        thumbnail: o.value.thumbnail,
        alt: o.value.alt
      }))}/>;
    case Types.IMAGE:
      return <Image src={data.value.src} alt={data.value.alt} srcSet={data.value.srcSet} sizes={data.value.sizes}/>;
    case Types.CODE:
      return <Code language={data.value.lang}>{data.value.content}</Code>;
    case Types.MESSAGE:
      return <M data={data}/>;
    case Types.HEADER:
      return <h3>{getVal(data.value)}</h3>;
    case Types.CLOUDINARY_GALLERY:
      return (<CloudinaryGal username={data.value.username} tag={data.value.tag}/>);
    case Types.LINK:
      return <A data={data}/>;
    case Types.YOUTUBE_VIDEO:
      return (<iframe style={{ width: "100%", height: "300px" }}
                      src={`https://www.youtube.com/embed/${data.value}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen/>);
    case Types.DIVIDER:
      return (<Divider/>);
    case Types.PARAGRAPH:
      return <p>{getVal(data.value)}</p>
    case Types.BOLD:
      return <b>{data.value}</b>
    default:
      // @ts-ignore
      debugger
      return <p>Unknown data type {data.type} look at render.tsx</p>
  }
}

//TODO there should be a better way than "T extends any"
const getVal = <T extends any>(value: T, i?: number) => {
  let val = null;
  if (typeof value === "string") {
    val = value
  } else if (Array.isArray(value)) {
    val = value.map(getVal);
  } else if (value && value.hasOwnProperty('type')) {
    val = <Render data={value as PostFull} key={i}/>
  } else if (value && value.hasOwnProperty('content')) {
    // @ts-ignore
    val = getVal(value.content);
  } else {
    console.error(`Unknown value type in getVal\n\t data is: \n ${JSON.stringify(value, null, 2)}`)
  }
  return val;
}

const A: React.FC<{ data: Link }> = ({ data }) => {
  if (data.value.as) {
    return (<L as={data.value.as} href={data.value.url}><a>{data.value.text || data.value.url}</a></L>);
  } else {
    return <a href={data.value.url}>{data.value.text || data.value.url}</a>
  }
}

const M: React.FC<{ data: IMessage }> = ({ data }) => {
  return (
    <Message size="mini" warning icon={!!data.value.icon}>
      {data.value.icon && <Icon name={data.value.icon as SemanticICONS}/>}
      <Message.Content>
        {data.value.header && <Message.Header>{data.value.header}</Message.Header>}
        {getVal(data.value)}
      </Message.Content>
    </Message>
  );
}


const AccordionContext = React.createContext({
  active: 0, handleClick: (e, titleProps) => {
  }
});

export const Accordion: React.FC = ({ children }) => {
  const [active, updateActive] = useState(0)

  const handleClick = (e, titleProps) => {
    const { index } = titleProps
    const newIndex = active === index ? -1 : index
    updateActive(newIndex);
  }

  return (
    <AccordionContext.Provider value={{ active, handleClick }}>
      <Acc styled>
        {children}
      </Acc>
    </AccordionContext.Provider>
  );
}

export const AccordionTab: React.FC<{ header: string, index: number }> = ({ header, index, children }) => {
  const context = useContext(AccordionContext);
  return (
    <>
      <Acc.Title
        active={context.active === index}
        index={index}
        onClick={context.handleClick}
      >
        <Icon name='dropdown'/>
        {header}
      </Acc.Title>
      <Acc.Content active={context.active === index}>
        {children}
      </Acc.Content>
    </>
  )
}
