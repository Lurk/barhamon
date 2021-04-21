import React, { useEffect, useState } from "react";
import { Grid, Message, Placeholder } from "semantic-ui-react";
import { ImageGallery } from "./image_gallery";

export interface CloudinaryGalProps {
  username: string;
  tag: string;
}

export interface CloudinaryImageUrl {
  username: string;
  version: number;
  file: string;
  size?: number;
}

const scale = (s?: number) => (s ? `c_scale,w_${s}/` : "");
const url = ({ username, version, file, size }: CloudinaryImageUrl) =>
  `https://res.cloudinary.com/${username}/${scale(size)}v${version}/${file}`;

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

            return {
              original: url({ username, version: res.version, file }),
              thumbnail: url({
                file,
                username,
                version: res.version,
                size: 150,
              }),
              srcSet: `${url({
                file,
                username,
                version: res.version,
                size: 1000,
              })}  1000w,${url({
                file,
                username,
                version: res.version,
                size: 600,
              })}  600w,${url({
                file,
                username,
                version: res.version,
                size: 150,
              })}  150w`,
              sizes:
                "(min-width: 1000px) calc(50.8vw - 92px), (min-width: 780px) calc(87.5vw - 100px), (min-width: 340px) calc(81.43vw - 101px), calc(-100vw + 480px)",
            };
          })
        );
        setLoading(false);
      })
      .catch((e) => {
        console.error(e);
        setError(true);
      });
  }, []);

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
