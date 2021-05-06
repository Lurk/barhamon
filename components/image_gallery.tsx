import React from "react";
import IG from "react-image-gallery";
import styles from "./image_gallery.module.css";

interface RenderItemProps {
  original: string;
  srcSet: string;
  sizes: string;
  alt: string;
}

export const RenderItem: React.FC<RenderItemProps> = (props) => (
  <img
    alt={props.alt}
    src={props.original}
    srcSet={props.srcSet}
    sizes={props.sizes}
    className={styles.img}
  />
);

interface ImageGalleryProps extends RenderItemProps {
  thumbnail: string;
}

export const ImageGallery: React.FC<{ items: ImageGalleryProps[] }> = ({
  items,
}) => {
  return (
    <IG
      items={items}
      lazyLoad={true}
      additionalClass={styles.gal}
      renderItem={RenderItem}
    />
  );
};
