export const ButtonStyle = {
    size:{
        xs: 'text-xs h-10 !max-w-[200px]',
        sm: 'text-base h-12 !max-w-xs', 
        md: 'text-base h-14 !max-w-sm', 
        lg: 'text-lg h-16 !max-w-md',
    },
    shape: {
        pill: 'rounded-full',
        rounded: 'rounded-md',
        square: 'rounded-none',
    },
      animation: {
        none: "",
        pulse: 'animate-pulse',
        bounce: 'animate-bounce',
      },
    //   tone:{
    //     'solid':'' , 'light' :'', 'outline':'','transparent':''
    //   },
      shadow_size: {
        none: 'shadow-none',
        sm: 'shadow-sm',
        base: 'shadow',
        md: 'shadow-md',
        lg: 'shadow-lg',
        xl: 'shadow-xl',
      },
       with_ring: {
        true: 'focus:ring focus:ring-offset-1',
        false: 'focus:ring-0',
      },   
      target:{
        self:"_self",
        blank:"_blank"
      } 
}