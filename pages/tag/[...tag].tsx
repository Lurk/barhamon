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
  return {
    paths: posts.getAll().reduce(
      (acc: { params: Tag }[], p) => [
        ...acc,
        ...p.tags
          .map((tag) => {
            const p = posts.getPage({ limit, tag, offset: 0 });
            return new Array(p.totalPages)
              .fill(0)
              .map((v, i) => [
                { params: { tag: [tag, `${i + 1}`] } },
                { params: { tag: [tag] } },
              ])
              .flat();
          })
          .flat(),
      ],
      []
    ),
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
