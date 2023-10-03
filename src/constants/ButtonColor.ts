export const ButtonColorCSS = {
  red: 'bg-red-500 border-red-400 text-white',
  'red-border': 'border-red-400 text-red-500',
  blue: 'bg-blue-500 border-blue-400 text-white',
} as const satisfies Record<string, string>;
