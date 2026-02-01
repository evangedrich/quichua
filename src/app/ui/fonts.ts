import { Montserrat, Josefin_Sans, Inter, Barlow_Condensed } from 'next/font/google';

export const montserrat = Montserrat({ weight: ['400','900'], subsets: ['latin'] });
export const josefinSans = Josefin_Sans({ weight: ['300','600'], subsets: ['latin'] });
export const inter = Inter({ weight: ['300','500','800'], subsets: ['latin'] });
export const barlowCondensed = Barlow_Condensed({ weight: ['300'], subsets: ['latin'], style: ['italic'] });
