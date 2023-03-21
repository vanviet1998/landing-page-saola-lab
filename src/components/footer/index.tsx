import React from "react";
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
                  src="https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdark-horizontal.e4df684f.svg&w=384&q=75"
                  alt=""
                  width="149"
                  height="22"
                />
              </a>
            </div>
            <p>Managed by Solana Foundation</p>
            <div className="solFooter">
              <a className="navbar-brand" href="#">
                <i className="bi bi-youtube"></i>
              </a>
              <a className="navbar-brand" href="#">
                <i className="bi bi-twitter"></i>
              </a>
              <a className="navbar-brand" href="#">
                <i className="bi bi-discord"></i>
              </a>
              <a className="navbar-brand" href="#">
                <i className="bi bi-reddit"></i>
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
                © 2023 Solana Foundation. All rights reserved.
              </span>
            </div>
          </div>
          <div>
            <div className="row my-6 my-md-0">
              <div className="col pe-lg-5">
                <div className="h6 smaller text-uppercase text-nowrap">
                  Solana
                </div>
                <ul className="list-unstyled m-0">
                  <li>
                    <a href="">Grants</a>
                  </li>
                  <li>
                    <a href="">Break Solana</a>
                  </li>
                  <li>
                    <a href="">Media Kit</a>
                  </li>
                  <li>
                    <a href="">Careers</a>
                  </li>
                  <li>
                    <a href="">Disclaimer</a>
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
                        <a href="">Ecosystem</a>
                      </li>
                      <li>
                        <a href="">Blog</a>
                      </li>
                      <li>
                        <a href="">Newsletter</a>
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
              © 2023 Solana Foundation. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
