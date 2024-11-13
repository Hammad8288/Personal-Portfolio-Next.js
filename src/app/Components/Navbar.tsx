import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-[#0f2a3f] flex justify-between items-center px-10 py-2 sticky top-0 ">
      <div>
        {/* <h1 className="text-3xl font-bold ml-8" >Hammad.</h1> */}
        <Link href="#" className="text-3xl font-bold ml-14">Hammad.</Link>
      </div>
      <div>
        <nav className="flex items-center px-10 py-4 space-x-10 font-bold  ">
          <Link href="#home" className="hover:text-blue-500 ">
            Home
          </Link>
          <Link href="#about" className="hover:text-blue-500 ">
            About
          </Link>
          <Link href="#Projects" className="hover:text-blue-500">
            Projects
          </Link>
          <Link href="#Skills" className="hover:text-blue-500">
            Skills
          </Link>
          <Link href="#contact" className="hover:text-blue-500">
            Contact
          </Link>   
        </nav>
      </div>
    </div>
  );
}
