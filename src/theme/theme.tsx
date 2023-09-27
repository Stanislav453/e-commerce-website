import { PaletteMode } from '@mui/material';
import { amber, deepOrange, grey } from '@mui/material/colors';

const theme = {
  palette: {
    primary: amber,
  },
};

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: {
            main: '#fff',
          },
          secondary: {
            main: '#000',
          },
          divider: amber[200],
          background: {
            default: '#eeeded',
            paper: deepOrange[900],
          },
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          primary: {
            main: '#000',
          },
          secondary: {
            main: '#fff',
          },
          // divider: deepOrange[700],
          background: {
            default: '#3e3e3e',
            paper:'#000' ,
          },
          text: {
            primary: '#fff',
            secondary: grey[500],
          },
        }),
  },
});

export default theme;
