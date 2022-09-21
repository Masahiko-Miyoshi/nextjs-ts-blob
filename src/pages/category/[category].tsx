import { ParsedUrlQuery } from 'querystring';
import type {
  NextPage,
  GetStaticProps,
  GetStaticPaths,
  InferGetStaticPropsType,
} from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { BiCategoryAlt } from 'react-icons/bi';
import { Heading } from '@/components/app/Heading';
import { Posts } from '@/components/app/Posts';
import { VStack, Wrap } from '@/components/common/Layout';
import { Tag } from '@/components/common/Tag';
import { APP_DESCRIPTION, APP_NAME, APP_URL } from '@/config/app';
import { getCategories } from '@/utils/getCategories';
import { getPostsByCategory } from '@/utils/getPosts';
import { getTags } from '@/utils/getTags';
import type { Post } from '@/types/Post';

type Props = {
  category: string;
  tags: string[];
  posts: Post[];
};

type Params = ParsedUrlQuery & {
  category: string;
};

const View: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  category,
  tags,
  posts,
}: Props) => {
  return (
    <>
      <Head>
        <title> {category}の記事</title>
        <meta name="description" content={APP_DESCRIPTION} />
        <meta property="og:title" content={APP_NAME} />
        <meta property="og:description" content={APP_DESCRIPTION} />
        <meta property="og:url" content={`${APP_URL}/category/${category}/`} />
      </Head>
      <VStack gap="3">
        <Heading icon={<BiCategoryAlt />} text="category">
          {category}の記事
        </Heading>
        <Wrap gap="2">
          {tags.map((tag) => (
            <Link key={tag} href={`/tag/${tag}`} passHref>
              <Tag as="a">{tag}</Tag>
            </Link>
          ))}
        </Wrap>
      </VStack>
      <Posts posts={posts} />
    </>
  );
};

export default View;

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const { category } = params as Params;

  return {
    props: {
      category,
      tags: getTags(category),
      posts: getPostsByCategory(category),
    },
  };
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths = getCategories().map((category) => ({
    params: { category },
  }));

  return {
    paths,
    fallback: false,
  };
};
