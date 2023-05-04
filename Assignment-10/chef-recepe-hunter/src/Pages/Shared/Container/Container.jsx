import React from "react";
import { Outlet } from "react-router-dom";

const Container = () => {
  return (
    <div>
      <div className="max-w-7xl container mx-auto my-16">
        <Outlet />
      </div>
    </div>
  );
};

export default Container;
