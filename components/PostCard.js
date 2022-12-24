import { useEffect, useState } from "react";
import Link from "next/link";

const { DateTime } = require("luxon");

const PostCard = ({ post }) => {
    const [postDate, setPostDate] = useState("");
    useEffect(() => {
        let dt = DateTime.fromISO(post.createdAt)
        setPostDate(() => dt.toLocaleString(DateTime.DATETIME_MED))
    }, []); 

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
            </div>
            <div>
                <div>
                    <img
                        src={post.author.photo.url}
                        alt={post.author.name}
                        height="30px"
                        width="30px"
                        className="align-middle rounded-full"
                    />
                    <p>{post.author.name}</p>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="align-middle">{postDate}</span>
                </div>
            </div>
            <div>
                <p>{post.excerpt}</p>
            </div>
            <div className="text-center">
                <Link href={`./posts/${post.slug}`}>
                    <button className="transition duration-500 transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">Seguir leyendo</button>
                </Link>
            </div>
               
        </article>
    );
}
 
export default PostCard;