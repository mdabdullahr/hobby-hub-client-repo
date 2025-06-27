import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import error from "../../assets/404 error with a landscape-cuate.png"

const ErrorPage = () => {
  return (
    <div className="h-[100vh]"
    >
        <Navbar></Navbar>
      <img className="max-h-screen w-fit mx-auto" src={error} alt="" />
    </div>
  );
};

export default ErrorPage;
