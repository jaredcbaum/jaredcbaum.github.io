import Switcher from "../Switcher/Switcher";
import styled from "styled-components";

export default function Links(props) {
  return (
    <LinksStyles className="links">
      <Switcher threshold="30.5">
        <div className="links__partial">
          <button className="links__burger">☰</button>
          <div></div>
        </div>
        <ul className="links__full">
          <li>Projects</li>
          <li>About</li>
          <li>Bungalows</li>
          <li>Shakaka</li>
          <li>Ling Laou</li>
        </ul>
      </Switcher>
    </LinksStyles>
  );
}

const LinksStyles = styled.div`
  flex-grow: 1;

  .switcher {
    display: flex;
    justify-content: flex-end;
    flex-grow: 1;
  }

  .links__partial {
    .links__burger {
      border: none;
    }
  }

  .links__full {
    list-style: none;
    display: flex;

    li + li {
      margin-inline-start: 2rem;
    }
  }
`;
