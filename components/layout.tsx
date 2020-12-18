import { Container, Grid, Header, Icon, Ref, Segment, Sticky } from "semantic-ui-react";
import React, { createRef, useState } from "react";
import Link from "next/link";
import { PageHead, PageHeadProps } from "./page_head";
import cx from 'classnames'
import style from "./layout.module.css";

export const Layout: React.FC<PageHeadProps> = (props) => {
  const contextRef = createRef<HTMLElement>()
  const [isItStick, setStick] = useState(false);
  return (
    <>
      <PageHead {...props}/>
      <Ref innerRef={contextRef}>
        <Grid className={style.main}>
          <Grid.Row>
            <Grid.Column className={style.menu} computer={3} only="computer">
              <Sticky context={contextRef}>
                <Segment basic size="big">
                  <Header size="huge" style={{ marginTop: "calc(2rem - .14285714em)" }}>
                    <Header.Subheader>
                      Hi!<br/>
                      My name is <br/>
                    </Header.Subheader>
                    <Header.Content>
                      <Link href="/"><a>Serhiy Barhamon</a></Link>
                    </Header.Content>
                    <Header.Subheader>
                      And I am a software engineer
                    </Header.Subheader>
                  </Header>
                </Segment>
              </Sticky>
            </Grid.Column>
            <Grid.Column only="mobile tablet" mobile={16} tablet={16} className={style.menu}>
              <Sticky context={contextRef} onStick={() => setStick(true)} onUnstick={() => setStick(false)}>
                <Segment basic className={cx({ [ style.menu_header ]: true, [ style.stick ]: isItStick })}>
                  <Header>
                    <Link href="/"><a>Serhiy`s Barhamon</a></Link> blog
                  </Header>
                </Segment>
              </Sticky>
            </Grid.Column>
            <Grid.Column mobile={16} computer={13} tablet={16} className={style.content}>
              <Segment basic size="big">
                {props.children}
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Ref>
      <Segment style={{ padding: '20px', marginTop: '20px', borderRadius: 0 }} inverted>
        <Container className="main">
          <Grid inverted>
            <Grid.Row columns={3} only="computer tablet">
              <Grid.Column>
                This is a footer
              </Grid.Column>
              <Grid.Column>
                <p>You can find me at:</p>
                <p><a href="https://twitter.com/SergeyBargamon"><Icon className="twitter"/> Twitter</a></p>
                <p><a href="https://www.facebook.com/bargamon"><Icon className="facebook"/> Facebook</a></p>
                <p><a href="https://www.instagram.com/fedorpupkin/"><Icon className="instagram"/> instagramm</a></p>
              </Grid.Column>
              <Grid.Column>
                <p>Source code of this blog:</p>
                <p><a href="https://github.com/Lurk/barhamon"><Icon className="github"/> github</a></p>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={1} only="mobile">
              <Grid.Column>
                This is footer
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={1} only="mobile">
              <Grid.Column>
                <p>You can find me at:</p>
                <p><a href="https://twitter.com/SergeyBargamon"><Icon className="twitter"/> Twitter</a></p>
                <p><a href="https://www.facebook.com/bargamon"><Icon className="facebook"/> Facebook</a></p>
                <p><a href="https://www.instagram.com/fedorpupkin/"><Icon className="instagram"/> instagramm</a></p>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={1} only="mobile">
              <Grid.Column>
                <p>Source code of this blog:</p>
                <p><a href="https://github.com/Lurk/barhamon"><Icon className="github"/> github</a></p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </>
  )
}
