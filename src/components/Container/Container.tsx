import clsx from "clsx";
import styled from "styled-components";

export default function Container({ ...props }) {
  return (
    <ContainerStyles
      {...props}
      className={clsx({
        [props.className]: Boolean(props.className),
        container: true,
      })}
    />
  );
}

const ContainerStyles = styled.div`
  --gutter: 16px;

  margin-inline-start: auto;
  margin-inline-end: auto;

  width: clamp(0px, 64rem, calc(100% - (var(--gutter) * 2)));
`;
