import React from 'react';

type Hover = {
  hovered: number;
  setHover: (id: number) => void;
};

export const HoverContext = React.createContext({} as Hover);
