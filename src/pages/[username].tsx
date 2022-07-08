import type { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import UserPage from "../components/UserPage";
import { ChakraProvider } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pollen</title>
        <meta name="description" content="Prototype for Pollen.so" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ChakraProvider>
        <UserPage />
      </ChakraProvider>
    </>
  );
};

export default Index;
