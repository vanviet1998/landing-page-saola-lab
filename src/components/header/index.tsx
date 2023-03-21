import React from "react";
import { logo } from "../../assets";
import { DropdowHeader } from "./dropdow-header";
import "./style.scss";
export function HeaderComponent() {
  return (
    <nav className="header navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img className="my-logo" src={logo} alt="" width="149" height="22" />
        </a>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <DropdowHeader />
        </div>
      </div>
    </nav>
  );
}
