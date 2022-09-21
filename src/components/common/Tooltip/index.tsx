import React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { styled, keyframes } from 'stitches.config';

const slideInAndFade = keyframes({
  '0%': { opacity: 0, transform: '$$transformValue' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const StyledContent = styled(TooltipPrimitive.Content, {
  zIndex: '$tooltip',
  lineHeight: 1,

  // custom
  padding: '6px 8px',
  borderRadius: 4,
  fontSize: 13,
  fontWeight: 500,
  color: '$slate1',
  backgroundColor: '$slate11',
  boxShadow: '$colors$shadow2',

  '@media (prefers-reduced-motion: no-preference)': {
    animationName: slideInAndFade,
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    animationFillMode: 'forwards',
    willChange: 'transform, opacity',
    '&[data-state="delayed-open"]': {
      '&[data-side="top"]': { $$transformValue: 'translateY(-2px)' },
      '&[data-side="right"]': { $$transformValue: 'translateX(2px)' },
      '&[data-side="bottom"]': { $$transformValue: 'translateY(2px)' },
      '&[data-side="left"]': { $$transformValue: 'translateX(-2px)' },
    },
  },
});

type TooltipProps = React.ComponentPropsWithoutRef<
  typeof TooltipPrimitive.Root
> &
  React.ComponentPropsWithoutRef<typeof StyledContent> & {
    children: React.ReactElement;
    content: React.ReactNode;
  };

export const Tooltip: React.VFC<TooltipProps> = ({
  children,
  content,
  open,
  defaultOpen,
  onOpenChange,
  ...props
}) => {
  return (
    <TooltipPrimitive.Root
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
      delayDuration={100}
    >
      <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
      <StyledContent side="bottom" align="center" sideOffset={8} {...props}>
        {content}
      </StyledContent>
    </TooltipPrimitive.Root>
  );
};
