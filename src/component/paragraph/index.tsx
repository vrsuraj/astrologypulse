import React, { JSXElementConstructor, ReactElement } from "react";
import { TextProps } from "../text/text.type";
import { TextStyle } from "../text/text.style";
import dynamic from "next/dynamic";

const DynamicParagraph = dynamic(
  () =>
    import("../../../components/dynamicComponentLoad").then(
      (mod) => mod.ParagraphComponent
    ),
  { ssr: false }
);

interface Props extends TextProps {
  extra?: string;
  children?: string | ReactElement<any, string | JSXElementConstructor<any>>;
}

export default function Paragraph(props: Props) {
  const size = TextStyle["size"][props?.size!] || "";
  const weight = TextStyle["weight"][props?.weight!] || "";
  const color = props?.color || "";
  const className = "para";
  const extra = props.extra || "";

  return (
    <DynamicParagraph
      weight={weight}
      extra={extra}
      size={size}
      className={className}
      color={color}
    >
      {props.children}
    </DynamicParagraph>
  );
}
