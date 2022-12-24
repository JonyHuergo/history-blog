import { useState, useEffect } from "react";
import { getRelatedPosts, getRecentPosts } from '../services'

const PostWidget = ({ categories, slug }) => {
    const [relatedPosts, setRelatedPosts] = useState([])

    useEffect(() => {
        if(slug) {
            getRelatedPosts(categories, slug)
                .then((result) => setRelatedPosts(result))
        } else {
            getRecentPosts()
                .then((result) => setRelatedPosts(result))
        }
    }, [slug])

    return (
        <section>
            POST WIDGET
        </section>
    );
}
 
export default PostWidget;