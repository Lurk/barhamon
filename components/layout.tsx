import { Container, Grid, Header, Icon, Segment } from "semantic-ui-react";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { PageHead, PageHeadProps } from "./page_head";

export const Layout: React.FC<PageHeadProps> = (props) => {
  const router = useRouter();
  const isIndex = router.asPath === '/';
  return (
    <>
      <PageHead {...props}/>
      <Container className="main">
        <Header style={{ marginTop: "calc(2rem - .14285714em)" }} size="huge">
          <Header.Content>{isIndex ? 'Serhiy Barhamon' :
            <Link href="/"><a>Serhiy Barhamon</a></Link>}</Header.Content>
          <Header.Subheader>software developer, motorcycle rider, fish catcher, nature lover</Header.Subheader>
        </Header>
        {props.children}
      </Container>

      <Segment style={{ padding: '20px', marginTop: '20px', borderRadius: 0 }} inverted>
        <Container className="main">
          <Grid inverted>
            <Grid.Row columns={3} only="computer tablet">
              <Grid.Column>
                This is footer
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
