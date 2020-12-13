import React from "react";

const BurnedOutPreview: React.FC = () => {
  return (
    <p>For five years, I've been working as a system architect in a startup. </p>
  )
}

const BurnedOutFull: React.FC = () => {
  return (
    <>
      <p>For five years, I've been working as a system architect in a startup. We did some cool things because we were
        small and agile. That was fun and challenging, so I spend all my time there. And I mean it. Even if I was with my
        wife, riding my motorcycle, fishing, or you name it - I was building the next feature or designing a new product
        or debugging some nasty bug in my mind.</p>
      <p>So, I burned out.</p>
      <p>I heard a lot about people burning out but never think of me in that context. It did not happen overnight. That
        took half a year or maybe a full year to build up. Like very slow dementor was sucking out all the fun in the
        world. In the end, besides my growing grumpiness, I started to close in inside myself. That was bad not only for
        my work but, most importantly, for my relationship.</p>
      <p>Because it was a slow process, I did not notice it right away. But when I did, I spoke with my wife and
        described everything about how I feel. Together we decided that it is time to go to the psychiatrist. And that
        was the right decision at the right time.</p>
      <p>My options were to keep going and take medications or quit and rest. So, for the first time since 17, I am
        unemployed. For a while, I do everything that makes me happy (that will be another post).</p>
      <p>If you are reading this because you feel that the dementor has caught you:</p>
      <p>The most valuable advice that I can give to you - seek professional help.</p>
      <p>Second most valuable advice - speak with close ones. It will help a lot.</p>
    </>
  )
}

export const burned_out = {
  pid: "burned_out",
  header: "I quit my job (burning out story)",
  time: 1604828490367,
  image: '/img/burned_out.jpg',
  tags: ['personal'],
  description: "Story of me burned out",
  Preview: BurnedOutPreview,
  Full: BurnedOutFull,
  readTime: 1
}
