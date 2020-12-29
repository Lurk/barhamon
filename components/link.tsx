import React from "react";
import { Link as ILink} from "../models/posts";
import L from "next/link";

export const Link: React.FC<{ data: ILink }> = ({ data }) => {
  if (data.value.as) {
    return (<L as={data.value.as} href={data.value.url}><a>{data.value.text || data.value.url}</a></L>);
  } else {
    return <a href={data.value.url}>{data.value.text || data.value.url}</a>
  }
}
