import { styled } from 'stitches.config';

export const Tag = styled('span', {
  userSelect: 'none',
  whiteSpace: 'nowrap',
  fontFamily: 'inherit',
  flexShrink: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  lineHeight: 1,
  WebkitTapHighlightColor: 'transparent',

  // custom
  padding: '4px 8px',
  gap: '$1',
  border: 'solid 1px currentColor',
  borderRadius: 9999,
  fontVariantNumeric: 'tabular-nums',
  fontWeight: 500,
  fontSize: 12,
  color: '$pink11',
});
