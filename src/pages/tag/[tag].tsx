import { ParsedUrlQuery } from 'querystring';
import type {
  NextPage,
  GetStaticProps,
  GetStaticPaths,
  InferGetStaticPropsType,
} from 'next';
import Head from 'next/head';
import { BsHash } from 'react-icons/bs';
import { Heading } from '@/components/app/Heading';
import { Posts } from '@/components/app/Posts';
import { APP_DESCRIPTION, APP_NAME, APP_URL } from '@/config/app';
import { getPostsByTag } from '@/utils/getPosts';
import { getTags } from '@/utils/getTags';
import type { Post } from '@/types/Post';

type Props = {
  tag: string;
  posts: Post[];
};

type Params = ParsedUrlQuery & {
  tag: string;
};

const View: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  tag,
  posts,
}: Props) => {
  return (
    <>
      <Head>
        <title>{tag}の記事</title>
        <meta name="description" content={APP_DESCRIPTION} />
        <meta property="og:title" content={APP_NAME} />
        <meta property="og:description" content={APP_DESCRIPTION} />
        <meta property="og:url" content={`${APP_URL}/tag/${tag}/`} />
      </Head>
      <Heading icon={<BsHash />} text="tag">
        {tag}の記事
      </Heading>
      <Posts posts={posts}></Posts>
    </>
  );
};

export default View;

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const { tag } = params as Params;

  return {
    props: {
      tag,
      posts: getPostsByTag(tag),
    },
  };
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths = getTags().map((tag) => ({
    params: { tag },
  }));

  return {
    paths,
    fallback: false,
  };
};
