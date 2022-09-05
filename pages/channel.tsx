import type { NextPage } from "next";

const Playlist: NextPage = ({ channel }: any) => { 
  // console.log(channel);
  return <div>Channel</div>;
};

export async function getServerSideProps() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "dc78e1deb3mshaee8b47a5dc24b2p1989d0jsncba7ab11f683",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };

  const url = await fetch(
    "https://youtube-v31.p.rapidapi.com/search?channelId=UCBVjMGOIkavEAhyqpxJ73Dw&part=snippet%2Cid&order=date&maxResults=50",
    options
  );

  const data = await url.json();
  return {
    props: {
      channel: data,
    },
  };
}

export default Playlist;
