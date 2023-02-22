import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export const useOnLocationChange = (handleLocationChange) => {
  const location = useLocation();

  console.log('path', location.pathname);

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
