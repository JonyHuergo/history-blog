import { useState, useEffect } from "react";
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';

const SearchBar = ({ placeholder, data }) => {
    const [filteredData, setFilteredData] = useState([]);

    const removeAccents = (str) => {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    } 

    const handleFilter = (event) => {
        const searchWord = removeAccents(event.target.value.toLowerCase());
        const newFilter = data.filter((value) => {
            const title = removeAccents(value.node.title.toLowerCase())
            return title.includes(searchWord);
        });

        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    }

    return (
        <div>
            <div className="float-right mt-4 relative">
                <input className="w-40 md:w-80 lg:w-[30rem] h-10 rounded-lg border-2 border-black hover:shadow-xl p-2" type="text" placeholder={placeholder} onChange={handleFilter} />
                <div className='absolute right-2 top-2'>
                    <SearchIcon/>
                </div>
                {filteredData.length != 0 && (
                <div
                    className='bg-white rounded-lg absolute left-0 bottom--20 z-50 border-2 border-black mt-2 max-h-[10rem] overflow-scroll overflow-x-hidden
                    scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent scrollbar-thumb-rounded-full scrollbar-track-rounded-full'
                >
                    {filteredData.map((post, index) => {
                        return (
                            <div key={index} className="hover:bg-gray-300">
                            <Link href={`../post/${post.node.slug}`}>
                                <div className="py-2 px-4">
                                    {post.node.title}
                                </div>
                            </Link>
                            </div>
                        )
                    })}
                </div>
                )}
            </div>
        </div>
    );
}
 
export default SearchBar;