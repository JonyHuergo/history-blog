import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="container transform duration-300 mx-auto text-neutral-light bg-transparent hover:bg-neutral-light hover:text-neutral-dark rounded-lg h-28 hover:shadow-xl">
            <div className="md:float-left block">
                <Link href={"/"}>
                    <h1 className="cursor-pointer font-bold text-4xl">HISTORIA</h1>
                </Link>
            </div>
        </nav>
    );
}
 
export default Navbar;