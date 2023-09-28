import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { useThemeContext } from './theme/ThemeContextProvider';
import { Header} from './component/Header';
import { Route, Routes } from 'react-router-dom';
import { About } from './Pages/About';
import { Product } from './Pages/Product';
import { Contact } from './Pages/Contact';

export const App = () => {
  const { theme } = useThemeContext();

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path='home' element={<Header />} />
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
