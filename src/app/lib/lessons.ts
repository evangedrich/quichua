interface bilingualType {
  en: string | string[],
  es: string | string[],
}
interface trilingualType {
  qui: string,
  en: string,
  es: string,
}
interface phaseType {
  phase: string,
  name: bilingualType,
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
      en: 'Greetings; roots and suffixes; -chu; -mi',
      es: 'Saludos; raíces y sufijos; -chu; -mi',
    },
    contents: [
      {
        phase: 'models',
        items: [],
      },
      {
        phase: 'vocab',
        items: [],
      },
      {
        phase: 'exercises',
        items: [],
      },
      {
        phase: 'pronunciation',
        items: [],
      },
      {
        phase: 'grammar',
        items: [],
      },
    ],
  },
  {
    slug: '2',
    topic: {
      en: '-ca; -pish; greetings; final accent; present singular of cana',
      es: '-ca; -pish; saludos; acento final; presente singular de cana',
    },
    contents: [
      {
        phase: 'models',
        items: [],
      },
      {
        phase: 'vocab',
        items: [],
      },
      {
        phase: 'exercises',
        items: [],
      },
      {
        phase: 'more-exercises',
        items: [],
      },
      {
        phase: 'pronunciation',
        items: [],
      },
      {
        phase: 'grammar',
        items: [],
      },
    ],
  },
];
