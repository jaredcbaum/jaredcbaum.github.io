import styled from "styled-components";
import clsx from "clsx";
import { ComponentPropsWithRef } from "react";

interface HeadingProps extends ComponentPropsWithRef<"h1"> {
  level: 1 | 2 | 3 | 4 | 5 | 6;
}

export default function Heading({ level = 3, ...props }: HeadingProps) {
  return (
    <CustomHeadingStyles
      $as={`h${level}`}
      {...props}
      className={clsx({
        [props.className]: Boolean(props.className),
        [`heading-${level}`]: true,
        heading: true,
      })}
    />
  );
}

const CustomHeadingStyles = styled.div`
  &.heading-1 {
    font-size: 2rem;
  }
`;
