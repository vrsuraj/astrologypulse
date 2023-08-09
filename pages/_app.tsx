import Layout from "@/components/layout/defaultLayout";
import "@/styles/globals.css";
import "@/styles/main.css";
import FormContextProvider from "../context/formContext";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FormContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </FormContextProvider>
  );
}
