import fs from 'fs';
import { join } from 'path';
import glob from 'glob';

export const getBaseDirectory = () =>
  join(process.cwd(), 'src/posts').replaceAll('\\', '/');

type GetFiles = () => string[];

export const getFiles: GetFiles = () =>
  glob.sync(`${getBaseDirectory()}/**/*.md`);

export const getContents = (path: string) => fs.readFileSync(path, 'utf8');
