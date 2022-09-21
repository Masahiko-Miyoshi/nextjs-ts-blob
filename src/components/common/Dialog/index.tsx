import React from 'react';
import { blackA } from '@radix-ui/colors';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Cross1Icon } from '@radix-ui/react-icons';
import { IconButton } from '@/components/common/IconButton';
import { styled, keyframes, CSS } from 'stitches.config';

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});

const StyledOverlay = styled(DialogPrimitive.Overlay, {
  position: 'fixed',
  inset: 0,
  bgColor: blackA.blackA9,

  // custom
  '@media (prefers-reduced-motion: no-preference)': {
    animationName: overlayShow,
    animationDuration: '150ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    animationFillMode: 'forwards',
    willChange: 'opacity',
  },
});

type DialogProps = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Root
> & {
  children: React.ReactNode;
};

export const Dialog: React.VFC<DialogProps> = ({ children, ...props }) => {
  return (
    <DialogPrimitive.Root {...props}>
      <StyledOverlay />
      {children}
    </DialogPrimitive.Root>
  );
};

const StyledContent = styled(DialogPrimitive.Content, {
  position: 'fixed',
  zIndex: '$dialog',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  // custom
  width: '90vw',
  maxWidth: '450px',
  maxHeight: '80vh',
  padding: 24,
  borderRadius: 6,
  bgColor: '$loContrast',

  '@media (prefers-reduced-motion: no-preference)': {
    animationName: contentShow,
    animationDuration: '150ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    animationFillMode: 'forwards',
    willChange: 'transform, opacity',
  },
  '&:focus': { outline: 'none' },
});

const StyledCloseButton = styled(DialogPrimitive.Close, {
  position: 'absolute',

  // custom
  top: 8,
  right: 8,
});

type DialogContentPrimitiveProps = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Content
>;
type DialogContentProps = DialogContentPrimitiveProps & { css?: CSS };

export const DialogContent = React.forwardRef<
  React.ElementRef<typeof StyledContent>,
  DialogContentProps
>(({ children, ...props }, forwardedRef) => (
  <StyledContent {...props} ref={forwardedRef}>
    {children}
    <StyledCloseButton asChild>
      <IconButton aria-label="close" icon={<Cross1Icon />} />
    </StyledCloseButton>
  </StyledContent>
));
DialogContent.displayName = 'DialogContent';

export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogTitle = DialogPrimitive.Title;
export const DialogDescription = DialogPrimitive.Description;
