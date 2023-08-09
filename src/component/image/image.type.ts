export type ImageFit = 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
export type ImageRadius = 'none' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';
export type ImagePosition = 'center' | 'top' | 'bottom' | 'left' | "left-bottom"| "left-top"| 'right-top' | 'right-bottom'  | 'none';



export interface ImageProps{
  alt?: string;
  caption?: string;
  fit?: ImageFit;
  position?:ImagePosition,
  loading?: 'eager' | 'lazy';
  radius?: ImageRadius;
  src?: string;
  width?:string; // (example 50% , 60%)
  wrapper_class?:string;
}