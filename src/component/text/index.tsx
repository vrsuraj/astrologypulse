import React, { JSXElementConstructor, ReactElement } from "react";
import { TextClassName, TextProps } from "./text.type";
import { TextStyle } from "./text.style";

interface Props extends TextProps {
  extra?: string;
  children?: string | ReactElement<any, string | JSXElementConstructor<any>>;
}

export default function Text(props: Props) {
  const Component = props?.variant || "h3";
  const size = TextStyle["size"][props?.size!] || "";
  const weight = TextStyle["weight"][props?.weight!] || "";
  const color = props?.color || "";
  const className = TextClassName[Component];
  const extra = props.extra || "";

  return (
    <Component
      dangerouslySetInnerHTML={{ __html: props.children! }}
      style={{ color: color }}
      className={`${className} ${size} ${weight} dark:text-white text-zinc-800 ${extra} headeing`}
    ></Component>
  );
}
