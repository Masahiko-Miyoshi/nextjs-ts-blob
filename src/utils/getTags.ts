import matter from 'gray-matter';
import { getContents, getFiles } from './file';

export const getTags = (category?: string): string[] => {
  const tags = getFiles()
    .map((path) => matter(getContents(path)).data)
    .filter((data) => category === undefined || data.category === category)
    .flatMap((data) => data.tags);

  return distinct(tags);
};

const distinct = (array: string[]): string[] => {
  return Array.from(new Set(array)).sort();
};
