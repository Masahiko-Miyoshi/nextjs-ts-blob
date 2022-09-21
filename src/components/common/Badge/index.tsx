import { styled } from 'stitches.config';

export const Badge = styled('span', {
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
  padding: '4px 10px',
  gap: '$1',
  border: 'solid 1px currentColor',
  borderRadius: 4,
  fontVariantNumeric: 'tabular-nums',
  fontWeight: 500,
  fontSize: 12,
  color: '$slate1',
  bgColor: '$slate12',
});