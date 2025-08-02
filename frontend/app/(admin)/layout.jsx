import React from "react";
import "@/public/assets/css/dashboard/layout.css";
import Sidebar from "@/components/dashboard/Sidebar";

const layout = ({ children }) => {
  return (
    <div className="dashboard-layout-container">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="dashboard-right-container">{children}</div>
    </div>
  );
};

export default layout;
