import { useState, useEffect } from "react";
import { getCategories } from '../services'
import Link from "next/link";

const Categories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories()
                .then((result) => setCategories(result))
    }, [])

    return (
        <div className="bg-neutral-light shadow-lg rounded-lg p-8 mb-8">
            <h3 className="text-xl mb-8 font-semibold border-b border-secondary pb-4">
                Temas
            </h3>
            {categories.map((category, index) => (
                <div key={index} className="flex items-center w-full mb-4">
                    <div className="flex-grow ml-4">
                        <Link href={`/post/${category.slug}`} className="text-md">{category.name}</Link>
                    </div>
                </div>
            ))}
        </div>
    );
}
 
export default Categories;