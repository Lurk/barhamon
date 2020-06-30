import React from "react";
import { Container, Header, Item } from "semantic-ui-react";
import { Post } from "../components/post";
import { PageHead } from "../components/page_head";

export default function Home() {
  return (
    <div className="container">
      <PageHead/>
      <main>
        <Container>
          <Header as='h1'>
            <Header.Content>Serhiy Barhamon</Header.Content>
            <Header.Subheader>software writer, motorcycle rider, fish catcher, nature lover</Header.Subheader>
          </Header>
          <Item.Group divided>
            <Post header='New Hope ;)' time={1593538782006}>
              <p>I want to write a blog as long as blogs exist. And now I'm doing it (hopefully).</p>
              <p>Let start from the beginning.</p>
              <p>My name Serhiy and I am a developer.</p>
            </Post>
          </Item.Group>
        </Container>
      </main>

      <footer>

      </footer>
    </div>
  )
}
