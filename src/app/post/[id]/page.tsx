// src/app/blog/[id]/page.tsx
import Post from '@/app/components/post';
import { getPosts } from '@/data/posts';
import Header from '@/app/components/header';
import Footer from '@/app/components/footer';

// Genera los parámetros estáticos para las rutas dinámicas
export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({
    id: post.id,
  }));
}

export default async function BlogPostPage({
  params,
}: { params: Promise<unknown> }) {
  const resolvedParams = await params;

  if (typeof resolvedParams !== 'object' || resolvedParams === null || !('id' in resolvedParams)) {
    throw new Error('Invalid params');
  }

  const { id } = resolvedParams as { id: string };

  const posts = await getPosts();
  const post = posts.find((p) => p.id === id);

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