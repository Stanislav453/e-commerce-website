import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { useThemeContext } from './theme/ThemeContextProvider';
import { Navigation } from './component/Navigation';

export const App = () => {
  const { theme } = useThemeContext();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navigation />
    </ThemeProvider>
  );
};
