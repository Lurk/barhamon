import Link from "next/link";
import React from "react";
import { Divider } from "semantic-ui-react";
import { CloudinaryGal } from "../components/cloudinary";


const TheFunStuffPreview: React.FC = () => {
  return (
    <>
      <p>This post is about the good stuff I have done during my sabbatical.</p>
    </>
  )
}


const TheFunStuffFull: React.FC = () => {
  return (
    <>
      <TheFunStuffPreview/>
      <p>I wrote already about my <Link as={`/post/central_ukraine`} href={`/post/[pid]`}><a>two-day motorcycle trip</a></Link>.
        Also, I`ve made many short one-day trips about which I did not write. They are still fun and exciting. The thing
        I like the most about adventure motorcycling is the freedom to choose the way. You can go wherever you want,
        even if there are no roads. Time is the only constraint, but you can go pretty far and see a lot on a
        motorcycle.</p>
      <p>Here some pictures I took during those one-day trips:</p>
      <CloudinaryGal username="barhamon" tag="sma_20202"/>
      <Divider/>
      <p>I also went fishing with my friends. We lived almost a week in tents on a border between Ukraine and Belarus.
        It was terrific. Our home was a small island between Dnepr and Starik rivers, with nobody around. We caught enough
        fish to cook it every day, and mushrooms grew just behind our tents.</p>
      <p>We are very fortunate with the weather. Have no rain, and some days were so sunny, I even think of swimming,
        but the river was icy. And that was the end of October.</p>
      <p>One night, we go for a walk around our island. It was a little bit scary, and also very beautiful. You know,
        trees in the light of flashlights, the shadows, sounds of birds and animals, found some plants that glowed in
        the dark. Unfortunately, no photo can convey what it was. So you have to take my word for it.</p>
      <p>Here some photos from that week:</p>
      <CloudinaryGal username="barhamon" tag="fo_2020"/>
      <Divider/>
      <p>Also, for the first time in my life, I hiked to the mountain summit. It was not something like Everest, only
        1500 height. But that was awesome, and I think I got a new hobby :)</p>

      <p>My wife Mari and I spend ten days in the Carpathian mountains. Almost every day we go on a hike. Drank water
        from mountain streams, cooked food on our small gas stove. Even found a new friend, a little doggo with no name,
        but we call it Palkan. </p>
      <p>And here some foto as well: </p>
      <CloudinaryGal username="barhamon" tag="cm_2020"/>
      <Divider/>
      <p>We even shot a short clip on the way home because what can be better than mountains?</p>
      <p>Plug your headphones, make it 4k and fullscreen</p>
      <iframe style={{ width: "100%", height: "300px" }} src="https://www.youtube.com/embed/OmiYnAqKotM" frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
      <Divider/>
      <p>This is not a full list of activities, but you should get the idea of what makes me happy :)</p>
    </>
  )
}

export const the_fun_stuff = {
  pid: "the_fun_stuff",
  header: "The fun stuff",
  time: 1607029309563,
  image: '/img/the_fun_stuff.jpeg',
  tags: ['personal', 'adventure', 'mountains'],
  description: "You can do all sorts of things while unemployed. Here is a list of what I`ve done",
  Preview: TheFunStuffPreview,
  Full: TheFunStuffFull
}
