import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { appLinks } from "./Links";

const Home = React.lazy(() => import("../pages/Home"));
const CarbonFootprint = React.lazy(() => import("../pages/CarbonFootprint"));

function BaseRouter() {
  return (
    <>
      <Router>
        <Suspense
          fallback={
            <>
              <div className="spinner-grow text-success" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </>
          }
        >
          <Routes>
            <Route exact path={appLinks?.Home} element={<Home />} />
            <Route
              path={appLinks?.CarbonFootprint}
              element={<CarbonFootprint />}
            />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default BaseRouter;
