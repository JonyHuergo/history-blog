import { useState, useEffect } from "react";
import { getRelatedPosts, getRecentPosts } from '../services'
import Link from "next/link";

const PostWidget = ({ categories, slug }) => {
    const [widgetPosts, setWidgetPosts] = useState([])

    useEffect(() => {
        if(slug) {
            getRelatedPosts(categories, slug)
                .then((result) => setWidgetPosts(result))
        } else {
            getRecentPosts()
                .then((result) => setWidgetPosts(result))
        }
    }, [slug])

    return (
        <section className="bg-neutral-light shadow-lg rounded-lg p-8 mb-8">
            <h3 className="text-xl mb-8 font-semibold border-b border-secondary pb-4">
                { slug ? "Posts Relacionados" : "Posts Recientes"}
            </h3>
            {widgetPosts.map((post, index) => (
                <article key={index} className="flex items-center w-full mb-4">
                    <div className="w-16 flex-none">
                        <img
                        alt={post.title}
                        height="60px"
                        width="60px"
                        className="align-middle rounded-full"
                        src={post.featuredImage.url}
                        />
                    </div>
                    <div className="flex-grow ml-4">
                        {/* <p className="text-gray-500 font-xs">{moment(post.createdAt).format('MMM DD, YYYY')}</p> */}
                        <Link href={`/post/${post.slug}`} className="text-md" key={index}>{post.title}</Link>
                    </div>
                </article>
            ))}
        </section>
    );
}
 
export default PostWidget;