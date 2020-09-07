import React from "react";
import ImageGallery from 'react-image-gallery';
import { Divider } from "semantic-ui-react";


const RtwPreview: React.FC = () => {
  return (
    <>
      <p>I was fascinated by long motorcycle journeys since my first bike but started to think about it seriously while
        watching <a href="https://www.longwayround.com/long-way-round">"Long way round"</a> a year ago. If you didn't
        watch it, I strongly recommend watching it even if you do not ride bikes. Because, you know, Adventure )</p>
    </>
  )
}

const firstSlider = [
  {
    original: `/img/rtw/AnneFranceDautheville.jpg`,
    thumbnail: `/img/rtw/AnneFranceDautheville.jpg`,
  },
  {
    original: `/img/rtw/AnneFranceDautheville2.jpg`,
    thumbnail: `/img/rtw/AnneFranceDautheville2.jpg`,
  },
  {
    original: `/img/rtw/AnneFranceDautheville3.jpg`,
    thumbnail: `/img/rtw/AnneFranceDautheville3.jpg`,
  },
];
const secondSlider = [
  {
    original: `/img/rtw/CarlStearnsClancy.jpg`,
    thumbnail: `/img/rtw/CarlStearnsClancy.jpg`,
  },
  {
    original: `/img/rtw/CarlStearnsClancy2.png`,
    thumbnail: `/img/rtw/CarlStearnsClancy2.png`,
  },
];
const thirdSlider = [
  {
    original: `/img/rtw/ElspethBeard.webp`,
    thumbnail: `/img/rtw/ElspethBeard.webp`,
  },
  {
    original: `/img/rtw/ElspethBeard2.jpg`,
    thumbnail: `/img/rtw/ElspethBeard2.jpg`,
  },
  {
    original: `/img/rtw/ElspethBeard3.jpg`,
    thumbnail: `/img/rtw/ElspethBeard3.jpg`,
  },
];
const fourthSlider = [
  {
    original: `/img/rtw/lwr.webp`,
    thumbnail: `/img/rtw/lwr.webp`,
  },
  {
    original: `/img/rtw/lwr2.webp`,
    thumbnail: `/img/rtw/lwr2.webp`,
  },
];
const fifthSlider = [
  {
    original: `/img/rtw/SjaakLucassen.jpg`,
    thumbnail: `/img/rtw/SjaakLucassen.jpg`,
  },
  {
    original: `/img/rtw/SjaakLucassen2.jpg`,
    thumbnail: `/img/rtw/SjaakLucassen2.jpg`,
  },
];
const RtwFull: React.FC = () => {
  return (
    <>
      <RtwPreview/>
      <Divider/>
      <p>I do not have a team to manage visas and other boring stuff. So it will be at least a half-year journey. Thus I
        still don't know how to do it because of family, work, etc.</p>
      <p>But I read a lot about it, so here is a couple of examples for inspiration:</p>
      <ul>
        <li>The first woman who did solo round the world trip was <a
          href="https://www.facebook.com/annefrancedautheville">Anne-France Dautheville</a>. I didn't find a lot of info
          about that trip, but I can imagine that it was a hell of an Adventure in 1972. Just imagine no phones, no GPS,
          no fancy adventure bikes.
          <ImageGallery items={firstSlider}/>
        </li>
        <li>The first man who made a solo motorcycle trip around the world was <a
          href="https://en.wikipedia.org/wiki/Carl_Stearns_Clancy">Carl Stearns Clancy</a>
          . He made that in 1912 - 1913. At that time, I am not sure even the roads were there. If you think you need
          some unique bike for travel, look at his.
          <ImageGallery items={secondSlider}/>
        </li>
        <li><a href="https://www.elspethbeard.com/">Elspeth Beard</a>. Her story remains unknown for 30 years. Go to her
          web site you won't be disappointed. (I know that Dave Calderwood apologized, but that letter steel makes me
          angry)
          <ImageGallery items={thirdSlider}/>
        </li>
        <li><a href="https://www.longwayround.com/">Ewan McGregor and Charley Boorman</a> whos journey inspired a lot of
          people, included me. Also, they do a new show right now - <a href="https://www.youtube.com/watch?v=611fw81BN98&ab_channel=AppleTV">"Long way up"</a>
          <ImageGallery items={fourthSlider}/>
        </li>
        <li><a href="https://www.youtube.com/channel/UCYf4z6G9EqeJeOHnBu7l-mQ">Sjaak Lucassen</a> - 2001 until 2006 on a
          Yamaha YZF R1 (250,000 km). I heard a lot about him but just recently found his youtube channel. So go and
          subscribe, hit like buttons, and share because he deserved to be famous.
          <ImageGallery items={fifthSlider}/>
        </li>
      </ul>


    </>
  )
}

export const rtw_trip = {
  pid: "rtw_trip",
  header: "Round the world trip on a motorcycle",
  time: 1599397333336,
  image: '/img/rtw/rtw.jpg',
  tags: ['motorcycle', 'adventure', 'around the world'],
  description: "I dream about a trip around the world on a motorcycle. Here you can find people who inspire me and maybe will inspire you",
  Preview: RtwPreview,
  Full: RtwFull
}
