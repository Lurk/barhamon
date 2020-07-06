import React from "react";
import { Image } from "semantic-ui-react";

export const TheRainTheRiverAndTheSunsetPreview: React.FC = () => {
  return (
    <>
      <p>At the weekend we spent the night on the shore in a tent. The first time in a long time I went to the river
        without fishing rods :)</p>
    </>
  )
}

export const TheRainTheRiverAndTheSunsetFull: React.FC = () => {
  return (
    <>
      <TheRainTheRiverAndTheSunsetPreview/>
      <p>Every time I return from a venture, I regret that I did not bring a camera with me. Because every time some
        kind of adventure happens. This time, the GPS led us through the forest, and at some point, we had to turn
        around and look for another road because the road in front of us turned into a swamp.</p>
      <Image src="/img/IMG_3638.jpg"/>
      <p>We reached the place and did not regret it. Swam in the river, had dinner with a view of the sunset,
        fed mosquitoes. At night a thunderstorm began and we slept to the sound of rain :)</p>
      <p>One night is not enough, but still better than nothing.</p>
    </>
  )
}
