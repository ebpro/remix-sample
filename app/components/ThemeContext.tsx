// File: app/components/ThemeContext.tsx
import { createContext } from 'react';

export const ThemeContext = createContext({
  background: 'darkblue',
  color: 'white'
});