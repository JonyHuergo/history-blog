import Head from 'next/head'
import { getPosts } from '../services'

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>History Blog</title>
        <meta name="description" content="Blog de historia" />
      </Head>
    </>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts }
  }
}