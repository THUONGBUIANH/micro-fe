import React, { useCallback } from "react";
import { mount } from "dashboard/DashboardApp";

function Dashboard() {
  const mountDashboard = useCallback((el) => {
    mount(el);
  }, []);

  return <div ref={mountDashboard} />;
}

export default Dashboard;
