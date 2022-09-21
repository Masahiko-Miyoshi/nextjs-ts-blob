import React from 'react';
import { blackA } from '@radix-ui/colors';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import { styled, VariantProps } from 'stitches.config';

// custom
const SCROLLBAR_THICKNESS = 4;

const StyledScrollArea = styled(ScrollAreaPrimitive.Root, {
  borderRadius: 'inherit',
});

const StyledViewport = styled(ScrollAreaPrimitive.Viewport, {
  width: '100%',
  height: '100%',
  borderRadius: 'inherit',
});

const StyledScrollbar = styled(ScrollAreaPrimitive.Scrollbar, {
  userSelect: 'none',
  touchAction: 'none',
  display: 'flex',
  '&[data-orientation="vertical"]': { width: SCROLLBAR_THICKNESS },
  '&[data-orientation="horizontal"]': {
    flexDirection: 'column',
    height: SCROLLBAR_THICKNESS,
  },
});

const StyledThumb = styled(ScrollAreaPrimitive.Thumb, {
  flex: 1,

  // custom
  background: '$mauve6',
  borderRadius: SCROLLBAR_THICKNESS,

  // collision
  position: 'relative',
  '&::before': {
    content: '',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '200%',
    height: '200%',
  },
});

const StyledCorner = styled(ScrollAreaPrimitive.Corner, {
  background: blackA.blackA8,
});

type ScrollAreaVariants = VariantProps<typeof StyledScrollArea>;
type ScrollAreaProps = React.ComponentPropsWithoutRef<typeof StyledScrollArea> &
  ScrollAreaVariants;

export const ScrollArea = React.forwardRef<
  React.ElementRef<typeof StyledScrollArea>,
  ScrollAreaProps
>(({ children, ...props }, forwardedRef) => (
  <StyledScrollArea {...props} ref={forwardedRef}>
    <StyledViewport>{children}</StyledViewport>
    <StyledScrollbar orientation="vertical">
      <StyledThumb />
    </StyledScrollbar>
    <StyledScrollbar orientation="horizontal">
      <StyledThumb />
    </StyledScrollbar>
    <StyledCorner />
  </StyledScrollArea>
));

ScrollArea.displayName = 'ScrollArea';
