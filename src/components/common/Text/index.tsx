import { styled } from 'stitches.config';
import { textStyles } from './styles';

export const Text = styled('p', textStyles);

export const Heading = styled('h1', textStyles, {
  userSelect: 'none',
  fontWeight: 900,
  paddingLeft: 30, // Added By MM 2020.9.6 in order to adjust center
});
