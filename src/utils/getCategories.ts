import matter from 'gray-matter';
import { getContents, getFiles } from './file';

export const getCategories = (): string[] => {
  const categories = getFiles().map(
    (path) => matter(getContents(path)).data.category,
  );
  return distinct(categories);
};

const distinct = (array: string[]): string[] => {
  return Array.from(new Set(array)).sort();
};
