import { AppProps } from "next/app";
import { createTheme, MantineProvider } from "@mantine/core";

const theme = createTheme({
  /** Put your mantine theme override here */
});

import "../styles/main.css";
import "@mantine/core/styles.css";
import '@mantine/carousel/styles.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <MantineProvider theme={theme}>
    <Component {...pageProps} />
  </MantineProvider>
);

export default MyApp;
