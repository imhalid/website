import { notFound } from 'next/navigation';
import MDXContent from '../../../components/mdx-content';
import { getPostBySlug, getPosts } from '../../../lib/content-api';
import type { Metadata } from 'next';
import Link from 'next/link';

interface PageProps {
   params: {
      slug: string;
   };
}

export default async function Page({ params }: PageProps) {
   const post = getPostBySlug(params.slug);
   if (!post) return notFound();

   return (
     <div className="flex flex-col mt-16 max-w-3xl mx-auto container px-5">
       <Link href="/blog">
         <span className="inline-flex items-center text-xs text-zinc-400">
           Back to posts
         </span>
       </Link>
       <h1 className="text-4xl font-semibold mt-6">{post.title}</h1>
       <p className="text-xs text-zinc-400 mt-2">{post.description}</p>
       <article className="mt-5 w-full">
         <MDXContent source={post.content} />
       </article>
     </div>
   );
}

export function generateMetadata({ params }: PageProps): Metadata {
   const post = getPostBySlug(params.slug);
   if (!post) return notFound();

   return {
      title: `${post.title} | someblog`,
   };
}

export async function generateStaticParams() {
   const posts = getPosts();
   return posts.map((post) => ({
      slug: post.slug,
   }));
}
