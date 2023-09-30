import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { useThemeContext } from './theme/ThemeContextProvider';
import { Route, Routes } from 'react-router-dom';
import { About } from './Pages/About';
import { Product } from './Pages/Product';
import { Contact } from './Pages/Contact';
import { Home } from './Pages/Home';

export const App = () => {
  const { theme } = useThemeContext();

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='product' element={<Product/>} />
        <Route path='contact' element={<Contact />} />
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
