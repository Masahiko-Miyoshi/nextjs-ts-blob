import { css } from 'stitches.config';

export const itemStyles = css({
  all: 'unset',
  outline: 'none',
  userSelect: 'none',
  lineHeight: 1,
  whiteSpace: 'nowrap',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',

  // custom
  gap: 24,
  padding: '12px 16px',
  borderRadius: 6,
  fontWeight: 900,
  fontSize: 18,
  // color: '$hiContrast',
  color: '$violet11',
  

  '&:focus': {
    position: 'relative',
    boxShadow: '0 0 0 2px $colors$hiContrast',
  },

  variants: {
    round: {
      true: {
        borderRadius: 9999,
      },
    },
  },
});
