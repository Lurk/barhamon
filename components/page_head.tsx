import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

export interface PageHeadProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string;
}

const tags: string[] = ["software development", "motorcycles", "fishing", "camping"]
export const PageHead: React.FC<PageHeadProps> = ({ title, description, keywords, image }) => {
  const router = useRouter();
  const t = title ? `${title} - BarHamon` : 'BarHamon';
  const u: string[] = keywords ? Array.from(new Set<string>([...keywords, ...tags]).values()) : tags;
  return (
    <Head>
      <title>{t}</title>
      <meta property="og:title" content={t}/>
      <meta property="og:url" content={`https://barhamon.com${router.asPath}`}/>
      {image && <meta property="og:image" content={`https://barhamon.com${image}`}/>}
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="manifest" href="/site.webmanifest"/>
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#8e8e8e"/>
      <meta name="msapplication-TileColor" content="#da532c"/>
      <meta name="theme-color" content="#ffffff"/>
      <meta name="author" content="Serhiy Barhamon"/>
      <meta name="charset" content="UTF-8"/>
      <meta name="description" content={description ? description : "Serhiy Barhamon personal blog"}/>
      <meta name="keywords" content={u.join(', ')}/>
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-171846183-1"/>
      <script
        dangerouslySetInnerHTML={{
          __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-171846183-1');`
        }}
      />
    </Head>
  )
}
