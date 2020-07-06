import { Container, Header } from "semantic-ui-react";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { PageHead } from "./page_head";

export interface LayoutProps {
  title?: string
}

export const Layout: React.FC<LayoutProps> = (props) => {
  const router = useRouter();
  const isIndex = router.asPath === '/';
  return (
    <>
      <PageHead title={props.title}/>
      <main>
        <Container className="main">
          <Header style={{ marginTop: "calc(2rem - .14285714em)" }} size="huge">
            <Header.Content>{isIndex ? 'Serhiy Barhamon' :
              <Link href="/"><a>Serhiy Barhamon</a></Link>}</Header.Content>
            <Header.Subheader>software developer, motorcycle rider, fish catcher, nature lover</Header.Subheader>
          </Header>
          {props.children}
        </Container>
      </main>

      <footer>

      </footer>
    </>
  )
}
