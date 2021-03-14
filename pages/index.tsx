import Head from "next/head";
import Heading from "../src/components/Heading";
import styled from "styled-components";
import Container from "../src/components/Container/Container";
import MainNav from "../src/components/MainNav/MainNav";

export default function Home() {
  return (
    <IndexStyles>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainNav />
    </IndexStyles>
  );
}

const IndexStyles = styled.div`
  font-family: "Mada", sans-serif;
`;
