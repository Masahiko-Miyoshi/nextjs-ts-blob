import React from 'react';
import { HStack } from '../Layout';

const map = {
  '1': 12,
  '2': 24,
  '3': 32,
  '4': 40,
};

type Props = {
  children: React.ReactElement;
  size: '1' | '2' | '3' | '4';
};

export const Icon: React.VFC<Props> = ({ children, size }) => {
  const newChildren = React.cloneElement(children, { size: map[size] });
  return (
    <HStack justify="center" align="center">
      {newChildren}
    </HStack>
  );
};
