import { ParsedUrlQuery } from 'querystring';
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPageWithLayout,
} from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Header } from '@/components/app/Header';
import { Badge } from '@/components/common/Badge';
import { Date } from '@/components/common/Date';
import { HStack, VStack, Wrap } from '@/components/common/Layout';
import { Tag } from '@/components/common/Tag';
import { Heading } from '@/components/common/Text';
import { Contents } from '@/components/post/Contents';
import { PostContent } from '@/components/post/PostContent';
import { APP_NAME, APP_URL } from '@/config/app';
import { formatDate } from '@/utils/format';
import { getPostByPath, getPosts } from '@/utils/getPosts';
import markdownToHtml from '@/utils/markdownToHtml';
import { description } from '@/utils/meta';
import type { Post } from '@/types/Post';

type Props = {
  post: Post;
};

type Params = ParsedUrlQuery & {
  year: string;
  month: string;
  slug: string;
};

const View: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ post }) => {
  const {
    description,
    title,
    date,
    tags,
    category,
    year,
    month,
    slug,
    content,
  } = post;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={`${title} ･ ${APP_NAME}`} />
        <meta property="og:description" content={description} />
        <meta
          property="og:url"
          content={`${APP_URL}${year}/${month}/${slug}/`}
        />
      </Head>
      <article>
        <VStack gap="5">
          <VStack gap="3">
            <HStack align="center" gap="3">
              <Date>{formatDate(date)}</Date>
              <Link href={`/category/${category}/`} passHref>
                <Badge as="a">{category}</Badge>
              </Link>
            </HStack>
            <Heading size="7" css={{ lineHeight: 1.2 }}>
              {title}
            </Heading>
          </VStack>
          <Wrap align="center" gap="2">
            {tags.map((tag) => (
              <Link key={tag} href={`/tag/${tag}/`} passHref>
                <Tag as="a">{tag}</Tag>
              </Link>
            ))}
          </Wrap>
        </VStack>
        <PostContent content={content} />
      </article>
    </>
  );
};

View.getLayout = (page) => (
  <div className="global-layout">
    <Header className="global-layout__header" />
    <Contents className="global-layout__contents">{page}</Contents>
  </div>
);

export default View;

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const { year, month, slug } = params as Params;
  const path = `${year}/${month}/${slug}.md`;
  const post = getPostByPath(path);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post.data,
        content,
        description: description(content),
      } as Post,
    },
  };
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths = getPosts().map(({ year, month, slug }) => ({
    params: {
      year,
      month,
      slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};
