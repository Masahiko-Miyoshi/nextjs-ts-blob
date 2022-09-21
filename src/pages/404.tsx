import Head from 'next/head';
import { VStack } from '@/components/common/Layout';
import { Text } from '@/components/common/Text';
import { APP_DESCRIPTION, APP_NAME, APP_URL } from '@/config/app';
import { styled } from 'stitches.config';

const Heading = styled('h2', {
  all: 'unset',
  userSelect: 'none',
  display: 'block',
  fontWeight: 900,
  fontSize: 64,
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

export default function Page() {
  return (
    <>
      <Head>
        <meta name="description" content={APP_DESCRIPTION} />
        <meta property="og:title" content={`Not Found ･ ${APP_NAME}`} />
        <meta property="og:description" content={APP_DESCRIPTION} />
        <meta property="og:url" content={APP_URL} />
      </Head>
      
      <VStack justify="center" align="center" gap="2" css={{ height: '100%' }}>
        <Heading>404</Heading>
        <Text size="3">Page not found</Text>
      </VStack>
      <section id="posts3">...</section>
      
      <VStack justify="center" align="center" gap="2" css={{ height: '100%' }}>
        <Heading>404</Heading>
        <Text size="3">Page not found</Text>
      </VStack>

      <VStack justify="center" align="center" gap="2" css={{ height: '100%' }}>
        <Heading>404</Heading>
        <Text size="3">Page not found</Text>
      </VStack>
     
      <VStack justify="center" align="center" gap="2" css={{ height: '100%' }}>
        <Heading>404</Heading>
        <Text size="3">Page not found</Text>
      </VStack>
      <VStack justify="center" align="center" gap="2" css={{ height: '100%' }}>
        <Heading>404</Heading>
        <Text size="3">Page not found</Text>
      </VStack>
      <VStack justify="center" align="center" gap="2" css={{ height: '100%' }}>
        <Heading>404</Heading>
        <Text size="3">Page not found</Text>
      </VStack> <VStack justify="center" align="center" gap="2" css={{ height: '100%' }}>
        <Heading>404</Heading>
        <Text size="3">Page not found</Text>
      </VStack> <VStack justify="center" align="center" gap="2" css={{ height: '100%' }}>
        <Heading>404</Heading>
        <Text size="3">Page not found</Text>
      </VStack> <VStack justify="center" align="center" gap="2" css={{ height: '100%' }}>
        <Heading>404</Heading>
        <Text size="3">Page not found</Text>
      </VStack> <VStack justify="center" align="center" gap="2" css={{ height: '100%' }}>
        <Heading>404</Heading>
        <Text size="3">Page not found</Text>
      </VStack> <VStack justify="center" align="center" gap="2" css={{ height: '100%' }}>
        <Heading>404</Heading>
        <Text size="3">Page not found</Text>
      </VStack> <VStack justify="center" align="center" gap="2" css={{ height: '100%' }}>
        <Heading>404</Heading>
        <Text size="3">Page not found</Text>
      </VStack> <VStack justify="center" align="center" gap="2" css={{ height: '100%' }}>
        <Heading>404</Heading>
        <Text size="3">Page not found</Text>
      </VStack> <VStack justify="center" align="center" gap="2" css={{ height: '100%' }}>
        <Heading>404</Heading>
        <Text size="3">Page not found</Text>
      </VStack> <VStack justify="center" align="center" gap="2" css={{ height: '100%' }}>
        <Heading>404</Heading>
        <Text size="3">Page not found</Text>
      </VStack> <VStack justify="center" align="center" gap="2" css={{ height: '100%' }}>
        <Heading>404</Heading>
        <Text size="3">Page not found</Text>
      </VStack>
     
    </>
  );
}
