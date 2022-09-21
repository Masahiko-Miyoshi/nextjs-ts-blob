import { Box, HStack } from '@/components/common/Layout';

type Props = {
  children: React.ReactNode;
  className: string;
};

export const Contents: React.VFC<Props> = ({ children, className }) => {
  return (
    <HStack className={className} justify="center">
      <Box
        css={{
          w: '100%',
          maxW: 784,
          mx: 32,
          mt: 48,
        }}
      >
        {children}
      </Box>
    </HStack>
  );
};
