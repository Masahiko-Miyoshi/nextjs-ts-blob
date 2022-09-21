import { ThemeProvider } from 'next-themes';
import React from 'react';
import { darkTheme } from 'stitches.config';

type Props = {
  children: React.ReactNode;
};

export const Provider = ({ children }: Props) => (
  <ThemeProvider
    attribute="class"
    defaultTheme="system"
    value={{
      light: 'light',
      dark: darkTheme.className,
    }}
  >
    {children}
  </ThemeProvider>
);
