import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import downloadIcon from "../../assets/icon-downloads.png";
import ratingIcon from "../../assets/icon-ratings.png";
import reviewIcon from "../../assets/icon-review.png";
import AppNotFound from "../../Component/ErrorPage/AppNotFound";
import { toast } from "react-toastify";
import Loader from "../../Component/Loader/Loader";
import useApps from "../../hooks/useApps";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const AppDetails = () => {
  const { apps, loading } = useApps();
  const { appId } = useParams();
  const parsedAppId = parseInt(appId);

  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const installedApps = JSON.parse(
      localStorage.getItem("installedApps") || "[]"
    );
    setIsInstalled(installedApps.includes(parsedAppId));
  }, [parsedAppId]);

  const handleInstall = () => {
    const installedApps = JSON.parse(
      localStorage.getItem("installedApps") || "[]"
    );

    if (!installedApps.includes(parsedAppId)) {
      const updatedApps = [...installedApps, parsedAppId];
      localStorage.setItem("installedApps", JSON.stringify(updatedApps));
      setIsInstalled(true);

      toast.success(`${app.title} has been installed successfully!`);
    }
  };

  if (loading) return <Loader />;

  const app = apps.find((app) => app.id === parsedAppId);

  if (!app) {
    return <AppNotFound />;
  }

  const {
    image,
    title,
    companyName,
    ratingAvg,
    reviews,
    downloads,
    description,
    size,
    ratings,
  } = app;

  return (
    <div className="mx-4 md:mx-8">
      <div className="flex flex-col md:flex-row justify-start items-center gap-4 md:gap-8 my-4 border-b-2 border-gray-300 pb-6 md:pb-8">
        <div className="w-48 h-48 md:w-[300px] md:h-[300px] flex items-center justify-center shadow-sm bg-white p-4">
          <img
            src={image}
            alt=""
            className="max-w-full max-h-full object-contain"
          />
        </div>
        <div className="flex-1 w-full">
          <div className="border-b-2 border-gray-300 pb-2 mb-2 text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-semibold">{title}</h3>
            <p className="text-xs text-gray-500">
              Developed by{" "}
              <span className="text-violet-500">{companyName}</span>
            </p>
          </div>
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <div className="flex flex-col items-center">
              <img src={downloadIcon} className="w-4 h-4 " alt="" />
              <p className="my-2 text-gray-500 text-xs md:text-sm">Downloads</p>
              <p className="text-lg md:text-xl font-bold">{downloads}</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={ratingIcon} className="w-4 h-4 " alt="" />
              <p className="my-2 text-gray-500 text-xs md:text-sm">
                Average Rating
              </p>
              <p className="text-lg md:text-xl font-bold">{ratingAvg}</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={reviewIcon} className="w-4 h-4 " alt="" />
              <p className="my-2 text-gray-500 text-xs md:text-sm">
                Total Reviews
              </p>
              <p className="text-lg md:text-xl font-bold">{reviews}</p>
            </div>
          </div>
          <div className="mt-4 text-center md:text-left">
            <button
              className={`p-2 md:p-3 rounded-lg text-white transition-colors duration-200 text-sm md:text-base ${
                isInstalled
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#00d390] hover:bg-[#00c085]"
              }`}
              onClick={handleInstall}
              disabled={isInstalled}
            >
              {isInstalled ? "Installed" : `Install Now (${size} MB)`}
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8 mb-8 border-b-2 border-gray-300 pb-4">
        <h4 className="text-xl font-semibold mb-4">Rating Distribution</h4>
        {ratings && ratings.length > 0 ? (
          <div style={{ width: "100%", height: "400px" }}>
            <Bar
              data={{
                labels: ratings.map((item) => item.name).reverse(),
                datasets: [
                  {
                    label: "Number of Reviews",
                    data: ratings.map((item) => item.count).reverse(),
                    backgroundColor: "rgba(255, 165, 0, 0.6)",
                    borderColor: "rgba(255, 165, 0, 1)",
                    borderWidth: 1,
                  },
                ],
              }}
              options={{
                indexAxis: "y",
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: "top",
                  },
                  title: {
                    display: false,
                  },
                },
                scales: {
                  x: {
                    beginAtZero: true,
                  },
                },
              }}
            />
          </div>
        ) : (
          <div>No rating data available</div>
        )}
      </div>
      <div className="mb-8">
        <h4 className="text-xl font-semibold mb-4">Description</h4>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
