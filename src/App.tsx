import React, { useContext } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { getDesignTokens } from './components/Theme';
import { createTheme } from '@mui/material/styles';
import AppPage from './components/AppPage';
import MovementsProvider from './context/movements/movementsState';
import { miscContext } from './context/misc/MiscState';

import { CssBaseline, ScopedCssBaseline } from '@mui/material';

function App() {
  //const context = useContext(movmentsContext);
  const mContext = useContext(miscContext);
  const darkTheme = createTheme(getDesignTokens('dark'));
  const lightTheme = createTheme(getDesignTokens('light'));

  return (
    <ThemeProvider theme={mContext.theme === 'darkTheme' ? darkTheme : lightTheme}>
      <CssBaseline />
      <MovementsProvider>
        <AppPage />
      </MovementsProvider>
    </ThemeProvider>
  );
}

export default App;
