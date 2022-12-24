import { useState, useEffect } from "react";
import { getRelatedPosts, getRecentPosts } from '../services'

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
            {widgetPosts.map((post) => {
                <article key={post.title} className="flex items-center w-full">
                    <div className="w-16 flex-none">
                        <img
                            src={post.featuredImage.url}
                            alt={post.title}
                            height="60px"
                            width="60px"
                            className="align-middle rounded-full"
                        />
                    </div>
                </article>
            })}
        </section>
    );
}
 
export default PostWidget;