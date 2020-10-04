import React from "react";
import ImageGallery from 'react-image-gallery';
import { Divider } from "semantic-ui-react";


const CentralUkrainePreview: React.FC = () => {
  return (
    <>
      <p>I`ve made another short trip — two days of tarmac, gravel, and sand roads. I deliberately avoid highways, as
        much as I can, because all the fun and beauty are on small and hidden trails. It always amazed me where people
        can live. To some villages, the only path is through deep sand trails. </p>
    </>
  )
}

const firstSlider = new Array(8).fill(0).map((v, k) => ({
  original: `/img/central_ukraine/1/${k + 1}.jpg`,
  thumbnail: `/img/central_ukraine/1/${k + 1}_tn.jpg`,
}));
const secondSlider = new Array(10).fill(0).map((v, k) => ({
  original: `/img/central_ukraine/2/${k + 1}.jpg`,
  thumbnail: `/img/central_ukraine/2/${k + 1}_tn.jpg`,
}));
const thirdSlider = new Array(5).fill(0).map((v, k) => ({
  original: `/img/central_ukraine/3/${k + 1}.jpg`,
  thumbnail: `/img/central_ukraine/3/${k + 1}_tn.jpg`,
}))

const CentralUkraineFull: React.FC = () => {
  return (
    <>
      <CentralUkrainePreview/>
      <Divider/>
      <ImageGallery items={firstSlider}/>
      <p>Here are tracks for the <a href="https://scenicapp.space/ride/UHlOhOsM">first</a> and <a
        href="https://scenicapp.space/ride/nurKKyQl">second</a> days.</p>
      <p>I did not bring a tent with this time but got a hammock and slept with a terrific view <a
        href="https://www.google.com/maps/@49.36566,32.7349795,149m/data=!3m1!1e3">in the middle of
        nowhere</a>.</p>
      <ImageGallery items={secondSlider}/>
      <p>On the way back, I found a gem - Trakhtemyrivsʹkyy Pivostriv. It is near Kyiv (100 km), and I will come back
        there to explore.</p>
      <ImageGallery items={thirdSlider}/>
      <p>Recorded almost six hours of video, then condense it to 13 minutes, and here it is: </p>
      <iframe style={{ width: "100%", height: "300px" }} src="https://www.youtube.com/embed/FAYoL7WzHaE" frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
      <p>A big one for me - it is possible to do 500 km in one day with offroad parts in it. But it is physically
        challenging. Next time I plan a trip should take this into account</p>
    </>
  )
}

export const central_ukraine = {
  pid: "central_ukraine",
  header: "800 km along the roads of central Ukraine in 2 days",
  time: 1601794437385,
  image: '/img/central_ukraine/header.jpg',
  tags: ['motorcycle', 'adventure'],
  description: "Solo road trip on a old Africa Twin motorcycle",
  Preview: CentralUkrainePreview,
  Full: CentralUkraineFull
}
