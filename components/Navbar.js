import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="container bg-transparent text-neutral-dark h-1 mb-20 mt-12 lg:px-8">
            <div className="md:float-left block h-1">
                <Link href={"/"}>
                    <h1 className="cursor-pointer font-title font-bold text-4xl md:text-6xl">HISTORY-BLOG</h1>
                </Link>
            </div>
        </nav>
    );
}
 
export default Navbar;