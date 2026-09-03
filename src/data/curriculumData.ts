import { chapterA5 } from './chapters/chapterA5';
import { chapterA6 } from './chapters/chapterA6';
import { chapterB5 } from './chapters/chapterB5';
import { chapterB6 } from './chapters/chapterB6';
import { chapterA7 } from './chapters/chapterA7';
import { chapterA8 } from './chapters/chapterA8';
import { chapterB7 } from './chapters/chapterB7';
import { chapterB8 } from './chapters/chapterB8';
import { ChapterData, ChapterCode } from '../types';

export const allChapters: ChapterData[] = [
  chapterA5,
  chapterA6,
  chapterB5,
  chapterB6,
  chapterA7,
  chapterA8,
  chapterB7,
  chapterB8
];

export const getChapterByCode = (code: ChapterCode): ChapterData => {
  const found = allChapters.find((c) => c.code === code);
  return found || allChapters[0];
};

export const curriculumMetadata = {
  schoolName: 'Escola Parque Ipiranga',
  subject: 'História Contemporânea & Brasil República',
  grade: '9º Ano do Ensino Fundamental II',
  professor: 'Prof. Anderson Firmo',
  totalChapters: allChapters.length,
  chronologicalRange: '1945 – Atualidade (2026)',
  curriculumScope: 'A5 (Guerra Fria) até B8 (Nova República no Século XXI)'
};
