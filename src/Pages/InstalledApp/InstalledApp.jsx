import React, { useState, useEffect } from "react";
import { AiTwotoneAppstore } from "react-icons/ai";
import { toast } from "react-toastify";
import downloadIcon from "../../assets/icon-downloads.png";
import ratingIcon from "../../assets/icon-ratings.png";
import Loader from "../../Component/Loader/Loader";
import useApps from "../../hooks/useApps";

const InstalledApp = () => {
  const { apps: allApps, loading } = useApps();
  const [installedApps, setInstalledApps] = useState([]);
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    if (allApps.length > 0) {
      const installedAppIds = JSON.parse(
        localStorage.getItem("installedApps") || "[]"
      );
      const installedAppData = allApps.filter((app) =>
        installedAppIds.includes(app.id)
      );
      setInstalledApps(installedAppData);
    }
  }, [allApps]);

  if (loading) return <Loader />;

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
      <div className="my-8 text-center px-4">
        <h1 className="flex items-center justify-center font-bold gap-1 text-2xl md:text-4xl mb-2">
          Your Installed Apps{" "}
          <AiTwotoneAppstore className="text-violet-600"></AiTwotoneAppstore>
        </h1>
        <p className="text-xs md:text-sm text-gray-500">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-20 mb-6 gap-4 md:gap-0">
        <p className="text-[#632EE3] font-semibold text-sm md:text-base">
          {installedApps.length} Apps Found
        </p>
        <div className="relative w-full md:w-auto">
          <select
            className="select select-bordered select-primary w-full md:max-w-xs bg-white text-sm md:text-base"
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
        <div className="text-center py-12 md:py-20 px-4">
          <div className="mb-8">
            <AiTwotoneAppstore className="text-4xl md:text-6xl text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl md:text-2xl font-semibold text-gray-600 mb-2">
              No Apps Installed
            </h3>
            <p className="text-gray-500 text-sm md:text-base max-w-md mx-auto">
              You haven't installed any apps yet. Browse our app store to find
              amazing apps!
            </p>
          </div>
        </div>
      ) : (
        <div className="px-4 md:px-20 py-4">
          {sortedApps().map((app) => (
            <div
              key={app.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-3 md:p-4 mb-4 flex flex-col md:flex-row items-center justify-between hover:shadow-md transition-shadow duration-200 gap-4 md:gap-0"
            >
              <div className="flex items-center gap-4 w-full md:w-auto">
                <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-gray-50 rounded-lg">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="w-10 h-10 md:w-12 md:h-12 object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-base md:text-lg text-gray-800">
                    {app.title}
                  </h3>
                  <div className="flex items-center gap-2 md:gap-4 text-xs md:text-sm text-gray-600 mt-1">
                    <div className="flex items-center gap-1">
                      <img
                        src={downloadIcon}
                        className="w-3 h-3 md:w-4 md:h-4"
                        alt=""
                      />
                      <p className="font-semibold text-green-400">
                        {app.downloads}
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <img
                        src={ratingIcon}
                        className="w-3 h-3 md:w-4 md:h-4"
                        alt=""
                      />
                      <p className="font-semibold text-orange-400">
                        {app.ratingAvg}
                      </p>
                    </div>
                    <span className="font-semibold">{app.size} MB</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleUninstall(app.id, app.title)}
                className="bg-[#00d390] hover:bg-[#00c085] text-white px-4 md:px-6 py-2 rounded-lg font-medium transition-colors duration-200 text-sm md:text-base w-full md:w-auto"
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
