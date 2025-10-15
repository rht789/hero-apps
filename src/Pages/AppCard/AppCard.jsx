import React from "react";
import downloadIcon from "../../assets/icon-downloads.png";
import ratingIcon from "../../assets/icon-ratings.png";
import { Link } from "react-router";

const AppCard = ({ app }) => {
  const { id, image, title, ratingAvg, downloads } = app;
  return (
    <Link to={`/appDetails/${id}`}>
      <div className="card bg-white hover:bg-gray-100 w-full shadow-sm">
        <figure className="p-3 md:p-4 w-full h-48 md:h-[300px] flex items-center justify-center">
          <img
            src={image}
            alt={`${title}'s image`}
            className="max-w-full max-h-full object-contain"
          />
        </figure>
        <div className="card-body p-3 md:p-4">
          <h2 className="card-title text-sm md:text-base">{title}</h2>
          <div className="card-actions justify-between">
            <div className="badge bg-gray-100 text-xs">
              <img src={downloadIcon} className="w-3 h-3" />
              <p className="text-green-400">{downloads}</p>
            </div>
            <div className="badge bg-gray-100 text-xs">
              <img src={ratingIcon} className="w-3 h-3" />
              <p className="text-orange-400">{ratingAvg}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
