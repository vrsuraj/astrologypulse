import Layout from "@/components/layout/defaultLayout";
import "@/styles/globals.css";
import "@/styles/main.css";
import FormContextProvider from "../context/formContext";
import type { AppProps } from "next/app";
import { JSXElementConstructor, ReactElement } from "react";

type AppLayoutProps = AppProps & {
  Component: {
    getLayout?: (
      page: ReactElement<any, string | JSXElementConstructor<any>>
    ) => React.ReactNode;
  };
};

export default function App({ Component, pageProps }: AppLayoutProps) {
  const getLayout =
    Component.getLayout ||
    ((page) => (
      <>
        <FormContextProvider>
          <Layout>{page}</Layout>
        </FormContextProvider>
      </>
    ));

  return getLayout(<Component {...pageProps} />);
}
