import Head from 'next/head'
import { getPosts } from '../services'
import PostCard from '../components/PostCard';
import PostWidget from '../components/PostWidget';

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>History Blog</title>
        <meta name="description" content="Blog de historia" />
      </Head>
      <div>
        {posts.map(post => <PostCard post={post.node} key={post.node.title}/>)}
      </div>
      <PostWidget/>
    </>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts }
  }
}