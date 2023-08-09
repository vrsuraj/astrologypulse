import { ReactElement } from "react";

export type TextColor = string;

export enum TextClassName{
    h1 = "h1",
    h2 = "h2",
    h3 = "h3",
    h4 = "h4",
    h5 = "h5",
    h6 = "h6",
}

export type TextSize =
  | 'xs'
  | 'sm'
  | 'base'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'
  | '8xl'
  | '9xl';

export type TextVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type TextWeight =
  | 'thin'
  | 'extralight'
  | 'light'
  | 'normal'
  | 'medium'
  | 'semibold'
  | 'bold'
  | 'extrabold'
  | 'black';

export interface TextProps {
  color?: TextColor;
  size?: TextSize;
  variant?: TextVariant;
  weight?: TextWeight;
  children?:string | ReactElement,
  extra?:string;
};