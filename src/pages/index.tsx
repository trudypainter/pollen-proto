import type { NextPage } from "next";
import Head from "next/head";

import { ChakraProvider } from "@chakra-ui/react";
import HeaderMenu from "../components/HeaderMenu";

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pollen</title>
        <meta name="description" content="Prototype for Pollen.so" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ChakraProvider>
        <HeaderMenu />

        <div className="w-full py-40 text-center">
          <div className="text-3xl font-bold mb-12">Pollen</div>

          <div className="flex flex-wrap bg-red w-fit m-auto p-4 space-x-4">
            <div className=" w-64 bg-gray-100 p-8 text-left">
              <div className="text-l font-semibold">User Examples</div>
              <a className="hover:underline" href="/trudy-painter">
                Trudy Painter
              </a>
              <br></br>
              <a className="hover:underline" href="/omoruyi-atekha">
                Omoruyi Atekha
              </a>
            </div>

            <div className=" w-64 bg-gray-100 p-8 text-left">
              <div className="text-l font-semibold">Channel Examples</div>
              <a
                className="hover:underline"
                href="/trudy-painter/things-i-like-eruhck1o7r0"
              >
                things i like
              </a>
              <br></br>
              <a
                className="hover:underline"
                href="/trudy-painter/oakleys-and-i-stand-by-it"
              >
                OAKLEYS AND I STAND BY IT
              </a>
            </div>
          </div>
        </div>
      </ChakraProvider>
    </>
  );
};

export default Index;
