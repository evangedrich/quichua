import { Montserrat, Inter, Barlow_Condensed } from 'next/font/google';

export const montserrat = Montserrat({ weight: ['300','900'], subsets: ['latin'] });
export const inter = Inter({ weight: ['300','500','800'], subsets: ['latin'] });
export const barlowCondensed = Barlow_Condensed({ weight: ['300'], subsets: ['latin'], style: ['italic'] });
