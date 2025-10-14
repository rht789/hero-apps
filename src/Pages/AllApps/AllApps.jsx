import React, { useState } from "react";
import { useLoaderData } from "react-router";
import AppCard from "../AppCard/AppCard";
import { AiTwotoneAppstore } from "react-icons/ai";

const AllApps = () => {
  const allApps = useLoaderData();
  const [searchValue, setSearchValue] = useState("");
  const filteredApps = allApps.filter((app) =>
    app.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  console.log(allApps);
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

      <div className="flex justify-between items-center px-20 ">
        <p>{`(${filteredApps.length}) App Found`}</p>
        <form>
          <input
            type="text"
            placeholder="Search Your App"
            className="input input-bordered input-primary w-full max-w-xs"
            onChange={(e) => handleSearch(e)}
          />
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-20 py-8">
        {filteredApps.map((app) => (
          <AppCard key={app.id} app={app}></AppCard>
        ))}
      </div>
    </div>
  );
};

export default AllApps;
