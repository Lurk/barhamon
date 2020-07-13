import React from "react";
import { Grid, Icon, Image, Popup } from "semantic-ui-react";

export const ThisYearIChangedTheMotorcycleClassPreview: React.FC = () => {
  return (
    <>
      <p>I used to drive a Honda X11. And this is a great bike that I still love. But I want to ride not only on
        asphalt. And so I bought an even more ancient but no less legendary Africa Twin RD04 motorcycle.</p>
    </>
  )
}

export const ThisYearIChangedTheMotorcycleClassFull: React.FC = () => {
  return (
    <>
      <ThisYearIChangedTheMotorcycleClassPreview/>
      <Grid>
        <Grid.Row columns={3}>
          <Grid.Column width="7">
            <Popup
              flowing
              content={<Image src='/img/x11.jpg'/>}
              trigger={<Image src='/img/x11.jpg'/>}
            />
          </Grid.Column>
          <Grid.Column textAlign="center" verticalAlign="middle" width="2">
            <Icon className="angle right" size="huge"/>
          </Grid.Column>
          <Grid.Column width="7">
            <Popup
              flowing
              content={<Image src='/img/at.jpg'/>}
              trigger={<Image src='/img/at.jpg'/>}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <p>It is already 30 years old, and I had to go after it 600 km, one way and halfway back on it (thanks to Igor,
        Denis, and Vlad for the adventure). But I am satisfied a little more than completely because I drove into such
        places on it that I could not have at X11. But, from some, I could not get out on my own.
      </p>
      <Image src='/img/at_adventure.jpg'/>
      <p>And if I had a time machine, I would send me to the past and persuade the younger myself to take some kind of
        dirt bike instead of a street bike.</p>
    </>
  )
}
