import type { iSVG } from '@/types/svg';

export const svgs: iSVG[] = [
  {
    title: 'ABB',
    category: 'Bank',
    route: {
      light: '/library/abb-light.svg',
      dark: '/library/abb-dark.svg'
    },
    wordmark: {
      light: '/library/abb-wordmark-light.svg',
      dark: '/library/abb-wordmark-dark.svg'
    },
    url: 'https://abb-bank.az/'
  },
  {
    title: 'Kapital Bank',
    category: 'Bank',
    route: {
      light: '/library/kapital-bank-light.svg',
      dark: '/library/kapital-bank-dark.svg'
    },
    wordmark: {
      light: '/library/kapital-bank-wm-light.svg',
      dark: '/library/kapital-bank-wm-dark.svg'
    },
    url: 'https://www.kapitalbank.az//'
  },
];
