import React from "react";
import { Header, Message } from "semantic-ui-react";

const NastiestBugsPreview: React.FC = () => {
  return (
    <p>One of the questions I usually get on an interview - Tell me about a time that you had to deal with a tricky
      bug.</p>
  )
}

const NastiestBugsFull: React.FC = () => {
  return (
    <>
      <NastiestBugsPreview/>
      <p>Oh boy. What to choose? Throughout my career, I dealt with many tricky bugs, one tricker than the other. But
        two of them stand out. So buckle up. Here is tail about the nastiest bugs in my life.</p>
      <Header>Bug with blurry images.</Header>
      <p>Once upon a time, I did a UI framework for IPTV set-top boxes. It was React + Redux app, on top of a Chromium
        custom build, on top of 4.4.2 Android.</p>
      <p>One day, I got a bug report - Channel icons are somewhat blurry. And two weeks of fun begins.</p>
      <p>First of all, I checked the obvious things. Like maybe images are blurry in the first place? Or perhaps somehow
        I screwup the viewport in Head. Or whatever. But no, everything was fine except blurry images.</p>
      <p>And finally, after a couple of weeks of reading documentation, make files, and source code of Chromium, I found
        out that there was a "feature" in Chromium with pixel density. The browser was detecting the Full HD screen on
        the Android device, which means we have a high dpi screen, but we do not. So every image, before rendering,
        first gets scaled up and then scaled down by the browser.</p>
      <p>The only reasonable solution was to hardcode scale. So I patched our version of Chrome to use the constant
        scale.</p>
      <Header>The server is on fire, customers on fire, me, also on fire, TCP.LAST_AKK timeout 60 seconds.</Header>
      <p>One day one of our video delivery edges began to behave strangely. No significant load increase was detected,
        no new software was deployed, no CPU spikes, no memory leaks, no SDD were damaged. But service experienced a
        considerable downgrade.</p>
      <p>Only one thing was not normal - the count of connections in the LAST_AKK state was too high. And that were
        connections to our access control service on localhost. Since the same service was deployed on other edges and
        everything was ok with them, I was like, WAT?</p>
      <Message size="mini" info>The patch, which enables control of LAST_AKK timeout by finwait2_timeout, sits in the
        FreeBSD tracker since
        2001.</Message>
      <p>I read everything I can about TCP, connection states, timeouts, how it was implemented in FreeBSD, how to tune
        FreeBSD network, and so on. Spend two or three weeks on this.</p>
      <Message size="mini" info>If you are running a FreeBSD server, this is the <a
        href="https://calomel.org/freebsd_network_tuning.html">best article about performance tuning</a> I ever read.
      </Message>
      <p>Honestly, I still don't know why exactly it has happened. But the fix and the lesson was - do not use HTTP for
        local services, use Unix sockets instead.</p>
    </>
  )
}

export const nastiest_bugs = {
  pid: "nastiest_bugs",
  header: "Nastiest bugs in my life",
  time: 1608495507913,
  image: '/img/this_is_fine.jpg',
  tags: ['interview', 'bugs'],
  description: "Here is tail about the nastiest bugs in my life.",
  Preview: NastiestBugsPreview,
  Full: NastiestBugsFull,
}
