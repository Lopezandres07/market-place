import React from "react";
import NavigationBar from "../components/NavigationBar";

const NotFound = () => {
  return (
    <>
      {" "}
      <NavigationBar />
      <div className="d-flex justify-content-center">
        <img src="/img/404.png" alt="not found" />
      </div>
    </>
  );
};

export default NotFound;
