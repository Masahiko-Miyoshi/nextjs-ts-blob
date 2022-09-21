import { createStitches } from '@stitches/react';
import { themeConfig, darkThemeConfig } from './theme';
import { utilsConfig } from './utils';
import type * as Stitches from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    ...themeConfig,
  },
  media: {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
    xl: '(min-width: 1280px)',
  },
  utils: {
    ...utilsConfig,
  },
});

export type { VariantProps } from '@stitches/react';
export type CSS = Stitches.CSS<typeof config>;

export const darkTheme = createTheme({
  ...darkThemeConfig,
});
