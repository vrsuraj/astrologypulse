import { ReactElement } from "react";

export enum ButtonTargetEnum {
self="_self",
blank="_blank",
}

export type ButtonColor =
  | 'white'
  | 'blue'
  | 'red'
  | 'green'
  | 'yellow'
  | 'purple'
  | 'gray'
  | 'dark'
  | 'black' 
  | 'default' ;

export type ButtonAnimation = 'none' | 'pulse' | 'bounce';
export type ButtonShape = 'pill' | 'rounded' | 'square';
export type ButtonShadowColor =
  | 'none'
  | 'white'
  | 'blue'
  | 'red'
  | 'green'
  | 'yellow'
  | 'purple'
  | 'gray'
  | 'dark'
  | 'black';
export type ButtonShadow = 'none' | 'sm' | 'base' | 'md' | 'lg' | 'xl';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';
export type ButtonTarget = 'self' | 'blank'
export type ButtonTone = 'solid' | 'light' | 'outline' | 'transparent';
export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'link'
  | 'danger'
  | 'success'
  | 'warning'
  | 'info';

export interface ButtonProps  {
  animation?: ButtonAnimation;
  target?:ButtonTarget;
  extra?:string,
  color?:ButtonColor | any;
  custom_class?:string | undefined;
  disabled?: boolean;
  icon?: boolean;
  loading?:boolean;
  shape?: ButtonShape;
  variant?: ButtonVariant;
  shadow_size?: ButtonShadow;
  shadow_color?: ButtonShadowColor;
  callback?:()=> void;
  size?: ButtonSize;
  children?:string | ReactElement;
  bg_color?:string;
  tone?: ButtonTone;
  with_ring?: boolean;
  link?:string
};