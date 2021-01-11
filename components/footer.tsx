import React from "react";
import { Container, Grid, Icon, Segment } from "semantic-ui-react";
import style from "./footer.module.css";

const Subscribe: React.FC = () => (
  <>
    <p>Subscribe by: </p>
    <p><a href="/feed.json"><img src="/jsonfeed.png" className={style.icon} alt="json feed v1.1"/> JSON Feed</a></p>
    <p><a href="/feed.xml"><Icon className="rss"/> RSS</a></p>
  </>
)

const FindMe: React.FC = () => (
  <>
    <p>You can find me at:</p>
    <p><a href="https://twitter.com/SergeyBargamon"><Icon className="twitter"/> Twitter</a></p>
    <p><a href="https://www.facebook.com/bargamon"><Icon className="facebook"/> Facebook</a></p>
    <p><a href="https://www.instagram.com/fedorpupkin/"><Icon className="instagram"/> Instagram</a></p>
  </>
)

const Source: React.FC = () => (
  <>
    <p>Source code of this blog:</p>
    <p><a href="https://github.com/Lurk/barhamon"><Icon className="github"/> GitHub</a></p>
  </>
)

export const Footer: React.FC = () => {
  return (
    <Segment className={style.main} inverted basic>
      <Container className="main">
        <Grid inverted>
          <Grid.Row columns={3} only="computer tablet">
            <Grid.Column>
              <Subscribe/>
            </Grid.Column>
            <Grid.Column>
              <FindMe/>
            </Grid.Column>
            <Grid.Column>
              <Source/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={1} only="mobile">
            <Grid.Column>
              <Subscribe/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={1} only="mobile">
            <Grid.Column>
              <FindMe/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={1} only="mobile">
            <Grid.Column>
              <Source/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  )
}
