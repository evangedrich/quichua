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
          {qu: 'alli', en: 'bueno', es: 'good'},
          {qu: 'allilla', en: 'bien', es: 'well'},
          {qu: 'ari', en: 'sí', es: 'yes'},
          {qu: 'cani', en: 'soy', es: 'I am'},
          {qu: 'cangui', en: 'eres', es: 'you are'},
          {qu: '-lla', en: 'no más', es: 'just'},
          {qu: '-mi', en: '«indica una declaración afirmativa»', es: '«indicates an affirmative statement»'},
          {qu: '-chu', en: '«indica una pregunta sí-no»', es: '«indicates a yes-no question»'},
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
        items: [],
      },
      {
        phaseId: 'grammar',
        items: [],
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
