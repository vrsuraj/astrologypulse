import { cva } from 'class-variance-authority';

const base = cva(
  [
    'inline-flex',
    'items-center',
    'justify-center',
    'enabled:cursor-pointer',
    'focus:outline-none',
    'transition',
    'gap-1',
    'duration-150',
    'ease-in-out',
  ],
  {
    variants: {
      tone: {
        solid: ['border', 'border-transparent'],
        light: ['border', 'border-transparent'],
        transparent: ['border', 'border-transparent', 'bg-transparent'],
        outline: ['border', 'disabled:hover:bg-transparent'],
      },
      color: {
        white: ['focus:ring-gray-100'],
        blue: ['focus:ring-blue-100'],
        red: ['focus:ring-red-100'],
        green: ['focus:ring-green-100'],
        yellow: ['focus:ring-yellow-100'],
        purple: ['focus:ring-purple-100'],
        gray: ['focus:ring-gray-100'],
        dark: ['focus:ring-gray-200'],
        black: ['focus:ring-gray-300'],
        default:['']
      },
      size: {
        xs: ['text-xs','h-8'],
        sm: ['text-sm', 'h-10'],
        md: ['text-base', 'h-12'],
        lg: ['text-base', 'h-12'],
      },
      shape: {
        pill:["rounded-full"],
        rounded:["rounded-md"],
        square:["rounded-none"]
      },
      animation: {
        none: [],
        scale:["hover:scale-[1.04]"],
        pulse: ['animate-pulse'],
        bounce: ['animate-bounce'],
      },
      shadow_size: {
        none: ['shadow-none'],
        sm: ['shadow-sm'],
        base: ['shadow'],
        md: ['shadow-md'],
        lg: ['shadow-lg'],
        xl: ['shadow-xl'],
      },
      shadow_color: {
        none: [],
        white: [],
        blue: [],
        red: [],
        green: [],
        yellow: [],
        purple: [],
        gray: [],
        dark: [],
        black: [],
      },
      icon: {
        true: [],
        false: [],
      },
      loading: {
        true: ['cursor-progress'],
        false: [],
      },
      disabled: {
        true: ['cursor-not-allowed'],
        false: [],
      },
      with_ring: {
        true: ['focus:ring', 'focus:ring-offset-1'],
        false: ['focus:ring-0'],
      },
    },
    defaultVariants: {
      tone: 'solid',
      color: 'default',
    },
    compoundVariants: [
      {
        tone: ['solid', 'outline'],
        shadow_color: 'white',
        className: ['shadow-gray-200/50 hover:shadow-gray-200/60'],
      },
     
      {
        tone: ['solid', 'outline'],
        shadow_color: 'blue',
        className: ['shadow-blue-500/50', 'hover:shadow-blue-500/60'],
      },
      {
        tone: ['solid', 'outline'],
        shadow_color: 'red',
        className: ['shadow-red-500/50 hover:shadow-red-500/60'],
      },
      {
        tone: ['solid', 'outline'],
        shadow_color: 'green',
        className: ['shadow-green-500/50 hover:shadow-green-500/60'],
      },
      {
        tone: ['solid', 'outline'],
        shadow_color: 'yellow',
        className: ['shadow-yellow-500/50 hover:shadow-yellow-500/60'],
      },
      {
        tone: ['solid', 'outline'],
        shadow_color: 'purple',
        className: ['shadow-purple-500/50 hover:shadow-purple-500/60'],
      },
      {
        tone: ['solid', 'outline'],
        shadow_color: 'gray',
        className: ['shadow-gray-400/50 hover:shadow-gray-400/60'],
      },
      {
        tone: ['solid', 'outline'],
        shadow_color: 'dark',
        className: ['shadow-gray-600/50 hover:shadow-gray-600/60'],
      },
      {
        tone: ['solid', 'outline'],
        shadow_color: 'black',
        className: ['shadow-gray-800/50 hover:shadow-gray-800/60'],
      },
      {
        tone: 'light',
        shadow_color: 'white',
        className: ['shadow-gray-200/50 hover:shadow-gray-200/60'],
      },
      {
        tone: 'light',
        shadow_color: 'blue',
        className: ['shadow-blue-300/50', 'hover:shadow-blue-300/60'],
      },
      {
        tone: 'light',
        shadow_color: 'red',
        className: ['shadow-red-300/50 hover:shadow-red-300/60'],
      },
      {
        tone: 'light',
        shadow_color: 'green',
        className: ['shadow-green-300/50 hover:shadow-green-300/60'],
      },
      {
        tone: 'light',
        shadow_color: 'yellow',
        className: ['shadow-yellow-300/50 hover:shadow-yellow-300/60'],
      },
      {
        tone: 'light',
        shadow_color: 'purple',
        className: ['shadow-purple-300/50 hover:shadow-purple-300/60'],
      },
      {
        tone: 'light',
        shadow_color: 'gray',
        className: ['shadow-gray-300/50 hover:shadow-gray-300/60'],
      },
      {
        tone: 'light',
        shadow_color: 'dark',
        className: ['shadow-gray-400/50 hover:shadow-gray-400/60'],
      },
      {
        tone: 'light',
        shadow_color: 'black',
        className: ['shadow-gray-500/50 hover:shadow-gray-500/60'],
      },
      {
        icon: false,
        size: 'xs',
        className: ['px-2', 'h-6'],
      },
      {
        icon: false,
        size: 'sm',
        className: ['px-2.5', 'h-8'],
      },
      {
        icon: false,
        size: 'md',
        className: ['px-4', 'h-10'],
      },
      {
        icon: false,
        size: 'lg',
        className: ['px-5', 'h-12'],
      },
      {
        icon: true,
        size: 'xs',
        className: ['w-6', 'h-6'],
      },
      {
        icon: true,
        size: 'sm',
        className: ['w-8', 'h-8'],
      },
      {
        icon: true,
        size: 'md',
        className: ['w-10', 'h-10'],
      },
      {
        icon: true,
        size: 'lg',
        className: ['w-12', 'h-12'],
      },
      {
        tone: 'solid',
        color: ['blue', 'red', 'green', 'yellow', 'purple', 'gray', 'dark', 'black','default'],
        className: ['border-transparent'],
      },
      {
        tone: 'solid',
        color: 'default',
        className: [
          'text-white',
          'bg-highlight',
          'hover:opacity-80',
          // 'hover:bg-primary',
          // 'hover:text-white'
        ],
      },
      {
        tone: 'solid',
        color: 'white',
        className: [
          'text-gray-800',
          'border-gray-100',
          'bg-white',
          'focus:bg-gray-50',
          'hover:bg-primary',
          "hover:text-white",
          "hover:border-transparent"
        
        ],
      },
      {
        tone: 'solid',
        color: 'blue',
        className: [
          'text-white',
          'bg-blue-500',
          'focus:bg-blue-600',
          'hover:bg-blue-600',
          'active:bg-blue-600/90',
          'disabled:bg-blue-300',
          'disabled:hover:bg-blue-300',
        ],
      },
      {
        tone: 'solid',
        color: 'red',
        className: [
          'text-white',
          'bg-red-500',
          'focus:bg-red-600',
          'hover:bg-red-600',
          'active:bg-red-600/90',
          'disabled:bg-red-300',
          'disabled:hover:bg-red-300',
        ],
      },
      {
        tone: 'solid',
        color: 'green',
        className: [
          'text-white',
          'bg-green-500',
          'focus:bg-green-600',
          'hover:bg-green-600',
          'active:bg-green-600/90',
          'disabled:bg-green-300',
          'disabled:hover:bg-green-300',
        ],
      },
      {
        tone: 'solid',
        color: 'yellow',
        className: [
          'text-white',
          'bg-yellow-400',
          'focus:bg-yellow-500',
          'hover:bg-yellow-500',
          'active:bg-yellow-500/90',
          'disabled:bg-yellow-200',
          'disabled:hover:bg-yellow-200',
        ],
      },
      {
        tone: 'solid',
        color: 'purple',
        className: [
          'text-white',
          'bg-purple-500',
          'focus:bg-purple-600',
          'hover:bg-purple-600',
          'active:bg-purple-600/90',
          'disabled:bg-purple-300',
          'disabled:hover:bg-purple-300',
        ],
      },
      {
        tone: 'solid',
        color: 'gray',
        className: [
          'text-gray-800',
          'bg-gray-200',
          'focus:bg-gray-300',
          'hover:bg-gray-300',
          'active:bg-gray-300/90',
          'disabled:bg-gray-100',
          'disabled:hover:bg-gray-100',
          'disabled:text-gray-400',
        ],
      },
      {
        tone: 'solid',
        color: 'dark',
        className: [
          'text-white',
          'bg-gray-700',
          'focus:bg-gray-800',
          'hover:bg-gray-800',
          'active:bg-gray-800/90',
          'disabled:bg-gray-500',
          'disabled:hover:bg-gray-500',
        ],
      },
      {
        tone: 'solid',
        color: 'black',
        className: ['text-white', 'bg-black', 'active:bg-black/90', 'disabled:bg-gray-800'],
      },
      {
        tone: 'light',
        color: 'white',
        className: [
          'text-gray-800',
          'hover:text-gray-900',
          'border-gray-100',
          'bg-white',
          'disabled:bg-gray-50/50',
          'disabled:hover:bg-gray-50',
        ],
      },
      {
        tone: 'light',
        color: 'blue',
        className: [
          'text-blue-500',
          'disabled:text-blue-400',
          'disabled:hover:text-blue-400',
          'bg-blue-100',
          'hover:bg-blue-200',
          'active:bg-blue-100',
          'active:text-blue-600',
          'hover:text-blue-800',
          'focus:text-blue-700',
          'disabled:bg-blue-50',
          'disabled:hover:bg-blue-50',
        ],
      },
      {
        tone: 'light',
        color: 'red',
        className: [
          'text-red-500',
          'disabled:text-red-400',
          'disabled:hover:text-red-400',
          'bg-red-100',
          'hover:bg-red-200',
          'active:bg-red-100',
          'active:text-red-600',
          'hover:text-red-800',
          'focus:text-red-700',
          'disabled:bg-red-50',
          'disabled:hover:bg-red-50',
        ],
      },
      {
        tone: 'light',
        color: 'green',
        className: [
          'text-green-500',
          'disabled:text-green-400',
          'disabled:hover:text-green-400',
          'bg-green-100',
          'hover:bg-green-200',
          'active:bg-green-100',
          'hover:text-green-600',
          'active:text-green-800',
          'focus:text-green-700',
          'disabled:bg-green-50',
          'disabled:hover:bg-green-50',
        ],
      },
      {
        tone: 'light',
        color: 'yellow',
        className: [
          'text-yellow-500',
          'disabled:text-yellow-400',
          'disabled:hover:text-yellow-400',
          'bg-yellow-100',
          'hover:bg-yellow-200',
          'active:bg-yellow-100',
          'active:text-yellow-600',
          'hover:text-yellow-800',
          'focus:text-yellow-700',
          'disabled:bg-yellow-50',
          'disabled:hover:bg-yellow-50',
        ],
      },
      {
        tone: 'light',
        color: 'purple',
        className: [
          'text-purple-500',
          'disabled:text-purple-400',
          'disabled:hover:text-purple-400',
          'bg-purple-100',
          'hover:bg-purple-200',
          'active:bg-purple-100',
          'active:text-purple-600',
          'hover:text-purple-800',
          'focus:text-purple-700',
          'disabled:bg-purple-50',
          'disabled:hover:bg-purple-50',
        ],
      },
      {
        tone: 'light',
        color: 'gray',
        className: [
          'text-gray-500',
          'disabled:text-gray-400',
          'disabled:hover:text-gray-400',
          'bg-gray-100',
          'hover:bg-gray-200',
          'active:bg-gray-100',
          'active:text-gray-600',
          'hover:text-gray-800',
          'focus:text-gray-700',
          'disabled:bg-gray-50',
          'disabled:hover:bg-gray-50',
        ],
      },
      {
        tone: 'light',
        color: 'dark',
        className: [
          'text-gray-600',
          'disabled:text-gray-500',
          'disabled:hover:text-gray-500',
          'bg-gray-200',
          'hover:bg-gray-300',
          'active:bg-gray-200',
          'active:text-gray-700',
          'hover:text-gray-900',
          'focus:text-gray-800',
          'disabled:bg-gray-100',
          'disabled:hover:bg-gray-100',
        ],
      },
      {
        tone: 'light',
        color: 'black',
        className: [
          'text-gray-700',
          'disabled:text-gray-600',
          'disabled:hover:text-gray-600',
          'bg-gray-300',
          'hover:bg-gray-400',
          'active:bg-gray-300',
          'active:text-gray-800',
          'hover:text-black',
          'focus:text-gray-900',
          'disabled:bg-gray-200',
          'disabled:hover:bg-gray-200',
        ],
      },
      {
        tone: 'transparent',
        color: 'default',
        className: [
          'text-default',
         
        ],
      },
      {
        tone: 'transparent',
        color: 'blue',
        className: [
          'text-blue-500',
          'disabled:text-blue-200',
          'hover:text-blue-600',
          'active:text-blue-700',
        ],
      },
      {
        tone: 'transparent',
        color: 'red',
        className: [
          'text-red-500',
          'disabled:text-red-200',
          'hover:text-red-600',
          'active:text-red-700',
        ],
      },
      {
        tone: 'transparent',
        color: 'green',
        className: [
          'text-green-500',
          'disabled:text-green-200',
          'hover:text-green-600',
          'active:text-green-700',
        ],
      },
      {
        tone: 'transparent',
        color: 'yellow',
        className: [
          'text-yellow-400',
          'disabled:text-yellow-100',
          'hover:text-yellow-500',
          'active:text-yellow-600',
        ],
      },
      {
        tone: 'transparent',
        color: 'purple',
        className: [
          'text-purple-500',
          'disabled:text-purple-200',
          'hover:text-purple-600',
          'active:text-purple-700',
        ],
      },
      {
        tone: 'transparent',
        color: 'gray',
        className: [
          'text-gray-500',
          'disabled:text-gray-200',
          'hover:text-gray-600',
          'active:text-gray-700',
        ],
      },
      {
        tone: 'transparent',
        color: 'dark',
        className: [
          'text-gray-700',
          'disabled:text-gray-500',
          'hover:text-gray-800',
          'active:text-gray-900',
        ],
      },
      {
        tone: 'transparent',
        color: 'black',
        className: ['text-black', 'disabled:text-gray-700'],
      },
      {
        tone: 'outline',
        color: 'default',
        className: [
          'text-default',
          'border-highlight',
          'hover:bg-highlight',
          'hover:text-white'
        ],
      },
      {
        tone: 'outline',
        color: 'blue',
        className: [
          'text-blue-500',
          'hover:text-blue-600',
          'border-blue-500',
        ],
      },
      {
        tone: 'outline',
        color: 'red',
        className: [
          'text-red-500',

          'hover:text-red-600',

          'border-red-500',
        ],
      },
      {
        tone: 'outline',
        color: 'green',
        className: [
          'text-green-500',

          'hover:text-green-600',

          'border-green-500',
        ],
      },
      {
        tone: 'outline',
        color: 'yellow',
        className: [
          'text-yellow-500',
          'hover:text-yellow-500',
          'border-yellow-500',
        ],
      },
      {
        tone: 'outline',
        color: 'purple',
        className: [
          'text-purple-500',
          'hover:text-purple-600',
          'border-purple-500',
        ],
      },
      {
        tone: 'outline',
        color: 'gray',
        className: [
          'text-gray-500',
          'hover:text-gray-500',
          'hover:text-gray-600',
          'border-gray-200',
        ],
      },
      {
        tone: 'outline',
        color: 'dark',
        className: [
          'text-gray-700',
        
          'hover:text-gray-800',

          'border-gray-700',
        ],
      },
      {
        tone: 'outline',
        color: 'black',
        className: [
          'text-black',       
          'border-black',
        ],
      },
    ],
  }
);


const buttonStyles = {
  base,
};

export { buttonStyles };