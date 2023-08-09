import { buttonVariants } from "../../src/component/button/button.variant";
import { Provider, useContext,createContext } from "react";


export type Variant = {
  components: VariantComponents;
};

type VariantComponents = {
 
  Button: typeof buttonVariants;
 
};

const defaultVariant: Variant = {
  components: {
    Button: buttonVariants,
  },
};

export type VariantContextType = {
  variant: Variant;
};

const VariantContext = createContext<VariantContextType>({
  variant: defaultVariant,
});

export const VariantProvider: Provider<VariantContextType> = VariantContext.Provider;

export function useVariant(): Variant {
  return useContext(VariantContext)?.variant || defaultVariant;
}

export function useComponentVariant<C extends keyof VariantComponents>(
  component: C,
  componentVariant?: keyof VariantComponents[C]
) {
  const variant = useVariant();

  if (!componentVariant) {
    return {};
  }

  return variant.components[component][componentVariant];
}
