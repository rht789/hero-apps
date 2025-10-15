import React, { Suspense } from "react";
import Banner from "../../Component/Banner/Banner";
import { Link } from "react-router";
import Apps from "../Apps/Apps";
import { IoIosTrendingUp } from "react-icons/io";
import Loader from "../../Component/Loader/Loader";
import useApps from "../../hooks/useApps";

const Home = () => {
  const { apps, loading } = useApps();

  if (loading) return <Loader />;

  return (
    <div>
      <Banner></Banner>
      <div className="my-6 md:my-8 text-center px-4">
        <h1 className="flex items-center justify-center font-bold gap-1 text-2xl md:text-4xl mb-2">
          Trending Apps{" "}
          <IoIosTrendingUp className="text-violet-600"> </IoIosTrendingUp>
        </h1>
        <p className="text-xs md:text-sm text-gray-500">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <Suspense fallback={<Loader></Loader>}>
        <Apps apps={apps}></Apps>
      </Suspense>
      <button className="btn btn-primary block mx-auto mb-8 md:mb-12 text-sm md:text-base">
        <Link to="/apps">See All</Link>
      </button>
    </div>
  );
};

export default Home;
