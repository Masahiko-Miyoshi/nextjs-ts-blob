import { styled } from 'stitches.config';
import { itemStyles } from './style';

export const NavigationBarLabel = styled('li', itemStyles, {
  // custom
  color: '$mauve11',
  my: '$2',
});

export const NavigationBarLink = styled('a', itemStyles, {
  textDecoration: 'none',
  cursor: 'pointer',

  // custom
  color: '$violet11',

  '&:hover': {
    backgroundColor: '$violet3',
  },
  '&:focus': {
    outline: 'none',
    backgroundColor: '$violet9',
    color: '$violet1',
  },
  '&[data-disabled]': {
    color: '$mauve8',
  },
});
