import Link from "next/link";
import moment from "moment/moment";


const PostCard = ({ post }) => {

    return (
        <article className="bg-white shadow-lg rounded-lg">
            <div className="relative overflow-hidden pb-80">
                <img
                    src={post.featuredImage.url}
                    alt={post.title}
                    className="absolute h-80 w-full object-cover rounded-top-lg lg:rounded-lg"
                />
            </div>
            <div>
                <h2 className="text-center text-4xl text-bold">{post.title}</h2>
                <p>{post.excerpt}</p>
            </div>
        </article>
    );
}
 
export default PostCard;