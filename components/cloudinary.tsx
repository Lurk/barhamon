// until https://github.com/Semantic-Org/Semantic-UI-React/pull/4356 is merged
// @ts-nocheck
import React, { useEffect, useState } from "react";
import { Grid, Message, Placeholder } from "semantic-ui-react";
import { prepareImgProps } from "../utils";
import { ImageGallery } from "./image_gallery";

export interface CloudinaryGalProps {
  username: string;
  tag: string;
}

const Loader: React.FC = () => (
  <Grid columns={2} stackable>
    <Grid.Column>
      <Placeholder>
        <Placeholder.Header image>
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder.Header>
        <Placeholder.Paragraph>
          <Placeholder.Line length="medium" />
          <Placeholder.Line length="short" />
        </Placeholder.Paragraph>
      </Placeholder>
    </Grid.Column>
    <Grid.Column>
      <Placeholder>
        <Placeholder.Header image>
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder.Header>
        <Placeholder.Paragraph>
          <Placeholder.Line length="medium" />
          <Placeholder.Line length="short" />
        </Placeholder.Paragraph>
      </Placeholder>
    </Grid.Column>
  </Grid>
);

export const CloudinaryGal: React.FC<CloudinaryGalProps> = ({
  username,
  tag,
}) => {
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://res.cloudinary.com/${username}/image/list/${tag}.json`)
      .then((res) => res.json())
      .then((data) => {
        setData(
          data.resources.map((res) => {
            const file = `${res.public_id}.${res.format}`;

            return prepareImgProps({ file, version: res.version, username });
          })
        );
        setLoading(false);
      })
      .catch((e) => {
        console.error(e);
        setError(true);
      });
  }, [tag, username]);

  let res = <Loader />;
  if (!isLoading && !isError) {
    res = <ImageGallery items={data} />;
  } else if (isError) {
    res = (
      <Message
        negative
        icon="warning circle"
        header="Panic mode"
        content="Something went wrong with this image gallery."
      />
    );
  }

  return res;
};
