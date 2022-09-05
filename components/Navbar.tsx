import { logo } from "../dummy";
import { BsSearch } from "react-icons/bs";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between pt-2">
      <div>
        <Link href="/">
          <img src={logo} className="h-12 pl-7" />
        </Link>
      </div>
      <div className="flex items-center border-2 border-white bg-white rounded-full mr-7">
        <input
          placeholder="Search"
          className="rounded-full md:w-[350px] p-2 outline-none border-none bg-transparent"
        />
        <BsSearch className="mr-4 text-xl text-red-600" />
      </div>
    </div>
  );
};

export default Navbar;
