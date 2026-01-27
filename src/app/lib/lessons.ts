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

export const lessons: lessonType = [
  {
    slug: '1',
    topic: {
      en: 'Greetings; roots and suffixes; **-chu**; **-mi**',
      es: 'Saludos; raíces y sufijos; **-chu**; **-mi**',
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
          {
            en: `1. Dialect variation (sometimes abbreviated to DV)`,
            es: ``,
          },
          {
            en: `Although there are a number of dialects of Highland Quichua in Ecuador, there exists between them a very high degree of mutual intelligibility. However, some differences do appear, especially in the pronunciation of certain frequently used suffixes. Only the more important dialect variations are noted in these lessons. Your language helper will probably point out others to you as you check through the material with them.`,
            es: ``,
          },
          {
            en: `Central Highland Quichua (CHQ)\n*dialects*: Colta, Pulucate, Caliata`,
            es: ``,
          },
          {
            en: `Pichincha\n*dialect*: Calderón`,
            es: ``,
          },
          {
            en: `Imbabura/Cayambe (Imb.)\n*dialect*: Agato`,
            es: ``,
          },
          {
            en: `South Highland Quichua (SHQ)\n*dialects*: Cuenca, Saraguro, Cañar`,
            es: ``,
          },
          {
            en: `Salasaca (Tungurahua)\n*dialect*: Salasaca`,
            es: ``,
          },
          {
            en: `The first three named are classed together occasionally as representing Central Highland Quichua (CHQ), while Agato is considered representative of Imbabura/Cayambe Quichua (Imb.). Such a classification is admittedly a rough one, but is occasionally useful. Pichincha is in a class by itself, resembling Salasaca and lowland Quichua much more than do the others. Data on South Highland Quichua is incomplete.`,
            es: ``,
          },
          {
            en: `The dialect variations which your language helper points out will seem much less confusing if you learn to sort them out into several different categories. Some will be merely on a *sound* level (for example, a certain sound used in CHQ may always be changed into another sound in Imbabura). Others will be on the *suffix* level, as when a certain suffix is pronounced one way in Colta but another way in Pulucate. Still other changes will be on the level of *vocabulary*, as when a word that is often used in Colta is substituted by another in Pulucate. Still others will be on the level of *grammar*, and others in the matter of *style*. In this lesson only the first two kinds of dialect variations appear.`,
            es: ``,
          },
          {
            en: `**ll** is in CHQ, Imbabura, Salasaca and Pichincha always pronounced like the *zh* sound in “azure”.`,
            es: ``,
          },
          {
            en: `Imbabura also pronounces it this way. However, in many words that have **ll** in CHQ, Imbabura has a simple **l**. This occurs when the CHQ **ll** is followed immediately by the vowel **i**, or by a consonant. Thus, CHQ **alli** “good” is **ali** in Imbabura, and CHQ **allcu** “dog” is **alcu** in Imbabura.`,
            es: ``,
          },
          {
            en: `The **c** in **cangui** and **cana** becomes **g** in Pichincha and Salasaca.`,
            es: ``,
          },
          {
            en: `The suffix **-lla** occurs in **allilla**, “well”, (although for the present it is not being studied in detail). In Pulucate, Caliata, and Flores (in Chimborazo), and in Pichincha it is pronounced (and spelled) **-la**.`,
            es: ``,
          },
          {
            en: `2. Word accent`,
            es: ``,
          },
          {
            en: `Quichua word accent is very regular, falling as a general rule on the penult (second-last syllable) of each word. In the following examples, the accented syllable of each word is capitalized:`,
            es: ``,
          },
          {
            en: `**a*lli*lla**\n**allilli*lla*chu**\n** *can*gui**\n** *a*ri**`,
            es: ``,
          },
          {
            en: `Sometimes, for added emphasis, the accent is shifted to the final syllable of a word. This is indicated by the use of a written accent mark over the accented syllable. An example of such a “displaced” accent will be seen in the next lesson.`,
            es: ``,
          },
          {
            en: `3. Quichua vowels`,
            es: ``,
          },
          {
            en: `There are really only three distinctive vowels in Quichua—**a**, **i**, **u**. However, in certain situations the **i** sounds almost like an *e*, and the **u** almost like an *o*. Since all these five vowels do occur in Spanish, from which language many words have been “borrowed” by the Quichuas, the five-vowel system is being used here in writing Quichua too.`,
            es: ``,
          },
          {
            en: `These three vowels (**a**, **i**, **u**) of Quichua have, however, a wider range of pronunciation than they do in Spanish, as follows:`,
            es: ``,
          },
          {
            en: `**a** usually as in “father”, but sometimes as in “sofa”\n**i** (sometimes spelled **e**) anywhere from the *i* in “machine” to *o* the in Spanish “pero”\n**u** (sometimes spelled **o**) anywhere from the *u* in “blue” to the *o* in Spanish “no”`,
            es: ``,
          },
          {
            en: `Listen for these variations as your language helper Models, and try to imitate him closely.`,
            es: ``,
          },
          {
            en: `4. Unaspirated sounds (**c** and **ch**)`,
            es: ``,
          },
          {
            en: `These sounds are like those in Spanish “casa” and “hacha” (NOT as in English “cat” and “church”). In the English words the initial sounds are aspirated (pronounced with a little puff of air after them), but in the Spanish words they are not. CHQ has both aspirated and unaspirated sounds, so care must be taken to differentiate between them, or embarrassing mistakes may result. If you already speak Spanish correctly, the unaspirated sounds (of which **c** and **ch** are only two) will give you no trouble. If you have difficulty with them, try the following simple exercises.`,
            es: ``,
          },
          {
            en: `Start by pronouncing aloud the word “scat”. After the letter *s* in English, sounds which we ordinarily aspirate automatically lose their aspiration (as the little puff of air is called). So the *c* of “scat” is unaspirated. Now say a prolonged “ssss” before the “-cat” part, thus—“sssssscat”. Then merely think the “ssss” to yourself without saying it out loud, but say the “-cat” aloud as before. It should sound a little different from the word “cat” for in the latter the *c* is aspirated, while in the former it should be unaspirated. Test your success by saying the two aloud one right after the other. Now work on the *ch* in the same way, but starting out with the word “eschew”. Test yourself on this by contrasting the “-chew” with the word “chew”. Next practice carefully the words **cangui**, **cani**, **allillachu**, with special attention to the **c** and **ch** sounds.`,
            es: ``,
          },
          {
            en: `5. Sounds of **gui**, **n**, **r**`,
            es: ``,
          },
          {
            en: `**gui** sounds like the gee in “geese”, being written thus because we are conforming to Spanish orthography, in which a silent ways inserted between a *gi* sequence (if the is a “hard *g*”).`,
            es: ``,
          },
          {
            en: `**n** is pronounced like that in “neat”, except when it occurs at the end of a word, or immediately before the letters **c**, **g**, **hu**, **m**, **q**, **r**, **y**, and in some regions, **s**. In such situations it sounds like the *ng* of “sing”. You will hear such a sound in **cangui**. (This is also the pronunciation pattern used in Ecuadorian Spanish, except that before and the of “neat” is used.)`,
            es: ``,
          },
          {
            en: `**r** is unlike any English sound, but is similar to the Spanish *r* as in “pero”. It is made by giving a quick flip of the tongue against the ridge just behind the upper teeth. (In certain situations the r has a different sound, which will be discussed when encountered.)`,
            es: ``,
          },
          {
            en: `6. Punctuation`,
            es: ``,
          },
          {
            en: `As far as possible, Spanish punctuation usage is followed. This accounts for the “fore-and-aft” question marks.`,
            es: ``,
          },
        ],
      },
      {
        phaseId: 'grammar',
        items: [
          {
            en: `1. Roots and suffixes`,
            es: `1. Las raíces y sufijos`,
          },
          {
            en: `Quichua words are often quite long because of the addition of several suffixes to the root of the word. The root is the “stripped-down” essential (or basic) form of a word; a suffix is a short meaningful “bit” which may be attached to a root, thereby modifying its meaning. **Ari** is an example of a root and **-chu** an example of a suffix. (The hyphen placed before such suffixes when they are written in isolation is intended to indicate that they are not words in themselves, and cannot occur alone, but must always be attached to some root.)`,
            es: ``,
          },
          {
            en: `2. Suffixes **-chu** and **-mi**`,
            es: ``,
          },
          {
            en: `Both of these are emphatic suffixes, indicating primary emphasis on the word to which they are attached—something that in English we usually do by raising the pitch and increasing the volume of the voice on the emphasized word. They are also *modal* suffixes, indicating the mood of the sentence in which they occur—again something which in English is done largely by intonation. The **-chu** is used for questions (of the true-or-false variety that must be answered by either “Yes” or “No”), while **-mi** occurs in affirmative statements.`,
            es: ``,
          },
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
        items: [],
      },
      {
        phaseId: 'exercises',
        items: [],
      },
      {
        phaseId: 'more-exercises',
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
];
