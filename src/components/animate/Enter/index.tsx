import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { motion } from 'framer-motion';

const Container = motion(Slot);

type Config = {
  once?: boolean;
  amount?: number;
  y?: number;
  duration?: number;
};

const defaultConfig: Config = {
  once: true,
  amount: 0.2,
  y: 20,
  duration: 0.6,
};

type Props = {
  children: React.ReactNode;
  config?: Config;
};

export const Enter = ({ children, config }: Props) => {
  const { once, amount, y, duration } = { ...defaultConfig, ...config };

  return (
    <Container
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, ease: 'easeOut' }}
    >
      {children}
    </Container>
  );
};
