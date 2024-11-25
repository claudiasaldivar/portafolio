// src/components/BlogPost.tsx
import { PostData } from '@/app/types/post';
import { Tags } from 'lucide-react';

interface PostProps {
  post: PostData;
}

const Post = ({ post }: PostProps) => {
  return (
    <main className="container mx-auto px-4 py-8 max-w-3xl">
    <article className="post">
      <h2 className="text-md md:text-2xl font-bold font-menlo dark:text-title text-subtitles py-2">{post.title}</h2>
      <p className="dark:text-title text-subtitles text-sm">{post.publishedAt} | {post.timeToRead}</p>
      <div className="flex items-center gap-2 mt-4">
        <Tags size={20} />
        <a href='#' className='pl-2 underline dark:hover:text-content dark:text-title text-subtitles text-sm'> # reviews</a>
      </div>
      <p className='mt-12 text-sm dark:text-title text-subtitles'>
        What do you mean by “Show your work!“? This is what my brain tells me the first time I stumbled upon this book. 
        I already do that no? I think I already do but I was so sure I will take out more from reading this book and I 
        was not wrong. After reading lots of reviews on GoodReads I decided to get a copy and see what I’m doing wrong 
        or need to start doing. In this article, I’ll share the insights I learned from reading Austin Kleon’s: 
        <span className='font-bold'> Show Your Work!</span>
      </p>
    </article>
    </main>
  );
};

export default Post;