import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

export const useOnLocationChange = (handleLocationChange) => {
  const location = useLocation();

  useEffect(
    () => handleLocationChange && handleLocationChange(location),
    [location, handleLocationChange]
  );
};

function Root({ onNavigate }) {
  useOnLocationChange(onNavigate);

  return <Outlet />;
}

export default Root;
