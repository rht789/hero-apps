import React, { useState, useEffect } from "react";
import AppCard from "../AppCard/AppCard";
import { AiTwotoneAppstore } from "react-icons/ai";
import AppNotFound from "../../Component/ErrorPage/AppNotFound";
import Loader from "../../Component/Loader/Loader";
import useApps from "../../hooks/useApps";

const AllApps = () => {
  const { apps: allApps, loading } = useApps();
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [filteredApps, setFilteredApps] = useState([]);

  useEffect(() => {
    if (!allApps.length) return;

    if (searchValue === "") {
      setFilteredApps(allApps);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);

    const debounceTimer = setTimeout(() => {
      const filtered = allApps.filter((app) =>
        app.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredApps(filtered);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [searchValue, allApps]);

  useEffect(() => {
    if (allApps.length > 0) {
      setFilteredApps(allApps);
    }
  }, [allApps]);

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  if (loading) return <Loader />;

  return (
    <div>
      <div className="my-8 text-center">
        <h1 className="flex items-center justify-center font-bold gap-1 text-4xl mb-2">
          Our All Applications{" "}
          <AiTwotoneAppstore className="text-violet-600"> </AiTwotoneAppstore>
        </h1>
        <p className="text-xs text-gray-500">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-20 gap-4 md:gap-0">
        <p className="text-sm md:text-base">{`(${filteredApps.length}) App Found`}</p>
        <form className="w-full md:w-auto">
          <input
            type="text"
            placeholder="Search Your App"
            className="input input-bordered input-primary w-full md:max-w-xs"
            onChange={(e) => handleSearch(e)}
          />
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-4 md:px-20 py-6 md:py-8">
        {isLoading ? (
          <div className="col-span-full">
            <Loader />
          </div>
        ) : filteredApps.length > 0 ? (
          filteredApps.map((app) => <AppCard key={app.id} app={app}></AppCard>)
        ) : searchValue ? (
          <div className="col-span-full">
            <AppNotFound />
          </div>
        ) : (
          filteredApps.map((app) => <AppCard key={app.id} app={app}></AppCard>)
        )}
      </div>
    </div>
  );
};

export default AllApps;
