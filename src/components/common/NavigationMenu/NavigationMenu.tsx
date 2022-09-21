import React from 'react';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { CSS, keyframes, styled } from 'stitches.config';

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const fadeOut = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
});

const scaleIn = keyframes({
  from: { transform: 'rotateX(-30deg) scale(0.9)', opacity: 0 },
  to: { transform: 'rotateX(0deg) scale(1)', opacity: 1 },
});

const scaleOut = keyframes({
  from: { transform: 'rotateX(0deg) scale(1)', opacity: 1 },
  to: { transform: 'rotateX(-10deg) scale(0.95)', opacity: 0 },
});

const StyledMenu = styled(NavigationMenuPrimitive.Root, {
  zIndex: '$sticky',
  position: 'relative',
});

const StyledList = styled(NavigationMenuPrimitive.List, {
  all: 'unset',
  listStyle: 'none',
  display: 'flex',
  justifyContent: 'center',
  // custom
  gap: 0,
});

const StyledIndicator = styled(NavigationMenuPrimitive.Indicator, {
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
  height: 10,
  top: '100%',
  overflow: 'hidden',
  zIndex: 1,

  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'width, transform 250ms ease',
    '&[data-state="visible"]': { animation: `${fadeIn} 200ms ease` },
    '&[data-state="hidden"]': { animation: `${fadeOut} 200ms ease` },
  },
});

const StyledArrow = styled('div', {
  position: 'relative',
  top: '70%',
  backgroundColor: '$loContrast',
  width: 10,
  height: 10,
  transform: 'rotate(45deg)',
  borderTopLeftRadius: 2,
});

const ViewportPosition = styled('div', {
  position: 'absolute',
  top: '100%',
  left: 0,

  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  perspective: '2000px',
});

const StyledViewport = styled(NavigationMenuPrimitive.Viewport, {
  flexShrink: 0,
  position: 'relative',
  transformOrigin: 'top center',

  // custom
  width: '80vw',
  '@md': {
    width: 640,
  },
  '@lg': {
    width: 940,
  },
  height: 'var(--radix-navigation-menu-viewport-height)',

  marginTop: 10,
  backgroundColor: '$loContrast',
  borderRadius: 6,
  overflow: 'hidden',
  boxShadow: '$colors$shadow2',

  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'width, height, 300ms ease',
    '&[data-state="open"]': { animation: `${scaleIn} 200ms ease` },
    '&[data-state="closed"]': { animation: `${scaleOut} 200ms ease` },
  },
});

type NavigationMenuProps = React.ComponentPropsWithoutRef<typeof StyledMenu> & {
  css?: CSS;
};

export const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof StyledList>,
  NavigationMenuProps
>(({ children, ...props }, forwardedRef) => (
  <StyledMenu {...props} ref={forwardedRef}>
    <StyledList>
      {children}
      <StyledIndicator>
        <StyledArrow />
      </StyledIndicator>
    </StyledList>
    <ViewportPosition>
      <StyledViewport />
    </ViewportPosition>
  </StyledMenu>
));

NavigationMenu.displayName = 'NavigationMenu';
