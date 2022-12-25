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
        <article className="bg-neutral-light shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
            <div className="relative overflow-hidden pb-80 mb-6">
                <img
                    src={post.featuredImage.url}
                    alt={post.title}
                    className="absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
                />
            </div>
            <div className="mb-8">
                <h2 className="text-center text-4xl text-bold">{post.title}</h2>
            </div>
            <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
                <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
                    <img
                        src={post.author.photo.url}
                        alt={post.author.name}
                        height="30px"
                        width="30px"
                        className="align-middle rounded-full"
                    />
                    <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">{post.author.name}</p>
                </div>
                <div className="font-medium text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="align-middle">{postDate}</span>
                </div>
            </div>
            <div>
                <p className="text-center text-lg font-normal px-4 lg:px-20 mb-8">{post.excerpt}</p>
            </div>
            <div className="text-center">
                <Link href={`./posts/${post.slug}`}>
                    <button className="transition duration-500 transform hover:-translate-y-1 inline-block bg-primary text-lg font-medium rounded-full text-neutral-light px-8 py-3 cursor-pointer">Seguir leyendo</button>
                </Link>
            </div>
               
        </article>
    );
}
 
export default PostCard;