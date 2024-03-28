import React from "react";
import Image from "../assets/images/footprint.jpg";
import { homeData } from "../data/homeData";
import { Link } from "react-router-dom";
import { appLinks } from "../constants/Links";

function Home() {
  return (
    <>
      <div
        className="container-fluid m-0 m-auto py-5 d-flex align-items-center"
        style={{
          height: "auto",
          backgroundImage: `url(${Image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: "0.9",
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
              opacity: "1.9",
            }}
          >
            <div className="card-body">
              <h2 className="fw-bold">
                <i className="bi bi-flower1 text-success"></i>Know My Carbon
                Footprint
              </h2>
              <p className="card-text">
                A carbon footprint is the total climate impact of an activity or
                item: from its creation, transportation and use to its
                destruction or wastage.
              </p>
              <h5 className="card-text">Why know your carbon footprint</h5>
              {homeData?.map((data) => (
                <div key={data.id} className="mb-3">
                  <p className="card-text mb-1 fw-semibold">{data?.title}</p>
                  <p className="card-text">{data?.content}</p>
                </div>
              ))}

              <Link
                className="btn btn-success fw-bold text-uppercase w-100 rounded-pill"
                to={appLinks?.CarbonFootprint}
              >
                Calculate your carbon footprint
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
