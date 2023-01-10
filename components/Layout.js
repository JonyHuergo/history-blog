import Navbar from './Navbar'
import SearchBar from './SearchBar'

const Layout = ({children}) => {
    return ( 
        <div className='lg:px-[5%]'>
            <Navbar/>
            <SearchBar placeholder="Buscar posts"/>
            <main>
                {children}
            </main>
        </div>
    );
}
 
export default Layout;