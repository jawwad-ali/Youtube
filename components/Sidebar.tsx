import Link from "next/link";
import { useRouter } from "next/router";
import { useState, Dispatch, SetStateAction } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import { cats } from "../dummy";

interface IProps {
  category: string;
  setCategory: Dispatch<SetStateAction<string>>;
}

const Sidebar = ({ category, setCategory }: IProps) => {
  const [showSidebar, setShowSidebar] = useState(true);
  const router = useRouter();
  const { categories } = router.query;

  //ClassNames
  const activeLink =
    "xl:bg-red-600 hover:bg-red-600 flex items-center gap-3 hover:bg-primary p-3 pl-6 justify-center xl:justify-start cursor-pointer font-semibold text-white rounded";

  const normalLink =
    "hover:bg-red-600 xl:border-gray-600 flex items-center gap-3 hover:bg-primary p-3 pl-6 justify-center xl:justify-start cursor-pointer font-semibold rounded text-white";

  return (
    <div className="flex">
      <div className="bg-[#181818] border-r-2 mt-3 text-xl">
        <div
          onClick={() => setShowSidebar((prev) => !prev)}
          className="block xl:hidden m-2 ml-4 mt-3 text-xl text-white"
        >
          <div className="pl-3">
            {showSidebar ? <ImCancelCircle /> : <AiOutlineMenu />}
          </div>
        </div>

        {showSidebar && (
          <div className="xl:w-52 w-20 flex flex-col justify-start mb-10 border-r-2 border-gray-100 xl:border-0 p-3">
            <div className="xl:pb-4">
              <div>
                <div className="flex flex-col gap-10">
                  {cats.map((category) => (
                    <Link
                      href={`/?categories=${category.name}`}
                      key={category.name}
                    >
                      <div
                        className={
                          categories === category.name ? activeLink : normalLink
                        }
                      >
                        <div
                          className={`text-xl mr-4 ${
                            categories === category.name
                              ? `text-white`
                              : `text-red-600`
                          }`}
                          onClick={() => setCategory(category.name)}
                        >
                          {category.icon}
                        </div>
                        <div
                          onClick={() => setCategory(category.name)}
                          className="hidden xl:block"
                        >
                          {category.name}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
