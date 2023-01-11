import Navbar from './Navbar'

const Layout = ({children}) => {
    return ( 
        <div className='lg:px-[5%]'>
            <Navbar/>
            <main>
                {children}
            </main>
        </div>
    );
}
 
export default Layout;