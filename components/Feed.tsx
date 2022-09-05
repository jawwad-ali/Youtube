import { FeedProps } from "../interface";
import { GoVerified } from "react-icons/go";
import Link from "next/link";

const Feed = ({ videos }: FeedProps) => {
  return (
    <div className="w-full">
      <div className="flex flex-wrap">
        {!videos.length ? (
          <div className="flex items-center justify-center w-full">
            <h1 className="text-white text-center font-extrabold text-6xl">
              Loading....
            </h1>
          </div>
        ) : (
          videos?.map((item, idx) => (
            <Link href={`/video/${item?.id?.videoId}`} key={idx}>
              <div
                className="flex mt-2 mb-5 -ml-3 overflow-hidden"
                style={{ cursor: "pointer" }}
                key={idx}
              >
                <div className="videoCard w-[320px] md:w-[358px] lg:w-[358px] lg:pl-4 mb-2 rounded-lg dark:bg-gray-800 dark:border-gray-700">
                  <div className="ml-auto mr-auto">
                    <img
                      className="max-w-xs"
                      src={item?.snippet?.thumbnails?.high?.url}
                      alt={item?.snippet?.title}
                    />
                    <div className="pt-5">
                      <h5 className="mb-2 text-md font-bold tracking-tight text-white">
                        {item?.snippet?.title.slice(0, 75)}...
                      </h5>
                      <div className="flex w-full">
                        <p className="text-xs mr-2 text-[#AAAAAA]">
                          {item?.snippet?.channelTitle.toLocaleUpperCase()}
                        </p>
                        <GoVerified className="text-gray-500" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Feed;
