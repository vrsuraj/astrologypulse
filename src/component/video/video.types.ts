export type VideoRadius = 'none' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';


export interface VideoProps{
  alt?: string;
  caption?: string;
  loading?: 'eager' | 'lazy';
  radius?: VideoRadius;
  src?: string;
  thumbnail?:string;
  width?:string; // (example 50% , 60%)
  wrapper_class?:string;
}