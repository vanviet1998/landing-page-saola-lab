import React from "react";
import { IHeaderProps } from "..";
import { EVENT_HEADER } from "../../../common";
import "./style.scss";
export function DropdowHeader(props: IHeaderProps) {
  return (
    <ul className="navbar-nav ms-auto">
      <li className="nav-item dropdown dropdow-header me-4 ">
        <a
          onClick={() => props.onClick(EVENT_HEADER.PARTNER)}
          className="learn nav-link nav-link--primary font-size-title-header"
          id="navbarDropdown"
          role="button"
          // data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Partners
        </a>
        <div
          className="dropdown-menu dropdown-menu-dark bg-dark p-4 dropdow-box"
          aria-labelledby="navbarDropdown"
        >
          <div className="title-header">
            <i
              style={{ color: "rgb(25, 251, 155)" }}
              className="bi bi-globe me-2"
            ></i>
            START HERE
          </div>
          <div className="content-dropdow mt-2">
            <div className="content">
              <a href="#" className="nav-link nav-link--secondary">
                <strong className="header-content d-block text-white">
                  Blockchain and Solana 101
                </strong>
                The basics on all things Solana and web3.
              </a>
              <a href="#" className="nav-link nav-link--secondary">
                <strong className="header-content d-block text-white">
                  Intro to NFTs
                </strong>
                Everything you need to know about NFTs on Solana.
              </a>
              <a href="#" className="nav-link nav-link--secondary">
                <strong className="header-content d-block text-white">
                  Environmental Impact
                </strong>
                How Solana is supporting a greener web3.
              </a>
            </div>
          </div>
        </div>
      </li>

      <li className="build-header nav-item dropdown dropdow-header  me-4">
        <a
          onClick={() => props.onClick(EVENT_HEADER.SOLUTION)}
          className="build nav-link nav-link--primary false font-size-title-header"
          id="navbarDropdown1"
          role="button"
          // data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Solutions
        </a>
        <div
          className="dropdown-menu dropdown-menu-dark bg-dark p-4 dropdow-box build-content"
          aria-labelledby="navbarDropdown1"
        >
          <div className="d-lg-flex">
            <div className="me-4">
              <div className="title-header">
                <i
                  style={{ color: "rgb(255, 213, 18)" }}
                  className="bi bi-gear me-2"
                ></i>
                DEVELOPER
              </div>
              <div className="content-dropdow mt-2">
                <div className="content">
                  <a href="#" className="nav-link nav-link--secondary">
                    <strong className="header-content d-block text-white">
                      Dev Learning Center
                    </strong>
                    Start learning how to build today.
                  </a>
                  <a href="#" className="nav-link nav-link--secondary">
                    <strong className="header-content d-block text-white">
                      Solana Documentation{" "}
                    </strong>
                    Official Solana and SPL docs.
                  </a>
                  <a href="#" className="nav-link nav-link--secondary">
                    <strong className="header-content d-block text-white">
                      NFT Documentation
                    </strong>
                    What you can build with Metaplex.
                  </a>
                  <a href="#" className="nav-link nav-link--secondary">
                    <strong className="header-content d-block text-white">
                      Hackathon
                    </strong>
                    Kickstart your crypto journey.
                  </a>
                </div>
              </div>
            </div>
            <div className="divider"></div>
            <div className="ms-lg-4">
              <div className="title-header">
                <i
                  style={{ color: "rgb(255, 213, 18)" }}
                  className="bi bi-kanban me-2"
                ></i>
                Use cases
              </div>
              <div className="content-dropdow mt-2">
                <div className="content">
                  <a href="#" className="nav-link nav-link--secondary">
                    <strong className="header-content d-block text-white">
                      NFTs
                    </strong>
                  </a>
                  <a href="#" className="nav-link nav-link--secondary">
                    <strong className="header-content d-block text-white">
                      DeFi
                    </strong>
                  </a>
                  <a href="#" className="nav-link nav-link--secondary">
                    <strong className="header-content d-block text-white">
                      Payments
                    </strong>
                  </a>
                  <a href="#" className="nav-link nav-link--secondary">
                    <strong className="header-content d-block text-white">
                      Gaming
                    </strong>
                  </a>
                  <a href="#" className="nav-link nav-link--secondary">
                    <strong className="header-content d-block text-white">
                      DAOs
                    </strong>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li className="build-header nav-item dropdown dropdow-header  me-4">
        <a
          onClick={() => props.onClick(EVENT_HEADER.PROJECTS)}
          className="network nav-link nav-link--primary false dropdown font-size-title-header"
          // className="network nav-link nav-link--primary dropdown-toggle false dropdown-toggle font-size-title-header"
          id="navbarDropdown1"
          role="button"
          // data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Projects
        </a>
        <div
          className="dropdown-menu dropdown-menu-dark bg-dark p-4 dropdow-box network-content"
          aria-labelledby="navbarDropdown1"
        >
          <div className="d-lg-flex">
            <div className="me-4">
              <div className="title-header">
                <i
                  style={{ color: "rgb(153, 69, 255)" }}
                  className="bi bi-bookmark me-2"
                ></i>
                RESOURCES
              </div>
              <div className="content-dropdow mt-2">
                <div className="content">
                  <a href="#" className="nav-link nav-link--secondary">
                    <strong className="header-content d-block text-white">
                      Become a Validator
                    </strong>
                    Help run the Solana network.
                  </a>
                  <a href="#" className="nav-link nav-link--secondary">
                    <strong className="header-content d-block text-white">
                      RPC Providers
                    </strong>
                    Build crypto apps that scale.
                  </a>
                  <a href="#" className="nav-link nav-link--secondary">
                    <strong className="header-content d-block text-white">
                      Network Status
                    </strong>
                    Network performance and status.
                  </a>
                </div>
              </div>
            </div>
            <div className="divider"></div>
            <div className="ms-lg-4">
              <div className="title-header">
                <i
                  style={{ color: "rgb(153, 69, 255)" }}
                  className="bi bi-search me-2"
                ></i>
                INSPECT
              </div>
              <div className="content-dropdow mt-2">
                <div className="content">
                  <a href="#" className="nav-link nav-link--secondary">
                    <strong className="header-content d-block text-white">
                      Solscan
                    </strong>
                    Explore Solana blockchain in real time.
                  </a>
                  <a href="#" className="nav-link nav-link--secondary">
                    <strong className="header-content d-block text-white">
                      Solanabeach
                    </strong>
                    Solana ecosystem stats and news.
                  </a>
                  <a href="#" className="nav-link nav-link--secondary">
                    <strong className="header-content d-block text-white">
                      SolanaFM
                    </strong>
                    Solana blockchain explorer and indexer.
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li className="build-header nav-item dropdown dropdow-header  me-4">
        <a
          className="comuinity nav-link nav-link--primary font-size-title-header"
          id="navbarDropdown2"
          role="button"
          // data-bs-toggle="dropdown"
          aria-expanded="false"
          target={"_blank"}
          href="https://go-hub.notion.site/Blockchain-Engineer-Solidity-NodeJS-c6574895cc0442228b402b4a8c02f5fb"
          rel="noreferrer"
        >
          Careers
        </a>
        <div
          className="dropdown-menu dropdown-menu-dark bg-dark p-4 dropdow-box comuinity-content"
          aria-labelledby="navbarDropdown2"
        >
          <div className="d-lg-flex">
            <div className="me-4">
              <div className="title-header">
                <i
                  style={{ color: "#f087ff" }}
                  className="bi bi-gear-wide-connected me-2"
                ></i>
                GET INVOLVED
              </div>
              <div className="content-dropdow mt-2">
                <div className="content">
                  <a href="#" className="nav-link nav-link--secondary">
                    <strong className="header-content d-block text-white">
                      News
                    </strong>
                    The latest in the Solana ecosystem.
                  </a>
                  <a href="#" className="nav-link nav-link--secondary">
                    <strong className="header-content d-block text-white">
                      Events
                    </strong>
                    Experience the Solana community, in real life.
                  </a>
                  <a href="#" className="nav-link nav-link--secondary">
                    <strong className="header-content d-block text-white">
                      The Collective
                    </strong>
                    Help the greater ecosystem.
                  </a>
                  <a href="#" className="nav-link nav-link--secondary">
                    <strong className="header-content d-block text-white">
                      Community Resource Hub
                    </strong>
                    How to join in.
                  </a>
                </div>
              </div>
            </div>
            <div className="divider"></div>
            <div className="ms-lg-4">
              <div className="title-header">BREAK POINT</div>

              <div className="content-dropdow mt-2">
                <div className="content">
                  <a href="#" className="nav-link nav-link--secondary">
                    <div className="image-menu mb-4">
                      <img src="https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbreakpoint.a105026b.jpg&w=3840&q=75" />
                    </div>
                    <strong className="header-content d-block text-white">
                      Breakpoint Conference
                    </strong>
                    <div className="text-white" style={{ lineHeight: 1 }}>
                      November 4-7
                      <br />
                      Lisbon, Portugal
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
}
