import React from "react";
import GoldLine from "../../assets/goldline.png";
import ideaa from "../../assets/ideaa.png";
import kanba from "../../assets/kanba.png";
import kanba2 from "../../assets/kanba2.png";
import lighting from "../../assets/lighting.png";
import liva from "../../assets/liva.png";
import solaytic from "../../assets/solaytic.png";
import velocity from "../../assets/velocity.png";
import ztos from "../../assets/ztos.png";
import random from "../../assets/random.png";
import {useHistory } from "react-router-dom";
import { isAuthenticated } from "../helper";

const HomePage = () => {
  let history = useHistory();

  const handleStartedButton = () => {
    history.push("/all");
  };
  return (
    <div>
      <div className="topContainer">
        <div className="topContainer_header">
          <h1>
            Welcome to <br />
            <span>MyJobs</span>
          </h1>
          {isAuthenticated() ? (
            <button onClick={handleStartedButton}>Get Started</button>
          ) : (
            <button>Get Started</button>
          )}
        </div>
        <img src={random} alt="" />
      </div>
      <div>
        <h3>Why Us</h3>
        <div className="homePageCard">
          <div className="card ">
            <div className="card-body">
              <h5 className="card-title">Get More Visibility</h5>
              <div className="card-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Organize your candidates</h5>
              <div className="card-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Verify Their Abilities</h5>
              <div className="card-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <h4>Compaines Who Trust Us</h4>
        <div className="bottom_row_first">
          <img src={GoldLine} alt="" />
          <img src={ideaa} alt="" />
          <img src={kanba} alt="" />
          <img src={kanba2} alt="" />
          <img src={lighting} alt="" />
        </div>
        <div className="bottom_row_second">
          <img src={liva} alt="" />
          <img src={solaytic} alt="" />
          <img src={velocity} alt="" />
          <img src={ztos} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
