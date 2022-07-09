import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

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

          <div className="flex flex-wrap bg-red w-11/12 m-auto justify-center">
            <div className=" w-64 bg-gray-100 p-8 text-left m-4">
              <div className="text-l font-semibold">User Examples</div>
              <Link href="/trudy-painter">
                <a className="hover:underline">Trudy Painter</a>
              </Link>

              <br></br>
              <Link href="/omoruyi-atekha">
                <a className="hover:underline">Omoruyi Atekha</a>
              </Link>
            </div>

            <div className=" w-64 bg-gray-100 p-8 text-left m-4">
              <div className="text-l font-semibold">Channel Examples</div>
              <Link href="/trudy-painter/things-i-like-eruhck1o7r0">
                <a className="hover:underline">things i like</a>
              </Link>
              <br></br>

              <Link href="/trudy-painter/oakleys-and-i-stand-by-it">
                <a className="hover:underline">OAKLEYS AND I STAND BY IT</a>
              </Link>
              <br></br>

              <Link href="/trudy-painter/example-of-all-blocks">
                <a className="hover:underline">example of all block</a>
              </Link>
            </div>
          </div>
        </div>
      </ChakraProvider>
    </>
  );
};

export default Index;
