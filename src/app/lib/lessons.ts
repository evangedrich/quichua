interface bilingualType {
  en: string | string[],
  es: string | string[],
}
interface trilingualType {
  qu: string,
  en: string,
  es: string,
}
interface phaseType {
  phaseId: string,
  items: bilingualType[] | trilingualType[],
}
interface lessonType {
  slug: string,
  topic: bilingualType,
  contents: phaseType[],
}

export const lessons: lessonType[] = [
  {
    slug: '1',
    topic: {
      en: 'greetings; roots and suffixes; **‑chu**; **‑mi**',
      es: 'saludos; raíces y sufijos; **‑chu**; **‑mi**',
    },
    contents: [
      {
        phaseId: 'models',
        items: [
          {
            qu: `¿Allillachu cangui?`,
            en: `Are you (feeling) well?\n(*lit.* Are you just fine?)`,
            es: `¿Estás (te sientes) bien?\n(*lit.* ¿Estás bien no más?)`,
          },
          {
            qu: `Ari, allillami cani.`,
            en: `Yes, I’m (feeling) well.\n(*lit.* Yes, I’m just fine.)`,
            es: `Sí, estoy (me siento) bien.\n(*lit.* Si, estoy bien no más.)`,
          },
        ],
      },
      {
        phaseId: 'vocab',
        items: [
          [
            {qu: 'alli', en: 'good', es: 'bueno',},
            {qu: 'allilla', en: 'well', es: 'bien',},
          ],
          [
            {qu: 'ari', en: 'yes', es: 'sí',},
            {qu: 'cani', en: 'I am', es: 'soy',},
            {qu: 'cangui', en: 'you are', es: 'eres',},
          ],
          [
            {qu: '-lla', en: 'just', es: 'no más',},
            {qu: '-mi', en: '«indicates an affirmative statement»', es: '«indica una declaración afirmativa»',},
            {qu: '-chu', en: '«indicates a yes-no question»', es: '«indica una pregunta sí-no»',},
          ],
        ],
      },
      {
        phaseId: 'exercises',
        items: [
          {
            en: `In this preliminary lesson, the only exercise suggested is that of completely mastering the Models, with special attention to the sounds mentioned under Pronunciation.`,
            es: `En está leccion inicial, el único ejercisio sugerido es el de aprender a memoria los Modelos, con atención especial a los sonidos mencionados bajo Pronunciación.`,
          }
        ],
      },
      {
        phaseId: 'pronunciation',
        items: [
          [
            {
              en: `1. Dialect variation (sometimes abbreviated to DV)`,
              es: `1. La variación dialectal (a veces abreviada VD)`,
            },
            {
              en: `Although there are a number of dialects of the Highland Quichua languages in Ecuador, there exists between them a very high degree of mutual intelligibility. However, some differences do appear, especially in the pronunciation of certain frequently used suffixes. Only the more important dialect variations are noted in these lessons. Your language helper will probably point out others to you as you check through the material with them.`,
              es: `Aunque hay un gran número de dialectos de los idomas del quichua de la sierra del Ecuador, existe entre ellos un gran nivel de comprensión mutua. Sin embargo, sí existen varias diferencias, especialmente en la pronunciación de ciertos sufijos de uso frecuente. Sólo las variaciones dialectales más importantes se notan en estas lecciones. Probablemente su ayudante quichua le indicará otros mientras estudia este material con él.`,
            },
          ],
          [
            {
              en: `The languages and their dialects are:`,
              es: `Los idiomas y sus dialectos son:`,
            },
            {
              en: `Central Highland Quichua (CHQ)\n*dialects*: Colta, Pulucate, Caliata`,
              es: `Quichua Serrano Central (QSC)\n*dialectos*: Colta, Pulucate, Caliata`,
            },
            {
              en: `Pichincha\n*dialect*: Calderón`,
              es: `Pichincha\n*dialecto*: Calderón`,
            },
            {
              en: `Imbabura/Cayambe (Imb.)\n*dialect*: Agato`,
              es: `Imbabura/Cayambe (Imb.)\n*dialecto*: Agato`,
            },
            {
              en: `South Highland Quichua (SHQ)\n*dialects*: Cuenca, Saraguro, Cañar`,
              es: `Quichua Serrano Sur (QSS)\n*dialectos*: Cuenca, Saraguro, Cañar`,
            },
            {
              en: `Salasaca (Tungurahua)\n*dialect*: Salasaca`,
              es: `Salasaca (Tungurahua)\n*dialecto*: Salasaca`,
            },
          ],
          [
            {
              en: `The first three named are classed together occasionally as representing Central Highland Quichua (CHQ), while Agato is considered representative of Imbabura/Cayambe Quichua (Imb.). Such a classification is admittedly a rough one, but is occasionally useful. Pichincha is in a class by itself, resembling Salasaca and lowland Quichua much more than do the others. Data on South Highland Quichua is incomplete.`,
              es: `Los tres primeros a veces se clasifican juntos como variantes del Quichua Serrano Central (QSC), mientras que Agato se considera como representativo del quichua de Imbabura y Cayambe (Imb.). Reconozco que tal clasificación es algo inexacta, pero a veces resulta útil. Pichincha está en una clase aparte, y se asemeja mucho más al Quichua de Salasaca y al del Oriente que los otros. Datos sobre el Quichua Serrano Sur están incompletos.`,
            },
          ],
          [
            {
              en: `The dialect variations which your language helper points out will seem much less confusing if you learn to sort them out into several different categories. Some will be merely on a *sound* level (for example, a certain sound used in CHQ may always be changed into another sound in Imbabura). Others will be on the *suffix* level, as when a certain suffix is pronounced one way in Colta but another way in Pulucate. Still other changes will be on the level of *vocabulary*, as when a word that is often used in Colta is substituted by another in Pulucate. Still others will be on the level of *grammar*, and others in the matter of *style*. In this lesson only the first two kinds of dialect variations appear.`,
              es: `Las variaciones dialectales que le indique su ayudante quichua le resultarán mucho menos confundidoras si usted trata de separarlos en sus diferentes categorías. Algunos serán sólo a nivel de *sonidos* (por ejemplo, cierto sonido en el QSC siempre se cambia por otro sonido en Imbabura). Otros serán a nivel de los *sufijos*, como cuando cierto sufijo se pronuncia de una manera en Colta pero de otra manera en Pulucate. Otros cambios serán a nivel de *vocabulario*, como cuando una palabra frecuente en Colta se reemplaza por otra en Pulucate. Otros cambios serán a nivel de la *gramática*, y otros tendrán que ver con el *estilo*. En esta lección sólo aparecerán las variaciones dialectales de los dos primeros tipos.`,
            },
          ],
          [
            {
              en: `**ll** is in CHQ, Imbabura, Salasaca and Pichincha always pronounced like the *zh* sound in “azure”.`,
              es: `En el QSC, Imbabura, Salasaca y Pichincha la **ll** siempre se pronuncia con la pronunciación popular de esta letra en el español del norte de la sierra ecuatoriana, no con su pronunciación en Loja.`,
            },
            {
              en: `Imbabura also pronounces it this way. However, in many words that have **ll** in CHQ, Imbabura has a simple **l**. This occurs when the CHQ **ll** is followed immediately by the vowel **i**, or by a consonant. Thus, CHQ **alli** “good” is **ali** in Imbabura, and CHQ **allcu** “dog” is **alcu** in Imbabura.`,
              es: `En Imbabura también se pronuncia así. Sin embargo, en muchas palabras que tienen **ll** en el QSC, Imbabura tiene una simple **l**. Esto ocurre cuando la **ll** del QSC esté seguida inmediatamente por la vocal **i**, o por una consonante. Por ejemplo, **alli** "bueno" del QSC es **ali** en Imbabura, y **allcu** "perro" del QSC es **alcu** en Imbabura.`,
            },
          ],
          [
            {
              en: `The **c** in **cangui** and **cana** becomes **g** in Pichincha and Salasaca.`,
              es: `La **c** de **cangui** y **cana** se convierte en **g** en Pichincha y Salasaca.`,
            },
            {
              en: `The suffix **-lla** occurs in **allilla**, “well”, (although for the present it is not being studied in detail). In Pulucate, Caliata, and Flores (in Chimborazo), and in Pichincha it is pronounced (and spelled) **-la**.`,
              es: `El sufijo **-lla** ocurre en **allilla**, "bien", (aunque por ahora no se está estudiando en detalle). En Pulucate, Caliata y Flores (en Chimborazo), y en Pichincha se pronuncia (y se escribe) **-la**.`,
            },
          ],
          [
            {
              en: `2. Word accent`,
              es: `2. La acentuación de las palabras`,
            },
            {
              en: `Quichua word accent is very regular, falling as a general rule on the penult (second-last syllable) of each word. In the following examples, the accented syllable of each word is capitalized:`,
              es: `En el quichua la acentuación de las palabras es muy regular, ya que como regla general cae en la sílaba penúltima de cada palabra. En los siguientes ejemplos la sílaba acentuada de cada palabra está escrita con todas mayúsculas:`,
            },
            {
              en: `**a·*LLI*·lla**\n**a·lli·*LLA*·chu**\n** *CAN*·gui **\n** *A*·ri **`,
              es: `**a·*LLI*·lla**\n**a·lli·*LLA*·chu**\n** *CAN*·gui **\n** *A*·ri **`,
            },
            {
              en: `Sometimes, for added emphasis, the accent is shifted to the final syllable of a word. This is indicated by the use of a written accent mark over the accented syllable. An example of such a “displaced” accent will be seen in the next lesson.`,
              es: `De vez en cuando, para dar énfasis especial, se corre el acento a la sílaba última de una palabra. Se indica esto con un acento escrito sobre tal sílaba. Se da un ejemplo de tal acento "desplazado" en la siguiente lección.`,
            },
          ],
          [
            {
              en: `3. Quichua vowels`,
              es: `3. Las vocales del quichua`,
            },
            {
              en: `There are really only three distinctive vowels in Quichua—**a**, **i**, **u**. However, in certain situations the **i** sounds almost like an *e*, and the **u** almost like an *o*. Since all these five vowels do occur in Spanish, from which language many words have been “borrowed” by the Quichuas, the five-vowel system is being used here in writing Quichua too.`,
              es: `En realidad sólo existen tres vocales distintos en quichua—**a**, **i**, **u**. Sin embargo, en ciertas situaciones la **i** suena casi como una **e**, y la **u** casi como una **o**. Ya que en castellano ocurren todas estas cinco vocales, y que han sido "prestadas" muchas palabras de dicho idioma por los quichuas, se está usando estas cinco vocales para escribir el quichua también.`,
            },
          ],
          [
            {
              en: `These three vowels (**a**, **i**, **u**) of Quichua have, however, a wider range of pronunciation than they do in Spanish, as follows:`,
              es: `Estas tres vocales del quichua (**a**, **i**, **u**) tienen mucha más variación de pronunciación que en español, así:`,
            },
            {
              en: `**a** usually as in “father”, but sometimes as in “sofa”\n**i** (sometimes spelled **e**) anywhere from the *i* in “machine” to *o* the in Spanish “pero”\n**u** (sometimes spelled **o**) anywhere from the *u* in “blue” to the *o* in Spanish “no”`,
              es: `**a** generalmente como español, pero a veces como a de "sofa" en inglés\n**¡** (a veces escrita **e**) varias pronunciaciones entre la i de "sí" y la e de "pero")\n**u** (a veces escrita **o**) varias pronunciaciones entre la y de "tú" y la o de "no"`,
            },
            {
              en: `Listen for these variations as your language helper Models, and try to imitate him closely.`,
              es: `Escuche estas variaciones mientras su ayudante quichua repite los Modelos, y trate de imitarle esmeradamente.`,
            },
          ],
          [
            {
              en: `4. Unaspirated sounds (**c** and **ch**)`,
              es: `4. Sonidos no aspirados (**c** y **ch**)`,
            },
            {
              en: `These sounds are like those in Spanish “casa” and “hacha” (NOT as in English “cat” and “church”). In the English words the initial sounds are aspirated (pronounced with a little puff of air after them), but in the Spanish words they are not. CHQ has both aspirated and unaspirated sounds, so care must be taken to differentiate between them, or embarrassing mistakes may result. If you already speak Spanish correctly, the unaspirated sounds (of which **c** and **ch** are only two) will give you no trouble. If you have difficulty with them, try the following simple exercises.`,
              es: ``,
            },
          ],
          [
            {
              en: `Start by pronouncing aloud the word “scat”. After the letter *s* in English, sounds which we ordinarily aspirate automatically lose their aspiration (as the little puff of air is called). So the *c* of “scat” is unaspirated. Now say a prolonged “ssss” before the “-cat” part, thus—“sssssscat”. Then merely think the “ssss” to yourself without saying it out loud, but say the “-cat” aloud as before. It should sound a little different from the word “cat” for in the latter the *c* is aspirated, while in the former it should be unaspirated. Test your success by saying the two aloud one right after the other. Now work on the *ch* in the same way, but starting out with the word “eschew”. Test yourself on this by contrasting the “-chew” with the word “chew”. Next practice carefully the words **cangui**, **cani**, **allillachu**, with special attention to the **c** and **ch** sounds.`,
              es: `Se pronuncian estos sonidos como en "casa" y "hacha" en español (NO como "cat" y "church" en inglés). En estas palabras del inglés los sonidos iniciales son aspirados (pronunciados con un pequeño soplo de aire después), pero en las palabras del español no se pronuncian así. El QSC tiene tanto sonidos aspirados como no aspirados, así que uno tiene que tener cuidado para distinguirlos, o se pueden cometer errores vergonzosos. Si usted ya habla inglés correctamente, usted podra pronunciar bien tanto los sonidos aspirados como los no aspirados. Si no, estos sonidos requerirán bastante concentración para aprenderlos.`,
            },
          ],
          [
            {
              en: `5. Sounds of **gui**, **n**, **r**`,
              es: `5. Los sonidos de **gui**, **n**, **r**`,
            },
            {
              en: `**gui** sounds like the gee in “geese”, being written thus because we are conforming to Spanish orthography, in which a silent *u* is always inserted between a *gi* sequence (if the is a “hard *g*”).`,
              es: `**gui** se pronuncia como en español, con una y "sorda". Se escribe así para conformarse a la ortografía del español.`,
            },
          ],
          [
            {
              en: `**n** is pronounced like that in “neat”, except when it occurs at the end of a word, or immediately before the letters **c**, **g**, **hu**, **m**, **q**, **r**, **y**, and in some regions, **s**. In such situations it sounds like the *ng* of “sing”. You will hear such a sound in **cangui**. (This is also the pronunciation pattern used in Ecuadorian Spanish, except that before and the of “neat” is used.)`,
              es: `**n** se pronuncia igual como en el español ecuatoriano en la gran mayoría de los casos, es decir, tiene dos pronunciaciones, una con la punta de la lengua como en la palabra "nada", que ocurre en la mayoría de las situaciones excepto a fin de una palabra o ante las letras **c**, **g**, **hu**, **m**, **q**, **r**, **y**, y en algunas regiones, **s**. En tales situaciones tiene una pronunciación velar, es decir, el dorso de la lengua tiene contacto con el velo del paladar. Un ejemplo de tal pronunciación se oye en la palabra **cangui**. Los ecuatorianos harán todo esto automáticamente, así que ni siquiera tendrán que pensar en su pronunciación de esta letra, con las únicas excepciones de las combinaciones **nr** y **ny**, que tienen una pronunciación bien diferente que en español. (En algunos otros países de habla hispana, entre ellos México, la *n* no tiene esta pronunciación velar a fin de palabra, así que allá los dos casos de *n* en la palabra *nacen* se pronuncian iguales.)`,
            },
          ],
          [
            {
              en: `**r** is unlike any English sound, but is similar to the Spanish *r* as in “pero”. It is made by giving a quick flip of the tongue against the ridge just behind the upper teeth. (In certain situations the r has a different sound, which will be discussed when encountered.)`,
              es: `**r** generalmente se pronuncia como en español, por ejemplo como la r de "pero".`,
            },
          ],
          [
            {
              en: `6. Punctuation`,
              es: `6. La puntuación`,
            },
            {
              en: `As far as possible, Spanish punctuation usage is followed. This accounts for the “fore-and-aft” question marks.`,
              es: `Tanto como posible la puntuación se hace como en español.`,
            },
          ],
        ],
      },
      {
        phaseId: 'grammar',
        items: [
          [
            {
              en: `1. Roots and suffixes`,
              es: `1. Las raíces y sufijos`,
            },
            {
              en: `Quichua words are often quite long because of the addition of several suffixes to the root of the word. The root is the “stripped-down” essential (or basic) form of a word; a suffix is a short meaningful “bit” which may be attached to a root, thereby modifying its meaning. **Ari** is an example of a root and **-chu** an example of a suffix. (The hyphen placed before such suffixes when they are written in isolation is intended to indicate that they are not words in themselves, and cannot occur alone, but must always be attached to some root.)`,
              es: `Muchas veces las palabras del quichua resultan muy largas, debido a que se añaden varios sufijos a la raíz de la palabra. La raíz es la forma esencial "desnuda" (o básica) de una palabra; un sufijo es un trocito significativo que se añade a la raíz, modificando así su significado. **Ari** es un ejemplo de una raíz, y **-chu** de un sufijo. (Se escribe un guion ante tales sufijos cuando se escriben de forma aislada; esto indica que no son palabras en sí, y que no pueden ocurrir solos, sino que siempre tienen que adjuntarse a alguna raíz.)`,
            },
          ],
          [
            {
              en: `2. Suffixes **-chu** and **-mi**`,
              es: `2. Los sufijos **-chu** y **-mi**`,
            },
            {
              en: `Both of these are emphatic suffixes, indicating primary emphasis on the word to which they are attached—something that in English we usually do by raising the pitch and increasing the volume of the voice on the emphasized word. They are also *modal* suffixes, indicating the mood of the sentence in which they occur—again something which in English is done largely by intonation. The **-chu** is used for questions (of the true-or-false variety that must be answered by either “Yes” or “No”), while **-mi** occurs in affirmative statements.`,
              es: `Estos dos son sufijos enfáticos, indicando un énfasis especial en la palabra a la cual están adjuntas. En español hacemos tal énfasis alzando el tono y la fuerza de la voz en la palabra enfatizada. Éstos también son sufijos modales, que indican el modo de la oración en la que ocurren. En español esta función también se expresa generalmente por la entonación de la voz. El sufijo **-chu** se usa para hacer preguntas a las cuales la respuesta tiene que ser "sí" o "no". El sufijo **-mi** ocurre en las declaraciones afirmativas."`,
            },
          ],
        ],
      },
    ],
  },
  {
    slug: '2',
    topic: {
      en: '**-ca**; **-pish**; greetings; final accent; present singular of **cana**',
      es: '**-ca**; **-pish**; saludos; acento final; presente singular de **cana**',
    },
    contents: [
      {
        phaseId: 'models',
        items: [
          {
            qu: `¿Allillachu cangui?`,
            en: `Are you well?`,
            es: `¿Estás bien?`,
          },
          {
            qu: `Ari, allillami cani. ¿Cancá?`,
            en: `Yes, I’m well. And how about you?`,
            es: `Sí, estoy bien. ¿Y qué de ti?`,
          },
          {
            qu: `Ñucapish allillami cani.`,
            en: `I’m fine too.`,
            es: `Estoy bien también.`,
          },
          {
            qu: `¿Allillachu cambaj yaya?`,
            en: `Is your father well?`,
            es: `¿Está bien tu papá?`,
          },
          {
            qu: `Ari, paipish allillami. ¿Cambaj yayacá?`,
            en: `Yes, he’s fine too. How about your father?`,
            es: `Sí, está bien también. ¿Y qué del papá tuyo?`,
          },
          {
            qu: `Ñuca yayapish allillami.`,
            en: `My father’s fine too.`,
            es: `Mi papá está bien tambien.`,
          },
        ],
      },
      {
        phaseId: 'vocab',
        items: [
          [
            {
              qu: `ñuca`,
              en: `I, my`,
              es: `yo, mi (posesivo)`,
            },
            {
              qu: `can`,
              en: `you`,
              es: `tú`,
            },
            {
              qu: `pai`,
              en: `he, she, they`,
              es: `él, ella`,
            },
            {
              qu: `cambaj`,
              en: `your, yours`,
              es: `tu(yo)`,
            },
            {
              qu: `cana`,
              en: `to be`,
              es: `ser, estar`,
            },
          ],
          [
            {
              qu: `-cá`,
              en: `“and how about…?”`,
              es: `“y qué de…?”`,
            },
            {
              qu: `-pish`,
              en: `also, too`,
              es: `también`,
            },
          ],
          [
            {
              qu: `churi`,
              en: `son`,
              es: `hijo`,
            },
            {
              qu: `ushushi __(Imb.__ ushi__)__`,
              en: `daughter`,
              es: `hija`,
            },
            {
              qu: `mama`,
              en: `mother`,
              es: `mamá, madre`,
            },
            {
              qu: `yaya __(DV__ taita__)__`,
              en: `father`,
              es: `papá, padre`,
            },
            {
              qu: `cayacama`,
              en: `“see you tomorrow”`,
              es: `“hasta mañana”`,
            },
            {
              qu: `cancá`,
              en: `and you?`,
              es: `¿y tú?`,
            },
          ],
        ],
      },
      {
        phaseId: 'exercises',
        items: [
          [
            {
              en: `The following exercises are a type of “substitution drill”, built on the Models already studied. Be sure first that you can repeat each one as given, not only correctly, but to the point of ease and fluency, and translate it into English. Then vary it by substituting for the underlined part the successive “fillers” given in parentheses. Each time be sure to repeat the entire sentence or phrase, and if a question-answer sequence is given, repeat the whole thing. Practice each different substitution several times too. Unless a sentence slips smoothly and automatically from our lips under ideal conditions such as those of private study, we can never expect it to come out even half-properly under the pressure of actual conversation with a Quichua speaker.`,
              es: `Los siguientes ejercicios son un tipo de "práctica de sustitución", siguiendo los Modelos ya estudiados. Primero asegúrese de que pueda repetir cada uno tal como se da, no sólo correctamente, sino hasta el punto de facilidad y fluidez, y traduzcalo al español. Entonces varíalo sustituyendo por la parte subrayada cada uno de los "sustitutos" dados en paréntesis. Cada vez no se le olvide repetir la oración o frase entera, y si se da una secuencia de pregunta y respuesta, repita todo. Practique cada una de las sustituciones varias veces también. Si cada oración no sale fácil y automáticamente de nuestros labios bajo las condiciones ideales del estudio privado, nunca podemos esperar que salga siquiera medio correcto bajo la presión de la conversación propia con un quichuahablante.`,
            },
          ],
          [
            `1. **¿Allillachu cambaj _yaya_?**\n**Ari, paipish allillami.**`,
            `**«_mama_; _churi_; _ushushi_»**`,
          ],
          [
            `2. **¿Cambaj _yaya_cá?**\n**Ñuca _yaya_pish allillami.**`,
            `**«_mama_; _churi_; _ushushi_»**`,
          ],
          [
            `3. **¿Cambaj _mama_cá?**\n**Paipish allillami.**`,
            `**«_ushushi_; _churi_; _yaya_»**`,
          ],
        ],
      },
      {
        phaseId: 'more-exercises',
        items: [
          {
            en: `Be sure that you have thoroughly mastered all the Models of this lesson. After working them over alone, go through the entire conversation with a partner if possible. Then switch sides, making sure that you can take either part fluently and confidently. Then try standing in the middle of the room with your costar (and without the book). See if your fluency and confidence stay with you. If not, more study is indicated, and *more practice*.`,
            es: `Asegúrese de que sepa a fondo todos los Modelos de esta lección. Después de estudiarlos bien a solas, haga toda la conversación con otro estudiante si es posible. Entonces cambien de papeles, hasta que los dos puedan tomar cada papel con fluidez y confianza. Entonces haga la práctica con su compañero parados en el cuarto, y sin el libro. Así verán si su fluidez y confianza permanecen. Si no, más estudio está indicado, y *más práctica*.`,
          }
        ],
      },
      {
        phaseId: 'pronunciation',
        items: [
          [
            {
              en: `Sounds of **ai**, **j**, **ñ**, **p**, **sh**`,
              es: `Los sonidos de **ai**, **j**, **ñ**, **p**, **sh**`,
            },
            {
              en: `**ai** is pronounced somewhat like the *ie* in “pie”.`,
              es: `**ai** se pronuncia igual como en español.`,
            },
            {
              en: `**j** at the end of a word (as in **cambaj** “yours”) sounds rather like a heavily rasped English h, or like the sound made in clearing the throat. When it begins a word (as in **jatun** “big”), **j** has much less “rasp,” and more closely resembles a normal English *h* as in “him”.`,
              es: `**j** se pronuncia igual como en el español de la Sierra del Ecuador, aunque tiene más fricción a fin de palabra (como en **cambaj** "tuyo") que al principio (como en **jatun** "grande"). A principio de palabra es más como el *h* del inglés.`,
            },
            {
              en: `**ñ** is like the *ni* of “onion”, or the first sound of “new” if you pronounce this “nyoo”.`,
              es: `**ñ** se pronuncia igual como en español.`,
            },
          ],
          [
            {
              en: `**p** is unaspirated (like **c** and **ch**). To work on eliminating English aspiration from this, use the exercise already described. Begin with the word “spy”, then “sssspy” and finally contrast “-py” with “pie”. Practice the word **paipish** with special attention to the **p**.`,
              es: `**p** se pronuncia igual como en español (pero no si está seguida por un apóstrofe “**'**”).`,
            },
            {
              en: `**sh** is pronounced as in “sheep”.`,
              es: `**sh** se pronuncia igual como en inglés, como en la palabra “sheep”.`,
            },
          ],
          [
            {
              en: `Sound of **n** when followed by **b** or **p**`,
              es: `El sonido de **n** seguida por **b** o **p**`,
            },
            {
              en: `The word for “you”—**can**—ends in **n**. However, whenever the **n** is immediately followed by a **b** or a **p**, it is changed to **m** as in **cambaj** “your”. This always happens in the pronunciation when an **n** is followed by a **b** or a **p**, though the spelling will not always represent this, as in **ñanpi** “on the road”, which is pronounced **ñampi**. The same thing also happens in Spanish pronunciation, but does not necessarily occur in English, or at least not in all dialects.`,
              es: `La palabra **can** “tú” termina con **n**. Sin embargo, cuando la **n** está seguida inmediatamente por **b** o **p**, cambia a **m**, como en **cambaj** “tuyo“. Esto siempre ocurre en la pronunciación cuando una **n** esté seguida por **b** o **p**, aunque la ortografia no siempre representa esto, como en **ñanpi** “en el camino”, que se pronuncia **ñampi**. Lo mismo siempre ocurre en la pronunciación del español, pero no siempre ocurre en inglés, o por lo menos no en todos los dialectos.`,
            },
          ],
        ],
      },
      {
        phaseId: 'grammar',
        items: [
          [
            {
              en: `1. Suffixes **-ca** and **-pish** (Imb. **-pash**)`,
              es: `1. Los sufijos **-ca** y **-pish** (Imb. **-pash**)`,
            },
            {
              en: `Both of these suffixes indicate a secondary emphasis on the words to which they are attached. They do not, however, indicate the *mood* of the sentence (as do suffixes of primary emphasis like **-chu** and **-mi**).`,
              es: `Estos dos sufijos indican un énfasis secundario en las palabras en que se encuentran. No indican el *modo* de la oración (tal como hacen los sufijos de énfasis primaria como **-chu** y **-mi**).`,
            },
            {
              en: `In Models 2b and 5b, **-ca** is used with the subject to highlight the fact that there has been a change of subject, although the understood verb remains the same.`,
              es: `En los Modelos 2b y 5b, el **-ca** se usa en el sujeto para resaltar el hecho de que ha sido un cambio de sujeto, aunque el verbo implícito sigue igual. En otras palabras, frecuentemente se usa el sufijo **-ca** como *marcador de tópico*, para marcar el *tópico* actual.`,
            },
            {
              en: `In Models 3, 5a and 6, **-pish** is used with the subject to highlight the fact that the same thing holds true of each one of these different subjects.`,
              es: `En los Modelos 3, 5a y 6, se usa **-pish** en el sujeto para resaltar el hecho de que *se está diciendo la misma cosa* acerca de cada uno de estos sujetos distintos.`,
            },
          ],
          [
            {
              en: `2. Final accent in “**¿Cancá?**”`,
              es: `2. El acento final en “**¿Cancá?**”`,
            },
            {
              en: `This final accent has the effect of referring back to the original question and making it unnecessary to repeat the verb:`,
              es: `Este acento final tiene el efecto de referirse a la pregunta original, así que no es necesario repetir el verbo:`,
            },
            {
              qu: `¿Cancá?`,
              en: `*(literally)* And you?\n*(freely)* And how are you?`,
              es: `*(literalmente)* ¿Y tú?\n*(libremente)* ¿Y tú cómo estás?`,
            },
          ],
          [
            {
              en: `3. Present singular of the verb **cana** “to be”`,
              es: `3. El presente singular del verbo **cana** "ser, estar"`,
            },
            {
              qu: `ca_ni_`,
              en: `I am`,
              es: `soy`,
            },
            {
              qu: `ca_ngui_`,
              en: `you are`,
              es: `eres, estás`,
            },
            {
              qu: `ca_n_`,
              en: `he (she, it) is`,
              es: `es, está`,
            },
            {
              en: `The Quichua verb is almost completely regular, so once you have learned the forms for one verb, you have learned them for all verbs. The present singular is formed by attaching to the root **ca-** the suffixes **‑ni**, **‑ngui**, **‑n**. Note that these suffixes indicate both the person of the subject and the tense of the verb. Because the subject is already stated in the verb itself, it is often not explicitly given in a separate word, just like in Spanish, as in Model 1 **¿Allillachu cangui?** “Are you well?”`,
              es: `El verbo en quichua es casi completamente regular, así cuando haya aprendido las formas de algún verbo, ya las sabe para todos los verbos. Se forma el presente singular añadiendo a la raíz **ca-** los sufijos **‑ni**, **‑ngui**, **‑n**. Note que estos sufijos indican tanto la persona del sujeto como el tiempo del verbo. Ya que ya se especifica el sujeto dentro del verbo mismo, muchas veces no se expresa explícitamente como palabra aparte, igual como en español, como en el Modelo 1 **¿Allillachu cangui?** "¿Estás bien?"`,
            },
          ],
          [
            {
              en: `Conversely, if a third person subject (he, she, it) is explicitly named in the sentence, the verbal form **can** “he (she, it) is” is almost always omitted, as in Models 4, 5, and 6. This is something we need to watch in our own speechin Quichua, as our English tendency is to feel that a verb is needed, but such redundant use of **can** may sound rather stilted and pedantic to Quichua ears.`,
              es: `Por el otro lado, si en la oración se expresa explícitamente un sujeto de tercera persona (él, ella), casi siempre se omite la forma verbal **can** "es, está", como en los Modelos 4, 5, y 6. En nuestra propia habla del quichua debemos tener cuidado con esto, ya que nuestra tendencia como hispanohablantes será ver el verbo como necesario, pero tal uso superfluo de **can** a lo mejor se oira algo afectado y artificial a los oidos de los quichuas.`,
            },
          ],
        ],
      },
    ],
  },
  {
    slug: '3',
    topic: {
      en: 'types of suffixes; **-man**; **-taj~** as question marker; **-cu**',
      es: 'tipos de sufijos;  **-man**; **-taj~** como marcador de pregunta; **-cu**',
    },
    contents: [
      {
        phaseId: 'models',
        items: [
          {
            qu: `¿Maimantaj ricungui?`,
            en: `Where are you going?`,
            es: `¿Adónde estás yendo?`,
          },
          {
            qu: `Huasimanmi ricuni. ¿Cancá?`,
            en: `I’m going home (to the house). And you?`,
            es: `Estoy yendo a la casa. ¿Y tú?`,
          },
          {
            qu: `Ñucaca pueblomanmi ricuni.`,
            en: `I’m going to town.`,
            es: `Estoy yendo al pueblo.`,
          },
          {
            qu: `Cambaj yayaca ¿maimantaj ricun?`,
            en: `Where is your father going?`,
            es: `¿Adónde está yendo tu papá?`,
          },
          {
            qu: `Paica chagramanmi ricun.`,
            en: `He is going to the field.`,
            es: `Él está yendo a la chacra.`,
          },
          {
            qu: `¿Cambaj mamacá?`,
            en: `How about your mother?`,
            es: `¿Y tu mama?`,
          },
          {
            qu: `Paipish chagramanmi ricun.`,
            en: `She’s going to the field too.`,
            es: `Ella también está yendo al sembrío.`,
          },
        ],
      },
      {
        phaseId: 'vocab',
        items: [
          [
            {
              qu: `chagra`,
              en: `field (cultivated)`,
              es: `sementera; terreno de cultivo; chacra`,
            },
            {
              qu: `huambra`,
              en: `youngster, youth (about 6-16)`,
              es: `joven (de 6 a 16 años)`,
            },
            {
              qu: `mai`,
              en: `where, what place, some place`,
              es: `dónde; donde; qué lugar; algún lugar`,
            },
            {
              qu: `huauqui`,
              en: `brother (of a male)`,
              es: `hermano (de un hombre)`,
            },
            {
              qu: `turi`,
              en: `brother (of a female)`,
              es: `hermano (de una mujer)`,
            },
            {
              qu: `pani`,
              en: `sister (of a male)`,
              es: `hermana (de un hombre)`,
            },
            {
              qu: `ñaña`,
              en: `sister (of a female)`,
              es: `hermana (de una mujer)`,
            },
          ],
          [
            {
              qu: `huahua`,
              en: `baby, child, offspring`,
              es: `niño, niña, guagua`,
            },
            {
              qu: `huasi`,
              en: `house, home`,
              es: `casa`,
            },
            {
              qu: `pueblo`,
              en: `town`,
              es: `pueblo`,
            },
            {
              qu: `pugyu`,
              en: `well of water, spring`,
              es: `pozo, fuente, manantial`,
            },
            {
              qu: `rina`,
              en: `to go`,
              es: `ir`,
            },
          ],
          [
            {
              qu: `ricuni`,
              en: `I am going`,
              es: `estoy yendo`,
            },
            {
              qu: `ricungui`,
              en: `you are going`,
              es: `estás yendo`,
            },
            {
              qu: `ricun`,
              en: `he/she is going`,
              es: `está yendo`,
            },
          ],
          [
            {
              qu: `-man`,
              en: `to, toward (Adverbial Postposition)`,
              es: `a, hacia (Posposición Adverbial)`,
            },
            {
              qu: `-cu`,
              en: `progressive action (in verbs)`,
              es: `acción progresiva (en verbos)`,
            },
          ],
          [
            {
              qu: `-mi`,
              en: `«indicates an affirmative statement»`,
              es: `«indica una declaración afirmativa»`,
            },
            {
              qu: `-chu`,
              en: `«indicates a yes-no question»`,
              es: `«indica una pregunta sí-no»`,
            },
            {
              qu: `-taj~`,
              en: `«indicates an information question, or the emphatic suffix»`,
              es: `«indica una pregunta de información, o el sufijo enfático»`,
            },
          ],
        ],
      },
      {
        phaseId: 'exercises',
        items: [
          [
            `1. **¿Allillachu cambaj _mama_?**\n**Ari, paipish allillami.**`,
            `«**_huauqui_/_turi_**; **_pani_/_ñaña_**; **_huahua_**; **_huambra_**; **_yaya_**»`,
            `\n 2. **¿Cambaj _mama_cá?** \n **Ñuca _mama_pish allillami.**`,
            `«**_churi_**; **_ushushi_**; **_yaya_**; **_pani_/_ñaña_**; **_huauqui_/_turi_**»`,
          ],
          [
            `3. **¿Maimantaj ricungui?** \n **_Huasi_manmi ricuni.**`,
            `«**_chagra_**; **_pueblo_**; **_iglesia_**; **_pugyu_**; **_Quito_**; **_Guayaquil_**»`,
            `\n 4. **¿Cancá?** \n **Ñucaca _Quito_manmi ricuni.**`,
            `«**_pugyu_**; **_huasi_**; **_pueblo_**; **_iglesia_**; **_chagra_**»`,
          ],
          [
            `5. **Cambaj _yaya_ca ¿maimantaj ricun?** \n **Paica chagramanmi ricun.**`,
            `«**_mama_**; **_huahua_**; **_huambra_**; **_huauqui_/_turi_**; **_pani_/_ñaña_**; **_churi_**; **_ushushi_**»`,
          ],
          [
            `6. **¿Maimantaj ricungui? Ñucapish _pugyu_manmi ricuni.** \n **_Pugyu_manmi ricuni. ¿Cancá?**`,
            `«**_chagra_**; **_pueblo_**; **_iglesia_**; **_huasi_**; **_Quito_**; **_Guayaquil_**»`,
          ],
        ],
      },
      {
        phaseId: 'pronunciation',
        items: [
          [
            {
              en: `1. Dialect variations`,
              es: `1. Variaciones dialectales`,
            },
            {
              en: `Pulucate, Caliata, Imbabura, and SHQ use **‑man**, but Colta uses **-mun**.`,
              es: `En Pulucate, Caliata, Imbabura, y el QSS usan **-man**, pero en Colta usan **-mun**.`,
            },
            {
              en: `Pulucate, Caliata, and SHQ use **-taj~**, but Colta, Los Ángeles, and some other sections of Chimborazo and Bolivar provinces use **-tij~**, and Imbabura uses **-ta~**. (In Imbabura a **t** following **n** usually becomes **d**, so **-ta** in such positions becomes **-da**.)`,
              es: `En Pulucate, Caliata, y el QSS usan **-taj~**, pero en Colta, Los Ángeles, y algunos otros sectores de Chimborazo y Bolívar usan **-tij~**, y en Imbabura usan **-ta~**. (En Imbabura una **t** seguida por una **n** generalmente se convierte en **d**, así que **-ta** en tales posiciones se convierte en **-da**.)`,
            },
          ],
          [
            {
              en: `2. Borrowed words`,
              es: `2. Palabras prestadas`,
            },
            {
              en: `Quichuas have adopted many Spanish words, and in doing so have changed any “foreign” sounds to fit the Quichua sound system. However, in this grammar such borrowed words are usually spelled as in Spanish, not always as pronounced in Quichua. Notice carefully the Quichua “twist” given such words by your language helper, and imitate it when speaking Quichua (but NOT when talking Spanish).`,
              es: `Los quichuas han adoptado muchas palabras del español, y al hacer esto han cambiado cualquier sonido “extranjero” para acomodarse al sistema de sonidos del quichua. Sin embargo, en esta gramática generalmente se escriben tales palabras prestadas como se escriben en español, no siempre como se pronuncian en quichua. Note con cuidado la pronunciación particular dada a estas palabras por su ayudante quichua (que muchas veces no será exactamente como en español), e imítela al hablar quichua.`,
            },
          ],
          [
            {
              en: `3. Sounds of **hu**, **qui**, **r** at the beginning of a word; **t**`,
              es: `3. Los sonidos de **hu**, **qui**, **r** a principio de palabra; **t**`,
            },
            {
              en: `**hu** is pronounced like the *w* in “water”. This is another concession to Spanish usage, as in “huevo”. This functions as a distinct sound or letter of the alphabet in the Quichua sound system, just like *w* in English.`,
              es: `**hu** se pronuncia igual como en “huevo” en español, o como la *w* de "water" en inglés. Ésta funciona como un sonido distintivo o letra distintiva en el sistema de sonidos del quichua, igual como la *w* del inglés.`,
            },
            {
              en: `**qui** is pronounced like the *ki* in "ski", as in Spanish a silent *u* is always inserted in a **qi** sequence. Whenever **qu** occurs in Quichua, it has exactly the same sound as **c**.`,
              es: `**qui** se pronuncia igual como en español.`,
            },
          ],
          [
            {
              en: `**r** when occurring at the beginning of a word (as well as in some other situations) closely resembles the Spanish sound *rr*. That is, it has a distinct buzzing sound, a little like that of the *z* in “azure”, but made with the tip of the tongue trilling against the ridge behind the upper teeth. Note the contrast between the **r** sound in the following sets of words:`,
              es: `**r** casi siempre se pronuncia igual como en el español de la sierra del Ecuador, es decir, a principio de palabra es como *rr*, y entre dos vocales es como *r*. Aquí se dan algunos ejemplos de estas dos posiciones:`,
            },
          ],
          [
            {
              qu: `ricuni`,
              en: `I am going`,
              es: `estoy yendo`,
            },
            {
              qu: `ricungui`,
              en: `you are going`,
              es: `estás yendo`,
            },
            {
              qu: `ricun`,
              en: `he (she) is going`,
              es: `está yendo`,
            },
            {
              qu: `rina`,
              en: `to go`,
              es: `ir`,
            },
          ],
          [
            {
              qu: `ari`,
              en: `yes`,
              es: `sí`,
            },
            {
              qu: `turi`,
              en: `brother (of a female)`,
              es: `hermano (de una mujer)`,
            },
            {
              qu: `churi`,
              en: `son`,
              es: `hijo`,
            },
            {
              qu: `chagra`,
              en: `field`,
              es: `chacra`,
            },
          ],
          [
            {
              en: `**t**, like **c**, **ch**, and **p**, is unaspirated, as in Spanish "toro". For practice on this, use the English word “style”, pronouncing it "ssssstyle", then *isolating* the "-tyle". Contrast this with "tile", and then practice the sound in the Quichua words **maimantaj** and **turi**.`,
              es: `La **t**, igual como **c**, **ch**, y **p**, no es aspirada, igual como en “toro” en español.`,
            },
          ],
        ],
      },
      {
        phaseId: 'grammar',
        items: [
          [
            {
              en: `1. Classification of Suffixes`,
              es: `1. La clasificación de los sufijos`,
            },
            {
              en: `By far the great majority of roots in Quichua belong to either the verb-root category or the noun-root. Suffixes may conveniently be classified according to the type of root to which they may be attached. Those which occur with verb-roots are called *verb suffixes*. Those which occur with noun-roots are called *noun suffixes*. Some suffixes may be attached to either verbs or nouns and these are called *neutral suffixes*.`,
              es: `La gran mayoría de las raíces del quichua pertenecen a una de dos clases, las raíces verbales y las raíces nominales (de los sustanti-vos). Por conveniencia podemos clasificar los sufijos según la clase de raíz a la cual pueden añadirse. Los que ocurren en las raíces verbales se llaman *sufijos verbales*. Los que ocurren en las raíces nominales se llaman *sufijos nominales*. Algunos sufijos pueden añadirse tanto a los verbos como a los sustantivos, y se llaman *sufijos neutrales*.`,
            },
          ],
          [
            {
              en: `The person-tense suffixes **-ni**, **-ngui**, **-n**, are examples of *verb suffixes*; **‑chu**, **‑mi**, **‑ca**, and **‑pish** are *neutral suffixes*, for they may occur with either nouns or verbs. So far no *noun suffixes* have occurred.`,
              es: `Los sufijos de tiempo y persona **-ni**, **-ngui**, **-n**, son ejemplos de *sufijos verbales*; **‑chu**, **‑mi**, **‑ca**, y **‑pish** son *sufijos neutrales*, ya que pueden ocurrir tanto en los verbos como en los sustantivos. Hasta el momento no hemos visto ningún *sufijo nominal*.`,
            },
            {
              en: `Still another type of suffix, while it occurs with nouns, is not a noun suffix because the resultant combination no longer functions as a noun, but as an adverb. Such suffixes are called *adverbial postpositions*. The **-man** used in the Models of this lesson is such an adverbial postposition.`,
              es: `Hay aún otro tipo de sufijo, el cual, aunque ocurre en los sustantivos, no es un sufijo nominal porque la combinación resultante ya no funciona como sustantivo, sino como adverbio. Tales sufijos se llaman *posposiciones adverbiales*. El **-man** usado en los Modelos de esta lección es una de estas posposiciones adverbiales.`,
            },
          ],
          [
            {
              en: `2. Adverbial postposition **-man** (**‑mun**)`,
              es: `2. Posposición adverbial **-man** (**-mun**)`,
            },
            {
              en: `This indicates *motion to or toward* the noun with which it occurs. A word in which this **‑man** occurs functions as an adverb in the sentence, modifying the verb, since it tells *in what direction* the action takes place.`,
              es: `Este sufijo indica *movimiento a o hacia* el sustantivo con que ocurre. Una palabra en que ocurre este **-man** funciona como un adverbio en la oración, modificando el verbo, ya que indica *en qué dirección* toma lugar la acción.`,
            },
          ],
          [
            {
              qu: `huasi`,
              en: `house`,
              es: `casa`,
            },
            {
              qu: `pueblo`,
              en: `town`,
              es: `pueblo`,
            },
            {
              qu: `chagra`,
              en: `field`,
              es: `chacra`,
            },
          ],
          [
            {
              qu: `huasi_man_`,
              en: `to the house, towards home`,
              es: `a casa, hacia la casa`,
            },
            {
              qu: `pueblo_man_`,
              en: `to the town, to town`,
              es: `al pueblo`,
            },
            {
              qu: `chagra_man_`,
              en: `to the field`,
              es: `a la chacra`,
            },
          ],
          [
            {
              en: `3. Neutral suffix **-taj~** (**-tij~**, Imb. **-ta~**)`,
              es: `3. Sufijo neutral **-taj~** (**-tij~**, Imb. **-ta~**)`,
            },
            {
              en: `This is a suffix of primary emphasis, like **-chu** and **-mi**. As well as giving primary emphasis to the word with which it occurs, **-taj~** indicates the *mood* of the sentence as being interrogative. The difference between **-taj~** and **-chu** is that:`,
              es: `Éste es un sufijo de énfasis primario, igual como **-chu** y **-mi**. Además de dar la énfasis primaria a la palabra en que ocurre, el **-taj~** indica que el *modo* de la oración es interrogativo. La diferencia entre el **‑taj~** y el **‑chu** es así:`,
            },
            {
              en: `**-taj~** indicates a question requiring an answer other than “Yes” or “No”. Instead, it requests *information*.`,
              es: `El **-taj~** indica una pregunta que requiere una respuesta que no sea “Sí” o “No”. En cambio, solicita *información*.`,
            },
            {
              en: `**-chu** indicates a question requiring a “Yes” or “No” answer.`,
              es: `El **-chu** indica una pregunta que requiere una respuesta “Sí” o “No”.`,
            },
          ],
          [
            {
              en: `Thus the question:`,
              es: `Así que la pregunta:`,
            },
            {
              qu: `¿Maiman_taj_ ricungui?`,
              en: `Where are you going?`,
              es: `¿Adónde estás yendo?`,
            },
            {
              en: `is answered by new information, as in:`,
              es: `se contesta con nueva información, como en:`,
            },
            {
              qu: `Huasiman_mi_ ricuni.`,
              en: `I’m going to the house. / I’m going home.`,
              es: `Estoy yendo a la casa.`,
            },
            {
              en: `but`,
              es: `pero`,
            },
            {
              qu: `_Ari_, allilla_mi_ cani.`,
              en: `Yes, I am well.`,
              es: `Sí, estoy bien.`,
            },
            {
              en: `is answered by an affirmative, as in:`,
              es: `se contesta con un affirmación, come en:`,
            },
            {
              qu: `_Mana_, ungushca_mi_ cani.`,
              en: `No, I am sick.`,
              es: `No, estoy enfermo.`,
            },
          ],
          [
            {
              en: `Right from the start, try to keep your **‑taj~** and **‑chu** straight, as a common mistake is to put a **‑chu** on a **‑taj~** sort of question or, less often, vice versa.`,
              es: `Desde el comienzo, trate de no confundir los usos de **‑taj~** y **‑chu**, ya que es un error común poner **‑chu** en una pregunta que requiere **‑taj~**, o, con menos frecuencia, vice versa.`,
            },
          ],
          [
            {
              en: `4. Optional use of **-taj~** and **-mi**`,
              es: `4. El uso opcional de **-taj~** y **-mi**`,
            },
            {
              en: `There is a good deal of variation among the different Quichua languages and dialects with respect to the use of these suffixes, although all dialects do make use of them. Even in Colta, where they seem to be most extensively used, they are quite often dropped, especially in familiar, colloquial speech. However, whenever a question or statement is to be *emphasized*, they must be used. The Models given here are in the more complete form, using the **-taj~** and the **-mi**. If your language helper objects to them, don't insist on using them. They are given here for much the same reason that prompts us to teach a foreigner “Where did you go this morning?” before “Wheredya go s'morning?”`,
              es: `Existe bastante variación entre los diferentes idiomas y dialectos del quichua con respecto al uso de estos sufijos, aunque todos los dialectos los utilizan. Aun en Colta, en donde se usan muy frecuentemente, muchas veces se omiten, especialmente en el habla informal y familiar. Sin embargo, en cualquier situación en que es necesario *enfatizar* una pregunta o una declaración, deben usarse. Los Modelos dados aquí están en la forma más completa, usando el **-taj~** y el **-mi**. Si a su ayudante quichua no le gusta usarlas, no insista en usarlas. Se dan aquí para que aprenda las formas más claras y completas.`,
            },
          ],
          [
            {
              en: `5. Verb suffix **-cu** (Imbabura **-ju**, Salasaca **‑gu**)`,
              es: `5. Sufijo verbal **-cu** (Imbabura **-ju**, Salasaca **‑gu**)`,
            },
            {
              en: `This indicates progressive action. It closely resembles the progressive form of the English verb. (e.g. “I am going” vs. “I go”.) The verb forms in this lesson are all combinations of the verb root **ri-** with this progressive **-cu**, plus the person-tense suffixes. Note the following contrast:`,
              es: `Este sufijo indica la acción progresiva*. Es muy semejante a la construcción progresiva de los verbos del español. (p.ej. “Estoy yendo” en vez de “Voy”.) Todas las formas verbales en esta lección son combinaciones de la raíz verbal **ri-** con este sufijo progresivo **-cu**, más los sufijos de tiempo y persona. Note el siguiente contraste:`,
            },
          ],
          [
            {
              qu: `ri_ni_`,
              en: `I go`,
              es: `voy`,
            },
            {
              qu: `ri_ngui_`,
              en: `you go`,
              es: `vas`,
            },
            {
              qu: `ri_n_`,
              en: `he (she) goes`,
              es: `va`,
            },
          ],
          [
            {
              qu: `ri_cuni_`,
              en: `I am going`,
              es: `estoy yendo`,
            },
            {
              qu: `ri_cungui_`,
              en: `you are going`,
              es: `estás yendo`,
            },
            {
              qu: `ri_cun_`,
              en: `he (she) is going`,
              es: `está yendo`,
            },
          ],
        ],
      },
    ],
  },
  {
    slug: '4',
    topic: {
      en: '**-man** used as “for”; **-na** of infinitive; roots vs. stems',
      es: '**-man** usado como “por”; **-na** del infinitivo; raíces simples y compuestas',
    },
    contents: [
      {
        phaseId: 'models',
        items: [
          {
            qu: `¿Maimantaj ricungui?`,
            en: `Where are you going?`,
            es: `¿Adónde vas?`,
          },
          {
            qu: `Yacumanmi ricuni. ¿Cancá?`,
            en: `I’m going for water. How about you?`,
            es: `Estoy yendo por agua. ¿Y tú?`,
          },
          {
            qu: `Ñucaca yantamanmi ricuni.`,
            en: `I’m going for firewood.`,
            es: `Estoy yendo por la leña.`,
          },
          {
            qu: `Cambaj yayaca ¿maimantaj ricun?`,
            en: `And where is your father going?`,
            es: `Y tu papá, ¿Adónde va?`,
          },
          {
            qu: `Paica randinamanmi ricun.`,
            en: `He’s going to do some buying.`,
            es: `Está yendo a hacer compras.`,
          },
          {
            qu: `¿Yacumanchu ricungui?`,
            en: `Are you going for water?`,
            es: `¿Estás yendo por agua?`,
          },
          {
            qu: `Ari, yacumanmi ricuni.`,
            en: `Yes, I’m going for water.`,
            es: `Sí, estoy yendo por agua.`,
          },
          {
            qu: `¿Pueblomanchu ricungui?`,
            en: `Are you going to town?`,
            es: `¿Estás yendo hacia el pueblo?`,
          },
          {
            qu: `Ari, pueblomanmi ricuni.`,
            en: `Yes, I’m going to town.`,
            es: `Sí, estoy yendo al pueblo.`,
          },
        ],
      },
      {
        phaseId: 'vocab',
        items: [
          [
            {
              qu: `c'atuna __(Imb.__ jatuna__)__`,
              en: `to sell`,
              es: `vender`,
            },
            {
              qu: `jaźinda`,
              en: `plantation, large farm`,
              es: `hacienda, finca`,
            },
            {
              qu: `q'uihua __(Imb.__ jihua__)__`,
              en: `grass, plant, fodder`,
              es: `pasto, hierba, planta`,
            },
            {
              qu: `ujsha __(Imb.__ ujsha, jupa__)__`,
              en: `Andean bunch grass, straw`,
              es: `paja, pasto del páramo`,
            },
            {
              qu: `t'iyu`,
              en: `sand`,
              es: `arena`,
            },
            {
              qu: `tío __(pron.__ tiyu__)__`,
              en: `uncle`,
              es: `tío`,
            },
            {
              qu: `yanta __(Imb.__ yamda/yanda__)__`,
              en: `firewood`,
              es: `leña`,
            },
            {
              qu: `yantana __(Imb.__ yamdana/yandana__)__`,
              en: `collect or cut firewood`,
              es: `recoger o cortar leña`,
            },
          ],
          [
            {
              qu: `cusa`,
              en: `husband`,
              es: `esposo`,
            },
            {
              qu: `escuela`,
              en: `school`,
              es: `escuela`,
            },
            {
              qu: `huarmi`,
              en: `woman, wife`,
              es: `mujer, esposa`,
            },
            {
              qu: `micuna`,
              en: `to eat, food`,
              es: `comer, comida`,
            },
            {
              qu: `randina`,
              en: `to buy`,
              es: `comprar`,
            },
            {
              qu: `trabajana`,
              en: `to work`,
              es: `trabajar`,
            },
            {
              qu: `yacu`,
              en: `water`,
              es: `agua`,
            },
          ],
          [
            {
              qu: `-na`,
              en: `«infinitive»`,
              es: `«infinitivo»`,
            },
          ],
        ],
      },
      {
        phaseId: 'pronunciation',
        items: [
          {
            en: `**qu** and **c** represent the same sound, just as in Spanish. The apostrophe after the letters **c**, **ch**, **p**, **q**, **t**, and **ts** stands for aspiration, a brief explosion of air or an *h* sound after a letter, which in English always occurs after voiceless stops like these at the beginning of a word. Thus, **t'** indicates the same sound as that of the *t* in “top”. This aspiration only occurs in Imbabura after **t**; CHQ **c'** and **q'u** are usually replaced in Imbabura by **j**, so that CHQ **q'uihua** becomes Imbabura **jihua** and CHQ **c'atuna** becomes Imbabura **jatuna**.`,
            es: `Igual como en español, **qu** y **c** representan el mismo sonido. El apóstrofe después de las letras **c**, **ch**, **p**, **q**, **t** y **ts** indica la aspiración, una breve explosión de aire después de una letra, el cual siempre ocurre después de oclusivas sordas como estas letras a principio de palabra. Así que la **t'** indica el mismo sonido que la **t** de “top” en inglés. Esta aspiración sólo ocurre en Imbabura después de t. Generalmente **c'** y **q'u** en el QSC se reemplazan por **j** en Imbabura, así que **q'uihua** en QSC es **jihua** en Imbabura, y **c'atuna** es **jatuna**.`,
          },
        ],
      },
      {
        phaseId: 'exercises',
        items: [
          [
            {
              n: '1',
              q: `¿Maimantaj ricungui?`,
              a: `_Yacu_manmi ricuni.`,
              subs: [ `yanta`, `ujsha`, `q'uihua`, `micuna`, `randina`, ],
            },
            {
              n: '2',
              q: `Canca ¿maimantaj ricungui?`,
              a: `Ñucaca _escuela_manmi ricuni.`,
              subs: [ `pugyu`, `Quito`, `jaźinda`, `chagra`, ],
            },
          ],
          [
            {
              n: '3',
              q: `Cambaj _yaya_ca ¿maimantaj ricun?`,
              a: ``,
              subs: [ `mama`, `cusa/warmi`, `huahua`, `huauqui/turi`, ],
            },
            {
              n: '4',
              q: ``,
              a: `Paica _randina_manmi ricun.`,
              subs: [ `yacu`, `trabajana`, `c'atuna`, `micuna`, `escuela`, `jaźinda`, ],
            },
          ],
          [
            {
              n: '5',
              q: `Cambaj huauquica/turica ¿maimantaj ricun? ¿Cambaj panicá/ñañacá?`,
              a: `_Escuela_manmi ricun. Paipish _escuela_manmi ricun.`,
              subs: [ `randina`, `trabajana`, `micuna`, `jaźinda`, `pugyu`, `chagra`, `pueblo`, ],
            },
          ],
          [
            {
              n: '6',
              q: `¿_Yacu_manchu ricungui?`,
              a: `Ari, _yacu_manmi ricuni.`,
              subs: [ `yanta`, `randina`, `ujsha`, `q'uihua`, ],
            },
            {
              n: '7',
              q: `¿_Pueblo_manchu ricungui?`,
              a: `Ari, _pueblo_manmi ricuni.`,
              subs: [ `pugyu`, `jaźinda`, `trabajana`, `randina`, ],
            },
          ],
        ],
      },
      {
        phaseId: 'grammar',
        items: [
          [
            {
              en: `1. **-man** used in the sense of “for”, or “to get”`,
              es: `1. **-man** usado con el sentido de “por”, o “para recoger”`,
            },
            {
              en: `In English we say that we are going “for water”, or “to get water”, but in Quichua one may merely say that they are going “to water”. This **-man** is the same one studied in the last lesson, but its usage here is slightly different. There is little danger of ambiguity however, for the type of noun used will suggest whether the **-man** means simply “to”, or whether it means “to get”. Movable objects of general use like water, firewood, hay grass, etc., are usually being “got”, while places like house, field, town, etc. are always being “gone to”.`,
              es: `En español decimos que vamos “por agua”, o “para recoger agua”, pero en quichua uno puede simplemente decir que va “al agua”. Este **-man** es el mismo que fue estudiado en la lección anterior, pero su uso aquí es un poco diferente. Aun así, hay poco riesgo de ambigüedad, ya que el tipo de sustantivo usado sugerirá si el **-man** significa simplemente “a” o “hacia”, o si significa “para recoger”. Generalmente “se recogen” los objetos movibles de uso general como agua, leña, paja, etc., mientras que generalmente “se va” a los lugares como casa, chacra, pueblo, etc.`,
            },
          ],
          [
            {
              en: `2. Nominalizing suffix **-na**`,
              es: `2. Sufijo nominalizador **-na**`,
            },
            {
              en: `While it occurs only with verb roots, **-na** changes such roots into infinitives, which function as nouns. Hence **-na** is a *nominalizing* suffix. An infinitive form like **randina** may take most of the suffixes that a simple noun like **huasi** takes:`,
              es: `Aunque sólo ocurre en las raíces verbales, **-na** cambia tales raíces en infinitivos, los cuales funcionan como sustantivos. Por esto **-na** es un sufijo *nominalizador*. Una forma infinitiva como **randina** puede recibir casi todos los sufijos que toma un sustantivo simple como **huasi**:`,
            },
          ],
          [
            {
              qu: `huasi`,
              en: `house`,
              es: `casa`,
            },
            {
              qu: `yacu`,
              en: `water`,
              es: `agua`,
            },
            {
              qu: `randina`,
              en: `to buy, the buying`,
              es: `comprar`,
            },
          ],
          [
            {
              qu: `huasi_man_`,
              en: `to the house`,
              es: `a la casa`,
            },
            {
              qu: `yacu_man_`,
              en: `to the water, for water`,
              es: `al agua, por agua`,
            },
            {
              qu: `randina_man_`,
              en: `to the buying, for buying`,
              es: `a comprar, para comprar`,
            },
          ],
          [
            {
              en: `3. Roots versus Stems`,
              es: `3. Las raíces simples y compuestas`,
            },
            {
              en: `Another useful distinction in Quichua grammar is that between a *root* and a *stem*. As we have seen, the root is the bare, basic and irreducible part of a word. The combination of such a root plus any suffix is called a stem, provided this combination is still open to further suffixation.`,
              es: `Otra distinción útil en la gramática quichua es entra una *raíz simple* y una *raíz compuesta*. Como hemos visto, la raíz simple es la parte simple e irreducible de una palabra. La combinación de tal raíz simple más algún sufijo se llama una *raíz compuesta*, siempre y cuando tal combinación puede recibir sufijos adicionales.`,
            },
          ],
          [
            {
              en: `**randi- + -na → randina** (“buy”)`,
              es: `**randi- + -na → randina** (“comprar”)`,
            },
            {
              en: `the verb *root* + the nominalizing suffix → the noun *stem*`,
              es: `la *raíz simple* verbal + el sufijo nominalizador → la *raíz compuesta* nominal`,
            },
            {
              en: `**randi-na + -man → randinaman** (“to buy”)`,
              es: `**randi-na + -man → randinaman** (“a comprar”)`,
            },
            {
              en: `the noun *stem* + the adverbial postposition → the adverb`,
              es: `la *raíz compuesta* + la posposición adverbial → el adverbio`,
            },
          ],
          [
            {
              en: `**ri- + -cu → ricu-** (“be going”)`,
              es: `**ri- + -cu → ricu-** (“estar yendo”)`,
            },
            {
              en: `the verb *root* “go” + the verb suffix → the verb *stem*`,
              es: `la *raíz simple* verbal “ir” + el sufijo verbal → la *raíz compuesta* verbal`,
            },
            {
              en: `**ri-cu- + -ni → ricuni** (“I am going”)`,
              es: `**ri-cu- + -ni → ricuni** (“estoy yendo”)`,
            },
            {
              en: `the verb *stem* “be going” + the verb suffix → the verb`,
              es: `la *raíz compuesta* verbal “estar yendo” + el sufijo verbal → el verbo`,
            },
          ],
        ],
      },
    ],
  },
  {
    slug: '5',
    topic: {
      en: '**-manta**; demonstratives; movability of emphatic suffixes',
      es: '**-manta**; demostrativos; que los sufijos enfáticos son movibles',
    },
    contents: [
      {
        phaseId: 'models',
        items: [
          [
            {
              qu: `¿Maimantataj shamucungui?`,
              en: `Where are you coming from?`,
              es: `¿De dónde estás viniendo?`,
            },
            {
              qu: `Chai chagramantami shamucuni. ¿Cancá/Quiquincá? ¿Maimantataj shamucungui?`,
              en: `I’m coming from that field. And you? Where are you coming from?`,
              es: `Estoy viniendo desde esa chacra. ¿Y tú? ¿De dónde estás viniendo?`,
            },
            {
              qu: `Ñucaca pueblomantami shamucuni.`,
              en: `I’m coming from town.`,
              es: `Estoy viniendo desae el pueblo.`,
            },
            {
              qu: `Chai huarmica ¿maimantataj shamucun?`,
              en: `Where is that woman coming from?`,
              es: `Y esa mujer, ¿de dónde está viniendo?`,
            },
            {
              qu: `Ñuca huasimantami shamucun.`,
              en: `She’s coming from my house.`,
              es: `Está viniendo desde mi casa.`,
            },
          ],
          [
            {
              qu: `¿Maimantataj cangui?`,
              en: `Where are you from?`,
              es: `¿De dónde eres?`,
            },
            {
              qu: `Ñucaca Coltamantami cani. ¿Cancá/Quiquincá?`,
              en: `I’m from Colta. And you?`,
              es: `Yo soy de Colta, ¿Y tú?`,
            },
            {
              qu: `Ñucaca Quitomantami cani.`,
              en: `I’m from Quito.`,
              es: `Yo soy de Quito.`,
            },
            {
              qu: `Chai huarmica ¿maimantataj?`,
              en: `Where is that woman from?`,
              es: `Y esa mujer, ¿de dónde es?`,
            },
            {
              qu: `Paipish Quitomantami.`,
              en: `She’s from Quito too.`,
              es: `Ella es de Quito, también.`,
            },
          ],
        ],
      },
      {
        phaseId: 'vocab',
        items: [
          [
            {
              qu: `mishu`,
              en: `white/mestizo/non-indigenous man (neutral)`,
              es: `hombre mestizo/blanco (neutro)`,
            },
            {
              qu: `misha`,
              en: `white/mestiza/non-indigenous woman (neutral)`,
              es: `mujer mestiza/blanca (neutro)`,
            },
            {
              qu: `amo`,
              en: `white man (classist, use discouraged)`,
              es: `señor blanco, patrón, amo (clasista, usar desanimado)`,
            },
            {
              qu: `ama`,
              en: `white woman (classist, use discouraged)`,
              es: `señora blanca, patrona, ama (clasista, usar desanimado)`,
            },
          ],
          [
            {
              qu: `apana`,
              en: `to take, to carry away`,
              es: `cargar (objetos), llevar`,
            },
            {
              qu: `apamuna`,
              en: `to bring`,
              es: `traer`,
            },
            {
              qu: `cai`,
              en: `this`,
              es: `esto, este, esta, éste, ésta`,
            },
            {
              qu: `chai`,
              en: `that`,
              es: `eso, ese, esa, ése, ésa, aquello, aquel, aquella, aquél, aquélla`,
            },
          ],
          [
            {
              qu: `culto`,
              en: `religious meeting (evangelical)`,
              es: `culto religioso (evangélico)`,
            },
            {
              qu: `laguna __(Colta, Imb.__ cucha__)__`,
              en: `lake`,
              es: `laguna`,
            },
            {
              qu: `larca __(QSS/SHQ__ parcu__)__ `,
              en: `irrigation ditch, watercourse`,
              es: `acequia`,
            },
            {
              qu: `runa`,
              en: `person, man (primarily indigenous)`,
              es: `persona, hombre (generalmente indígena)`,
            },
            {
              qu: `shamuna`,
              en: `to come`,
              es: `venir`,
            },
            {
              qu: `yachana`,
              en: `to know, to learn`,
              es: `saber, aprender`,
            },
          ],
          [
            {
              qu: `-manta`,
              en: `from`,
              es: `de, desde`,
            },
            {
              qu: `huasimanta`,
              en: `from the house`,
              es: `desde la casa, de la casa`,
            },
          ],
        ],
      },
      {
        phaseId: 'exercises',
        items: [
          [
            {
              n: '1',
              q: `¿Maimantataj shamucungui?`,
              a: `Chai _chagra_mantami shamucuni.`,
              subs: [ `huasi`, `larca`, `pugyu`, `jaźinda`, ],
            },
            {
              n: '2',
              q: `¿Cancá? ¿Maimantataj shamucungui?`,
              a: `Ñucaca _pueblo_mantami shamucuni.`,
              subs: [ `culto`, `laguna`, `chagra`, `jaźinda`, `pugyu`, `escuela`, ],
            },
          ],
          [
            {
              n: '3',
              q: `¿Maimantaj ricungui?`,
              a: `_Randina_manmi ricuni.`,
              subs: [ `yachana`, `c'atuna`, `trabajana`, ],
            },
            {
              n: '4',
              q: `Cambaj yayaca ¿maimantaj ricun?`,
              a: `_Yanta_manmi ricun.`,
              subs: [ `yacu`, `ujsha`, `q'uihua`, `chagra`, `pueblo`, ],
            },
          ],
          [
            {
              n: '5',
              q: `Chai runaca ¿maimantataj shamucun?`,
              a: `_Larca_mantami shamucun.`,
              subs: [ `pueblo`, `culto`, `laguna`, `chai chagra`, `chai huasi`, `chai jaźinda`, `escuela`, ],
            },
            {
              n: '6',
              q: `¿Allillachu cambaj _yaya_?`,
              a: `Ari, ñuca _yaya_ca allillami. ¿Cambaj _yaya_cá?`,
              subs: [ `mama`, `huahua`, `huauqui/turi`, `pani/ñaña`, `churi`, `ushushi`, ],
            },
          ],
          [
            {
              n: '7',
              q: `¿Maimantataj cangui?`,
              a: `Ñucaca _Colta_mantami cani. ¿Cancá?`,
              subs: [ `Estados Unidos`, `Nueva Jersey`, `Nueva York`, `Queens`, `Corona`, `Jackson Heights`, ],
            },
            {
              n: '8',
              q: `Chai _huarmi_ca ¿maimantataj? `,
              a: `Paipish Coltamantami.`,
              subs: [ `runa`, `huahua`, `huambra`, `mishu`, `misha`, ],
            },
          ],
        ],
      },
      {
        phaseId: 'grammar',
        items: [
          [
            {
              en: `1. Adverbial postposition **-manta** “from, whence” (DV’s **-munta**, Imb. **-manda**)`,
              es: `1. Posposición adverbial **-manta** “de, desde” (VD **-munta**, Imb. **-manda**)`,
            },
            {
              en: `**-manta** is in direct contrast to **-man**, the former referring to the point of departure or origin, the latter to the destination point:`,
              es: `**-manta** está en contraste directo con **-man**, aquél refiriéndose al punto de partida u origen, y éste al punto de destino:`,
            },
            {
              qu: `huasiman`,
              en: `to the house`,
              es: `a la case`,
            },
            {
              qu: `huasimanta`,
              en: `from the house`,
              es: `de(sde) la case`,
            },
          ],
          [
            {
              en: `2. Demonstratives`,
              es: `2. Demostrativos`,
            },
            {
              en: `There are only two commonly used demonstratives in Quichua:`,
              es: `Sólo hay dos demostrativos comúnmente usados en quichua:`,
            },
            {
              en: `**cai** “this”, used to describe anything fairly close to the speaker`,
              es: `**cai** “esto, etc.”, usado para describir cualquier cosa relativamente cerca al hablante`,
            },
            {
              en: `**chai** “that”, used to describe anything not quite close to the speaker`,
              es: `**chai** “eso, etc.”, usado para describir cualquier cosa no tan cerca al hablante`,
            },
            {
              en: `When used to describe a noun, these words function as adjectives and, like all Quichua adjectives, precede the noun being modified:`,
              es: `Cuando se usa para describir un sustantivo, estas palabras funcionan como adjetivos y, igual como todos los adjetivos en quichua, preceden al sustantivo que modifican:`,
            },
          ],
          [
            {
              qu: `cai huasi`,
              en: `this house`,
              es: `esta casa`,
            },
            {
              qu: `cai huahua`,
              en: `this child`,
              es: `este niño`,
            },
            {
              qu: `cai huarmi`,
              en: `this woman`,
              es: `esta mujer`,
            },
          ],
          [
            {
              qu: `chai huasi`,
              en: `that house`,
              es: `esa casa`,
            },
            {
              qu: `chai huahua`,
              en: `that child`,
              es: `ese niño`,
            },
            {
              qu: `chai huarmi`,
              en: `that woman`,
              es: `esa mujer`,
            },
          ],
          [
            {
              en: `3. “Movability” of emphatic suffixes`,
              es: `3. Los sufijos enfáticos son “movibles”`,
            },
            {
              en: `Suffixes of primary and secondary emphasis (so far: **-chu**, **-mi**, **-taj~** and **-ca**, **-pish**), being neutral, can be attached to either verbs or nouns, as well as other parts of speech. Keep watching them closely, and be sure that you understand *why* they occur where they do in each particular case. But don't make the mistake of thinking that they always *have to* occur just as given in the Models. Their use is one of the most flexible things in Quichua, because emphasis can vary tremendously in this language, just as in English:`,
              es: `Los sufijos de énfasis primaria y secundaria (hasta ahora: **-chu**, **-mi**, **-taj~** y **-ca**, **-pish**), siendo neutrales, pueden juntarse tanto a los verbos como a los sustantivos, además de otras partes de la oración. Estúdialos con cuidado, y asegúrese que entienda por qué ocurren donde ocurren en cada caso individual. Pero no cometa el error de pensar que siempre *tienen que* ocurrir tal como se dan en los Modelos. Su uso es una de las cosas más flexibles en quichua, porque la énfasis puede variar tremendamente en este idioma, igual como en español:`,
            },
          ],
          [
            {
              qu: `Juan_mi_ ñuca huasiman shamurca.`,
              en: `*Juan* came to my house (rather than José).`,
              es: `*Juan* vino a mi casa (en vez de Jose).`,
            },
            {
              qu: `Juanca ñuca huasiman shamurca_mi_.`,
              en: `Juan *came* to my house (rather than not coming).`,
              es: `Juan *vino* a mi casa (en vez de no haber venido).`,
            },
            {
              qu: `Juanca ñuca huasiman_mi_ shamurca.`,
              en: `Juan came to *my house* (rather than going to town).`,
              es: `Juan vino *a mi casa* (en vez de ir al pueblo).`,
            },
          ],
        ],
      },
    ],
  },
  {
    slug: '6',
    topic: {
      en: 'demonstratives used as nouns; **‑ta** of direct object; suffix order',
      es: 'demostrativos usado como sustantivos; **‑ta** de complemento directo; orden de sufijos',
    },
    contents: [
      {
        phaseId: 'models',
        items: [
          [
            {
              qu: `¿Imataj caica?`,
              en: `What is this?`,
              es: `¿Qué es esto?`,
            },
            {
              qu: `Chaica yantami.`,
              en: `That’s firewood.`,
              es: `Ésa es leña.`,
            },
            {
              qu: `¿Caicá?`,
              en: `And this?`,
              es: `¿Y esto?`,
            },
            {
              qu: `Chaica q'uihuami.`,
              en: `That’s grass.`,
              es: `Ése es pasto.`,
            },
            {
              qu: `¿Imatataj randicungui? `,
              en: `What are you buying?`,
              es: `¿Qué estás comprando?`,
            },
            {
              qu: `Yantatami randicuni. Canca ¿imatataj randicungui?`,
              en: `I’m buying firewood. And what are you buying?`,
              es: `Estoy comprando leña. Y tú ¿qué estás comprando?`,
            },
            {
              qu: `Micunatami randicuni.`,
              en: `I’m buying food.`,
              es: `Estoy comprando comida.`,
            },
          ],
          [
            {
              qu: `¿Jaźindamantachu shamucungui?`,
              en: `Are you coming from the plantation?`,
              es: `¿Estás viniendo de la hacienda?`,
            },
            {
              qu: `Ari, chaimantami shamucuni. `,
              en: `Yes, that’s where I’m coming from.`,
              es: `Sí, de allí estoy viniendo.`,
            },
            {
              qu: `¿Yantachu caica?`,
              en: `Is this firewood?`,
              es: `¿Es leña esto?`,
            },
            {
              qu: `Ari, yantami.`,
              en: `Yes, it’s firewood.`,
              es: `Sí, es leña.`,
            },
          ],
        ],
      },
      {
        phaseId: 'vocab',
        items: [
          [
            {
              qu: `ima`,
              en: `what, something, anything`,
              es: `¿qué?, algo`,
            },
            {
              qu: `tanda`,
              en: `bread`,
              es: `pan`,
            },
            {
              qu: `aicha`,
              en: `meat, flesh`,
              es: `carne`,
            },
            {
              qu: `lulun`,
              en: `egg(s)`,
              es: `huevo(s)`,
            },
            {
              qu: `cebada __(pron.__ sibada__)__`,
              en: `barley`,
              es: `cebada`,
            },
            {
              qu: `cuta __(Imb.__ jacu__)__`,
              en: `flour, powder`,
              es: `harina, polvo`,
            },
            {
              qu: `machca __(Imb.__ jacu__)__`,
              en: `barley, roasted and ground`,
              es: `machica`,
            },
          ],
          [
            {
              qu: `leche __(pron.__ lichi__)__`,
              en: `milk`,
              es: `leche`,
            },
            {
              qu: `café __(pron.__ cáfi__)__`,
              en: `coffee`,
              es: `cafe`,
            },
            {
              qu: `papa`,
              en: `potato(es)`,
              es: `papa(s)`,
            },
            {
              qu: `rurana __(DV__ rurrana__)__`,
              en: `to do, to make`,
              es: `hacer`,
            },
            {
              qu: `yachacuna`,
              en: `to learn, to study`,
              es: `aprender, estudiar`,
            },
            {
              qu: `yachachina`,
              en: `to teach`,
              es: `enseñar`,
            },
          ],
        ],
      },
      {
        phaseId: 'pronunciation',
        items: [
          {
            en: `In most of the Central Highlands, the second **r** in **rurana**, as well as the first one, is pronounced with the buzzing sound already mentioned. As a matter of fact, it would actually be more correct to write this word **rurrana**. However, since this is practically the only case on record where an **r** occurring between two vowels is thus pronounced in a native Quichua word, and since it is probably merely due to the influence of the initial **r**, it is being spelled traditionally but remember to put the buzz in if your language helper does! In other regions, like Imbabura, it is not pronounced this way, but is pronounced like it is spelled.`,
            es: `En gran parte de la Sierra Central, la segunda **r** de **rurana**, igual como la primera, se pronuncia como **rr**, y realmente sería más correcto escribir esta palabra como **rurrana**. Sin embargo, ya que éste es casi el único caso en que una **r** entre vocales se pronuncia así en una palabra nativa quichua, y ya que probablemente se debe simplemente a la influencia de la **r** inicial, se escribe de manera tradicional. ¡Pero no se le olvide pronunciarla así si así lo hace su ayudante quichua! En otras regiones, como Imbabura, no se pronuncia así, sino que se pronuncia como se escribe.`,
          },
        ],
      },
      {
        phaseId: 'exercises',
        items: [
          [
            {
              n: '1',
              q: `¿Imatataj randicungui?`,
              a: `_Yanta_tami randicuni.`,
              subs: [ `ujsha`, `lulun`, `tanda`, `aicha`, ],
            },
            {
              n: '2',
              q: `¿Imataj caica?`,
              a: `Chaica _yanta_mi.`,
              subs: [ `q'uihua`, `yacu`, `leche`, `café`, `cebada`, ],
            },
          ],
          [
            {
              n: '3',
              q: `Cambaj mamaca ¿imatataj randicun?`,
              a: `Paica _micuna_tami randicun.`,
              subs: [ `machca`, `papa`, `tanda`, `aicha`, `lulun`, `cebada`, ],
            },
            {
              n: '4',
              q: `¿Maimantataj chai q'uihuata apamucungui?`,
              a: `_Chagra_mantami apamucuni.`,
              subs: [ `larca`, `laguna`, `jaźinda`, `huasi`, `chai chagra`, `chai jaźinda`, `chai larca`, ],
            },
          ],
          [
            {
              n: '5',
              q: `Cambaj _yaya_ca ¿maimantaj chai q'uihuata apacun?`,
              a: `Jaźindamanmi apacun.`,
              subs: [ `mama`, `cusa/huarmi`, `churi`, `ushushi`, `huambra`, `huauqui/turi`, `pani/ñaña`, ],
            },
            {
              n: '6',
              q: `¿Imatataj micucungui?`,
              a: `_Aicha_tami micucuni.`,
              subs: [ `tanda`, `lulun`, `machca`, `papa`, ],
            },
          ],
          [
            {
              n: '7',
              q: `¿Chai huambraca imatataj micucun?`,
              a: `Paica _tanda_tami micucun.`,
              subs: [ `lulun`, `aicha`, `machca`, `papa`, ],
            },
            {
              n: '8',
              q: `¿_Jaźinda_mantachu shamucungui?`,
              a: `Ari, chaimantami shamucuni.`,
              subs: [ `escuela`, `larca`, `laguna`, `culto`, `pueblo`, ],
            },
          ],
          [
            {
              n: '9',
              q: `¿_Micuna_tachu randicungui?`,
              a: `Ari.`,
              subs: [ `yanta`, `cebada`, `ujsha`, `machca`, `papa`, `tanda`, ],
            },
            {
              n: '10',
              q: `¿_Tanda_chu caica?`,
              a: `Ari, _tanda_mi.`,
              subs: [ `machca`, `aicha`, `cebada`, `q'uihua`, `papa`, ],
            },
          ],
          [
            {
              n: '11',
              q: `¿_Escuela_manchu ricungui? `,
              a: `Ari, _escuela_manmi ricuni. `,
              subs: [ `culto`, `laguna`, `pugyu`, `yacu`, `randina`, `yachachina`, ],
            },
            {
              n: '12',
              q: `¿Imatataj ruracungui?`,
              a: `_Micu_cunimi.`,
              subs: [ `yachachi-na`, `yacha-na`, `trabaja-na`, `randi-na`, `c'atu-na`, ],
            },
          ],
        ],
      },
      {
        phaseId: 'grammar',
        items: [
          [
            {
              en: `1. Demonstratives used as nouns`,
              es: `1. Demostrativos usados como sustantivos`,
            },
            {
              en: `In the last lesson we saw the demonstratives **cai** “this” and **chai** “that” used as adjectives in phrases such as **cai huasi**, **chai huarmi**. They can also be used in the place of independent nouns (just as the English demonstrative pronouns “this, that”). However, to function in this way they require an emphatic suffix like **-ca**, **-chu**, or **-mi**. Notice that in Models 1 to 4 the suffix **-ca** of secondary emphasis is used with each:`,
              es: `En la lección anterior vimos el uso de los demostrativos **cai** “este, esta” y **chai** “ese, esa, aquel, aquella” como adjetivos en frases como cai huasi, chai huarmi. También se pueden usar en vez de sustantivos independientes (igual como los pronombres demostrativos “esto, éste, ésta, eso, ése, ésa, aquello, aquél, aquélla”). Sin em-bargo, para que funcionen de esta manera requieren un sufijo enfático como **-ca**, **-chu**, o **-mi**. Note que en los Modelos 1 al 4 el sufijo **-ca** de énfasis secundaria se usa con cada uno:`,
            },
            {
              qu: `caica`,
              en: `this (thing)`,
              es: `éste, ésta, esto`,
            },
            {
              qu: `chaica`,
              en: `that (thing)`,
              es: `ése, ésa, eso, aquél, aquélla, aquello`,
            },
          ],
          [
            {
              en: `2. Adverbial postposition **-ta**; its use to mark the direct object`,
              es: `2. Posposición adverbial **-ta**; su uso para marcar el complemento directo`,
            },
            {
              qu: `¿Imataj caica?`,
              en: `What is this?`,
              es: `¿Qué es esto?`,
            },
            {
              qu: `¿Ima_ta_taj randicungui?`,
              en: `What are you buying?`,
              es: `¿Qué estas comprando?`,
            },
            {
              qu: `Micuna_ta_mi randicuni.`,
              en: `I’m buying food.`,
              es: `Estoy comprando comida.`,
            },
          ],
          [
            {
              en: `The **-ta** in the last two Models given here is an adverbial postposition (like **-man** and **-manta**), which may be added to any noun to change it into an adverb. In Quichua, the direct object of a verb may be thought of simply as a certain type of adverb, for it modifies the verb by telling *what* the action was done *to*, or *on*. The use of the **-ta** to mark the direct object is something that requires a bit of practice for English speakers, since in our language we rely mainly on word order to tell us who or what did what to whom or what, thus:`,
              es: `El **-ta** en los últimos dos Modelos dados aquí es una posposición adverbial (tal como **-man** y **-manta**), la cual puede ser añadida a cualquier sustantivo para convertirlo en adverbio. En quichua, el complemento directo de un verbo puede considerarse simplemente como una clase específica de adverbio, ya que modifica el verbo indicando *en qué* o *a qué* se ejecutó la acción. El uso del **-ta** para marcar el complemento directo es algo que requiere bastante práctica para los hispa-nohablantes, ya que en nuestro idioma contamos principalmente con el orden de las palabras (o, en el caso de los complementos personales, la preposición "a") para indicarnos quién o qué hizo qué a quién o a qué, así:`,
            },
          ],
          [
            {
              en: `María saw *bread*.\n(bread is the object)`,
              es: `María vio *pan*.\n(pan es el complemento)`,
            },
            {
              en: `María saw *Sisa*.\n(Sisa is the object)`,
              es: `María vio a *Sisa*.\n(Sisa es el complemento)`,
            },
            {
              en: `Sisa saw *María*.\n(María is the object)`,
              es: `Margarita vio a *María*.\n(María es el complemento)`,
            },
          ],
          [
            {
              en: `In Quichua, however, a **-ta** on a noun is what alerts us to the fact that this is the direct object. Contrary to English usage, Quichua objects usually (though not invariably) precede the verb.`,
              es: `En quichua, sin embargo, un **-ta** en un sustantivo es lo que nos avisa que éste es el complemento directo. A diferencia del uso en español, en quichua los complementos generalmente preceden al verbo (aunque no siempre).`,
            },
          ],
          [
            {
              en: `3. Order of suffixes`,
              es: `3. El orden de los sufijos`,
            },
            {
              en: `Since several different suffixes may occur at one and the same time in a word, it is important to know in what relative order they are attached to the root. (Fortunately they don't just occur helter-skelter, but in orderly fashion.) While one of the purposes of the Models and Exercises is to make this sort of knowledge automatic, it's a very good idea to also have the information in your conscious mind. In the Appendix is a chart giving the relative order of all suffixes, for quick reference. However, in each lesson, as new suffixes are met with, they will also be “located” for you with reference to those already studied. Here is a summary of suffixes so far taken up, with relative order given:`,
              es: `Ya que varios sufijos pueden ocurrir en una sola palabra, es importante saber en qué orden relativo se añaden a la raíz. (Afortunadamente no sólo ocurren sin ton ni son, sino de manera ordenada.) Uno de los propósitos de los Modelos y Ejercicios es el de hacer automático este tipo de información, pero aun así es una excelente idea saberla de manera consciente. En el apéndice hay un cuadro que da el orden relativo de todos los sufijos, para referencia ligera. Sin embargo, en cada lección, al encontrar nuevos sufijos se “ubican” para el estudiante con referencia a los ya estudiados. Aquí se da un resumen de los sufijos vistos hasta el momento, con su orden relativo:`,
            },
          ],
          [
            {
              en: `*Verb Suffixes*`,
              es: `*Sufijos Verbales*`,
            },
            {
              en: `**-cu**`,
              es: `**-cu**`,
            },
            {
              en: `(progressive) precedes`,
              es: `(progresivo) precede a`,
            },
            {
              en: `**-ni**\n**-ngui**\n**-n**`,
              es: `**-ni**\n**-ngui**\n**-n**`,
            },
          ],
          [
            {
              en: `*Adverbial Postpositions*`,
              es: `*Posposiciones Adverbiales*`,
            },
            {
              en: `**-man**\n**-manta**\n**-ta**`,
              es: `**-man**\n**-manta**\n**-ta**`,
            },
            {
              en: `all belong to the same order, and never occur at the same time in one word.`,
              es: `todos pertenecen al mismo orden, y nunca ocurren en una sola palabra.`,
            },
          ],
          [
            {
              en: `*Neutral Suffixes*`,
              es: `*Sufijos Neutrales*`,
            },
            {
              en: `Until near the end of these lessons, none of the neutral suffixes so far studied (**‑chu**, **‑mi**, **‑taj~**, **‑ca**, **‑pish**) will ever occur together in the same word, so for all present practical purposes they may be considered as belonging to the same order. All of them *follow* any verb, noun, or adverbial suffix, thus:`,
              es: `Hasta llegar casi el fin de estas lecciones, nunca ocurrirán dos de los sufijos neutrales estudiados hasta el momento (**‑chu**, **‑mi**, **‑taj~**, **‑ca**, **‑pish**) juntos en una palabra, así que en términos prácticos puede todos considerarse miembros de un solo orden. Todos éstos *siguen* a cualquier sufijo verbal, nominal, o adverbial, así:`,
            },
            {
              en: `**¿Ricungui_chu_?**\n**Ricuni_mi_.**\n**¿Maiman_taj_ ricungui?**`,
              es: `**¿Ricungui_chu_?**\n**Ricuni_mi_.**\n**¿Maiman_taj_ ricungui?**`,
            },
            {
              en: `etc.`,
              es: `etc.`,
            },
          ],
        ],
      },
    ],
  },
  {
    slug: '7',
    topic: {
      en: 'voiced sounds and their influence on other sounds; **imanalla**; possessive **-paj**',
      es: 'sonidos sonoros y su incluencia en los otros sonidos; **imanalla**; **-paj** posesivo',
    },
    contents: [
      {
        phaseId: 'models',
        items: [
          [
            {
              qu: `¿Imanallataj cangui?`,
              en: `How are you?`,
              es: `¿Cómo estás?`,
            },
            {
              qu: `Allillami cani. Canca, ¿imanallataj cangui?`,
              en: `I’m fine. And how are you?`,
              es: `Estoy bien. Y tú, ¿cómo estás?`,
            },
            {
              qu: `Ñucapish allillami cani. Cambaj mamaca ¿imanallataj?`,
              en: `I’m fine too. How is your mother?`,
              es: `Yo estoy bien también. Y tu mamá, ¿cómo está?`,
            },
            {
              qu: `Paipish allillami. ¿Pitaj caica?`,
              en: `She’s fine too. Who is this?`,
              es: `Está bien también. ¿Quién es éste?`,
            },
            {
              qu: `Chaica ñuca huahuami.`,
              en: `That is my child.`,
              es: `Ése es mi niño.`,
            },
            {
              qu: `¿Pitaj chai huambraca?`,
              en: `Who is that youngster?`,
              es: `¿Quién es ese joven?`,
            },
            {
              qu: `Ñuca huauquimi/turimi.`,
              en: `He is my brother.`,
              es: `Es mi hermano.`,
            },
          ],
          [
            {
              qu: `¿Pitaj shamucun?`,
              en: `Who is coming?`,
              es: `¿Quién está viniendo?`,
            },
            {
              qu: `Cambaj yayami shamucun.`,
              en: `Your father is coming.`,
              es: `Está viniendo tu papá.`,
            },
            {
              qu: `¿Pipajtaj cai tandaca?`,
              en: `Whose is this bread?`,
              es: `¿De quién es este pan?`,
            },
            {
              qu: `Ñuca mamapajmi.`,
              en: `It’s my mother’s.`,
              es: `Es de mi mamá.`,
            },
            {
              qu: `¿Pipajtaj chai yantaca?`,
              en: `Whose is that firewood?`,
              es: `¿De quién es esta leña?`,
            },
            {
              qu: `Cambajmi.`,
              en: `It’s yours.`,
              es: `Es tuya.`,
            },
            {
              qu: `Chai chagraca, ¿pipajtaj?`,
              en: `Whose is that field?`,
              es: `¿De quién es esta chagra?`,
            },
            {
              qu: `Ñucapajmi.`,
              en: `It’s mine.`,
              es: `Es mía.`,
            },
          ],
        ],
      },
      {
        phaseId: 'vocab',
        items: [
          [
            {
              qu: `atillpa`,
              en: `chicken`,
              es: `gallina`,
            },
            {
              qu: `burro`,
              en: `donkey`,
              es: `burro`,
            },
            {
              qu: `huacana`,
              en: `to cry`,
              es: `llorar`,
            },
            {
              qu: `misi, mishi`,
              en: `cat`,
              es: `gato`,
            },
            {
              qu: `mula`,
              en: `mule`,
              es: `mula`,
            },
          ],
          [
            {
              qu: `allcu __(Imb.__ alcu__)__`,
              en: `dog`,
              es: `perro`,
            },
            {
              qu: `cuchi __(Colta, Ángeles, Salasca__ c'uchi__)__`,
              en: `pig`,
              es: `cerdo, chancho`,
            },
            {
              qu: `cunu __(Imb.__ conejo__)__`,
              en: `rabbit`,
              es: `conejo`,
            },
            {
              qu: `oveja __(Imb., Pichincha, Salasca, Cotopaxi__ llama__)__`,
              en: `sheep`,
              es: `oveja`,
            },
          ],
          [
            {
              qu: `cayana`,
              en: `to call, to summon`,
              es: `llamar, convocar`,
            },
            {
              qu: `cuyi`,
              en: `guinea pig`,
              es: `cuy, conejillo de Indias`,
            },
            {
              qu: `huagra`,
              en: `cow, ox, bull`,
              es: `ganado (vaca y toro)`,
            },
            {
              qu: `imanalla`,
              en: `how (someone) is`,
              es: `como (alguien) está`,
            },
            {
              qu: `pi`,
              en: `who; someone`,
              es: `¿quién?, alguien`,
            },
          ],
          [
            {
              qu: `-paj`,
              en: `of «possessive»`,
              es: `de «posesivo»`,
            },
            {
              qu: `cambajmi`,
              en: `it is yours`,
              es: `es tuyo`,
            },
            {
              qu: `mamapajmi`,
              en: `it is mother’s`,
              es: `es de mamá`,
            },
            {
              qu: `ñucapajmi`,
              en: `it is mine`,
              es: `es mío`,
            },
          ],
        ],
      },
      {
        phaseId: 'exercises',
        items: [],
      },
      {
        phaseId: 'pronunciation',
        items: [],
      },
      {
        phaseId: 'grammar',
        items: [],
      },
    ],
  },
  {
    slug: '8',
    topic: {
      en: '**-paj** used purposively; **-ngapaj**; **‑pajman**; **‑pajmanta**',
      es: '**-paj** de propósito; **-ngapaj**; **‑pajman**; **‑pajmanta**',
    },
    contents: [
      {
        phaseId: 'models',
        items: [],
      },
      {
        phaseId: 'vocab',
        items: [],
      },
      {
        phaseId: 'exercises',
        items: [],
      },
      {
        phaseId: 'grammar',
        items: [],
      },
    ],
  },
  {
    slug: '9',
    topic: {
      en: 'singular and plural imperative; immediate and future imperative; **-hua** “me”, “us”; **-pa** of respect',
      es: 'imperativo singular y plural; imperativo inmediato y futuro; **-hua** “me”, “nos”; **-pa** de respeto',
    },
    contents: [
      {
        phaseId: 'models',
        items: [],
      },
      {
        phaseId: 'vocab',
        items: [],
      },
      {
        phaseId: 'exercises',
        items: [],
      },
      {
        phaseId: 'grammar',
        items: [],
      },
    ],
  },
  {
    slug: '10',
    topic: {
      en: 'noun and pronoun plurals; verb plural; negative imperative',
      es: 'plurales de sustantivos y pronombres; plurales de verbos; imperativos negativos',
    },
    contents: [
      {
        phaseId: 'models',
        items: [],
      },
      {
        phaseId: 'vocab',
        items: [],
      },
      {
        phaseId: 'exercises',
        items: [],
      },
      {
        phaseId: 'grammar',
        items: [],
      },
    ],
  },
];

/*
{
  phaseId: 'grammar',
  items: [],
},
*/
