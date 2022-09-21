import { HStack, VStack } from '@/components/common/Layout';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const Contents: React.VFC<Props> = ({ children, className }) => {
  return (
    <HStack className={className} justify="center">
      <VStack
        gap="6"
        css={{
          w: '100%',
          maxW: 1264,
          mx: 32,
          my: 48,
        }}
      >
        {children}
      </VStack>
    </HStack>
  );
};
