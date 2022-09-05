import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import { options } from "../utils";

import { useState } from "react";
import Head from "next/head";

const Home: NextPage = ({ res }: any) => {
  const [category, setCategory] = useState("New");
  return (
    <div>
      <Head>
        <title>Youtube</title> 
      </Head>
      <Navbar />

      <div className="flex gap-10">
        <Sidebar category={category} setCategory={setCategory} />

        <div className=" w-full">
          <p className="text-white text-3xl mt-4 font-bold">
            {category} <span className="text-red-600 font-bold">Videos</span>
          </p>
          <Feed videos={res.items} />
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps({
  query: { categories },
}: {
  query: { categories: string };
}) {
  const data = await fetch(
    `https://youtube-v31.p.rapidapi.com/search?q=${categories}&part=snippet%2Cid&regionCode=US&maxResults=50&order=date`,
    options
  );

  const res = await data.json();
  return {
    props: {
      res,
    },
  };
}

export default Home;
