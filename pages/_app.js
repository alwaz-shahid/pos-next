import "../styles/globals.css";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <section className="bg-slate-100 f-col flex-1 min-h-screen">
      <ChakraProvider>
        <Head>{/* <script src="https://cdn.tailwindcss.com"></script> */}</Head>
        {/* <h1>Picante POS</h1>\ */}
        {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
        <Component {...pageProps} />;
      </ChakraProvider>
    </section>
  );
}

export default MyApp;
