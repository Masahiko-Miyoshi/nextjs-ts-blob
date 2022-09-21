import { useTheme } from 'next-themes';
import React from 'react';

type UseToggleTheme = () => [string, () => void];

export const useToggleTheme: UseToggleTheme = () => {
  const { theme: _theme, setTheme } = useTheme();
  const theme = _theme as string;

  const toggleTheme = React.useCallback(
    () => setTheme(theme === 'light' ? 'dark' : 'light'),
    [setTheme, theme],
  );
  return [theme, toggleTheme];
};
