import {
  mauve,
  slate,
  violet,
  mauveA,
  slateA,
  violetA,
  blackA,
  mauveDark,
  slateDark,
  violetDark,
  mauveDarkA,
  slateDarkA,
  violetDarkA,
  // add pink By MM
  pink,
} from '@radix-ui/colors';

const customColors = {
  hiContrast: '$slate12',
  loContrast: '$slate1',

  shadow1: `0 4px 8px ${blackA.blackA8}`,
  shadow2: `0 8px 16px ${blackA.blackA8}`,
};

export const colors = {
  ...customColors,

  ...violet,
  ...mauve,
  ...slate,

  ...violetA,
  ...mauveA,
  ...slateA,
  ...pink, //Add pink by MM
};

export const darkThemeConfig = {
  colors: {
    ...customColors,

    ...violetDark,
    ...mauveDark,
    ...slateDark,

    ...violetDarkA,
    ...mauveDarkA,
    ...slateDarkA,
  },
};
