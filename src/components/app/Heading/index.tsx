import React from 'react';
import { Icon } from '@/components/common/Icon';
import { HStack, VStack } from '@/components/common/Layout';
import { Heading as H } from '@/components/common/Text';

type Props = {
  children: React.ReactNode;
  text: string;
  icon: React.ReactElement;
};

export const Heading = React.forwardRef<React.ElementRef<typeof H>, Props>(
  ({ children, text, icon }, forwardedRef) => {
    return (
      <VStack gap="2" css={{ userSelect: 'none' }}>
        <H
          as="span"
          size="4"
          css={{
            color: '$violet11',
            textTransform: 'uppercase',
            lineHeight: 1.2,
          }}
        >
          -- {text} --
        </H>
        <HStack gap="2">
          <Icon size="4">{icon}</Icon>
          <H as="h2" size="7" ref={forwardedRef}>
            {children}
          </H>
        </HStack>
      </VStack>
    );
  },
);

Heading.displayName = 'Heading';
