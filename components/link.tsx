import React from "react";
import { Link as ILink } from "../models/tree";
import L from "next/link";

export const Link: React.FC<{ data: ILink }> = ({ data }) => {
  if (data.value.as) {
    return (
      <L as={data.value.as} href={data.value.url}>
        {data.value.text || data.value.url}
      </L>
    );
  }
  return <a href={data.value.url}>{data.value.text || data.value.url}</a>;
};
