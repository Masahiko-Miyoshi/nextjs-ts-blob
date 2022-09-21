import React from 'react';
import { FiSun } from 'react-icons/fi';
import { IconButton } from '@/components/common/IconButton';
import { Tooltip } from '@/components/common/Tooltip';
import { useToggleTheme } from '@/hooks/useToggleTheme';

export const DarkThemeButton = () => {
  const [theme, toggleTheme] = useToggleTheme();
  return (
    <Tooltip
      content={theme === 'light' ? 'Active dark mode' : 'Active light mode'}
    >
      <IconButton
        icon={<FiSun size={40} />}
        aria-label="toggle theme"
        onClick={toggleTheme}
      />
    </Tooltip>
  );
};
