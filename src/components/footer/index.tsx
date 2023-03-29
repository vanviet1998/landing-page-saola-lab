import React from "react";
import { coffeImage, logo } from "../../assets";
import "./style.scss";
export function Footer() {
  return (
    <div className="footer bg-dark">
      <div className="wrap">
        <div className="container d-md-flex justify-content-md-between">
          <div className="d-flex flex-column align-items-center align-items-md-start">
            <div>
              <a className="navbar-brand" href="#">
                <img
                  className="my-logo"
                  src={logo}
                  alt=""
                  width="149"
                  height="22"
                />
              </a>
            </div>
            <p></p>
            <div className="solFooter">
              <a className="navbar-brand" href="#">
                <i className="bi bi-twitter"></i>
              </a>
              <a className="navbar-brand" href="#">
                <i className="bi bi-discord"></i>
              </a>
              <a className="navbar-brand" href="#">
                <i className="bi bi-github"></i>
              </a>
              <a className="navbar-brand" href="#">
                <i className="bi bi-telegram"></i>
              </a>
            </div>
            <div className="d-none d-lg-block">
              <span style={{ color: "#848895" }}>
                © 2023 Saola Labs. Built in Saigon with
              </span>
              <img
                style={{ width: 29, height: 29, marginLeft: 4 }}
                src={coffeImage}
              />
            </div>
          </div>
          <div>
            <div className="row my-6 my-md-0">
              <div className="col pe-lg-5">
                <div className="h6 smaller text-uppercase text-nowrap">
                  SAOLA LABS
                </div>
                <ul className="list-unstyled m-0">
                  <li>
                    <a href="">Home</a>
                  </li>
                  <li>
                    <a href="">Partners</a>
                  </li>
                  <li>
                    <a href="">Solutions</a>
                  </li>
                  <li>
                    <a href="">About</a>
                  </li>
                </ul>
              </div>
              <div className="col">
                <div className="row flex-md-nowrap h-100 flex-column flex-md-row">
                  <div className="col pe-lg-5">
                    <div className="h6 smaller text-uppercase text-nowrap">
                      GET CONNECTED
                    </div>
                    <ul className="list-unstyled m-0">
                      <li>
                        <a href="">Blog</a>
                      </li>
                      <li>
                        <a href="">Careers</a>
                      </li>
                      <li>
                        <a href="">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center d-lg-none">
            <div className="my-6 driver"> </div>

            <span className="solFooter" style={{ color: "#848895" }}>
              © 2023 Saola Labs. Built in Saigon with
            </span>
            <img
              style={{ width: 29, height: 29, marginLeft: 4 }}
              src={coffeImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
