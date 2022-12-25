import { useState, useEffect } from "react";
import { getRelatedPosts, getRecentPosts } from '../services'
import SingleWidgetPost from "./SingleWidgetPost";

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
                <SingleWidgetPost key={index} post={post}/>
            ))}
        </section>
    );
}
 
export default PostWidget;