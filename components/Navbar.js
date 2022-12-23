import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="container transform duration-300 mx-auto text-white bg-transparent hover:bg-white hover:text-black rounded-lg h-28 hover:shadow-xl">
            <div className="md:float-left block">
                <Link href={"/"}>
                    <h1 className="cursor-pointer font-bold text-4xl">HISTORIA</h1>
                </Link>
            </div>
        </nav>
    );
}
 
export default Navbar;