import { ReactElement } from "react";
import { TextColor, TextSize, TextWeight } from "../text/text.type";

export type ParagraphProps = {
  color?: TextColor;
  size?: TextSize;
  weight?: TextWeight;
  children?:string | ReactElement
};