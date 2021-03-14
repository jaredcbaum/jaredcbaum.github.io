import styled from "styled-components";
import Container from "../Container/Container";
import Heading from "../Heading";
import Links from "./Links";

export default function MainNav(props) {
  return (
    <MainNavStyles {...props}>
      <Container>
        <Heading level={1}>Jared Baumgartner</Heading>
        <Links />
      </Container>
    </MainNavStyles>
  );
}

const MainNavStyles = styled.nav`
  position: sticky;
  top: 0;

  padding: 1rem 0;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
