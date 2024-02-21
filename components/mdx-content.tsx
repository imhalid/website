import React from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Suspense } from 'react';
import remarkGfm from 'remark-gfm';
import GlowButton from '../utils/glow-button';
import rehypePrettyCode from 'rehype-pretty-code';
import type { MDXRemoteProps } from 'next-mdx-remote/rsc';
import { rehypePrettyCodeOptions } from '../lib/pretty-code';
import ImageComponent from './mdx-components/image';

export default async function MDXContent({ source }: MDXRemoteProps) {
  const components = {
    p: (props: any) => <p className='my-2' {...props} />,
    h3: (props: any) => <h3 className='text-xl font-bold' {...props} />,
    figure: (props: any) => <figure className='my-4' {...props} />,
    ImageComponent,
    GlowButton,
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MDXRemote
        source={source}
        components={components}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [
              // @ts-ignore
              [rehypePrettyCode, rehypePrettyCodeOptions],
            ],
          },
        }}
      />
    </Suspense>
  );
}
