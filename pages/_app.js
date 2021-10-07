import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './../src/utils/theme';
import GlobalStyles from "src/utils/globalStyles";
import DataContext from 'src/utils/DataContext';
import "./_app.css";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const appProps = {...pageProps, isDarkMode, setIsDarkMode}

  return (
    <DataContext>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Component {...appProps}/>
      </ThemeProvider>
    </DataContext>
  )
}
