import React from 'react';
import { CaretDownIcon } from '@radix-ui/react-icons';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { styled, keyframes } from 'stitches.config';
import { itemStyles } from './styles';

const enter = keyframes({
  from: { transform: 'translateX($$value)', opacity: 0 },
  to: { transform: 'translateX(0)', opacity: 1 },
});

const exit = keyframes({
  from: { transform: 'translateX(0)', opacity: 1 },
  to: { transform: 'translateX($$value)', opacity: 0 },
});

const StyledTrigger = styled(NavigationMenuPrimitive.Trigger, itemStyles, {
  justifyContent: 'space-between',
  // custom
  gap: 2,
});

const StyledCaret = styled(CaretDownIcon, {
  position: 'relative',
  color: '$hiContrast',
  top: 1,
  '[data-state=open] &': { transform: 'rotate(-180deg)' },
  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'transform 250ms ease',
  },
});

const StyledContent = styled(NavigationMenuPrimitive.Content, {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '250ms',
    animationTimingFunction: 'ease',
    '&[data-motion="from-start"]': { animationName: enter, $$value: '-200px' },
    '&[data-motion="from-end"]': { animationName: enter, $$value: '200px' },
    '&[data-motion="to-start"]': { animationName: exit, $$value: '-200px' },
    '&[data-motion="to-end"]': { animationName: exit, $$value: '200px' },
  },
});

const StyledNavigationMenuItem = styled(NavigationMenuPrimitive.Item, {});

type NavigationMenuTriggerItemProps = {
  children: React.ReactNode;
  title: string;
};

export const NavigationMenuTriggerItem = React.forwardRef<
  React.ElementRef<typeof StyledNavigationMenuItem>,
  NavigationMenuTriggerItemProps
>(({ children, title }, forwardedRef) => (
  <StyledNavigationMenuItem ref={forwardedRef}>
    <StyledTrigger round>
      {title}
      <StyledCaret aria-hidden />
    </StyledTrigger>
    <StyledContent>{children}</StyledContent>
  </StyledNavigationMenuItem>
));

NavigationMenuTriggerItem.displayName = 'NavigationMenuTriggerItem';
