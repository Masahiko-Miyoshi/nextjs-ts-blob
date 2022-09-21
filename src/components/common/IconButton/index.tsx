import React from 'react';
import { styled, VariantProps } from 'stitches.config';
import { Icon } from '../Icon';

const StyledIconButton = styled('button', {
  textDecoration: 'none',
  outline: 'none',
  userSelect: 'none',
  WebkitTapHighlightColor: 'transparent',
  borderWidth: 0,
  flexShrink: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'inherit',
  cursor: 'pointer',

  // custom
  padding: 6,
  backgroundColor: 'transparent',

  '&:disabled': {
    pointerEvents: 'none',
    color: '$slate6',
  },

  variants: {
    size: {
      '1': {
        size: 32,
        borderRadius: 2,
      },
      '2': {
        size: 48,
        borderRadius: 4,
      },
    },
    round: {
      true: {
        borderRadius: '9999 !important',
      },
    },
    float: {
      true: {},
    },
    variant: {
      contrast: {
        color: '$hiContrast',
        '&:focus': {
          boxShadow: '0 0 0 2px $colors$hiContrast',
        },
      },
      primary: {
        color: '$violet12',
        '&:focus': {
          boxShadow: '0 0 0 2px $colors$violet11',
        },
      },
    },
  },
  compoundVariants: [
    {
      variant: 'contrast',
      float: 'true',
      css: {
        bgColor: '$loContrast',
        boxShadow: '$colors$shadow1',
        '&:focus': {
          boxShadow: '$colors$shadow1, 0 0 0 2px currentColor',
        },
      },
    },
    {
      variant: 'primary',
      float: 'true',
      css: {
        bgColor: '$mauve1',
        boxShadow: '$colors$shadow1',
        '&:focus': {
          boxShadow: '$colors$shadow1, 0 0 0 2px currentColor',
        },
      },
    },
  ],
  defaultVariants: {
    size: '1',
    variant: 'contrast',
  },
});

type Props = VariantProps<typeof StyledIconButton> &
  React.ComponentPropsWithoutRef<typeof StyledIconButton> & {
    icon: React.ReactElement;
  };

export const IconButton = React.forwardRef<
  React.ElementRef<typeof StyledIconButton>,
  Props
>(({ icon, ...props }, forwardedRef) => {
  return (
    <StyledIconButton type="button" {...props} ref={forwardedRef}>
      <Icon size="2">{icon}</Icon>
    </StyledIconButton>
  );
});

IconButton.displayName = 'IconButton';
