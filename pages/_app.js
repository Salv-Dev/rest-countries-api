import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './../src/utils/theme';
import GlobalStyles from "src/utils/globalStyles";
import DataContext from 'src/utils/DataContext';
import api from './../src/utils/instanceApi';
import "./_app.css";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [data, setData] = useState(null);
  const [initialData, setInitialData] = useState(null);
  const appProps = {...pageProps, isDarkMode, setIsDarkMode, data, setData, initialData}

  useEffect(() => {
    api.get('/all').then(r => {
      setData(r.data);
      setInitialData(r.data);
    });
  }, []);

  return (
    <DataContext>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Component {...appProps}/>
      </ThemeProvider>
    </DataContext>
  )
}
