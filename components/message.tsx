import React from "react";
import { Message as IMessage } from "../models/tree";
import { Icon, Message as M, SemanticICONS } from "semantic-ui-react";

export const Message: React.FC<{ data: IMessage }> = ({ data, children }) => {
  return (
    <M size="mini" warning icon={!!data.value.icon}>
      {data.value.icon && <Icon name={data.value.icon as SemanticICONS} />}
      <M.Content>
        {data.value.header && <M.Header>{data.value.header}</M.Header>}
        {children}
      </M.Content>
    </M>
  );
};
