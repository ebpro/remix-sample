// File: app/components/ThemedButton.tsx
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function ThemedButton() {
  const theme = useContext(ThemeContext);

  return (
    <button style={{ background: theme.background, color: theme.color }} className="px-4 py-2 rounded">
      I am styled by theme context!
    </button>
  );
}

export default ThemedButton;