import { createTheme } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';
import { amber, deepOrange, grey } from '@mui/material/colors';
import darkScrollbar from '@mui/material/darkScrollbar';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',

    primary: {
      main: '#E633FF' /*or whatever color you desire */,
      contrastText: '#fff',
    },
    secondary: {
      main: '#E633FF',
    },
    text: {
      primary: '#2e2e2e',
      secondary: '#2e2e2e',
      disabled: '#424242',
    },
    background: {
      paper: '#33FF',
      default: '#33FF',
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgba(255, 255, 255, 0.9)' /*or whatever color you desire */,
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    text: {
      primary: '#fff',
      secondary: '#fff',
      disabled: '#fff',
    },
    secondary: {
      main: 'rgba(255, 255, 255, 0.7)' /*or whatever color you desire */,
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    background: {
      paper: '#3FF',
      default: '#3FF',
    },
  },
});

const scrollBar = {
  scrollbarColor: '#6b6b6b #2b2b2b',
  '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
    backgroundColor: '#2b2b2b',
    width: '1em',
  },
  '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
    borderRadius: 8,
    backgroundColor: '#6b6b6b',

    minHeight: 24,
    border: '3px solid #2b2b2b',
  },
  '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus': {
    backgroundColor: '#959595',
  },
  '&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active': {
    backgroundColor: '#959595',
  },
  '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover': {
    backgroundColor: '#959595',
  },
  '&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner': {
    backgroundColor: '#2b2b2b',
  },
};
export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light' ? lightTheme : darkTheme),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides:
        mode === 'light'
          ? {
              //body: mode === 'light' ? null : darkScrollbar(),
              body: {
                //background: 'linear-gradient(180deg, #fe6b8b 30%, #ff8e53 90%)',
                //backgroundRepeat: 'no-repeat',
                //backgroundAttachment: 'fixed',
                ...scrollBar,
              },
            }
          : {
              //body: darkScrollbar(),
              body: {
                //background: 'linear-gradient(180deg, #fe6b8b 30%, #ff8e53 90%)',
                //backgroundRepeat: 'no-repeat',
                //backgroundAttachment: 'fixed',
                ...scrollBar,
              },
            },
    },
  },
});
