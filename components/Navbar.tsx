import { logo } from "../dummy";
import { BsSearch } from "react-icons/bs";
import Link from "next/link";

const Navbar = () => {
  return ( 
    <div className="w-full md:p-4">
      <div className="flex justify-between w-full">
        <div style={{ cursor: "pointer" }}>
          <Link href="/">
            <img src={logo} className="h-12" />
          </Link> 
        </div>

        <div className="mr-12 flex items-center">
          <div className="flex items-center border-2 border-white bg-white rounded-full">
            <input
              placeholder="Search"
              className="rounded-full md:w-[350px] p-2 outline-none border-none bg-transparent"
            /> 
            <BsSearch className="mr-4 text-xl text-red-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
