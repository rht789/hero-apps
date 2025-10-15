import React from "react";
import AppCard from "../AppCard/AppCard";

const Apps = ({ apps }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-4 md:px-20 py-6 md:py-8">
      {apps.slice(0, 8).map((app) => (
        <AppCard key={app.id} app={app}></AppCard>
      ))}
    </div>
  );
};

export default Apps;
