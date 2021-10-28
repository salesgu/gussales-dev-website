import React from 'react';
import Head from 'next/head';
import Container from '@sagebox/components/container/container';

export default function Blog() {
  return (
    <>
      <Head>
        <title>All posts - Blog - Gus CMS</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Container className="mt-10">
        <span className="text-white">blog index</span>
      </Container>
    </>
  );
}
