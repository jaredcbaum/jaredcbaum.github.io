import React, {
  Children,
  cloneElement,
  useEffect,
  useRef,
  useState,
} from "react";
import clsx from "clsx";
import styled from "styled-components";

export default function Switcher({ threshold, ...props }) {
  const elRef = useRef();
  const [isFull, setIsFull] = useState<boolean>();

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target !== elRef.current) return;

        const width = entry.contentBoxSize[0].inlineSize;
        const rootRem = parseFloat(
          getComputedStyle(document.documentElement).fontSize
        );
        const remWidth = width / rootRem;

        setIsFull(remWidth > threshold);
      });
    });

    observer.observe(elRef.current);
  }, []);
  return (
    <SwitcherStyles
      ref={elRef}
      className={clsx({
        [props.className || ""]: true,
        switcher: true,
        isFull: isFull,
      })}
      {...props}
    >
      {Children.map(props.children, (child, i) => {
        return cloneElement(child, {
          className: clsx({
            [child.props.className || ""]: true,
            partial: i === 0,
            full: i === 1,
          }),
        });
      })}
    </SwitcherStyles>
  );
}

const SwitcherStyles = styled.div`
  &.isFull {
    .partial {
      display: none;
    }
  }

  &:not(.isFull) {
    .full {
      display: none;
    }
  }
`;
