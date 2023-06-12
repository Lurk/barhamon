import React from "react";
import { Header } from "semantic-ui-react";
import { GetStaticPaths, GetStaticProps } from "next";
import Error from "next/error";
import { Layout } from "../../components/layout";
import { posts } from "../../data";
import { PostList } from "../../components/post_list";
import { PageResult } from "../../models/posts";

const limit = parseInt(process.env.NEXT_PUBLIC_POSTS_PER_PAGE, 10);

const PostPage: React.FC<{ tag: string; page?: PageResult }> = ({
  tag,
  page,
}) => {
  if (page) {
    return (
      <Layout title={tag}>
        <Header>Posts filtered by tag: {tag.toUpperCase()}</Header>
        <PostList page={page} url={(p) => `/tag/${tag}/${p}`} />
      </Layout>
    );
  }
  return <Error statusCode={404} />;
};

export default PostPage;

type Tag = {
  tag: [string, string];
};

export const getStaticPaths: GetStaticPaths = async () => {
  const tags: Set<string> = new Set(
    posts
      .getAll()
      .map((p) => p.tags)
      .flat()
  );

  console.log(tags);

  const paths = Array.from(tags)
    .map((tag: string) => {
      const p = posts.getPage({ limit, tag, offset: 0 });
      const pages = new Array(p.totalPages)
        .fill({})
        .map((v, i) => ({ params: { tag: [tag, `${i + 1}`] } }));
      pages.push({ params: { tag: [tag] } });
      return pages;
    })
    .flat();

  console.log(
    JSON.stringify(
      paths.filter((path) => path.params.tag.includes("Live")),
      null,
      2
    )
  );
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  { tag: string; page: PageResult },
  Tag
> = async ({ params }) => {
  const page = params.tag[1] ? parseInt(params.tag[1], 10) : 1;
  const tag = params.tag[0];
  return {
    props: {
      tag,
      page: posts.getPage({ limit, offset: (page - 1) * limit, tag }),
    },
  };
};
