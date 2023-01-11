import { getPosts, getPostDetails } from "../../services";
import { PostDetail } from "../../components";
import dynamic from 'next/dynamic'

const DynamicComments = dynamic(async () => import('../../components/Comments'), {
  loading: () => 'Loading...',
})

const DynamicCommentsForm = dynamic(async () => import('../../components/CommentsForm'), {
  loading: () => 'Loading...',
})

const DynamicAuthor = dynamic(async () => import('../../components/Author'), {
  loading: () => 'Loading...',
})

const DynamicCategories = dynamic(async () => import('../../components/Categories'), {
  loading: () => 'Loading...',
})

const DynamicPostWidget = dynamic(async () => import('../../components/PostWidget'), {
  loading: () => 'Loading...',
})

const PostDetails = ({ post }) => {
    return (
        <div className="container mx-auto px-10 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="col-span-1 lg:col-span-8">
                    <PostDetail post={post}/>
                    <DynamicAuthor author={post.author}/>
                    <DynamicCommentsForm slug={post.slug}/>
                    <DynamicComments slug={post.slug}/>
                </div>
                <div className="col-span-1 lg:col-span-4">
                    <div className="relative lg:sticky top-8">
                        <DynamicPostWidget slug={post.slug} categories={post.categories.map((category) => category.slug)}/>
                        <DynamicCategories/>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default PostDetails;

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);

  return {
    props: { post: data }
  }
}

export async function getStaticPaths() {
  const posts = await getPosts();


  return {
    paths: posts.map(({ node: { slug }}) => ({ params : { slug }})),
    fallback: false,
  }
}