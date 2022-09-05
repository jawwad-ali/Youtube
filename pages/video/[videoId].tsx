import ReactPlayer from "react-player/youtube";
import { DynamicVideoProps, SuggestionVideos } from "../../interface";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { GoVerified } from "react-icons/go";
import Navbar from "../../components/Navbar";
import { options } from "../../utils";
import SuggestedVideos from "../../components/SuggestedVideos";

const Video = ({
  videoDetails,
  suggestions,
}: {
  videoDetails: DynamicVideoProps;
  suggestions: SuggestionVideos;
}) => {
  const router = useRouter();
  const { videoId } = router.query;

  const [data, setData] = useState<any | null>();
  const [suggestionVideos, setSeggestionVideos] = useState<any | null>();

  useEffect(() => {
    setData(videoDetails[0]);
    setSeggestionVideos(suggestions);
  }, []);

  return (
    <div className="w-full box-border">
      <Navbar />
      <div className="flex flex-col lg:flex-row gap-10 w-full ">
        {/* Video Side */}
        <div className="w-[100%] lg:w-8/12">
          <div className="flex box-border h-[80vh]">
            <div className="flex flex-col w-full box-border">
              <div className="h-full w-full">
                <ReactPlayer
                  url={`https://www.youtube.com/watch?v=${videoId}`}
                  className="react-player"
                  controls
                  width="100%"
                  height="100%"
                />
              </div>
              <div className="mt-5 ml-5 box-border flex flex-col ">
                <p className="text-white text-xl leading-6 w-full">
                  {data?.snippet?.title}
                </p>
                <div className="mt-4 flex justify-between">
                  <div>
                    <p className="text-md text-[#AAAAAA] inline-block">
                      {data?.snippet?.channelTitle.toLocaleUpperCase()}
                      <GoVerified className="text-gray-500 ml-2 inline-block" />
                    </p>
                  </div>
                  <div className="flex gap-3 text-[#AAAAAA]">
                    <p className="">
                      {data?.statistics?.viewCount
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                      Views
                    </p>
                    <p>
                      {data?.statistics?.likeCount
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                      Likes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related video side */}
        <div className="w-full lg:w-3/12 ml-5">
          <div>
            <SuggestedVideos suggestionVideos={suggestionVideos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;

export async function getServerSideProps({
  params: { videoId },
}: {
  params: { videoId: string };
}) {
  // Video Selected by User
  const res = await fetch(
    `https://youtube-v31.p.rapidapi.com/videos?part=contentDetails%2Csnippet%2Cstatistics&id=${videoId}`,
    options
  );
  const final = await res.json();

  // Suggested Videos
  const suggestedVideo = await fetch(
    `https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=${videoId}&part=id%2Csnippet&type=video&maxResults=50`,
    options
  );

  const suggestedVideoData = await suggestedVideo.json();
  return {
    props: {
      videoDetails: final.items,
      suggestions: suggestedVideoData.items,
    },
  };
}
