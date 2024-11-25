// src/app/blog/[id]/page.tsx
import Post from '@/app/components/post';
import { getPosts } from '@/data/posts';
import Header from '@/app/components/header';
import Footer from '@/app/components/footer';

interface PostPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({
    id: post.id,
  }));
}

export async function generateMetadata({ params }: PostPageProps) {
  const posts = await getPosts();
  const post = posts.find((p) => p.id === params.id);

  if (!post) {
    return {
      title: 'Blog Post Not Found',
    };
  }

  return {
    title: post.title,
  };
}

export default async function BlogPostPage({ params }: PostPageProps) {
  const posts = await getPosts();
  const post = posts.find((p) => p.id === params.id);

  if (!post) {
    return <div>Blog post not found</div>;
  }

  return (
    <>
      <Header />
      <Post post={post} />
      <Footer />
    </>
  );
}