import React from "react";
import Image from "../assets/images/footprint.jpg";

function Home() {
  return (
    <>
      <div
        className="container-fluid m-0 m-auto py-5 d-flex align-items-center"
        style={{
          height: "100vh",
          backgroundImage: `url(${Image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container px-3">
          <div
            className="card card-glass border-0"
            style={{
              width: "100%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              opacity: "4",
            }}
          >
            <div className="card-body">
              <h2 className="fw-bold">Know My Carbon Footprint</h2>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
