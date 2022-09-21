import React from 'react';
import Link, { LinkProps } from 'next/link';
import { styled } from 'stitches.config';

const Anchor = styled('a', {
  textDecoration: 'none',
  color: 'inherit',
});

type AnchorProps = React.ComponentPropsWithRef<typeof Anchor>;

type InnerLinkProps = AnchorProps & LinkProps;

export const InnerLink: React.VFC<InnerLinkProps> = ({
  children,
  ...props
}) => (
  <Link {...props} passHref>
    <Anchor>{children}</Anchor>
  </Link>
);

export const OuterLink: React.VFC<AnchorProps> = ({ children, ...props }) => (
  <Anchor {...props} rel="noopener noreferrer" target="_blank">
    {children}
  </Anchor>
);
