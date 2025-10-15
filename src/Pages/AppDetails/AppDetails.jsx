import React from "react";
import { useLoaderData, useParams } from "react-router";
import downloadIcon from "../../assets/icon-downloads.png";
import ratingIcon from "../../assets/icon-ratings.png";
import reviewIcon from "../../assets/icon-review.png";
import AppNotFound from "../../Component/ErrorPage/AppNotFound";
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
  const apps = useLoaderData();
  const { appId } = useParams();
  const parsedAppId = parseInt(appId);

  const app = apps.find((app) => app.id === parsedAppId);

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
  console.log("appId:", parsedAppId);
  console.log("app:", app);
  console.log("ratings data:", ratings);

  return (
    <div className="mx-8">
      <div className="flex justify-start items-center gap-8 my-4">
        <div className="w-[300px] h-[300px] flex items-center justify-center shadow-sm bg-white">
          <img src={image} alt="" />
        </div>
        <div>
          <div className="border-b-2 border-gray-300 pb-2 mb-2">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="text-xs text-gray-500">
              Developed by{" "}
              <span className="text-violet-500">{companyName}</span>
            </p>
          </div>
          <div className="flex gap-4 mt-4">
            <div className="flex flex-col items-center">
              <img src={downloadIcon} className="w-4 h-4 " alt="" />
              <p className="my-2 text-gray-500 text-sm">Downloads</p>
              <p className="text-xl font-bold">{downloads}</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={ratingIcon} className="w-4 h-4 " alt="" />
              <p className="my-2 text-gray-500 text-sm">Average Rating</p>
              <p className="text-xl font-bold">{ratingAvg}</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={reviewIcon} className="w-4 h-4 " alt="" />
              <p className="my-2 text-gray-500 text-sm">Total Reviews</p>
              <p className="text-xl font-bold">{reviews}</p>
            </div>
          </div>
          <div className="mt-4">
            <button className="p-2 rounded-lg bg-[#00d390] text-white">
              Install Now ({size} MB)
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
