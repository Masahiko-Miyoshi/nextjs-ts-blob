import React from 'react';
import { InnerLink } from '@/components/common/Link';
import { Heading } from '@/components/common/Text';
import { useWindowSize } from '@/hooks/useWindowSize';
import { Box, VStack, HStack } from '../../common/Layout';
import { DarkThemeButton } from '../DarkThemeButton';
import { HamburgerMenu } from './HamburgerMenu';
import { IconGroup } from './IconGroup';
import { Menu } from './NavigationMenu';


type Props = {
  className?: string;
  show?: boolean;
};

const HeaderWithNavigationMenu = () => (
  <VStack align="center" css={{ p: '48px 24px' }}>
    <Box css={{ w: '100%', maxW: 1200 }}>
      <HStack justify="between" align="center">
        <HStack justify="start" css={{ flex: 1 }}>
          <IconGroup />
        </HStack>
        <VStack gap="2">
          <Heading size="8">FR13 IoT UI Tester</Heading>
          <Menu />
        </VStack>
        <HStack justify="end" css={{ flex: 1 }}>
          <DarkThemeButton />
        </HStack>
        {/* <DarkThemeButton /> */}
      </HStack>
    </Box>
  </VStack>
);

const HeaderWithHamburgerMenu = () => (
  <HStack justify="between" align="center" css={{ p: 24 }}>
    <Heading size="7">
      <InnerLink href="/">FR13 IoT UI Tester</InnerLink>
    </Heading>
    <DarkThemeButton />
    <HamburgerMenu />
  </HStack>
);

export const Header: React.VFC<Props> = ({ className,show=true }) => {
  const { width } = useWindowSize();

  if(!show){
    return null;
  }
  return (
    <div className={className} >
      {width >= 768 ? (
        <HeaderWithNavigationMenu />
      ) : (
        <HeaderWithHamburgerMenu />
      )}
    </div>
  );
};
