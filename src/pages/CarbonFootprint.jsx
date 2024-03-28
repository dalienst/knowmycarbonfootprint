import React, { useState } from "react";
import Image from "../assets/images/footprint.jpg";
import { api } from "../api/axios";
import { apiUrls } from "../constants/Links";
import ResultModal from "../components/ResultModal";

function CarbonFootprint() {
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    bodyType: "",
    sex: "",
    diet: "",
    howOftenShower: "",
    heatingEnergySource: "",
    transport: "",
    vehicleType: "",
    socialActivity: "",
    monthlyGroceryBill: "",
    frequencyOfTravelingByAir: "",
    vehicleMonthlyDistanceKm: "",
    wasteBagSize: "",
    wasteBagWeeklyCount: "",
    howLongTVPcDailyHour: "",
    howManyNewClothesMonthly: "",
    howLongInternetDailyHour: "",
    energyEfficiency: "",
    recycling: "",
    cookingWith: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formattedData = {
      "Body Type": formData.bodyType,
      Sex: formData.sex,
      Diet: formData.diet,
      "How Often Shower": formData.howOftenShower,
      "Heating Energy Source": formData.heatingEnergySource,
      Transport: formData.transport,
      "Vehicle Type": formData.vehicleType,
      "Social Activity": formData.socialActivity,
      "Monthly Grocery Bill": formData.monthlyGroceryBill,
      "Frequency of Traveling by Air": formData.frequencyOfTravelingByAir,
      "Vehicle Monthly Distance Km": formData.vehicleMonthlyDistanceKm,
      "Waste Bag Size": formData.wasteBagSize,
      "Waste Bag Weekly Count": formData.wasteBagWeeklyCount,
      "How Long TV PC Daily Hour": formData.howLongTVPcDailyHour,
      "How Many New Clothes Monthly": formData.howManyNewClothesMonthly,
      "How Long Internet Daily Hour": formData.howLongInternetDailyHour,
      "Energy efficiency": formData.energyEfficiency,
      Recycling: formData.recycling,
      Cooking_With: formData.cookingWith,
    };

    try {
      const response = await api.post(
        apiUrls?.predictCarbonEmissions,
        formattedData
      );
      console.log("API response:", response.data);
      setResultData(response.data);
      setShowModal(true);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

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
        <div className="container">
          <div
            className="card  card-glass border-0"
            style={{
              width: "100%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              opacity: "1.9",
            }}
          >
            <div className="card-body">
              <h2 className="fw-bold card-title text-center">
                Let's get started 😊
              </h2>
              <p className="text-center card-text">
                We need some information. None of this data is saved.
              </p>
              <form onSubmit={handleSubmit}>
                <section>
                  <h6 className="card-text text-success mb-0">Personal</h6>
                  <div className="row">
                    <div className="col-md-4 col-sm-12">
                      <div className="mb-2">
                        <label htmlFor="bodyType" className="form-label">
                          Body Type
                        </label>
                        <select
                          className="form-select"
                          id="bodyType"
                          name="bodyType"
                          value={formData.bodyType}
                          onChange={handleChange}
                        >
                          <option value="">Select Body Type</option>
                          <option value="overweight">Overweight</option>
                          <option value="underweight">Underweight</option>
                          <option value="normal">Normal</option>
                          <option value="obese">Obese</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-md-4 col-sm-12">
                      <div className="mb-2">
                        <label htmlFor="sex" className="form-label">
                          Sex
                        </label>
                        <select
                          className="form-select"
                          id="sex"
                          name="sex"
                          value={formData.sex}
                          onChange={handleChange}
                        >
                          <option value="">Select Sex</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-md-4 col-sm-12">
                      <div className="mb-2">
                        <label htmlFor="diet" className="form-label">
                          Diet
                        </label>
                        <select
                          className="form-select"
                          id="diet"
                          name="diet"
                          value={formData.diet}
                          onChange={handleChange}
                        >
                          <option value="">Select Diet</option>
                          <option value="omnivore">Omnivore</option>
                          <option value="vegetarian">Vegetarian</option>
                          <option value="pescatarian">Pescatarian</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 col-sm-12">
                      <div className="mb-3">
                        <label htmlFor="howOftenShower" className="form-label">
                          How often do you shower
                        </label>
                        <select
                          name="howOftenShower"
                          id="howOftenShower"
                          className="form-select"
                          value={formData.howOftenShower}
                          onChange={handleChange}
                        >
                          <option value="">Select Frequency</option>
                          <option value="daily">Daily</option>
                          <option value="twice a day">Twice a Day</option>
                          <option value="less frequently">
                            Less Frequently
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className="col-md-6 col-sm-12">
                      <div className="mb-3">
                        <label htmlFor="socialActivity" className="form-label">
                          Social Activity
                        </label>
                        <select
                          name="socialActivity"
                          id="socialActivity"
                          className="form-select"
                          value={formData.socialActivity}
                          onChange={handleChange}
                        >
                          <option value="">Select Frequency</option>
                          <option value="never">never</option>
                          <option value="often">often</option>
                          <option value="sometimes">sometimes</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </section>

                <hr />

                <section>
                  <h6 className="card-text text-danger">Travel</h6>
                  <div className="row">
                    <div className="col-md-4 col-sm-12">
                      <div className="mb-3">
                        <label htmlFor="transport" className="form-label">
                          Travel
                        </label>
                        <select
                          name="transport"
                          id="transport"
                          className="form-select"
                          value={formData.transport}
                          onChange={handleChange}
                        >
                          <option value="">Select Transport</option>
                          <option value="public">public</option>
                          <option value="private">private</option>
                          <option value="walk/bicycle">walk/bicycle</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-md-4 col-sm-12">
                      <div className="mb-3">
                        <label
                          htmlFor="vehicleMonthlyDistanceKm"
                          className="form-label"
                        >
                          Distance Travelled in km
                        </label>
                        <input
                          type="number"
                          name="vehicleMonthlyDistanceKm"
                          value={formData.vehicleMonthlyDistanceKm}
                          onChange={handleChange}
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="col-md-4 col-sm-12">
                      <div className="mb-3">
                        <label
                          htmlFor="frequencyOfTravelingByAir"
                          className="form-label"
                        >
                          How Often Did you fly last month
                        </label>
                        <select
                          name="frequencyOfTravelingByAir"
                          id="frequencyOfTravelingByAir"
                          className="form-select"
                          value={formData.frequencyOfTravelingByAir}
                          onChange={handleChange}
                        >
                          <option value="">Select Frequency</option>
                          <option value="never">never</option>
                          <option value="rarely">rarely</option>
                          <option value="frequently">frequently</option>
                          <option value="very frequently">
                            very frequently
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </section>

                <hr />

                {/* waste */}
                <section>
                  <h6 className="card-text text-info">Waste</h6>
                  <div className="row">
                    <div className="col-md-4 col-sm-12">
                      <div className="mb-3">
                        <label htmlFor="wasteBagSize" className="form-label">
                          Size of waste bag
                        </label>
                        <select
                          name="wasteBagSize"
                          id="wasteBagSize"
                          className="form-select"
                          value={formData.wasteBagSize}
                          onChange={handleChange}
                        >
                          <option value="">Select Size</option>
                          <option value="small">small</option>
                          <option value="medium">medium</option>
                          <option value="large">large</option>
                          <option value="extra large">extra large</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-md-4 col-sm-12">
                      <div className="mb-3">
                        <label
                          htmlFor="wasteBagWeeklyCount"
                          className="form-label"
                        >
                          How many waste bags do you take out in a week
                        </label>
                        <input
                          type="number"
                          name="wasteBagWeeklyCount"
                          value={formData.wasteBagWeeklyCount}
                          onChange={handleChange}
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="col-md-4 col-sm-12">
                      <div className="mb-3">
                        <label htmlFor="recycling" className="form-label">
                          Do you recycle any materials below
                        </label>
                        <select
                          name="recycling"
                          id="recycling"
                          className="form-select"
                          value={formData.recycling}
                          onChange={handleChange}
                        >
                          <option value="">Select Material</option>
                          <option value="metal">metal</option>
                          <option value="plastic">plastic</option>
                          <option value="paper">paper</option>
                          <option value="glass">glass</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </section>

                {/* consumption */}
                <section>
                  <h6 className="card-text text-primary">Consumption</h6>
                  <div className="row">
                    <div className="col-md-6 col-sm-12">
                      <div className="mb-3">
                        <label
                          htmlFor="monthlyGroceryBill"
                          className="form-label"
                        >
                          How much do you spend on grocery per month?
                        </label>
                        <input
                          type="number"
                          name="monthlyGroceryBill"
                          value={formData.monthlyGroceryBill}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="5000"
                        />
                      </div>
                    </div>

                    <div className="col-md-6 col-sm-12">
                      <div className="mb-3">
                        <label
                          htmlFor="howManyNewClothesMonthly"
                          className="form-label"
                        >
                          How many clothes do you buy monthly?
                        </label>
                        <input
                          type="number"
                          name="howManyNewClothesMonthly"
                          value={formData.howManyNewClothesMonthly}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="10"
                        />
                      </div>
                    </div>
                  </div>
                </section>

                <hr />

                {/* energy */}
                <section>
                  <h6 className="card-text text-warning">Energy</h6>
                  <div className="row">
                    <div className="col-md-4 col-sm-12">
                      <div className="mb-3">
                        <label
                          htmlFor="heatingEnergySource"
                          className="form-label"
                        >
                          What power source do you use for heating?
                        </label>
                        <select
                          name="heatingEnergySource"
                          id="heatingEnergySource"
                          className="form-select"
                          value={formData.heatingEnergySource}
                          onChange={handleChange}
                        >
                          <option value="">Select Source</option>
                          <option value="natural gas">natural gas</option>
                          <option value="electricity">electricity</option>
                          <option value="wood">wood</option>
                          <option value="coal">coal</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-md-4 col-sm-12">
                      <div className="mb-3">
                        <label htmlFor="cookingWith" className="form-label">
                          What cooking systems do you use?
                        </label>
                        <select
                          name="cookingWith"
                          id="cookingWith"
                          className="form-select"
                          value={formData.cookingWith}
                          onChange={handleChange}
                        >
                          <option value="">Select Cooking System</option>
                          <option value="microwave">microwave</option>
                          <option value="oven">oven</option>
                          <option value="grill">grill</option>
                          <option value="stove">stove</option>
                          <option value="airfryer">airfryer</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-md-4 col-sm-12">
                      <div className="mb-3">
                        <label
                          htmlFor="energyEfficiency"
                          className="form-label"
                        >
                          Do you consider the energy efficiency of electronic
                          devices?
                        </label>
                        <select
                          name="energyEfficiency"
                          id="energyEfficiency"
                          className="form-select"
                          value={formData.energyEfficiency}
                          onChange={handleChange}
                        >
                          <option value="">Select Answer</option>
                          <option value="No">No</option>
                          <option value="Yes">Yes</option>
                          <option value="Sometimes">Sometimes</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-sm-12">
                      <div className="mb-3">
                        <label
                          htmlFor="howLongInternetDailyHour"
                          className="form-label"
                        >
                          What is your daily internet usage in hours?
                        </label>
                        <input
                          type="number"
                          name="howLongInternetDailyHour"
                          value={formData.howLongInternetDailyHour}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="10"
                        />
                      </div>
                    </div>

                    <div className="col-md-6 col-sm-12">
                      <div className="mb-3">
                        <label
                          htmlFor="howLongTVPcDailyHour"
                          className="form-label"
                        >
                          How many hours a day do you spend in front of your
                          PC/TV?
                        </label>
                        <input
                          type="number"
                          name="howLongTVPcDailyHour"
                          value={formData.howLongTVPcDailyHour}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="10"
                        />
                      </div>
                    </div>
                  </div>
                </section>
                <div className="mb-3">
                  <button
                    type="submit"
                    className="btn btn-light w-100 fw-bold rounded-pill"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <div
                          className="spinner-border text-success"
                          role="status"
                        >
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </>
                    ) : (
                      "Get Carbon Footprint"
                    )}{" "}
                    {/* Change button text when loading */}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ResultModal
        show={showModal}
        onClose={() => setShowModal(false)}
        resultData={resultData}
      />
    </>
  );
}

export default CarbonFootprint;
