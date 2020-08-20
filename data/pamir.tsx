import React from "react";
import ImageGallery from 'react-image-gallery';
import { Divider } from "semantic-ui-react";


const PamirPreview: React.FC = () => {
  return (
    <>
      <p>In just three days, we covered 1.315 km, visited abandoned military radar station "Pamir" and camp at beautiful
        sites. Considering all the adventures, I would like to have at least one more day because the last day was very
        tough. But first things first.</p>
    </>
  )
}

const firstSlider = new Array(18).fill(0).map((v, k) => ({
  original: `/img/rls_pamir/1/${k + 1}.jpg`,
  thumbnail: `/img/rls_pamir/1/${k + 1}_tn.jpg`,
}));
const secondSlider = new Array(31).fill(0).map((v, k) => ({
  original: `/img/rls_pamir/2/2 - ${k + 1}.jpg`,
  thumbnail: `/img/rls_pamir/2/2 - ${k + 1}_tn.jpg`,
}));
const thirdSlider = new Array(9).fill(0).map((v, k) => ({
  original: `/img/rls_pamir/3/3 - ${k + 1}.jpg`,
  thumbnail: `/img/rls_pamir/3/3 - ${k + 1}_tn.jpg`,
}))

const PamirFull: React.FC = () => {
  return (
    <>
      <PamirPreview/>
      <Divider/>
      <h3>Day 1:</h3>
      <p>We met with my friend, Gleb, at 8 am and drove off after drinking coffee. About every 100 - 150 km, we made
        stops to rest, have a snack, and drink water.</p>
      <p>The road surface in some places was so bad that after 400 km (at a stop in Kamenets-Podolsk), we decided that
        it was time to look for a place to camp. Since the Dnister river is near, we decided to get there and find the
        right place on the shore. The site was not found right away, since, in those parts of the Dnister, there are
        rather steep banks, and where there is a gentle entrance to the water, people live.</p>
      <p><a href="https://scenicapp.space/viewRide.php?rid=WonZKFHA">Track for this day</a></p>
      <ImageGallery items={firstSlider}/>
      <Divider/>
      <h3>Day 2:</h3>
      <p>After breakfast, we packed up and drove towards our finish point. The first few kilometers, we drove along a
        gravel road, and then a winding road began with very decent asphalt. I don't know why, but I didn't turn on the
        camera, which I regret now.</p>
      <p>In Starozhinets, the locals advised us to the "<a href="https://goo.gl/maps/KJhKEwzmU6T2aGEF9">Dzvony</a>"
        canteen, and if you are hungry in this region, I highly recommend it. We ate very tastily at 120 UAH. (~ $ 4.5).
        But they don't work on Sunday. So on the way back, we had to look for alternatives.</p>
      <p>After Dolishnii Shepit, the asphalt ends, and the fun begins. And I finally remembered that I took the camera
        and turned it on. You can estimate the quality of the road surface and the complexity of the route from the
        video below.</p>
      <p>At the border post, which was locked with a key, we discovered that Gleb had caught the drill with his rear
        wheel. From passing locals, we found out where the nearest tire service is, and having tied the rear wheel to my
        motorcycle, I went to the service.</p>
      <p>I hope it won't come in handy, but the tire service is in Selyatyn village (<a
        href="https://goo.gl/maps/3H41rM2UzVBY9PQ59">here's a point on the map</a>). The owner is not very fond of
        bikers. But luckily he is a fisherman, like me, so we find a common language.</p>
      <p>It was not possible to seal the tube because the drill tore it up a lot. But luckily I had a spare with me. So
        we quickly changed it, pumped it up, strapped the wheel back to the bike, and I go back to Gleb. When we put
        back his bike together and pack our luggage, we rushed on.</p>
      <p>After the village of Shepit, real adventures begin. The road is sometimes crossed by a river, sometimes there
        are huge stones and sometimes soggy and slippery clay.</p>
      <p>At some point, we caught up with a convoy of 4x4 folks. For some reason, I turned off the camera, and then
        forgot to turn it back on, which I regret, because the most exciting thing was just beginning.</p>
      <p>Overtaking one of the vehicles, I did not fit into the turn and put my bike down. I crumpled the top case, and,
        as it turned out later, the air got into the rear brake system, which led to the fact that the rear brakes were
        gone.</p>
      <p>Above there was a 4x4 meeting, a lot of people, wet and windy. Also, it was already starting to get dark, so we
        quickly walked around and drove back with the thought that the more we pass today, the less we will have to go
        tomorrow.</p>
      <p>Going down the mountain without a rear brake is not very pleasant. But we did it and found a great place on the
        bank of a mountain river.</p>
      <p><a href="https://scenicapp.space/viewRide.php?rid=cYcgusma">Track for this day.</a></p>
      <ImageGallery items={secondSlider}/>
      <Divider/>
      <h3>Day 3:</h3>
      <p>Raspberry bushes grew right behind our tent, so we had oatmeal with raspberries for breakfast :)</p>
      <p>After cleaning the campsite, we moved to a home. The navigator showed 613 km. On the nearest gas station, we
        fixed my rear brakes. </p>
      <p>Before finding a place to dine,we bought a watermelon, and it was the most delicious watermelon in my life
        :)</p>
      <p>Since we continued the shortest route from the very morning, the navigator led us mainly by secondary roads
        through the fields. And I was pleased about that because most of the way we drove along completely empty
        roads.</p>
      <p>We reached Kyiv after midnight.</p>
      <p><a href="https://scenicapp.space/viewRide.php?rid=fuaaewUz">Track for this day.</a></p>
      <ImageGallery items={thirdSlider}/>
      <Divider />
      <p>I'm happy we did it. Even though the last day was very tough, especially the last 100 km to home. I would
        repeat without hesitation)</p>
      <p>Halfway home, we already started discussing where we would go next, so I'm sure this was not our last
        adventure.</p>
      <Divider/>
      <h3>Here is the video I promised:</h3>
      <iframe style={{width:"100%", height:"300px"}} src="https://www.youtube.com/embed/9KvGQ8raiac" frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
    </>
  )
}

export const pamir = {
  pid: "rls_pamir",
  header: "A 3-day motorcycle adventure in the Carpathian mountains",
  time: 1597939694799,
  image: '/img/rls_pamir/header.jpg',
  tags: ['motorcycle', 'adventure', 'mountains'],
  description: "A trip from Kyiv to abandoned military radar station 'Pamir' and back on two old Africa Twin motorcycles",
  Preview: PamirPreview,
  Full: PamirFull
}
