import React from 'react';
import downloadIcon from '../../assets/icon-downloads.png';
import ratingIcon from '../../assets/icon-ratings.png';
import { Link } from 'react-router';

const AppCard = ({app}) => {
    const { id, image, title, ratingAvg, downloads} = app;
    return (
      <Link to={`/appDetails/${id}`}>
        <div className="card bg-white hover:bg-gray-100 w-fit shadow-sm">
          <figure className="p-4 w-[300px] h-[300px] flex items-center justify-center">
            <img src={image} alt={`${title}'s image`} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <div className="card-actions justify-between">
              <div className="badge bg-gray-100">
                <img src={downloadIcon} className="w-3 h-3" />
                <p className="text-green-400">{downloads}</p>
              </div>
              <div className="badge bg-gray-100">
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