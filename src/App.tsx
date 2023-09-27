import { ThemeProvider } from '@emotion/react';
import React from 'react';
import { CssBaseline } from '@mui/material';
import { theme } from './theme/theme';
import { useThemeContext } from './theme/ThemeContextProvider';
import { Navigation } from './component/Navigation';

export const App = () => {

  const { theme } = useThemeContext()

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navigation/>
    </ThemeProvider>
  );
};
