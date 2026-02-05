import { bilingualType, trilingualType } from './lessons';

export interface poemType {
  slug: string,
  title: bilingualType | trilingualType,
  author: string,
  dialect?: string,
  text: trilingualType,
}

export const poems: poemType[] = [
  {
    slug: `ushushicu`,
    title: { qu: `Ushushicu`, en: `Ushushicu`, es: `Ushushicu`, },
    author: `Lourdes Llasag (Panzaleo)`,
    dialect: `Cotopaxi`,
    text: {
      qu: `Amapola sisashina,
cambaj samita cuyani
Nayana chirlilla yacushina, tuycunapaj cauzaipaj
Guźul muyuntitac yacu ucuta puric
Enamorada tucui ruraicunapi
Laglag mana tamyashpaca chaquishcacanqui
Anchuchij, ñuca nanaita apac.`,
      en: `Love, like the poppy flower,
I love your natural smell
of crystal clear water, vital for life
spin, spin without growing tired, around the world
in love with the things you do
slow like the afternoon rain
air that calms my pain.`,
      es: `El amor, como la flor de amapola,
me encanta tu aroma natural
a agua cristalina, vital para la vida
gira, gira sin cansarte, alrededor del mundo
enamorado de lo que haces
lento como la lluvia de la tarde
aire que calma mi dolor.`,
    },
  },
  {
    slug: `canto-kowii`,
    title: { qu: `Ñucapa quiquin taqui`, en: `Song to Myself`, es: `Canto a mí mismo`, },
    author: `Ariruma Kowii`,
    dialect: `Imbabura`,
    text: {
      qu: `Ñuca, ñuca causaihuanca
ñucapaj sapi causaihuan
imatapash shinatami ushani
sisayuj, fancajuy, huayuyuj
quiruta shinanata munajpica
shinaymanllami.
Ñuca canahuanca
imatapash
shinanata ushaymanllami
urmachinata munajpi
chincachinata munajpi
tucuita shinachijmanllami.

Cushijuita faquichinata ushani
ñucallata paitaca asha asha
fitishpa, huiquiyachishpa
huañuchinata ushaimanmi
ñucaca, ñuca huiquicunatapash
huañuj ayahuan causachimanmi
sumaj taquicunatami taquiman.

Chai tucuita, ashtahuantahuanpash
shinanata ushaimanmi
shinapash cunanca
ñahuicunatalla huichanata munami
maquitalla muquitita shinanayan
chulun pachapi caparinayan
cunanca cayapacaya casha
inti suyuta huachachisha
inti pachapi ñuca umata
                        quimichishpa
quilla mamapaj mijllapi
samaitalla samasha.`,
en: `I can make the essence
the root, the pulp, the nerve
of my life
a leafy tree, full of flowers
colors, fruits
I can make anything of myself!
Or nothing at all!
I can blindfold him,
trip him up, and make him fall
flat on his face, sink,
and get lost!
on the same precipice of the
nothing!

I can break their joy
to be her executioner and kill her
piece by piece, crumb by crumb
Drop by drop!
I can make something of my tears
the coffin of life and pray to him
prayers
that have never been mentioned.

I can do all this
and much more still
But now I don't want to.
Now I simply wish
close your eyes
clench your fists
scream in silence
to be past, tomorrow
to fertilize the horizon
with my thoughts
to rest my head in his lap
of spring
and rest together
to killa mama.`,
es: `Yo puedo hacer de la esencia
la raíz, la pulpa, el nervio
de mi vida
un árbol frondoso, lleno de flores
colores, frutos
Yo puedo hacer de mí, todo!
de mí, nada!
Yo puedo vendar sus ojos
ponerle sancadillas y hacer
que caiga de bruces, se hunda
se pierda!
en el mismo precipicio de la
nada!

Yo puedo quebrar su alegría
ser su verdugo y matarla
pedazo a pedazo, migaja a migaja
gota a gota!
Yo puedo hacer de mis lágrimas
el ataúd de la vida y rezarle
oraciones
que nunca han sido mencionadas.

Yo puedo hacer todo esto
y mucho más todavía
pero ahora no quiero.
Ahora simplemente deseo
cerrar los ojos
apretar los puños
gritar en silencio
ser pasado, mañana
fecundar el horizonte
con mi pensamiento
arrimar mi cabeza en el regazo
de la primavera
y descansar junto
a killa mama.`,
    },
  },
  {
    slug: `4-kowii`,
    title: { en: `Poem 4`, es: `Poema 4`, },
    author: `Ariruma Kowii`,
    dialect: `Imbabura`,
    text: {
      qu: `cayac
llaquij punchami canga
cayac
ñuca shuncuta
chugrichishpa
nanachishpa
yallingami
shinapash
cai pachacunaca
mana ñucata tucuchinata ushangachu
imashpa, cunanca
cayapachami casha
shinacashcamanta
rijcharishca
pachataca
right there
rijchachishpa
ñucapaj cushijuita cusha
mushuj causaihuan juntachisha
ña tucurijuimanta jatarichishpa
causarijpi nisha:
juyaica
ishcantijpacha juyarijpilla
causanmi
juyaitaca
allpamamatashna
huacaichishpa
puchuchinami canchij
juyaitaca
pachamamatashna
huiñachishpa
sum jallo there
charinami canchij.`,
      en: `Today I am tomorrow
And tomorrow will be a sad day.
It will be a hurricane day
typhoons, avalanches
that will pass by scratching
stabbing my senses
They will try to hurt me
            hurt me
                        to be satisfied
                        get drunk
with my wound
but they will not drink
the chalice of my dawn
Because now I am tomorrow.
                        and tomorrow
I'll be happy
lively
and when they come
arrive
I will look them straight in the eye
I'll tell them what they want.
I will extend my hand to them
and I will offer them my joy
so that they don't wither
in nostalgia
and I will tell them
that love is mutual
and not stingy
mature and wise in his age
must be preserved
like the fertile field
from allpa mama
that we must take care of it, and know
how to make it grow.`,
es: `Hoy soy mañana
y mañana será un día triste
será un día de huracanes
tifones, avalanchas
que pasarán aruñando
apuñalando mis sentidos
tratarán de herirme
lastimarme
saciarse
emborracharse
con mi herida
más ellos no beberán
el cáliz de mi aurora
porque ahora soy mañana
y mañana
estaré contento
lleno de vida
y cuando ellos vengan
lleguen
les miraré de frente
les diré que quieren
les extenderé mi mano
y les ofreceré mi alegría
para que no se marchiten
en la nostalgia
y les diré
que el amor es mutuo
y no mezquino
maduro y sabio en su edad
debe conservarse
como el campo fértil
de allpa mama
que debemos cuidarla, y saber
cómo hacerla crecer.`,
    },
  },
  {
    slug: `flower-paza`,
    title: { qu: `Pachamamapa sisa`, en: `Flower of mother nature`, es: `Flor de la madre naturaleza`, },
    author: `Rasu Paza`,
    dialect: `Puruwá`,
    text: {
      qu: `Maican chican chirimuyupa ñaupa pachapichari canpa rimaitaca uyarcani.
Maican cullquishina, rasushina allimanta ricuc Mama Pachapichari canpa ñahuicunataca ricurcani.
Maican huaranca huatacunachari cashca canca.
Maipitac carcanchi, maipi. Imatac carcanchiyari, huaranca huata ñaupa.

Ñucaca can armachun, can upyachun, chuya achic yacumi carcani.
Allimantami tucui churana illaclla ñuca caiman shamuc carcanki.
Ñuca cai, callpacuc mayuman rishpami armac carcanki.
Quipaca ishca makiuan hapishpami upyahuarca carcanki.
Canca, ñuca canpa tucui ucuctapash, uccutapashmi ricsichun saquiclla carcanki.
Chai quipaca, canpa ñutuclla uccupa, munaypa milkim ñucapi llutarishpa saquiric carca.

Chaimanta pachami canpa rupac sumaimana chuchucunapash
ñucapa quisha tucurcacuna.
Ñucapa cauzaitapish punchan punchanmi
canpa yura mallquihuan ahuashpa ric carcanki.
Canpa aichaca huiñayta mana huañunchu, shamurayacunllami.
Cunanpash, ñaupamanta shamushpami cutin caipi canqui, ñucapa carahuan, ñucantin.`,
      en: `In which of the remote times of chirimoya did I hear your voice?
In which time, maybe, did I meet your face when Mother Cosmos was gliding slowly like silver, like snow?
How long ago was it?
Where were you, Where! What were you thousands of years ago?

I, so you can drink, so you can bathe, was the transparent water. 
Slowly you came to me without attires.
You bathed in the torrential river I was.
Then you satiated me holding on with both hands. 
You, with insistence let me know your body and essence. 
Then your soft and delicious perfume remained adhered to me. 

Since then your beautiful and warm breasts
became my abode.
My life was weaving day after day
with the branches of your tree. 
Your flesh never dies, it returns time after time.
Today also,  you arrived from infinite time and are present, stuck to my skin, you and me together.`,
      es: `¿En qué tiempos remotos de la chirimoya escuché tu voz?
¿En qué tiempo, quizás, vi tu rostro cuando la Madre Cosmos se deslizaba lentamente como plata, como nieve?
¿Cuánto tiempo ha pasado?
¿Dónde estabas, dónde? ¿Qué eras hace miles de años?

Yo, para que bebieras, para que te bañaras, era el agua transparente.
Lentamente viniste a mí sin vestiduras.
Te bañaste en el río torrencial que yo era.
Luego me saciaste aferrándote con ambas manos.
Tú, con insistencia, me hiciste conocer tu cuerpo y tu esencia.
Entonces tu suave y delicioso perfume permaneció adherido a mí.

Desde entonces tus hermosos y cálidos senos
se convirtieron en mi morada.
Mi vida se fue tejiendo día tras día
con las ramas de tu árbol.
Tu carne nunca muere, regresa una y otra vez.
Hoy también, llegaste desde el tiempo infinito y estás presente, pegada a mi piel, tú y yo juntos.`,
    },
  },
  {
    slug: `acapana`,
    title: { qu: `Acapana`, en: `Storm`, es: `Tormenta`, },
    author: `Inti Cartuche`,
    dialect: `Saraguro`,
    text: {
      qu: `Acapanami canica
urmamunilla shina yarin
maican cucha chaschichun illanmi.

Rasuyaquic huairatami uyani
huicsataca cushicuihuan shictachicta ricuni.

Shina cacpica ñucaca,
—urcupac churi,
huaicucunapac huahua cashpa—
shuc ñaupa cacharpayacuta,
chushac caita
allpacuyuyta quincuric suni asiriyta
runtu cachun nishca shututapish uyachini.

Huaira, imapactac pucumuhuanquillayari,
acapana muyutaca ñuca ucupimi ña carinica.

¡Uyarihuay!
chaquishca panca shinami urmamuni
ñaupacausaihuan mai hucushcami canica.`,
      en: `Storm am I
and it seems I fall straight down
there is no lagoon that receives me.

I listen to the wind freezing me
cracking my womb with happiness. 

While I, 
—son of the mountain, 
grandson of the creeks—
whistle such an old farewell
an un-being
a long smile curving the earthquake
a drop thrown to become a hailstone.

Why do you blow, wind,
if I already have inside the seed of the storm?

Listen!
I fall like a dry leave
But I am extremely sodden of history.`,
es: `Soy tormenta
y parece que caigo en picada
no hay laguna que me reciba.

Escucho el viento que me congela
que agrieta mi vientre de felicidad.

Mientras yo,
—hijo de la montaña,
nieto de los arroyos—
silbo una despedida tan antigua
un no-ser
una larga sonrisa que curva el terremoto
una gota arrojada para convertirse en granizo.

¿Por qué soplas, viento,
si ya llevo dentro la semilla de la tormenta?

¡Escucha!
Caigo como una hoja seca
pero estoy empapado de historia.`,
    },
  },
];

/*
  {
    slug: ``,
    title: { en: ``, es: ``, },
    author: ``,
    text: {
      qu: ``,
      en: ``,
      es: ``,
    },
  },
*/
