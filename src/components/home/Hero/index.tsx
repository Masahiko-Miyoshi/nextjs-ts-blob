import { VStack, Box } from '@/components/common/Layout';
import { useToggleTheme } from '@/hooks/useToggleTheme';
import { styled } from 'stitches.config';
import App from './View';

const Heading = styled('h2', {
  all: 'unset',
  userSelect: 'none',
  display: 'block',
  fontWeight: 900,
  fontSize: 40,
  '@sm': {
    fontSize: 56,
  },
  lineHeight: 1.1,
  color: '$hiContrast',
  textTransform: 'uppercase',

  variants: {
    dark: {
      true: {
        color: '$loContrast',
      },
    },
  },
});

export const Hero = () => {
  const [theme] = useToggleTheme();

  return (
    <VStack align="center" css={{ overflow: 'hidden' }}>
      <Box css={{ position: 'relative', flex: 1, width: '100vw' }}>
        <App />
        <Box
          css={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate3d(-50%, -50%, 0)',
          }}
        >
          <Heading dark={theme === 'dark'}>
            IoT System
            <br />
            under
            <br />
            construction
          </Heading>
        </Box>
      </Box>
    </VStack>
  );
};
