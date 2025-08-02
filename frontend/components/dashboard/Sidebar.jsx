import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <>
      <div>
        <h2>Logo</h2>
      </div>
      <div className="sidebar-menu">
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>
            <Link href="/">Profile</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
