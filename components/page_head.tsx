import React from "react";
import Head from "next/head";

export interface PageHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  canonical?: string;
}

const tags: string[] = [
  "software development",
  "motorcycles",
  "fishing",
  "camping",
];

function getImageUrl(image?: string): string {
  if (image) {
    return image.startsWith("https://")
      ? image
      : `${process.env.NEXT_PUBLIC_HOST}${image}`;
  } else {
    return "https://res.cloudinary.com/barhamon/image/upload/c_scale,f_auto,q_auto,w_600/v1609663926/header/the_fun_stuff_dpfgic.jpg";
  }
}

export const PageHead: React.FC<PageHeadProps> = ({
  title,
  description,
  keywords,
  image,
  canonical,
}) => {
  const t = title
    ? `${title} - ${process.env.NEXT_PUBLIC_TITLE}`
    : process.env.NEXT_PUBLIC_TITLE;

  const u: string[] = keywords
    ? Array.from(new Set<string>([...keywords, ...tags]).values())
    : tags;

  const imgUrl = getImageUrl(image);

  return (
    <Head>
      <title>{t}</title>
      <meta property="og:title" content={t} />
      <meta property="og:type" content="website" />
      {canonical && (
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_HOST}${canonical}`}
        />
      )}
      <meta property="og:image" content={imgUrl} />
      <meta
        property="og:description"
        content={description || "This is the Blog :)"}
      />
      {canonical && (
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_HOST}${canonical}`}
        />
      )}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#8e8e8e" />
      <link
        rel="alternate"
        type="application/feed+json"
        title="JSON Feed"
        href={`${process.env.NEXT_PUBLIC_HOST}/feed.json`}
      />
      <link
        rel="alternate"
        type="application/rss+xml"
        title="RSS"
        href={`${process.env.NEXT_PUBLIC_HOST}/feed.xml`}
      />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="author" content="Serhiy Barhamon" />
      <meta name="charset" content="UTF-8" />
      <meta
        name="description"
        content={description ? description : "Serhiy Barhamon personal blog"}
      />
      <meta name="keywords" content={u.join(", ")} />

      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-171846183-1"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-171846183-1');`,
        }}
      />
    </Head>
  );
};
