import Link from "next/link";
import { useState, useEffect } from "react";
import { GoVerified } from "react-icons/go";
import { SuggestionVideos } from "../interface";

const SuggestedVideos = ({ suggestionVideos }: SuggestionVideos) => {
  const [data, setData] = useState<null | any>([]);

  useEffect(() => {
    setData(suggestionVideos); 
  }, [data]); 

  return (
    <div>
      <div>
        {data?.map((item: any, idx: any) => (
          <Link href={`/video/${item?.id?.videoId}`} key={idx}>
            <div
              className="flex flex-col mt-2 mb-5 overflow-hidden"
              style={{ cursor: "pointer" }}
              key={idx}
            >
              <div className="videoCard w-[358px] lg:pl-4 mt-4 rounded-lg dark:bg-gray-800 dark:border-gray-700 m-auto">
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
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SuggestedVideos;
