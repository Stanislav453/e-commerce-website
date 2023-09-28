import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { useThemeContext } from './theme/ThemeContextProvider';
import { Header} from './component/Header';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  const { theme } = useThemeContext();

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path='/' element={<Header />} />
        {/* <Route path='/' element={<Product/>} />
        <Route path='/' element={<Contact />} /> */}
        <Route path='*' element={"shit"} />

      </Routes>
      </ThemeProvider>

    </React.Fragment>
    
    // <ThemeProvider theme={theme}>
    //   <CssBaseline />
    //   <Header />
    // </ThemeProvider>
  );
};
