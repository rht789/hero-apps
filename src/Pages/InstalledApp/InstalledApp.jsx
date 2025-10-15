import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router";
import { AiTwotoneAppstore } from "react-icons/ai";
import { toast } from "react-toastify";
import downloadIcon from "../../assets/icon-downloads.png";
import ratingIcon from "../../assets/icon-ratings.png";

const InstalledApp = () => {
  const allApps = useLoaderData();
  const [installedApps, setInstalledApps] = useState([]);
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    const installedAppIds = JSON.parse(
      localStorage.getItem("installedApps") || "[]"
    );
    const installedAppData = allApps.filter((app) =>
      installedAppIds.includes(app.id)
    );
    setInstalledApps(installedAppData);
  }, [allApps]);

  const handleUninstall = (appId, appTitle) => {
    const installedAppIds = JSON.parse(
      localStorage.getItem("installedApps") || "[]"
    );
    const updatedAppIds = installedAppIds.filter((id) => id !== appId);

    localStorage.setItem("installedApps", JSON.stringify(updatedAppIds));

    const updatedInstalledApps = installedApps.filter(
      (app) => app.id !== appId
    );
    setInstalledApps(updatedInstalledApps);

    toast.success(`${appTitle} has been uninstalled successfully!`);
  };

  const sortedApps = () => {
    if (sortBy === "asc") {
      return [...installedApps].sort(
        (a, b) => parseDownloads(a.downloads) - parseDownloads(b.downloads)
      );
    } else if (sortBy === "desc") {
      return [...installedApps].sort(
        (a, b) => parseDownloads(b.downloads) - parseDownloads(a.downloads)
      );
    }
    return installedApps;
  };

  const parseDownloads = (downloadStr) => {
    const str = downloadStr.toString().toLowerCase();
    if (str.includes("m")) {
      return parseFloat(str) * 1000000;
    } else if (str.includes("b")) {
      return parseFloat(str) * 1000000000;
    }
    return parseFloat(str) || 0;
  };

  return (
    <div>
      <div className="my-8 text-center">
        <h1 className="flex items-center justify-center font-bold gap-1 text-4xl mb-2">
          Your Installed Apps{" "}
          <AiTwotoneAppstore className="text-violet-600"></AiTwotoneAppstore>
        </h1>
        <p className="text-xs text-gray-500">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="flex justify-between items-center px-20 mb-6">
        <p className="text-[#632EE3] font-semibold">
          {installedApps.length} Apps Found
        </p>
        <div className="relative">
          <select
            className="select select-bordered select-primary w-full max-w-xs bg-white"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="none">Sort By Download</option>
            <option value="asc">Low-&gt;High</option>
            <option value="desc">High-&gt;Low</option>
          </select>
        </div>
      </div>

      {installedApps.length === 0 ? (
        <div className="text-center py-20">
          <div className="mb-8">
            <AiTwotoneAppstore className="text-6xl text-gray-300 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-600 mb-2">
              No Apps Installed
            </h3>
            <p className="text-gray-500">
              You haven't installed any apps yet. Browse our app store to find
              amazing apps!
            </p>
          </div>
        </div>
      ) : (
        <div className="px-20 py-4">
          {sortedApps().map((app) => (
            <div
              key={app.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4 flex items-center justify-between hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 flex items-center justify-center bg-gray-50 rounded-lg">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-800">
                    {app.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                    <div className="flex items-center">
                      <img src={downloadIcon} className="w-4 h-4 " alt="" />
                      
                      <p className="font-semibold text-green-400">{app.downloads}</p>
                    </div>
                    <div className="flex items-center">
                      <img src={ratingIcon} className="w-4 h-4 " alt="" />
                      <p className="font-semibold text-orange-400">{app.ratingAvg}</p>
                    </div>
                    <span className="font-semibold">{app.size} MB</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleUninstall(app.id, app.title)}
                className="bg-[#00d390] hover:bg-[#00c085] text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
              >
                Uninstall
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InstalledApp;
