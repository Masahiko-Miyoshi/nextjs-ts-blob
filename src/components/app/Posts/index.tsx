import React from 'react';
import { Enter } from '@/components/animate/Enter';
import { Badge } from '@/components/common/Badge';
import { Date } from '@/components/common/Date';
import { Box, Grid, HStack, VStack, Wrap } from '@/components/common/Layout';
import { InnerLink } from '@/components/common/Link';
import { Tag } from '@/components/common/Tag';
import { Heading } from '@/components/common/Text';
import { formatDate } from '@/utils/format';
import type { Post } from '@/types/Post';

const Post = React.forwardRef<React.ElementRef<typeof Box>, { post: Post }>(
  (
    { post: { slug, date, year, month, title, category, tags } },
    forwardedRef,
  ) => {
    return (
    <InnerLink href={`/${year}/${month}/${slug}`}>
      <Box
        ref={forwardedRef}
        css={{
          position: 'relative',
          h: '100%',
          p: 20,
          borderRadius: 6,
          bgColor: '$loContrast',
          boxShadow: '$colors$shadow1',
        }}
      >
        <VStack gap="4">
          <VStack gap="2">
            <HStack align="center" gap="3">
              <Date>{formatDate(date)}</Date>
              <Badge>{category}</Badge>
            </HStack>
            <Heading size="5">{title}</Heading>
          </VStack>
          <Wrap align="center" gap="2">
            {tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </Wrap>
        </VStack>
      </Box>
    </InnerLink>
  )}
);

Post.displayName = 'Post';

export const Posts: React.VFC<{ posts: Post[] }> = ({ posts }) => {

 
  return (
    <Grid gap="4" columns={{ '@initial': '1', '@md': '2', '@lg': '3' }}>
      {posts.map((post) => (
        <Enter key={post.title}>
          <Post post={post} />
        </Enter>
      ))}

    </Grid>
  );
};
