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
        <section>
            POST WIDGET
        </section>
    );
}
 
export default PostWidget;