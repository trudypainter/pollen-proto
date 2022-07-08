import type { NextPage } from "next";
import { ChannelPage } from "../../components/ChannelPage";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Channel: NextPage = () => {
  const router = useRouter();
  const { channel } = router.query;

  return (
    <>
      <Head>
        <title>Pollen</title>
        <meta name="description" content="Prototype for Pollen.so" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ChakraProvider>
        <ChannelPage />
      </ChakraProvider>
    </>
  );
};

export default Channel;
