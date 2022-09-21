import React from 'react';

type Props = {
  content: string;
};

export const PostContent: React.VFC<Props> = ({ content }) => {
  return <div className='post' dangerouslySetInnerHTML={{ __html: content }} />;
};
