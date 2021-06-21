import React, { useContext, useState } from "react";
import { Accordion as Acc, Icon } from "semantic-ui-react";

const AccordionContext = React.createContext<{
  active: number;
  handleClick: (e, titleProps) => void;
}>({
  active: 0,
  handleClick: () => {},
});

export const Accordion: React.FC = ({ children }) => {
  const [active, updateActive] = useState(0);

  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = active === index ? -1 : index;
    updateActive(newIndex);
  };

  return (
    <AccordionContext.Provider value={{ active, handleClick }}>
      <Acc styled>{children}</Acc>
    </AccordionContext.Provider>
  );
};

export const AccordionTab: React.FC<{ header: string; index: number }> = ({
  header,
  index,
  children,
}) => {
  const context = useContext(AccordionContext);
  return (
    <>
      <Acc.Title
        active={context.active === index}
        index={index}
        onClick={context.handleClick}
      >
        <Icon name="dropdown" />
        {header}
      </Acc.Title>
      <Acc.Content active={context.active === index}>{children}</Acc.Content>
    </>
  );
};
