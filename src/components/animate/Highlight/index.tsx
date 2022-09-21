import React from 'react';
import { LayoutGroup, motion } from 'framer-motion';
import { Box } from '@/components/common/Layout';
import { CSS, styled } from 'stitches.config';
import { HoverContext } from './HoverContext';

const Highlight = styled(motion.div, {
  position: 'absolute',
  inset: 0,
  borderRadius: 6,
  bgColor: '$slateA3',
});

type HighlightItemProps = {
  children: React.ReactNode;
  id: number;
  css?: CSS;
  as?: React.ElementType
};

export const HighlightItem: React.VFC<HighlightItemProps> = ({
  children,
  id,
  css,
  as
}) => {
  const { hovered, setHover } = React.useContext(HoverContext);
  return (
    <Box
      as={as}
      css={{ position: 'relative' }}
      onFocus={() => setHover(id)}
      onMouseEnter={() => setHover(id)}
    >
      {hovered === id ? (
        <Highlight
          css={css}
          transition={{
            layout: {
              duration: 0.2,
              ease: 'easeOut',
            },
          }}
          layoutId="highlight"
        />
      ) : null}
      <Box css={{ zIndex: 1, position: 'relative' }}>{children}</Box>
    </Box>
  );
};

type HighlightListProps = {
  children: React.ReactNode;
  id: string;
};

export const HighlightList: React.VFC<HighlightListProps> = ({
  children,
  id,
}) => {
  const [hovered, setHover] = React.useState(-1);

  return (
    <HoverContext.Provider value={{ hovered, setHover }}>
      <div onMouseLeave={() => setHover(-1)}>
        <LayoutGroup id={id}>{children}</LayoutGroup>
      </div>
    </HoverContext.Provider>
  );
};
