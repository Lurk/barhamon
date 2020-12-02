import React from "react";
import { Image } from "semantic-ui-react";

const ThePlanPreview: React.FC = () => {
  return (
    <>
      <p>One week left before my trip to the mountains on a motorcycle. The whole route is +/- 1400 km.</p>
    </>
  )
}

const ThePlanFull: React.FC = () => {
  return (
    <>
      <ThePlanPreview/>
      <p>There are plans to visit the abandoned Pamir radar station in the Carpathian mountains and ride around.</p>
      <p>I have three days for everything. Here is a rough plan.</p>
      <p>Friday: Check out at 7 am. According to the plan, I need to drive about 650 km to the place of a stay. Put up a tent there, light a fire, have supper and, fighting off mosquitoes, go to sleep.</p>
      <p>Saturday: For this day, the plan is to drive +/- 200 kilometers through the mountains without asphalt. Somewhere on the way to the Pamir, I will need to go through a border checkpoint as part of the route runs along the Romanian border.</p>
      <p>Sunday: The road home is about the same 650 kilometers. If I go to the Bakota, it will be something around 700 km. Not sure about it.</p>
      <p>It remains to come up with a menu, but it seems to me that it will be freeze-dried food. I tried ЇDLO before and it was very good. Get side bags from repair. Pack all my stuff and I ready to go.</p>
      <Image src="/img/road.jpg" alt="see you on the road"/>
      <p>See you on the road )</p>
    </>
  )
}

export const the_plan = {
  pid: "the_plan",
  header: "The plan",
  time: 1596789120687,
  image: '/img/the_plan.jpg',
  tags: ['motorcycle', 'adventure', 'mountains'],
  description: "",
  Preview: ThePlanPreview,
  Full: ThePlanFull
}
