export const CardStyle = {
  border_width:{
    default:"border",
    medium:"border-2",
    large:"border-4"
  },
border_radius:{
    none: 'rounded-none',
      sm: 'rounded-sm',
      base: 'rounded-base',
      lg: 'rounded-lg',
      md: 'rounded-md',
      xl:"rounded-xl",
      "2xl":"rounded-2xl"
},
animation:{
scale:"hover:scale-[1.04] duration-100 ease-in",
none:"",
},
align:{
'center':"flex justify-center items-center flex-col text-center gap-5 md:gap-7",
'left':"flex justify-start items-start flex-col gap-5 md:gap-7"
},
 shadow: {
      none: ['shadow-none'],
      sm: ['shadow-sm'],
      base: ['shadow'],
      md: ['shadow-md'],
      lg: ['shadow-lg'],
      xl: ['shadow-xl'],
    }
}