import { ElementType } from "react";

export type AsProp<C extends ElementType> = {
  as?: C;
};
