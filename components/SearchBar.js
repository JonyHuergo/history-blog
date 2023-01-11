import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';

const SearchBar = ({ placeholder, data }) => {
    return (
        <div>
            <div className="float-right mt-4 relative">
                <input className="w-40 md:w-80 lg:w-[30rem] h-10 rounded-lg border-2 border-black hover:shadow-xl p-2" type="text" placeholder={placeholder} />
                <div className='absolute right-2 top-2'>
                    <SearchIcon/>
                </div>
                <div className='bg-white rounded-lg absolute left-0 bottom--20 z-50 border-2 border-black mt-2 h-[11rem] overflow-scroll overflow-x-hidden'>
                    {data.map((post, index) => {
                        return (
                            <div key={index} className="py-2 px-4 first:pt-4">
                                <Link href={`./post/${post.node.slug}`}>{post.node.title}</Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
 
export default SearchBar;