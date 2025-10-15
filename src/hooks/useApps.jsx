import axios from "axios";
import { useEffect, useState } from "react";

const useApps = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios("/AppsData.json")
      .then((response) => setApps(response.data))
      .catch((err) => console.error("Error loading apps:", err))
      .finally(() => setLoading(false));
  }, []);

  return { apps, loading };
};

export default useApps;
