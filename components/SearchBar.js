const SearchBar = ({ placeholder, data }) => {
    return (
        <div>
            <div className="float-right mt-4">
                <input className="w-40 md:w-80 lg:w-[30rem] h-10 rounded-lg border-2 border-black hover:shadow-xl p-2" type="text" placeholder={placeholder} />
                <div></div>
            </div>
            <div></div>
        </div>
    );
}
 
export default SearchBar;