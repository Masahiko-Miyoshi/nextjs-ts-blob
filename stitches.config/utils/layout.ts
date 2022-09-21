import type * as Stitches from '@stitches/react';

export const layout = {
  w: (value: Stitches.PropertyValue<'width'>) => ({
    width: value,
  }),
  h: (value: Stitches.PropertyValue<'height'>) => ({
    height: value,
  }),
  minW: (value: Stitches.PropertyValue<'minWidth'>) => ({
    minWidth: value,
  }),
  maxW: (value: Stitches.PropertyValue<'maxWidth'>) => ({
    maxWidth: value,
  }),
  minH: (value: Stitches.PropertyValue<'minHeight'>) => ({
    minHeight: value,
  }),
  maxH: (value: Stitches.PropertyValue<'maxHeight'>) => ({
    maxHeight: value,
  }),
  size: (value: Stitches.PropertyValue<'width'>) => ({
    width: value,
    height: value,
  }),
};
