// src/data/posts.ts
import { PostData } from '../app/types/post';

const posts: PostData[] = [
  {
    id: '1',
    title: 'Show Your Work! ',
    content: 'Next.js is a popular React framework for building server-rendered React applications...',
    author: 'John Doe',
    publishedAt: '7 November 2024',
    timeToRead: '10 minutes'
  },
  {
    id: '2',
    title: 'Deploying a Next.js App',
    content: 'Deploying a Next.js application is easy and can be done in a variety of ways...',
    author: 'Jane Smith',
    publishedAt: '2023-04-15',
    timeToRead: '10 minutes'
  },
  {
    id: '3',
    title: 'Next.js and Static Site Generation',
    content: 'Next.js provides powerful static site generation capabilities that can improve performance...',
    author: 'Bob Johnson',
    publishedAt: '2023-05-01',
    timeToRead: '10 minutes'
  },
];

export const getPosts = async (): Promise<PostData[]> => {
  return posts;
};