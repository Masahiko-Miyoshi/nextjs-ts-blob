import * as Stitches from '@stitches/react';

export const style = {
  bgColor: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
    backgroundColor: value,
  }),
  bgGradient: (value: Stitches.PropertyValue<'backgroundImage'>) => ({
    backgroundImage: `linear-gradient(${value})`,
  }),
  bgClip: (value: Stitches.PropertyValue<'backgroundClip'>) => ({
    backgroundClip: value,
  }),
};
