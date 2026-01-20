import styles from '@/app/ui/tocapu.module.css'

const black: string = "#282e20";
const white: string = "#e6dfd3";
const red: string = "#e85538";
const green: string = "#5f633a";
const yellow: string = "#f0d699";
const brown: string = "#d9b484";
const orange: string = "#d9a04c";
const darkred: string = "#bf452c";

interface tocapu {
  name: string,
  svg: React.ReactNode,
}

const move: boolean = false;

export const tocapuLibrary: tocapu[] = [
  {
    name: "sinchi",
    svg: <div className={`${styles.svgBox} ${(move)?styles.svgMove:""}`}><svg viewBox="5 5 90 90" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="15" width="70" height="70" fill={black} />
      <path d="M7.5,7.5 92.5,7.5 92.5,92.5 7.5,92.5z" stroke={brown} strokeWidth="15" strokeLinecap="butt"></path>

      <path d="M85,15 85,10 15,10 15,15 25,15 25,25 35,25 35,35 45,35 45,45 55,45 55,35 65,35 65,25 75,25 75,15z" fill={red}></path>
      <rect x="48.167" y="10" width="3.333" height="10" fill={green} />
      <rect x="15" y="25" width="10" height="10" fill={white} />
      <rect x="15" y="45" width="10" height="10" fill={white} />
      <rect x="15" y="65" width="10" height="20" fill={white} />
      <rect x="25" y="35" width="10" height="10" fill={white} />
      <rect x="25" y="55" width="10" height="10" fill={white} />
      <rect x="35" y="45" width="10" height="10" fill={white} />
      <rect x="35" y="65" width="10" height="20" fill={white} />
      <rect x="45" y="55" width="10" height="10" fill={white} />
      <rect x="55" y="45" width="10" height="10" fill={white} />
      <rect x="55" y="65" width="10" height="20" fill={white} />
      <rect x="65" y="35" width="10" height="10" fill={white} />
      <rect x="65" y="55" width="10" height="10" fill={white} />
      <rect x="75" y="25" width="10" height="10" fill={white} />
      <rect x="75" y="45" width="10" height="10" fill={white} />
      <rect x="75" y="65" width="10" height="20" fill={white} />

      <g className={styles.zigzag}>
        <path d="M5,80 10,72.5 15,80 20,72.5 25,80 30,72.5 35,80 40,72.5 45,80 50,72.5 55,80 60,72.5 65,80 70,72.5 75,80 80,72.5 90,87.5" stroke={red} strokeLinecap="square" strokeWidth="5"></path>
        <path d="M5,80 10,72.5 15,80 20,72.5 25,80 30,72.5 35,80 40,72.5 45,80 50,72.5 55,80 60,72.5 65,80 70,72.5 75,80 80,72.5 90,87.5" stroke={brown} strokeLinecap="square" strokeWidth="3.5"></path>
        <path d="M5,80 10,72.5 15,80 20,72.5 25,80 30,72.5 35,80 40,72.5 45,80 50,72.5 55,80 60,72.5 65,80 70,72.5 75,80 80,72.5 90,87.5" stroke={green} strokeLinecap="square" strokeWidth="1.5"></path>
      </g>

      <rect x="10" y="10" width="5" height="3.333" fill={yellow} />
      <rect x="10" y="13.333" width="5" height="3.333" fill={red} />
      <rect x="10" y="16.667" width="5" height="3.333" fill={yellow} />
      <rect x="10" y="20" width="5" height="3.333" fill={red} />
      <rect x="10" y="23.333" width="5" height="3.333" fill={yellow} />
      <rect x="10" y="26.667" width="5" height="10" fill={green} />
      <rect x="10" y="36.667" width="5" height="3.333" fill={yellow} />
      <rect x="10" y="40" width="5" height="3.333" fill={red} />
      <rect x="10" y="43.333" width="5" height="3.333" fill={yellow} />
      <rect x="10" y="46.667" width="5" height="3.333" fill={red} />
      <rect x="10" y="50" width="5" height="3.333" fill={yellow} />
      <rect x="10" y="53.333" width="5" height="3.333" fill={green} />
      <rect x="10" y="56.667" width="5" height="10" fill={red} />
      <rect x="10" y="66.667" width="5" height="3.333" fill={green} />
      <rect x="10" y="70" width="5" height="3.333" fill={yellow} />
      <rect x="10" y="73.333" width="5" height="3.333" fill={red} />
      <rect x="10" y="76.667" width="5" height="3.333" fill={yellow} />
      <rect x="10" y="80" width="5" height="3.333" fill={red} />
      <rect x="10" y="83.333" width="5" height="6.667" fill={yellow} />

      <rect x="15" y="85" width="2.8" height="5" fill={green} />
      <rect x="17.8" y="85" width="1.4" height="5" fill={yellow} />
      <rect x="19.2" y="85" width="1.4" height="5" fill={red} />
      <rect x="20.6" y="85" width="1.4" height="5" fill={yellow} />
      <rect x="22" y="85" width="1.4" height="5" fill={red} />
      <rect x="23.4" y="85" width="1.4" height="5" fill={yellow} />
      <rect x="24.8" y="85" width="5.6" height="5" fill={green} />
      <rect x="30.4" y="85" width="1.4" height="5" fill={yellow} />
      <rect x="31.8" y="85" width="1.4" height="5" fill={red} />
      <rect x="33.2" y="85" width="1.4" height="5" fill={yellow} />
      <rect x="34.6" y="85" width="1.4" height="5" fill={red} />
      <rect x="35.8" y="85" width="1.4" height="5" fill={yellow} />
      <rect x="37.2" y="85" width="2.8" height="5" fill={green} />
      <rect x="40" y="85" width="4.2" height="5" fill={red} />
      <rect x="44.2" y="85" width="2.8" height="5" fill={green} />
      <rect x="47" y="85" width="1.4" height="5" fill={yellow} />
      <rect x="48.4" y="85" width="1.4" height="5" fill={red} />
      <rect x="49.8" y="85" width="1.4" height="5" fill={yellow} />
      <rect x="51.2" y="85" width="1.4" height="5" fill={red} />
      <rect x="52.6" y="85" width="1.4" height="5" fill={yellow} />
      <rect x="54" y="85" width="4.2" height="5" fill={green} />
      <rect x="58.2" y="85" width="1.4" height="5" fill={yellow} />
      <rect x="59.6" y="85" width="1.4" height="5" fill={red} />
      <rect x="61" y="85" width="1.4" height="5" fill={yellow} />
      <rect x="62.4" y="85" width="1.4" height="5" fill={red} />
      <rect x="63.8" y="85" width="1.4" height="5" fill={yellow} />
      <rect x="65.2" y="85" width="2.8" height="5" fill={green} />
      <rect x="68" y="85" width="4.2" height="5" fill={red} />
      <rect x="72.2" y="85" width="2.8" height="5" fill={green} />
      <rect x="75" y="85" width="1.4" height="5" fill={yellow} />
      <rect x="76.4" y="85" width="1.4" height="5" fill={red} />
      <rect x="77.8" y="85" width="1.4" height="5" fill={yellow} />
      <rect x="79.2" y="85" width="1.4" height="5" fill={red} />
      <rect x="80.6" y="85" width="1.4" height="5" fill={yellow} />
      <rect x="82" y="85" width="3" height="5" fill={green} />

      <rect x="85" y="10" width="5" height="3.333" fill={yellow} />
      <rect x="85" y="13.333" width="5" height="3.333" fill={red} />
      <rect x="85" y="16.667" width="5" height="3.333" fill={yellow} />
      <rect x="85" y="20" width="5" height="3.333" fill={red} />
      <rect x="85" y="23.333" width="5" height="3.333" fill={yellow} />
      <rect x="85" y="26.667" width="5" height="10" fill={green} />
      <rect x="85" y="36.667" width="5" height="3.333" fill={yellow} />
      <rect x="85" y="40" width="5" height="3.333" fill={red} />
      <rect x="85" y="43.333" width="5" height="3.333" fill={yellow} />
      <rect x="85" y="46.667" width="5" height="3.333" fill={red} />
      <rect x="85" y="50" width="5" height="3.333" fill={yellow} />
      <rect x="85" y="53.333" width="5" height="3.333" fill={green} />
      <rect x="85" y="56.667" width="5" height="10" fill={red} />
      <rect x="85" y="66.667" width="5" height="3.333" fill={green} />
      <rect x="85" y="70" width="5" height="3.333" fill={yellow} />
      <rect x="85" y="73.333" width="5" height="3.333" fill={red} />
      <rect x="85" y="76.667" width="5" height="3.333" fill={yellow} />
      <rect x="85" y="80" width="5" height="3.333" fill={red} />
      <rect x="85" y="83.333" width="5" height="6.667" fill={yellow} />

      <path d="M7.5,7.5 92.5,7.5 92.5,92.5 7.5,92.5z" stroke={brown} strokeWidth="5" strokeLinecap="butt"></path>
    </svg></div>
  },
  {
    name: "owl",
    svg: <div className={`${styles.svgBox} ${(move)?styles.svgMove:""}`}><svg viewBox="5 5 90 90" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="90" height ="90" fill={green} />
      <rect x="10" y="10" width="80" height ="80" fill={red} />
      <rect x="15" y="15" width="35" height ="35" fill={yellow} />
      <rect x="50" y="15" width="35" height ="35" fill={brown} />
      <rect x="50" y="50" width="35" height ="35" fill={yellow} />
      <rect x="15" y="50" width="35" height ="35" fill={brown} />
      <path d="M22.5,22.5 22.5,42.5 32.5,42.5 32.5,22.5 42.5,22.5 42.5,42.5" stroke={red} strokeWidth="5" strokeLinecap="square"  className={styles.tucu1a}></path>
      <path d="M57.5,22.5 57.5,42.5 77.5,42.5 77.5,22.5z" stroke={red} strokeWidth="5" strokeLinecap="square"  className={styles.tucu2a}></path>
      <path d="M60,25 60,40 67.5,40z" fill={green}  className={styles.tucu2a}></path>
      <path d="M60,25 67.5,40 67.5,25z" fill={yellow}  className={styles.tucu2a}></path>
      <path d="M67.5,40 75,40 75,25z" fill={yellow}  className={styles.tucu2a}></path>
      <path d="M57.5,57.5 57.5,77.5 67.5,77.5 67.5,57.5 77.5,57.5 77.5,77.5" stroke={red} strokeWidth="5" strokeLinecap="square" className={styles.tucu1b}></path>
      <path d="M22.5,57.5 22.5,77.5 42.5,77.5 42.5,57.5z" stroke={red} strokeWidth="5" strokeLinecap="square" className={styles.tucu2b}></path>
      <path d="M25,60 25,75 32.5,75z" fill={green} className={styles.tucu2b}></path>
      <path d="M25,60 32.5,75 32.5,60z" fill={yellow} className={styles.tucu2b}></path>
      <path d="M32.5,75 40,75 40,60z" fill={yellow} className={styles.tucu2b}></path>
    </svg></div>
  },
  {
    name: "maskaypacha",
    svg: <div className={`${styles.svgBox} ${(move)?styles.svgMove:""}`}><svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="100" height="100" fill={yellow} />
      <rect x="5" y="5" width="90" height="90" fill={red} />
      <path d="M15,65 M13,90 22,90 20,65 15,65" fill={black} className={styles.feather1}></path>
      <rect x="15.5" y="83.5" width="4" height="4" fill={white} className={styles.feather1} />
      <path d="M25,65 M23,90 32,90 30,65 25,65" fill={black} className={styles.feather2}></path>
      <rect x="25.5" y="83.5" width="4" height="4" fill={white} className={styles.feather2} />
      <path d="M35,65 M33,90 42,90 40,65 35,65" fill={black} className={styles.feather3}></path>
      <rect x="35.5" y="83.5" width="4" height="4" fill={white} className={styles.feather3} />
      <path d="M15,55 15,65 20,65 20,60 25,60 25,65 30,65 30,60 35,60 35,65 40,65 40,55z" fill={brown}></path>
      <rect x="65" y="10" width="25" height="25" fill={green} className={styles.pastoralEye} />
      <rect x="69" y="14" width="17" height="17" fill={brown} className={styles.pastoralEye} />
      <rect x="72.5" y="17.5" width="10" height="10" fill={black} className={styles.pastoralEye} />
      <rect x="75.5" y="20.5" width="4" height="4" fill={white} className={styles.pastoralEye} />
      <path d="M32.5,15 15,15 15,30 25,30 25,25 20,25 20,20 30,20 30,35 10,35 10,10 35,10 72.5,65 90,65 90,90 70,90 70,75 80,75 80,80 75,80 75,85 85,85 85,70 70,70z" fill={white}></path>
      <path d="M32.5,15 15,15 15,30 25,30 25,25 20,25 20,20 30,20 67.5,75 80,75 80,80 75,80 75,85 85,85 85,70 70,70z" fill={green}></path>
    </svg></div>
  },
  {
    name: "altMaskaypacha",
    svg: <div className={`${styles.svgBox} ${(move)?styles.svgMove:""}`}><svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="100" height="100" fill={green} />
      <rect x="5" y="5" width="90" height="90" fill={red} />
      <path d="M15,65 M13,90 22,90 20,65 15,65" fill={black} className={styles.feather1}></path>
      <rect x="15.5" y="83.5" width="4" height="4" fill={white} className={styles.feather1} />
      <path d="M25,65 M23,90 32,90 30,65 25,65" fill={black} className={styles.feather2}></path>
      <rect x="25.5" y="83.5" width="4" height="4" fill={white} className={styles.feather2} />
      <path d="M35,65 M33,90 42,90 40,65 35,65" fill={black} className={styles.feather3}></path>
      <rect x="35.5" y="83.5" width="4" height="4" fill={white} className={styles.feather3} />
      <path d="M15,55 15,65 20,65 20,60 25,60 25,65 30,65 30,60 35,60 35,65 40,65 40,55z" fill={brown}></path>
      <rect x="65" y="10" width="25" height="25" fill={green} className={styles.pastoralEye} />
      <rect x="69" y="14" width="17" height="17" fill={brown} className={styles.pastoralEye} />
      <rect x="72.5" y="17.5" width="10" height="10" fill={black} className={styles.pastoralEye} />
      <rect x="75.5" y="20.5" width="4" height="4" fill={white} className={styles.pastoralEye} />
      <path d="M32.5,15 15,15 15,30 25,30 25,25 20,25 20,20 30,20 30,35 10,35 10,10 35,10 72.5,65 90,65 90,90 70,90 70,75 80,75 80,80 75,80 75,85 85,85 85,70 70,70z" fill={white}></path>
      <path d="M32.5,15 15,15 15,30 25,30 25,25 20,25 20,20 30,20 67.5,75 80,75 80,80 75,80 75,85 85,85 85,70 70,70z" fill={green}></path>
    </svg></div>
  },
  {
    name: "teeth1",
    svg: <div className={`${styles.svgBox} ${(move)?styles.svgMove:""}`}><svg viewBox="4 4 92 92" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="92" height="92" fill={brown} />
      <rect x="8" y="8" width="84" height="84" fill={red} />
      <rect x="16" y="12" width="12" height="76" fill={white} />
      <path d="M12,12 24,12 24,20 20,20 20,16 16,16 16,28 20,28 20,24 24,24 24,36 20,36 20,32 16,32 16,44 20,44 20,40 24,40 24,52 20,52 20,48 16,48 16,60 20,60 20,56 24,56 24,68 20,68 20,64 16,64 16,76 20,76 20,72 24,72 24,84 20,84 20,80 16,80 16,92 20,92 20,88 24,88 24,100 20,100 20,96 16,96 16,104 12,104z" fill={black} className={styles.kiru1}></path>
      <path d="M28,-4 40,-4 40,4 36,4 36,0 32,0 32,12 36,12 36,8 40,8 40,20 36,20 36,16 32,16 32,28 36,28 36,24 40,24 40,36 36,36 36,32 32,32 32,44 36,44 36,40 40,40 40,52 36,52 36,48 32,48 32,60 36,60 36,56 40,56 40,68 36,68 36,64 32,64 32,76 36,76 36,72 40,72 40,84 36,84 36,80 32,80 32,88 28,88z" fill={green} className={styles.kiru2}></path>
      <rect x="48" y="12" width="12" height="76" fill={white} />
      <path d="M44,12 56,12 56,20 52,20 52,16 48,16 48,28 52,28 52,24 56,24 56,36 52,36 52,32 48,32 48,44 52,44 52,40 56,40 56,52 52,52 52,48 48,48 48,60 52,60 52,56 56,56 56,68 52,68 52,64 48,64 48,76 52,76 52,72 56,72 56,84 52,84 52,80 48,80 48,92 52,92 52,88 56,88 56,100 52,100 52,96 48,96 48,104 44,104z" fill={black} className={styles.kiru1}></path>
      <path d="M60,-4 72,-4 72,4 68,4 68,0 64,0 64,12 68,12 68,8 72,8 72,20 68,20 68,16 64,16 64,28 68,28 68,24 72,24 72,36 68,36 68,32 64,32 64,44 68,44 68,40 72,40 72,52 68,52 68,48 64,48 64,60 68,60 68,56 72,56 72,68 68,68 68,64 64,64 64,76 68,76 68,72 72,72 72,84 68,84 68,80 64,80 64,88 60,88z" fill={green} className={styles.kiru2}></path>
      <rect x="80" y="12" width="8" height="76" fill={black} />
      <path d="M76,12 88,12 88,20 84,20 84,16 80,16 80,28 84,28 84,24 88,24 88,36 84,36 84,32 80,32 80,44 84,44 84,40 88,40 88,52 84,52 84,48 80,48 80,60 84,60 84,56 88,56 88,68 84,68 84,64 80,64 80,76 84,76 84,72 88,72 88,84 84,84 84,80 80,80 80,92 84,92 84,88 88,88 88,100 84,100 84,96 80,96 80,104 76,104z" fill={white} className={styles.kiru1}></path>
      <path d="M10,10 90,10 90,90 10,90z" stroke={red} strokeWidth="4" strokeLinecap="butt"></path>
      <path d="M4,4 96,4 96,96 4,96z" stroke={brown} strokeWidth="8" strokeLinecap="butt"></path>
    </svg></div>
  },
  {
    name: "teeth2",
    svg: <div className={`${styles.svgBox} ${(move)?styles.svgMove:""}`}><svg viewBox="4 4 92 92" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="92" height="92" fill={red} />
      <rect x="8" y="8" width="84" height="84" fill={red} />
      <rect x="16" y="12" width="12" height="76" fill={red} />
      <path d="M12,12 24,12 24,20 20,20 20,16 16,16 16,28 20,28 20,24 24,24 24,36 20,36 20,32 16,32 16,44 20,44 20,40 24,40 24,52 20,52 20,48 16,48 16,60 20,60 20,56 24,56 24,68 20,68 20,64 16,64 16,76 20,76 20,72 24,72 24,84 20,84 20,80 16,80 16,92 20,92 20,88 24,88 24,100 20,100 20,96 16,96 16,104 12,104z" fill={yellow} className={styles.kiru1}></path>
      <path d="M28,-4 40,-4 40,4 36,4 36,0 32,0 32,12 36,12 36,8 40,8 40,20 36,20 36,16 32,16 32,28 36,28 36,24 40,24 40,36 36,36 36,32 32,32 32,44 36,44 36,40 40,40 40,52 36,52 36,48 32,48 32,60 36,60 36,56 40,56 40,68 36,68 36,64 32,64 32,76 36,76 36,72 40,72 40,84 36,84 36,80 32,80 32,88 28,88z" fill={green} className={styles.kiru2}></path>
      <rect x="48" y="12" width="12" height="76" fill={red} />
      <path d="M44,12 56,12 56,20 52,20 52,16 48,16 48,28 52,28 52,24 56,24 56,36 52,36 52,32 48,32 48,44 52,44 52,40 56,40 56,52 52,52 52,48 48,48 48,60 52,60 52,56 56,56 56,68 52,68 52,64 48,64 48,76 52,76 52,72 56,72 56,84 52,84 52,80 48,80 48,92 52,92 52,88 56,88 56,100 52,100 52,96 48,96 48,104 44,104z" fill={yellow} className={styles.kiru1}></path>
      <path d="M60,-4 72,-4 72,4 68,4 68,0 64,0 64,12 68,12 68,8 72,8 72,20 68,20 68,16 64,16 64,28 68,28 68,24 72,24 72,36 68,36 68,32 64,32 64,44 68,44 68,40 72,40 72,52 68,52 68,48 64,48 64,60 68,60 68,56 72,56 72,68 68,68 68,64 64,64 64,76 68,76 68,72 72,72 72,84 68,84 68,80 64,80 64,88 60,88z" fill={green} className={styles.kiru2}></path>
      <rect x="80" y="12" width="8" height="76" fill={red} />
      <path d="M76,12 88,12 88,20 84,20 84,16 80,16 80,28 84,28 84,24 88,24 88,36 84,36 84,32 80,32 80,44 84,44 84,40 88,40 88,52 84,52 84,48 80,48 80,60 84,60 84,56 88,56 88,68 84,68 84,64 80,64 80,76 84,76 84,72 88,72 88,84 84,84 84,80 80,80 80,92 84,92 84,88 88,88 88,100 84,100 84,96 80,96 80,104 76,104z" fill={yellow} className={styles.kiru1}></path>
      <path d="M10,10 90,10 90,90 10,90z" stroke={brown} strokeWidth="4" strokeLinecap="butt"></path>
      <path d="M4,4 96,4 96,96 4,96z" stroke={red} strokeWidth="8" strokeLinecap="butt"></path>
    </svg></div>
  },
  {
    name: "anvil",
    svg: <div className={`${styles.svgBox} ${(move)?styles.svgMove:""}`}><svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="100" height="100" fill={red} />
      <path d="M7.5,7.5 32.5,7.5 47.5,47.5 52.5,47.5 67.5,7.5 92.5,7.5" stroke={yellow} strokeWidth="5" strokeLinecap="square"></path>
      <path d="M5,10 30.75,10 45.9,50 40.9,50 26.5,15 5,15z" fill={black}></path>
      <path d="M95,10 69.25,10 54.1,50 59.1,50 73.5,15 95,15z" fill={black}></path>
      <path d="M5,22.5 23.75,22.5 33,45 5,45z" fill={black}></path>
      <rect x="10" y="28.75" width="10" height="10" fill={yellow} />
      <rect x="12.5" y="31.25" width="5" height="5" fill={red} />
      <path d="M95,22.5 76.25,22.5 67,45 95,45z" fill={green}></path>
      <rect x="80" y="28.75" width="10" height="10" fill={yellow} />
      <rect x="82.5" y="31.25" width="5" height="5" fill={red} />
      <path d="M7.5,92.5 32.5,92.5 47.5,52.5 52.5,52.5 67.5,92.5 92.5,92.5" stroke={green} strokeWidth="5" strokeLinecap="square"></path>
      <path d="M5,90 30.75,90 45.9,50 40.9,50 26.5,85 5,85z" fill={yellow}></path>
      <path d="M95,90 69.25,90 54.1,50 59.1,50 73.5,85 95,85z" fill={yellow}></path>
      <path d="M5,77.5 23.75,77.5 33,55 5,55z" fill={green}></path>
      <rect x="10" y="61.25" width="10" height="10" fill={yellow} />
      <rect x="12.5" y="63.75" width="5" height="5" fill={red} />
      <path d="M95,77.5 76.25,77.5 67,55 95,55z" fill={black}></path>
      <rect x="80" y="61.25" width="10" height="10" fill={yellow} />
      <rect x="82.5" y="63.75" width="5" height="5" fill={red} />
      <path d="M48.5,5 51.5,5 51.5,10 55,10 53.5,25 46.5,25 45,10 48.5,10z" fill={white} className={styles.anvil1}></path>
      <path d="M48.5,95 51.5,95 51.5,90 55,90 53.5,75 46.5,75 45,90 48.5,90z" fill={white} className={styles.anvil2}></path>
    </svg></div>
  },
  {
    name: "firstAid",
    svg: <div className={`${styles.svgBox} ${(move)?styles.svgMove:""}`}><svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="96" height="96" fill={yellow} />
      <rect x="6" y="6" width="39" height="42" fill={green} />
      <path d="M12,12 30,12 30,18 42,18 42,36 30,36 30,42 12,42z" fill={brown}></path>
      <rect x="51" y="6" width="39" height="42" fill={brown} />
      <path d="M84,12 66,12 66,18 54,18 54,36 66,36 66,42 84,42z" fill={white}></path>
      <rect x="6" y="48" width="39" height="42" fill={brown} />
      <path d="M12,84 30,84 30,78 42,78 42,60 30,60 30,54 12,54z" fill={white}></path>
      <rect x="51" y="48" width="39" height="42" fill={green} />
      <path d="M84,84 66,84 66,78 54,78 54,60 66,60 66,54 84,54z" fill={brown}></path>
      <rect x="18" y="18" width="6" height="18" fill={red} className={styles.hampi1a} />
      <rect x="72" y="18" width="6" height="18" fill={red} className={styles.hampi1a} />
      <rect x="6" y="24" width="30" height="6" fill={red} className={styles.hampi2a} />
      <rect x="60" y="24" width="30" height="6" fill={red} className={styles.hampi2b} />
      <rect x="18" y="60" width="6" height="18" fill={red} className={styles.hampi1b} />
      <rect x="72" y="60" width="6" height="18" fill={red} className={styles.hampi1b} />
      <rect x="6" y="66" width="30" height="6" fill={red} className={styles.hampi2a} />
      <rect x="60" y="66" width="30" height="6" fill={red} className={styles.hampi2b} />
    </svg></div>
  },
  {
    name: "waves",
    svg: <div className={`${styles.svgBox} ${(move)?styles.svgMove:""}`}><svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="96" height="96" fill={red} />
      <rect x="6" y="6" width="12" height="84" fill={green} />
      <path d="M6,6 12,6 Q18,9.5 12,13 T12,20 T12,27 T12,34 T12,41 T12,48 T12,55 T12,62 T12,69 T12,76 T12,83 T12,90 T12,97 T12,104 h-6" fill={black} className={styles.wave1}></path>
      <rect x="19" y="6" width="11" height="84" fill={yellow} />
      <path d="M18,6 24,6 Q30,9.5 24,13 T24,20 T24,27 T24,34 T24,41 T24,48 T24,55 T24,62 T24,69 T24,76 T24,83 T24,90 T24,97 T24,104 h-6" fill={red} className={styles.wave1}></path>
      <rect x="30" y="6" width="12" height="84" fill={green} />
      <path d="M30,-8 36,-8 Q42,-4.5 36,-1 T36,6 T36,13 T36,20 T36,27 T36,34 T36,41 T36,48 T36,55 T36,62 T36,69 T36,76 T36,83 T36,90 h-6" fill={black} className={styles.wave2}></path>
      <rect x="43" y="6" width="11" height="84" fill={yellow} />
      <path d="M42,-8 48,-8 Q54,-4.5 48,-1 T48,6 T48,13 T48,20 T48,27 T48,34 T48,41 T48,48 T48,55 T48,62 T48,69 T48,76 T48,83 T48,90 h-6" fill={red} className={styles.wave2}></path>
      <rect x="54" y="6" width="12" height="84" fill={green} />
      <path d="M54,6 60,6 Q66,9.5 60,13 T60,20 T60,27 T60,34 T60,41 T60,48 T60,55 T60,62 T60,69 T60,76 T60,83 T60,90 T60,97 T60,104 h-6" fill={black} className={styles.wave1}></path>
      <rect x="67" y="6" width="11" height="84" fill={yellow} />
      <path d="M66,6 72,6 Q78,9.5 72,13 T72,20 T72,27 T72,34 T72,41 T72,48 T72,55 T72,62 T72,69 T72,76 T72,83 T72,90 T72,97 T72,104 h-6" fill={red} className={styles.wave1}></path>
      <rect x="78" y="6" width="12" height="84" fill={green} />
      <path d="M78,-8 84,-8 Q90,-4.5 84,-1 T84,6 T84,13 T84,20 T84,27 T84,34 T84,41 T84,48 T84,55 T84,62 T84,69 T84,76 T84,83 T84,90 h-6" fill={black} className={styles.wave2}></path>
      <path d="M2,2 94,2 94,94 2,94z" stroke={red} strokeWidth="8" strokeLinecap="butt"></path>
    </svg></div>
  },
  {
    name: "staircases",
    svg: <div className={`${styles.svgBox} ${(move)?styles.svgMove:""}`}><svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="100" height="100" fill={black} />
      <rect x="5" y="5" width="45" height="30" fill={red} />
      <rect x="5" y="35" width="45" height="30" fill={yellow} />
      <rect x="5" y="65" width="45" height="30" fill={white} />
      <rect x="50" y="5" width="45" height="30" fill={darkred} />
      <rect x="50" y="35" width="45" height="30" fill={red} />
      <rect x="50" y="65" width="45" height="30" fill={brown} />

      <path d="M20,7.5 47.5,7.5 47.5,27.5 35,27.5 35,22.5 27.5,22.5 27.5,17.5 20,17.5 20,12.5z" fill={brown}></path>
      <path d="M7.5,7.5 47.5,7.5 47.5,27.5 35,27.5 35,22.5 27.5,22.5 27.5,17.5 20,17.5 20,12.5" stroke={yellow} strokeWidth="5" strokeLinecap="square"></path>
      <path d="M20,37.5 47.5,37.5 47.5,57.5 35,57.5 35,52.5 27.5,52.5 27.5,47.5 20,47.5 20,42.5z" fill={red}></path>
      <path d="M7.5,37.5 47.5,37.5 47.5,57.5 35,57.5 35,52.5 27.5,52.5 27.5,47.5 20,47.5 20,42.5" stroke={black} strokeWidth="5" strokeLinecap="square"></path>
      <path d="M20,67.5 47.5,67.5 47.5,87.5 35,87.5 35,82.5 27.5,82.5 27.5,77.5 20,77.5 20,72.5z" fill={green}></path>
      <path d="M7.5,67.5 47.5,67.5 47.5,87.5 35,87.5 35,82.5 27.5,82.5 27.5,77.5 20,77.5 20,72.5" stroke={red} strokeWidth="5" strokeLinecap="square"></path>

      <path d="M65,32.5 92.5,32.5 92.5,12.5 80,12.5 80,17.5 72.5,17.5 72.5,22.5 65,22.5 65,27.5z" fill={black}></path>
      <path d="M52.5,32.5 92.5,32.5 92.5,12.5 80,12.5 80,17.5 72.5,17.5 72.5,22.5 65,22.5 65,27.5" stroke={white} strokeWidth="5" strokeLinecap="square"></path>
      <path d="M65,62.5 92.5,62.5 92.5,42.5 80,42.5 80,47.5 72.5,47.5 72.5,52.5 65,52.5 65,57.5z" fill={darkred}></path>
      <path d="M52.5,62.5 92.5,62.5 92.5,42.5 80,42.5 80,47.5 72.5,47.5 72.5,52.5 65,52.5 65,57.5" stroke={green} strokeWidth="5" strokeLinecap="square"></path>
      <path d="M65,92.5 92.5,92.5 92.5,72.5 80,72.5 80,77.5 72.5,77.5 72.5,82.5 65,82.5 65,87.5z" fill={yellow}></path>
      <path d="M52.5,92.5 92.5,92.5 92.5,72.5 80,72.5 80,77.5 72.5,77.5 72.5,82.5 65,82.5 65,87.5" stroke={red} strokeWidth="5" strokeLinecap="square"></path>

      <rect x="9.25" y="18.5" width="4" height="8" fill={brown} className={styles.blink1} />
      <rect x="9.25" y="48.5" width="4" height="8" fill={darkred} className={styles.blink2} />
      <rect x="9.25" y="78.5" width="4" height="8" fill={red} className={styles.blink3} />
      <rect x="54.25" y="13.5" width="4" height="8" fill={brown} className={styles.blink4} />
      <rect x="54.25" y="43.5" width="4" height="8" fill={yellow} className={styles.blink5} />
      <rect x="54.25" y="73.5" width="4" height="8" fill={darkred} className={styles.blink6} />
    </svg></div>
  },
  {
    name: "earthquake",
    svg: <div className={`${styles.svgBox} ${(move)?styles.svgMove:""}`}><svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="100" height="100" fill={red} />
      <rect x="4" y="4" width="92" height="92" fill={white} />
      <rect x="8" y="8" width="28" height="28" fill={brown} />
      <rect x="36" y="8" width="28" height="28" fill={red} />
      <rect x="64" y="8" width="28" height="28" fill={brown} />
      <rect x="8" y="36" width="28" height="28" fill={red} />
      <rect x="36" y="36" width="28" height="28" fill={brown} />
      <rect x="64" y="36" width="28" height="28" fill={red} />
      <rect x="8" y="64" width="28" height="28" fill={brown} />
      <rect x="36" y="64" width="28" height="28" fill={red} />
      <rect x="64" y="64" width="28" height="28" fill={brown} />

      <rect x="12" y="12" width="20" height="20" fill={white} className={styles.chukchuy1} />
      <rect x="17.5" y="17.5" width="9" height="9" fill={red} className={styles.chukchuy1} />
      <rect x="68" y="12" width="20" height="20" fill={white} className={styles.chukchuy2} />
      <rect x="73.5" y="17.5" width="9" height="9" fill={red} className={styles.chukchuy2} />
      <rect x="40" y="40" width="20" height="20" fill={white} className={styles.chukchuy3} />
      <rect x="45.5" y="45.5" width="9" height="9" fill={brown} className={styles.chukchuy3} />
      <rect x="12" y="68" width="20" height="20" fill={white} className={styles.chukchuy4} />
      <rect x="17.5" y="73.5" width="9" height="9" fill={red} className={styles.chukchuy4} />
      <rect x="68" y="68" width="20" height="20" fill={white} className={styles.chukchuy5} />
      <rect x="73.5" y="73.5" width="9" height="9" fill={red} className={styles.chukchuy5} />

      <path d="M42,30 42,14 50,14 50,30 58,30 58,14" stroke={green} strokeWidth="4" strokeLinecap="square"></path>
      <path d="M14,42 14,58 22,58 22,42 30,42 30,58" stroke={green} strokeWidth="4" strokeLinecap="square"></path>
      <path d="M70,42 70,58 78,58 78,42 86,42 86,58" stroke={green} strokeWidth="4" strokeLinecap="square"></path>
      <path d="M42,86 42,70 50,70 50,86 58,86 58,70" stroke={green} strokeWidth="4" strokeLinecap="square"></path>
    </svg></div>
  },
  {
    name: "altEarthquake",
    svg: <div className={`${styles.svgBox} ${(move)?styles.svgMove:""}`}><svg viewBox="4 4 92 92" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="100" height="100" fill={red} />
      <rect x="4" y="4" width="92" height="92" fill={white} />
      <rect x="8" y="8" width="28" height="28" fill={brown} />
      <rect x="36" y="8" width="28" height="28" fill={red} />
      <rect x="64" y="8" width="28" height="28" fill={brown} />
      <rect x="8" y="36" width="28" height="28" fill={red} />
      <rect x="36" y="36" width="28" height="28" fill={brown} />
      <rect x="64" y="36" width="28" height="28" fill={red} />
      <rect x="8" y="64" width="28" height="28" fill={brown} />
      <rect x="36" y="64" width="28" height="28" fill={red} />
      <rect x="64" y="64" width="28" height="28" fill={brown} />

      <rect x="12" y="12" width="20" height="20" fill={white} className={styles.chukchuy1} />
      <rect x="17.5" y="17.5" width="9" height="9" fill={red} className={styles.chukchuy1} />
      <rect x="68" y="12" width="20" height="20" fill={white} className={styles.chukchuy2} />
      <rect x="73.5" y="17.5" width="9" height="9" fill={red} className={styles.chukchuy2} />
      <rect x="40" y="40" width="20" height="20" fill={white} className={styles.chukchuy3} />
      <rect x="45.5" y="45.5" width="9" height="9" fill={brown} className={styles.chukchuy3} />
      <rect x="12" y="68" width="20" height="20" fill={white} className={styles.chukchuy4} />
      <rect x="17.5" y="73.5" width="9" height="9" fill={red} className={styles.chukchuy4} />
      <rect x="68" y="68" width="20" height="20" fill={white} className={styles.chukchuy5} />
      <rect x="73.5" y="73.5" width="9" height="9" fill={red} className={styles.chukchuy5} />

      <path d="M42,30 42,14 50,14 50,30 58,30 58,14" stroke={green} strokeWidth="4" strokeLinecap="square"></path>
      <path d="M14,42 14,58 22,58 22,42 30,42 30,58" stroke={green} strokeWidth="4" strokeLinecap="square"></path>
      <path d="M70,42 70,58 78,58 78,42 86,42 86,58" stroke={green} strokeWidth="4" strokeLinecap="square"></path>
      <path d="M42,86 42,70 50,70 50,86 58,86 58,70" stroke={green} strokeWidth="4" strokeLinecap="square"></path>
    </svg></div>
  },
  {
    name: "worms",
    svg: <div className={`${styles.svgBox} ${(move)?styles.svgMove:""}`}><svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="100" height="100" fill={brown} />
      <rect x="5" y="5" width="90" height="90" fill={white} />
      <rect x="50" y="5" width="45" height="45" fill={red} className={styles.kuruSlide1} />
      <rect x="5" y="50" width="45" height="45" fill={red} className={styles.kuruSlide2} />

      <path d="M12.5,5 12.5,45 22.5,45 17.5,5z" fill={green}></path>
      <path d="M25,10 30,50 35,50 40,10z" fill={brown}></path>
      <path d="M47.5,5 42.5,45 57.5,45 52.5,5z" fill={green}></path>
      <path d="M75,10 70,50 65,50 60,10z" fill={brown}></path>
      <path d="M87.5,5 87.5,45 77.5,45 82.5,5z" fill={green}></path>

      <path d="M12.5,95 12.5,55 22.5,55 17.5,95z" fill={brown}></path>
      <path d="M25,90 30,50 35,50 40,90z" fill={green}></path>
      <path d="M47.5,95 42.5,55 57.5,55 52.5,95z" fill={brown}></path>
      <path d="M75,90 70,50 65,50 60,90z" fill={green}></path>
      <path d="M87.5,95 87.5,55 77.5,55 82.5,95z" fill={brown}></path>

      <rect x="30" y="12.5" width="5" height="5" fill={yellow} />
      <rect x="65" y="12.5" width="5" height="5" fill={white} />
      <rect x="47.5" y="37.5" width="5" height="5" fill={white} />
      <rect x="47.5" y="57.5" width="5" height="5" fill={yellow} />
      <rect x="30" y="82.5" width="5" height="5" fill={white} />
      <rect x="65" y="82.5" width="5" height="5" fill={yellow} />
    </svg></div>
  },
  {
    name: "pants1",
    svg: <div className={`${styles.svgBox} ${(move)?styles.svgMove:""}`}><svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="100" height="100" fill={black} />
      <rect x="5" y="5" width="90" height="90" fill={red} />

      <path d="M16,44 23.5,15 36.5,15 44,44" stroke={white} strokeWidth="10" strokeLinecap="square" className={styles.invert1}></path>
      <path d="M56,44 63.5,15 76.5,15 84,44" stroke={brown} strokeWidth="10" strokeLinecap="square" className={styles.invert2}></path>
      <path d="M16,84 23.5,55 36.5,55 44,84" stroke={brown} strokeWidth="10" strokeLinecap="square" className={styles.invert3}></path>
      <path d="M56,84 63.5,55 76.5,55 84,84" stroke={white} strokeWidth="10" strokeLinecap="square" className={styles.invert4}></path>

      <path d="M16,44 23.5,15 36.5,15 44,44" stroke={green} strokeWidth="3.5" strokeLinecap="square" className={styles.invert1}></path>
      <path d="M56,44 63.5,15 76.5,15 84,44" stroke={red} strokeWidth="3.5" strokeLinecap="square" className={styles.invert2}></path>
      <path d="M16,84 23.5,55 36.5,55 44,84" stroke={red} strokeWidth="3.5" strokeLinecap="square" className={styles.invert3}></path>
      <path d="M56,84 63.5,55 76.5,55 84,84" stroke={green} strokeWidth="3.5" strokeLinecap="square" className={styles.invert4}></path>

      <rect x="25" y="17" width="10" height="10" fill={white}  className={styles.invert1} />
      <rect x="27.5" y="19.5" width="5" height="5" fill={green}  className={styles.invert1} />
      <rect x="65" y="17" width="10" height="10" fill={brown}  className={styles.invert2} />
      <rect x="67.5" y="19.5" width="5" height="5" fill={yellow}  className={styles.invert2} />
      <rect x="25" y="57" width="10" height="10" fill={brown}  className={styles.invert3} />
      <rect x="27.5" y="59.5" width="5" height="5" fill={yellow}  className={styles.invert3} />
      <rect x="65" y="57" width="10" height="10" fill={white}  className={styles.invert4} />
      <rect x="67.5" y="59.5" width="5" height="5" fill={green}  className={styles.invert4} />

      <path d="M16.25,43 16.75,41" stroke={red} strokeWidth="1.25" strokeLinecap="butt" className={styles.invert1}></path>
      <path d="M43.25,41 43.75,43" stroke={red} strokeWidth="1.25" strokeLinecap="butt" className={styles.invert1}></path>
      <path d="M56.25,43 56.75,41" stroke={yellow} strokeWidth="1.25" strokeLinecap="butt" className={styles.invert2}></path>
      <path d="M83.25,41 83.75,43" stroke={yellow} strokeWidth="1.25" strokeLinecap="butt" className={styles.invert2}></path>
      <path d="M16.25,83 16.75,81" stroke={yellow} strokeWidth="1.25" strokeLinecap="butt" className={styles.invert3}></path>
      <path d="M43.25,81 43.75,83" stroke={yellow} strokeWidth="1.25" strokeLinecap="butt" className={styles.invert3}></path>
      <path d="M56.25,83 56.75,81" stroke={red} strokeWidth="1.25" strokeLinecap="butt" className={styles.invert4}></path>
      <path d="M83.25,81 83.75,83" stroke={red} strokeWidth="1.25" strokeLinecap="butt" className={styles.invert4}></path>
    </svg></div>
  },
  {
    name: "pants2",
    svg: <div className={`${styles.svgBox} ${(move)?styles.svgMove:""}`}><svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="100" height="100" fill={red} />
      <rect x="5" y="5" width="90" height="90" fill={brown} />

      <path d="M16,44 23.5,15 36.5,15 44,44" stroke={red} strokeWidth="10" strokeLinecap="square" className={styles.invert1}></path>
      <path d="M56,44 63.5,15 76.5,15 84,44" stroke={yellow} strokeWidth="10" strokeLinecap="square" className={styles.invert2}></path>
      <path d="M16,84 23.5,55 36.5,55 44,84" stroke={yellow} strokeWidth="10" strokeLinecap="square" className={styles.invert3}></path>
      <path d="M56,84 63.5,55 76.5,55 84,84" stroke={red} strokeWidth="10" strokeLinecap="square" className={styles.invert4}></path>

      <path d="M16,44 23.5,15 36.5,15 44,44" stroke={brown} strokeWidth="3.5" strokeLinecap="square" className={styles.invert1}></path>
      <path d="M56,44 63.5,15 76.5,15 84,44" stroke={brown} strokeWidth="3.5" strokeLinecap="square" className={styles.invert2}></path>
      <path d="M16,84 23.5,55 36.5,55 44,84" stroke={brown} strokeWidth="3.5" strokeLinecap="square" className={styles.invert3}></path>
      <path d="M56,84 63.5,55 76.5,55 84,84" stroke={brown} strokeWidth="3.5" strokeLinecap="square" className={styles.invert4}></path>

      <rect x="25" y="17" width="10" height="10" fill={red}  className={styles.invert1} />
      <rect x="27.5" y="19.5" width="5" height="5" fill={yellow}  className={styles.invert1} />
      <rect x="65" y="17" width="10" height="10" fill={yellow}  className={styles.invert2} />
      <rect x="67.5" y="19.5" width="5" height="5" fill={red}  className={styles.invert2} />
      <rect x="25" y="57" width="10" height="10" fill={yellow}  className={styles.invert3} />
      <rect x="27.5" y="59.5" width="5" height="5" fill={red}  className={styles.invert3} />
      <rect x="65" y="57" width="10" height="10" fill={red}  className={styles.invert4} />
      <rect x="67.5" y="59.5" width="5" height="5" fill={yellow}  className={styles.invert4} />

      <path d="M16.25,43 16.75,41" stroke={yellow} strokeWidth="1.25" strokeLinecap="butt" className={styles.invert1}></path>
      <path d="M43.25,41 43.75,43" stroke={yellow} strokeWidth="1.25" strokeLinecap="butt" className={styles.invert1}></path>
      <path d="M56.25,43 56.75,41" stroke={red} strokeWidth="1.25" strokeLinecap="butt" className={styles.invert2}></path>
      <path d="M83.25,41 83.75,43" stroke={red} strokeWidth="1.25" strokeLinecap="butt" className={styles.invert2}></path>
      <path d="M16.25,83 16.75,81" stroke={red} strokeWidth="1.25" strokeLinecap="butt" className={styles.invert3}></path>
      <path d="M43.25,81 43.75,83" stroke={red} strokeWidth="1.25" strokeLinecap="butt" className={styles.invert3}></path>
      <path d="M56.25,83 56.75,81" stroke={yellow} strokeWidth="1.25" strokeLinecap="butt" className={styles.invert4}></path>
      <path d="M83.25,81 83.75,83" stroke={yellow} strokeWidth="1.25" strokeLinecap="butt" className={styles.invert4}></path>
    </svg></div>
  },
  {
    name: "fourEyes",
    svg: <div className={`${styles.svgBox} ${(move)?styles.svgMove:""}`}><svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="100" height="100" fill={yellow} />
      <rect x="5" y="5" width="90" height="90" fill={brown} />
      <rect x="5" y="35" width="90" height="30" fill={red} />
      <path d="M20,20 80,20" stroke={red} strokeWidth="3" strokeLinecap="butt"></path>
      <path d="M20,15 Q27,20 20,25 Q13,20 20,15z" fill={red} stroke={red} strokeWidth="11.5" className={styles.eye1a}></path>
      <path d="M20,15 Q27,20 20,25 Q13,20 20,15z" fill={yellow} stroke={yellow} strokeWidth="6.5" className={styles.eye1a}></path>
      <path d="M20,15 Q27,20 20,25 Q13,20 20,15z" fill={green} stroke={green} strokeWidth="1.5" className={styles.eye1a}></path>
      <path d="M40,15 Q47,20 40,25 Q33,20 40,15z" fill={red} stroke={red} strokeWidth="11.5" className={styles.eye1b}></path>
      <path d="M40,15 Q47,20 40,25 Q33,20 40,15z" fill={yellow} stroke={yellow} strokeWidth="6.5" className={styles.eye1b}></path>
      <path d="M40,15 Q47,20 40,25 Q33,20 40,15z" fill={green} stroke={green} strokeWidth="1.5" className={styles.eye1b}></path>
      <path d="M60,15 Q67,20 60,25 Q53,20 60,15z" fill={red} stroke={red} strokeWidth="11.5" className={styles.eye1c}></path>
      <path d="M60,15 Q67,20 60,25 Q53,20 60,15z" fill={yellow} stroke={yellow} strokeWidth="6.5" className={styles.eye1c}></path>
      <path d="M60,15 Q67,20 60,25 Q53,20 60,15z" fill={green} stroke={green} strokeWidth="1.5" className={styles.eye1c}></path>
      <path d="M80,15 Q87,20 80,25 Q73,20 80,15z" fill={red} stroke={red} strokeWidth="11.5" className={styles.eye1d}></path>
      <path d="M80,15 Q87,20 80,25 Q73,20 80,15z" fill={yellow} stroke={yellow} strokeWidth="6.5" className={styles.eye1d}></path>
      <path d="M80,15 Q87,20 80,25 Q73,20 80,15z" fill={green} stroke={green} strokeWidth="1.5" className={styles.eye1d}></path>

      <path d="M20,50 80,50" stroke={yellow} strokeWidth="3" strokeLinecap="butt"></path>
      <path d="M20,45 Q27,50 20,55 Q13,50 20,45z" fill={yellow} stroke={yellow} strokeWidth="11.5" className={styles.eye2a}></path>
      <path d="M20,45 Q27,50 20,55 Q13,50 20,45z" fill={brown} stroke={brown} strokeWidth="6.5" className={styles.eye2a}></path>
      <path d="M20,45 Q27,50 20,55 Q13,50 20,45z" fill={white} stroke={white} strokeWidth="1.5" className={styles.eye2a}></path>
      <path d="M40,45 Q47,50 40,55 Q33,50 40,45z" fill={yellow} stroke={yellow} strokeWidth="11.5" className={styles.eye2b}></path>
      <path d="M40,45 Q47,50 40,55 Q33,50 40,45z" fill={brown} stroke={brown} strokeWidth="6.5" className={styles.eye2b}></path>
      <path d="M40,45 Q47,50 40,55 Q33,50 40,45z" fill={white} stroke={white} strokeWidth="1.5" className={styles.eye2b}></path>
      <path d="M60,45 Q67,50 60,55 Q53,50 60,45z" fill={yellow} stroke={yellow} strokeWidth="11.5" className={styles.eye2c}></path>
      <path d="M60,45 Q67,50 60,55 Q53,50 60,45z" fill={brown} stroke={brown} strokeWidth="6.5" className={styles.eye2c}></path>
      <path d="M60,45 Q67,50 60,55 Q53,50 60,45z" fill={white} stroke={white} strokeWidth="1.5" className={styles.eye2c}></path>
      <path d="M80,45 Q87,50 80,55 Q73,50 80,45z" fill={yellow} stroke={yellow} strokeWidth="11.5" className={styles.eye2d}></path>
      <path d="M80,45 Q87,50 80,55 Q73,50 80,45z" fill={brown} stroke={brown} strokeWidth="6.5" className={styles.eye2d}></path>
      <path d="M80,45 Q87,50 80,55 Q73,50 80,45z" fill={white} stroke={white} strokeWidth="1.5" className={styles.eye2d}></path>

      <path d="M20,80 80,80" stroke={red} strokeWidth="3" strokeLinecap="butt"></path>
      <path d="M20,75 Q27,80 20,85 Q13,80 20,75z" fill={red} stroke={red} strokeWidth="11.5" className={styles.eye3a}></path>
      <path d="M20,75 Q27,80 20,85 Q13,80 20,75z" fill={yellow} stroke={yellow} strokeWidth="6.5" className={styles.eye3a}></path>
      <path d="M20,75 Q27,80 20,85 Q13,80 20,75z" fill={green} stroke={green} strokeWidth="1.5" className={styles.eye3a}></path>
      <path d="M40,75 Q47,80 40,85 Q33,80 40,75z" fill={red} stroke={red} strokeWidth="11.5" className={styles.eye3b}></path>
      <path d="M40,75 Q47,80 40,85 Q33,80 40,75z" fill={yellow} stroke={yellow} strokeWidth="6.5" className={styles.eye3b}></path>
      <path d="M40,75 Q47,80 40,85 Q33,80 40,75z" fill={green} stroke={green} strokeWidth="1.5" className={styles.eye3b}></path>
      <path d="M60,75 Q67,80 60,85 Q53,80 60,75z" fill={red} stroke={red} strokeWidth="11.5" className={styles.eye3c}></path>
      <path d="M60,75 Q67,80 60,85 Q53,80 60,75z" fill={yellow} stroke={yellow} strokeWidth="6.5" className={styles.eye3c}></path>
      <path d="M60,75 Q67,80 60,85 Q53,80 60,75z" fill={green} stroke={green} strokeWidth="1.5" className={styles.eye3c}></path>
      <path d="M80,75 Q87,80 80,85 Q73,80 80,75z" fill={red} stroke={red} strokeWidth="11.5" className={styles.eye3d}></path>
      <path d="M80,75 Q87,80 80,85 Q73,80 80,75z" fill={yellow} stroke={yellow} strokeWidth="6.5" className={styles.eye3d}></path>
      <path d="M80,75 Q87,80 80,85 Q73,80 80,75z" fill={green} stroke={green} strokeWidth="1.5" className={styles.eye3d}></path>
    </svg></div>
  },
  {
    name: "threeEyes",
    svg: <div className={`${styles.svgBox} ${(move)?styles.svgMove:""}`}><svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="100" height="100" fill={red} />
      <rect x="5" y="5" width="90" height="90" fill={brown} />
      <rect x="5" y="35" width="90" height="30" fill={red} />
      <path d="M20,20 80,20" stroke={red} strokeWidth="3" strokeLinecap="butt"></path>
      <path d="M20,15 Q27,20 20,25 Q13,20 20,15z" fill={red} stroke={red} strokeWidth="11.5" className={styles.eye1a}></path>
      <path d="M20,15 Q27,20 20,25 Q13,20 20,15z" fill={yellow} stroke={yellow} strokeWidth="6.5" className={styles.eye1a}></path>
      <path d="M20,15 Q27,20 20,25 Q13,20 20,15z" fill={green} stroke={green} strokeWidth="1.5" className={styles.eye1a}></path>
      <path d="M50,15 Q57,20 50,25 Q43,20 50,15z" fill={red} stroke={red} strokeWidth="11.5" className={styles.eye1bX}></path>
      <path d="M50,15 Q57,20 50,25 Q43,20 50,15z" fill={yellow} stroke={yellow} strokeWidth="6.5" className={styles.eye1bX}></path>
      <path d="M50,15 Q57,20 50,25 Q43,20 50,15z" fill={green} stroke={green} strokeWidth="1.5" className={styles.eye1bX}></path>
      <path d="M80,15 Q87,20 80,25 Q73,20 80,15z" fill={red} stroke={red} strokeWidth="11.5" className={styles.eye1d}></path>
      <path d="M80,15 Q87,20 80,25 Q73,20 80,15z" fill={yellow} stroke={yellow} strokeWidth="6.5" className={styles.eye1d}></path>
      <path d="M80,15 Q87,20 80,25 Q73,20 80,15z" fill={green} stroke={green} strokeWidth="1.5" className={styles.eye1d}></path>

      <path d="M20,50 80,50" stroke={yellow} strokeWidth="3" strokeLinecap="butt"></path>
      <path d="M20,45 Q27,50 20,55 Q13,50 20,45z" fill={yellow} stroke={yellow} strokeWidth="11.5" className={styles.eye2a}></path>
      <path d="M20,45 Q27,50 20,55 Q13,50 20,45z" fill={brown} stroke={brown} strokeWidth="6.5" className={styles.eye2a}></path>
      <path d="M20,45 Q27,50 20,55 Q13,50 20,45z" fill={white} stroke={white} strokeWidth="1.5" className={styles.eye2a}></path>
      <path d="M50,45 Q57,50 50,55 Q43,50 50,45z" fill={yellow} stroke={yellow} strokeWidth="11.5" className={styles.eye2bX}></path>
      <path d="M50,45 Q57,50 50,55 Q43,50 50,45z" fill={brown} stroke={brown} strokeWidth="6.5" className={styles.eye2bX}></path>
      <path d="M50,45 Q57,50 50,55 Q43,50 50,45z" fill={white} stroke={white} strokeWidth="1.5" className={styles.eye2bX}></path>
      <path d="M80,45 Q87,50 80,55 Q73,50 80,45z" fill={yellow} stroke={yellow} strokeWidth="11.5" className={styles.eye2d}></path>
      <path d="M80,45 Q87,50 80,55 Q73,50 80,45z" fill={brown} stroke={brown} strokeWidth="6.5" className={styles.eye2d}></path>
      <path d="M80,45 Q87,50 80,55 Q73,50 80,45z" fill={white} stroke={white} strokeWidth="1.5" className={styles.eye2d}></path>

      <path d="M20,80 80,80" stroke={red} strokeWidth="3" strokeLinecap="butt"></path>
      <path d="M20,75 Q27,80 20,85 Q13,80 20,75z" fill={red} stroke={red} strokeWidth="11.5" className={styles.eye3a}></path>
      <path d="M20,75 Q27,80 20,85 Q13,80 20,75z" fill={yellow} stroke={yellow} strokeWidth="6.5" className={styles.eye3a}></path>
      <path d="M20,75 Q27,80 20,85 Q13,80 20,75z" fill={green} stroke={green} strokeWidth="1.5" className={styles.eye3a}></path>
      <path d="M50,75 Q57,80 50,85 Q43,80 50,75z" fill={red} stroke={red} strokeWidth="11.5" className={styles.eye3bX}></path>
      <path d="M50,75 Q57,80 50,85 Q43,80 50,75z" fill={yellow} stroke={yellow} strokeWidth="6.5" className={styles.eye3bX}></path>
      <path d="M50,75 Q57,80 50,85 Q43,80 50,75z" fill={green} stroke={green} strokeWidth="1.5" className={styles.eye3bX}></path>
      <path d="M80,75 Q87,80 80,85 Q73,80 80,75z" fill={red} stroke={red} strokeWidth="11.5" className={styles.eye3d}></path>
      <path d="M80,75 Q87,80 80,85 Q73,80 80,75z" fill={yellow} stroke={yellow} strokeWidth="6.5" className={styles.eye3d}></path>
      <path d="M80,75 Q87,80 80,85 Q73,80 80,75z" fill={green} stroke={green} strokeWidth="1.5" className={styles.eye3d}></path>
    </svg></div>
  },
  {
    name: "curls",
    svg: <div className={`${styles.svgBox} ${(move)?styles.svgMove:""}`}><svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="100" height="100" fill={green} />
        <rect x="5" y="5" width="90" height="90" fill={red} />

      <rect x="5" y="5" width="30" height="30" fill={yellow} />
      <rect x="35" y="5" width="30" height="30" fill={brown} />
      <rect x="65" y="5" width="30" height="30" fill={red} />
      <rect x="5" y="35" width="30" height="30" fill={red} />
      <rect x="35" y="35" width="30" height="30" fill={red} />
      <rect x="65" y="35" width="30" height="30" fill={red} />
      <rect x="5" y="65" width="30" height="30" fill={black} />
      <rect x="35" y="65" width="30" height="30" fill={yellow} />
      <rect x="65" y="60" width="30" height="35" fill={orange} />

      <path d="M25,5 25,23 15,23 15,17 20,17 20,12 10,12 10,28 30,28 30,5z" fill={green} className={styles.curl1A}></path>
      <path d="M45,5 45,23 55,23 55,17 50,17 50,12 60,12 60,28 40,28 40,5z" fill={orange} className={styles.curl1B}></path>
      <path d="M95,35 72.5,35 72.5,12.5 87.5,12.5 87.5,20 80,20 80,27.5 95,27.5z" fill={yellow} className={styles.curl1C}></path>
      <path d="M35,35 29,35 29,53 17,53 17,47 23,47 23,41 11,41 11,60 35,60z" fill={white} className={styles.curl2A}></path>
      <path d="M65,41 59,41 59,53 47,53 47,47 53,47 53,41 41,41 41,60 65,60z" fill={green} className={styles.curl2B+' '+styles.curlPair}></path>
      <path d="M65,41 71,41 71,53 83,53 83,47 77,47 77,41 89,41 89,60 65,60z" fill={white} className={styles.curl2C+' '+styles.curlPair}></path>
      <path d="M25,64.9 25,83 15,83 15,77 20,77 20,72 10,72 10,88 30,88 30,64.9z" fill={red} className={styles.curl3A}></path>
      <path d="M45,65 45,83 55,83 55,77 50,77 50,72 60,72 60,88 40,88 40,65z" fill={green} className={styles.curl3B}></path>
      <path d="M75,65 75,83 85,83 85,77 80,77 80,72 90,72 90,88 70,88 70,60 95,60 95,65z" fill={brown} className={styles.curl3C}></path>
    </svg></div>
  },
  {
    name: "secret",
    svg: <div className={`${styles.svgBox} ${(move)?styles.svgMove:""}`}><svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="100" height="100" fill={brown} />
      <rect x="5" y="5" width="90" height="90" fill={white} />

      <path d="M12.5,12.5 22.5,12.5 22.5,22.5 17.5,48 12.5,48 z" fill={darkred}></path>
      <path d="M20,12.5 37.5,12.5 37.5,22.5 27.5,48 17.25,48 z" fill={darkred} className={styles.enclose1}></path>
      <rect x="17" y="22.5" width="10" height="12.5" fill={yellow} className={styles.enclose1} />
      <rect x="19.5" y="26" width="5" height="5.25" fill={red} className={styles.enclose1} />
      <path d="M22.5,12.5 12.5,12.5 12.5,49 20,49" stroke={green} strokeWidth="3.5" strokeLinecap="butt"></path>
      <path d="M22.5,12.5 37.5,12.5 37.5,22.5 27.5,49 19.75,49" stroke={green} strokeWidth="3.5" strokeLinecap="square" className={styles.enclose1}></path>

      <path d="M87.5,12.5 77.5,12.5 77.5,22.5 82.5,48 87.5,48 z" fill={red}></path>
      <path d="M80,12.5 62.5,12.5 62.5,22.5 72.5,48 82.75,48 z" fill={red} className={styles.enclose2}></path>
      <rect x="73" y="22.5" width="10" height="12.5" fill={yellow} className={styles.enclose2} />
      <rect x="75.5" y="26" width="5" height="5.25" fill={red} className={styles.enclose2} />
      <path d="M77.5,12.5 87.5,12.5 87.5,49 80,49" stroke={green} strokeWidth="3.5" strokeLinecap="butt"></path>
      <path d="M77.5,12.5 62.5,12.5 62.5,22.5 72.5,49 80.25,49" stroke={green} strokeWidth="3.5" strokeLinecap="square" className={styles.enclose2}></path>

      <path d="M12.5,87.5 22.5,87.5 22.5,77.5 17.5,52 12.5,52 z" fill={red}></path>
      <path d="M20,87.5 37.5,87.5 37.5,77.5 27.5,52 17.25,52 z" fill={red} className={styles.enclose1}></path>
      <rect x="17" y="65.5" width="10" height="12.5" fill={yellow} className={styles.enclose1} />
      <rect x="19.5" y="68.75" width="5" height="5.25" fill={red} className={styles.enclose1} />
      <path d="M22.5,87.5 12.5,87.5 12.5,51 20,51" stroke={green} strokeWidth="3.5" strokeLinecap="butt"></path>
      <path d="M22.5,87.5 37.5,87.5 37.5,77.5 27.5,51 19.75,51" stroke={green} strokeWidth="3.5" strokeLinecap="square" className={styles.enclose1}></path>

      <path d="M87.5,87.5 77.5,87.5 77.5,77.5 82.5,52 87.5,52 z" fill={darkred}></path>
      <path d="M80,87.5 62.5,87.5 62.5,77.5 72.5,52 82.75,52 z" fill={darkred} className={styles.enclose2}></path>
      <rect x="73" y="65.5" width="10" height="12.5" fill={yellow} className={styles.enclose2} />
      <rect x="75.5" y="68.75" width="5" height="5.25" fill={red} className={styles.enclose2} />
      <path d="M77.5,87.5 87.5,87.5 87.5,51 80,51" stroke={green} strokeWidth="3.5" strokeLinecap="butt"></path>
      <path d="M77.5,87.5 62.5,87.5 62.5,77.5 72.5,51 80.25,51" stroke={green} strokeWidth="3.5" strokeLinecap="square" className={styles.enclose2}></path>

      <path d="M50,10 50,90" stroke={brown} strokeWidth="12.5" strokeLinecap="butt" className={styles.expand}></path>
      <path d="M50,34 50,66" stroke={brown} strokeWidth="19" strokeLinecap="butt" className={styles.expand}></path>
      <path d="M50,40 50,60" stroke={brown} strokeWidth="24.5" strokeLinecap="butt" className={styles.expand}></path>
      <path d="M50,46.5 50,53.5" stroke={brown} strokeWidth="30" strokeLinecap="butt" className={styles.expand}></path>
      <path d="M50,15 50,85" stroke={red} strokeWidth="7.5" strokeLinecap="butt" className={styles.expand}></path>
      <path d="M50,37 50,63" stroke={red} strokeWidth="15" strokeLinecap="butt" className={styles.expand}></path>
      <path d="M50,20 50,80" stroke={green} strokeWidth="3" strokeLinecap="butt" className={styles.expand}></path>
      <path d="M50,41 50,59" stroke={green} strokeWidth="8" strokeLinecap="butt" className={styles.expand}></path>
    </svg></div>
  },
  {
    name: "esses",
    svg: <div className={`${styles.svgBox} ${(move)?styles.svgMove:""}`}><svg viewBox="4 4 92 92" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="92" height="92" fill={black} />
      <rect x="8" y="8" width="84" height="84" fill={white} />

      <rect x="12" y="12" width="36" height="36" fill={red} className={styles.suddenly1} />
      <rect x="16" y="16" width="28" height="28" fill={green} className={styles.suddenly1} />
      <path d="M24,45 24,34 20,34 20,24 28,24 28,45z" fill={red} className={styles.suddenly1}></path>
      <path d="M32,15 32,36 40,36 40,26 36,26 36,15z" fill={red} className={styles.suddenly1}></path>

      <rect x="52" y="12" width="36" height="36" fill={green} className={styles.suddenly2} />
      <rect x="56" y="16" width="28" height="28" fill={red} className={styles.suddenly2} />
      <path d="M64,45 64,34 60,34 60,24 68,24 68,45z" fill={green} className={styles.suddenly2}></path>
      <path d="M72,15 72,36 80,36 80,26 76,26 76,15z" fill={green} className={styles.suddenly2}></path>

      <rect x="12" y="52" width="36" height="36" fill={green} className={styles.suddenly1} />
      <rect x="16" y="56" width="28" height="28" fill={red} className={styles.suddenly1} />
      <path d="M24,85 24,74 20,74 20,64 28,64 28,85z" fill={green} className={styles.suddenly1}></path>
      <path d="M32,55 32,76 40,76 40,66 36,66 36,55z" fill={green} className={styles.suddenly1}></path>

      <rect x="52" y="52" width="36" height="36" fill={red} className={styles.suddenly2} />
      <rect x="56" y="56" width="28" height="28" fill={green} className={styles.suddenly2} />
      <path d="M64,85 64,74 60,74 60,64 68,64 68,85z" fill={red} className={styles.suddenly2}></path>
      <path d="M72,55 72,76 80,76 80,66 76,66 76,55z" fill={red} className={styles.suddenly2}></path>
    </svg></div>
  },
  {
    name: "snakes",
    svg: <div className={`${styles.svgBox} ${(move)?styles.svgMove:""}`}><svg viewBox="-50 -50 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect x="-50" y="-50" width="100" height="100" fill={white} />

      <rect x="-45" y="-45" width="42.5" height="42.5" fill={red} />
      <path d="M-39,-9 -39,-39 -25,-39 -25,-15 -18,-15 -18,-27 -21.5,-27 -21.5,-39 -14.5,-39 -14.5,-9 z" fill={green}></path>
      <path d="M-39,-9 -39,-39 -9,-39 -9,-9 z" fill={green}></path>
      <path d="M-30.5,-9 -30.5,-21.875 -34.75,-21.875 -34.75,-34.75 -26.25,-34.75 -26.25,-9 z" fill={red}></path>
      <path d="M-17.5,-39 -17.5,-26.125 -13.25,-26.125 -13.25,-13.25 -21.75,-13.25 -21.75,-39 z" fill={red}></path>

      <rect x="-45" y="-45" width="42.5" height="42.5" fill={red} />
      <path d="M-39,-9 -39,-39 -9,-39 -9,-9 z" fill={green}></path>
      <path d="M-30,-8 -30,-21 -35,-21 -35,-35 -26,-35 -26,-8 z" fill={red}></path>
      <path d="M-22,-40 -22,-13 -13,-13 -13,-27 -18,-27 -18,-40 z" fill={red}></path>
      <path d="M-36,-13 -36,-17 -33,-17 -33,-13 z" fill={red}></path>
      <path d="M-32.5,-26 -32.5,-30 -29.5,-30 -29.5,-26 z" fill={yellow}></path>
      <path d="M-15,-31 -15,-35 -12,-35 -12,-31 z" fill={red}></path>
      <path d="M-18.5,-18 -18.5,-22 -15.5,-22 -15.5,-18 z" fill={yellow}></path>

      <rect x="2.5" y="-45" width="42.5" height="42.5" fill={green} />
      <path d="M39,-9 39,-39 9,-39 9,-9 z" fill={red}></path>
      <path d="M30,-40 30,-35 35,-35 35,-13 26,-13 26,-40 z" fill={green}></path>
      <path d="M22,-8 22,-35 13,-35 13,-13 18,-13 18,-8 z" fill={green}></path>
      <path d="M32,-20 32,-28 29,-28 29,-20 z" fill={white} className={styles.bob}></path>
      <path d="M19,-20 19,-28 16,-28 16,-20 z" fill={white} className={styles.bob}></path>

      <rect x="-45" y="2.5" width="42.5" height="42.5" fill={green} />
      <path d="M-39,9 -39,39 -9,39 -9,9 z" fill={red}></path>
      <path d="M-30,40 -30,35 -35,35 -35,13 -26,13 -26,40 z" fill={green}></path>
      <path d="M-22,8 -22,35 -13,35 -13,13 -18,13 -18,8 z" fill={green}></path>
      <path d="M-32,20 -32,28 -29,28 -29,20 z" fill={white} className={styles.antibob}></path>
      <path d="M-19,20 -19,28 -16,28 -16,20 z" fill={white} className={styles.antibob}></path>

      <rect x="2.5" y="2.5" width="42.5" height="42.5" fill={red} />
      <path d="M39,9 39,39 9,39 9,9 z" fill={green}></path>
      <path d="M30,8 30,21 35,21 35,35 26,35 26,8 z" fill={red}></path>
      <path d="M22,40 22,13 13,13 13,27 18,27 18,40 z" fill={red}></path>
      <path d="M36,13 36,17 33,17 33,13 z" fill={red}></path>
      <path d="M32.5,26 32.5,30 29.5,30 29.5,26 z" fill={yellow}></path>
      <path d="M15,31 15,35 12,35 12,31 z" fill={red}></path>
      <path d="M18.5,18 18.5,22 15.5,22 15.5,18 z" fill={yellow}></path>

      <path d="M-50,-47.5 50,-47.5 M-50,0 50,0 M-50,47.5 50,47.5" stroke={white} strokeWidth="5" strokeLinecap="butt" ></path>
    </svg></div>
  },
  {
    name: "escalators",
    svg: <div className={`${styles.svgBox} ${(move)?styles.svgMove:""}`}><svg viewBox="-1.5 -1.5 33 33" xmlns="http://www.w3.org/2000/svg">
      <rect x="-2" y="-2" width="34" height="34" fill={yellow} />
      <path d="M0,0 5,0 5,4 8,4 8,8 11,8 11,12 14,12 14,18 11,18 11,22 8,22 8,26 5,26 5,30 0,30z" fill={black}></path>
      <path d="M1.5,2 4,2 4,6 7,6 7,10 10,10 10,14 13,14 13,16 10,16 10,20 7,20 7,24 4,24 4,28 1.5,28" fill={red}></path>
      <path d="M4,7 7,11 Q10,15 7,19 L 4,23z" fill={green}></path>
      <path d="M-1,8 4,8 4,12 7,12 7,18 4,18 4,22 -1,22z" fill={yellow}></path>
      <path d="M0,10 2,10 2,14 5,14 5,16 2,16 2,20 0,20" fill={red} className={styles.tightenH1}></path>
      <path d="M30,0 25,0 25,4 22,4 22,8 19,8 19,12 16,12 16,18 19,18 19,22 22,22 22,26 25,26 25,30 30,30z" fill={black}></path>
      <path d="M28.5,2 26,2 26,6 23,6 23,10 20,10 20,14 17,14 17,16 20,16 20,20 23,20 23,24 26,24 26,28 28.5,28" fill={red}></path>
      <path d="M26,7 23,11 Q20,15 23,19 L 26,23z" fill={green}></path>
      <path d="M31,8 26,8 26,12 23,12 23,18 26,18 26,22 31,22z" fill={yellow}></path>
      <path d="M30,10 28,10 28,14 25,14 25,16 28,16 28,20 30,20" fill={red} className={styles.tightenH2}></path>
      <path d="M15,0 15,30" stroke={black} strokeWidth="0.5" strokeLinecap="butt"></path>
      <path d="M6,-1 6,2 9,2 9,6 12,6 12,10 15,10 18,10 18,6 21,6 21,2 24,2 24,-1z" fill={black} className={styles.tightenV1}></path>
      <path d="M8.5,-1 15,9 21.5,-1" fill={red} className={styles.tightenV1}></path>
      <path d="M15,-1 15,3" stroke={green} strokeWidth="1.5" strokeLinecap="butt" className={styles.tightenV1}></path>
      <path d="M15,1 15,2" stroke={red} strokeWidth="0.5" strokeLinecap="butt" className={styles.tightenV1}></path>
      <path d="M14.25,4 14.75,7 15.25,7 15.75,4z" fill={white} className={styles.tightenV1}></path>
      <path d="M6,31 6,28 9,28 9,24 12,24 12,20 15,20 18,20 18,24 21,24 21,28 24,28 24,31z" fill={black} className={styles.tightenV2}></path>
      <path d="M8.5,31 15,21 21.5,31" fill={red} className={styles.tightenV2}></path>
      <path d="M15,27 15,31" stroke={green} strokeWidth="1.5" strokeLinecap="butt" className={styles.tightenV2}></path>
      <path d="M15,29 15,28" stroke={red} strokeWidth="0.5" strokeLinecap="butt" className={styles.tightenV2}></path>
      <path d="M14.25,26 14.75,23 15.25,23 15.75,26z" fill={white} className={styles.tightenV2}></path>
      <rect x="-1.5" y="-1.5" width="33" height="33" stroke={yellow} strokeWidth="3" strokeLinecap="square" />
    </svg></div>
  },
  {
    name: "twoEyes1",
    svg: <div className={`${styles.svgBox} ${(move)?styles.svgMove:""}`}><svg viewBox="-50 -50 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect x="-50" y="-50" width="100" height="100" fill={red} />
      <rect x="-45" y="-45" width="42.5" height="42.5" fill={brown} />
      <path d="M-23.75,-33.75 Q-10.75,-23.75 -23.75,-13.75 Q-36.75,-23.75 -23.75,-33.75 z" fill={yellow} stroke={yellow} strokeWidth="15" strokeLinecap="square" className={styles.twoEyes1A}></path>
      <path d="M-23.75,-33.75 Q-10.75,-23.75 -23.75,-13.75 Q-36.75,-23.75 -23.75,-33.75 z" fill={yellow} stroke={brown} strokeWidth="10" strokeLinecap="square" className={styles.twoEyes1A}></path>
      <path d="M-23.75,-33.75 Q-10.75,-23.75 -23.75,-13.75 Q-36.75,-23.75 -23.75,-33.75 z" fill={yellow} stroke={yellow} strokeWidth="5" strokeLinecap="square" className={styles.twoEyes1A}></path>
      <path d="M-23.75,-33.75 Q-10.75,-23.75 -23.75,-13.75 Q-36.75,-23.75 -23.75,-33.75 z" fill={red} className={styles.twoEyes1A}></path>
      <rect x="2.5" y="-45" width="42.5" height="42.5" fill={black} />
      <rect x="2.5" y="-27" width="42.5" height="24.5" fill={yellow} />
      <path d="M2.5,-39 9,-39 9,-33 15,-33 15,-45 21,-45 21,-27 2.5,-27 z" fill={yellow}></path>
      <path d="M2.5,-27 21,-27 21,-2.5 15,-2.5 15,-21 9,-21 9,-12 2.5-12 z" fill={black}></path>
      <path d="M45,-39 27,-39 27,-30 33,-30 33,-33 39,-33 39,-27 21,-27 21,-21 45,-21 z" fill={yellow}></path>
      <path d="M45,-21 27,-21 27,-15 33,-15 33,-18 39,-18 39,-9 20,-9 20,-2.5 45,-2.5 z" fill={black}></path>
      <rect x="-45" y="2.5" width="42.5" height="42.5" fill={black} />
      <rect x="-45" y="21" width="42.5" height="24.5" fill={yellow} />
      <path d="M-45,9 -39,9 -39,15 -33,15 -33,2.5 -27,2.5 -27,21 -45,21 z" fill={yellow}></path>
      <path d="M-45,21 -27,21 -27,45.5 -33,45.5 -33,27 -39,27 -39,36 -45,36z" fill={black}></path>
      <path d="M-2.5,9 -21,9 -21,18 -15,18 -15,15 -9,15 -9,21 -27,21 -27,27 -2.5,27 z" fill={yellow}></path>
      <path d="M-2.5,27 -21,27 -21,33 -15,33 -15,30 -9,30 -9,39 -28,39 -28,45.5 -2.5,45.5 z" fill={black}></path>
      <rect x="2.5" y="2.5" width="42.5" height="42.5" fill={brown} />
      <path d="M23.75,33.75 Q10.75,23.75 23.75,13.75 Q36.75,23.75 23.75,33.75 z" fill={yellow} stroke={yellow} strokeWidth="15" strokeLinecap="square" className={styles.twoEyes1B}></path>
      <path d="M23.75,33.75 Q10.75,23.75 23.75,13.75 Q36.75,23.75 23.75,33.75 z" fill={yellow} stroke={brown} strokeWidth="10" strokeLinecap="square" className={styles.twoEyes1B}></path>
      <path d="M23.75,33.75 Q10.75,23.75 23.75,13.75 Q36.75,23.75 23.75,33.75 z" fill={yellow} stroke={yellow} strokeWidth="5" strokeLinecap="square" className={styles.twoEyes1B}></path>
      <path d="M23.75,33.75 Q10.75,23.75 23.75,13.75 Q36.75,23.75 23.75,33.75 z" fill={red} className={styles.twoEyes1B}></path>
    </svg></div>
  },
  {
    name: "twoEyes2",
    svg: <div className={`${styles.svgBox} ${(move)?styles.svgMove:""}`}><svg viewBox="-50 -50 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect x="-50" y="-50" width="100" height="100" fill={red} />
      <rect x="-45" y="-45" width="42.5" height="42.5" fill={brown} />
      <path d="M-38,-45 -38,-2.5 -10,-45 -10,-2.5 z" stroke={yellow} strokeWidth="2.5" strokeLinecap="square" ></path>
      <rect x="2.5" y="-45" width="42.5" height="42.5" fill={green} />
      <path d="M23.75,-33.75 Q10.75,-23.75 23.75,-13.75 Q36.75,-23.75 23.75,-33.75 z" fill={yellow} stroke={yellow} strokeWidth="15" strokeLinecap="square" className={styles.twoEyes2A}></path>
      <path d="M23.75,-33.75 Q10.75,-23.75 23.75,-13.75 Q36.75,-23.75 23.75,-33.75 z" fill={yellow} stroke={red} strokeWidth="10" strokeLinecap="square" className={styles.twoEyes2A}></path>
      <path d="M23.75,-33.75 Q10.75,-23.75 23.75,-13.75 Q36.75,-23.75 23.75,-33.75 z" fill={yellow} stroke={white} strokeWidth="5" strokeLinecap="square" className={styles.twoEyes2A}></path>
      <path d="M23.75,-33.75 Q10.75,-23.75 23.75,-13.75 Q36.75,-23.75 23.75,-33.75 z" fill={brown} className={styles.twoEyes2A}></path>
      <rect x="-45" y="2.5" width="42.5" height="42.5" fill={green} />
      <path d="M-23.75,33.75 Q-10.75,23.75 -23.75,13.75 Q-36.75,23.75 -23.75,33.75 z" fill={yellow} stroke={yellow} strokeWidth="15" strokeLinecap="square" className={styles.twoEyes2B}></path>
      <path d="M-23.75,33.75 Q-10.75,23.75 -23.75,13.75 Q-36.75,23.75 -23.75,33.75 z" fill={yellow} stroke={red} strokeWidth="10" strokeLinecap="square" className={styles.twoEyes2B}></path>
      <path d="M-23.75,33.75 Q-10.75,23.75 -23.75,13.75 Q-36.75,23.75 -23.75,33.75 z" fill={yellow} stroke={white} strokeWidth="5" strokeLinecap="square" className={styles.twoEyes2B}></path>
      <path d="M-23.75,33.75 Q-10.75,23.75 -23.75,13.75 Q-36.75,23.75 -23.75,33.75 z" fill={brown} className={styles.twoEyes2B}></path>
      <rect x="2.5" y="2.5" width="42.5" height="42.5" fill={brown} />
      <path d="M38,45 38,2.5 10,45 10,2.5 z" stroke={yellow} strokeWidth="2.5" strokeLinecap="square" ></path>
      <path d="M-50,-47.5 50,-47.5 M-50,0 50,0 M-50,47.5 50,47.5" stroke={red} strokeWidth="5" strokeLinecap="butt" ></path>
    </svg></div>
  },
  {
    name: "exes",
    svg: <div className={`${styles.svgBox} ${(move)?styles.svgMove:""}`}><svg viewBox="-55 -55 110 110" xmlns="http://www.w3.org/2000/svg">
      <rect x="-55" y="-55" width="110" height="110" fill={yellow} />
      <rect x="-50" y="-50" width="100" height="100" fill={red} />

      <path d="M-5,-5 -5,-12.5 -10,-12.5 -18,-25 -10,-37.5 -5,-37.5 -5,-45 -12.5,-45 -22.5,-30 -27.5,-30 -37.5,-45 -45,-45 -45,-37.5 -40,-37.5 -32,-25 -40,-12.5 -45,-12.5 -45,-5 -37.5,-5 -27.5,-20 -22.5,-20 -12.5,-5 z" stroke={brown} fill={yellow} strokeWidth="3.25" strokeLinecap="square" className={styles.excel1}></path>
      <path d="M5,-5 5,-12.5 10,-12.5 18,-25 10,-37.5 5,-37.5 5,-45 12.5,-45 22.5,-30 27.5,-30 37.5,-45 45,-45 45,-37.5 40,-37.5 32,-25 40,-12.5 45,-12.5 45,-5 37.5,-5 27.5,-20 22.5,-20 12.5,-5 z" stroke={green} fill={yellow} strokeWidth="3.25" strokeLinecap="square" className={styles.excel2}></path>
      <path d="M-5,5 -5,12.5 -10,12.5 -18,25 -10,37.5 -5,37.5 -5,45 -12.5,45 -22.5,30 -27.5,30 -37.5,45 -45,45 -45,37.5 -40,37.5 -32,25 -40,12.5 -45,12.5 -45,5 -37.5,5 -27.5,20 -22.5,20 -12.5,5 z" stroke={green} fill={yellow} strokeWidth="3.25" strokeLinecap="square" className={styles.excel3}></path>
      <path d="M5,5 5,12.5 10,12.5 18,25 10,37.5 5,37.5 5,45 12.5,45 22.5,30 27.5,30 37.5,45 45,45 45,37.5 40,37.5 32,25 40,12.5 45,12.5 45,5 37.5,5 27.5,20 22.5,20 12.5,5 z" stroke={brown} fill={yellow} strokeWidth="3.25" strokeLinecap="square" className={styles.excel4}></path>
    </svg></div>
  },
  {
    name: "bigExes",
    svg: <div className={`${styles.svgBox} ${(move)?styles.svgMove:""}`}><svg viewBox="-54 -6 108 108" xmlns="http://www.w3.org/2000/svg">
      <rect x="-56" y="-8" width="112" height="112" fill={yellow} />
      <rect x="0" y="0" width="48" height="96" fill={yellow} />

      <rect x="-48" y="0" width="44" height="96" fill={red} className={styles.bigEx1} />
      <path d="M-4,32  -13,32 -20,48 -13,64  -4,64 z" fill={green} className={styles.bigEx1}></path>
      <path d="M-8,39 -12,39 -16,48 -12,57 -8,57 z" fill={brown} className={styles.bigEx1}></path>
      <path d="M-48,32  -39,32 -32,48 -39,64  -48,64 z" fill={brown} className={styles.bigEx1}></path>
      <path d="M-44,39 -40,39 -36,48 -40,57 -44,57 z" fill={yellow} className={styles.bigEx1}></path>
      <path d="M-23,48 -17,26 -9,26 -9,6 -18,6 -26,42 -34,6 -43,6 -43,26 -35,26 -29,48 z" fill={brown} className={styles.bigEx1}></path>
      <path d="M-23,48 -17,70 -9,70 -9,90 -18,90 -26,54 -34,90 -43,90 -43,70 -35,70 -29,48 z" fill={yellow} className={styles.bigEx1}></path>
      <path d="M-22,0 -26,28 -30,0 z" fill={green} className={styles.bigEx1}></path>
      <path d="M-22,96 -26,68 -30,96 z" fill={green} className={styles.bigEx1}></path>
      <path d="M-12,12 -16,12 -16,20 -12,20z" fill={yellow} className={styles.bigEx1}></path>
      <path d="M-36,12 -40,12 -40,20 -36,20z" fill={yellow} className={styles.bigEx1}></path>
      <path d="M-12,76 -16,76 -16,84 -12,84z" fill={red} className={styles.bigEx1}></path>
      <path d="M-36,76 -40,76 -40,84 -36,84z" fill={red} className={styles.bigEx1}></path>

      <rect x="4" y="0" width="44" height="96" fill={red} className={styles.bigEx2} />
      <path d="M4,32  13,32 20,48 13,64  4,64 z" fill={green} className={styles.bigEx2}></path>
      <path d="M8,39 12,39 16,48 12,57 8,57 z" fill={brown} className={styles.bigEx2}></path>
      <path d="M48,32  39,32 32,48 39,64  48,64 z" fill={brown} className={styles.bigEx2}></path>
      <path d="M44,39 40,39 36,48 40,57 44,57 z" fill={yellow} className={styles.bigEx2}></path>
      <path d="M23,48 17,26 9,26 9,6 18,6 26,42 34,6 43,6 43,26 35,26 29,48 z" fill={yellow} className={styles.bigEx2}></path>
      <path d="M23,48 17,70 9,70 9,90 18,90 26,54 34,90 43,90 43,70 35,70 29,48 z" fill={brown} className={styles.bigEx2}></path>
      <path d="M22,0 26,28 30,0 z" fill={green} className={styles.bigEx2}></path>
      <path d="M22,96 26,68 30,96 z" fill={green} className={styles.bigEx2}></path>
      <path d="M12,12 16,12 16,20 12,20z" fill={red} className={styles.bigEx2}></path>
      <path d="M36,12 40,12 40,20 36,20z" fill={red} className={styles.bigEx2}></path>
      <path d="M12,76 16,76 16,84 12,84z" fill={yellow} className={styles.bigEx2}></path>
      <path d="M36,76 40,76 40,84 36,84z" fill={yellow} className={styles.bigEx2}></path>
    </svg></div>
  },
  {
    name: "key1",
    svg: <div className={`${styles.svgBox} ${(move)?styles.svgMove:""}`}><svg viewBox="5 5 90 90" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="100" height="100" fill={red} />
      <path d="M37.5,37.5 12.5,37.5 12.5,12.5 37.5,12.5 62.5,62.5 87.5,62.5 87.5,87.5 62.5,87.5z M12.5,62.5 37.5,62.5 37.5,87.5 12.5,87.5z M62.5,12.5 87.5,12.5 87.5,37.5 62.5,37.5z M23,73 27,73 27,77 23,77z M73,23 77,23 77,27 73,27z M23,23 27,23 27,27 23,27z M73,73 77,73 77,77 73,77z" stroke={yellow} strokeWidth="4" strokeLinecap="square" className={styles.incaKey}></path>
    </svg></div>
  },
  {
    name: "key2",
    svg: <div className={`${styles.svgBox} ${(move)?styles.svgMove:""}`}><svg viewBox="5 5 90 90" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="100" height="100" fill={yellow} />
      <path d="M37.5,37.5 12.5,37.5 12.5,12.5 37.5,12.5 62.5,62.5 87.5,62.5 87.5,87.5 62.5,87.5z M12.5,62.5 37.5,62.5 37.5,87.5 12.5,87.5z M62.5,12.5 87.5,12.5 87.5,37.5 62.5,37.5z M23,73 27,73 27,77 23,77z M73,23 77,23 77,27 73,27z M23,23 27,23 27,27 23,27z M73,73 77,73 77,77 73,77z" stroke={red} strokeWidth="4" strokeLinecap="square" className={styles.incaKey}></path>
    </svg></div>
  },
  {
    name: "key3",
    svg: <div className={`${styles.svgBox} ${(move)?styles.svgMove:""}`}><svg viewBox="5 5 90 90" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="100" height="100" fill={black} />
      <path d="M37.5,87.5 12.5,87.5 12.5,62.5 37.5,62.5 62.5,12.5 87.5,12.5 87.5,37.5 62.5,37.5z M12.5,12.5 37.5,12.5 37.5,37.5 12.5,37.5z M62.5,62.5 87.5,62.5 87.5,87.5 62.5,87.5z M23,23 27,23 27,27 23,27z M73,73 77,73 77,77 73,77z M23,73 27,73 27,77 23,77z M73,23 77,23 77,27 73,27z" stroke={green} strokeWidth="4" strokeLinecap="square" className={styles.incaKeyAlt}></path>
    </svg></div>
  }
];
