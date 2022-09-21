import { basename } from 'path';
import matter from 'gray-matter';
import { getContents, getBaseDirectory, getFiles } from './file';
import { byDate } from './sortHelper';
import type { Post } from '@/types/Post';

export const getPostByPath = (path: string) => {
  return matter(getContents(`${getBaseDirectory()}/${path}`));
};

export const getPosts = () => {
  return getFiles()
    .map((path) => mapToPostFromPath(path))
    .sort((post1, post2) => byDate(post1, post2));
};

const mapToPostFromPath = (path: string): Post => {
  const { data } = matter(getContents(path));
  [data.year, data.month] = data.date.split('-');
  data.slug = basename(path).replace(/\.md$/, '');

  return data as Post;
};

export const getLatestPosts = () => {
  return getPosts().slice(0, 3);
};

export const getPostsByCategory = (category: string) => {
  return getPosts().filter((post) => post.category === category);
};

export const getPostsByTag = (tag: string) => {
  return getPosts().filter((post) => post.tags.includes(tag));
};
