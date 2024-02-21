import React from 'react';

import Link from 'next/link';

import { getPosts } from '../../lib/content-api';

export default async function Page() {
   const posts = getPosts();

   return (
      <div className="flex flex-col mt-16 container mx-auto max-w-3xl px-5">
         <div className="flex flex-col space-y-4">
            {!!posts &&
               posts.map((post) => (
                     <Link
                        className="text-xl font-medium"
                        href={`/posts/${post.slug}`}
                     >
                        <div key={post.slug} className="mb-2">
                        {post.title}
                        <p className="text-xs text-zinc-400 mt-1">
                           {post.description}
                        </p>
                  </div>
                     </Link>
               ))}
         </div>
      </div>
   );
}
