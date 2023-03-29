import { left } from "@popperjs/core";
import React, { useRef, useState } from "react";
import {
  alpaca,
  alpacaCover,
  bannerImage,
  bannerReal,
  bannerSecond,
  bitCoin,
  bitcoinn,
  brianImage,
  cfiIcon,
  coverValen,
  harmony,
  julianImage,
  ltImage,
  nioluImage,
  qredo,
  realcoin,
  resolve,
  rsmReal,
  stableCoinImage,
  stablyImage,
  stablyLogo,
  sunImage,
  sunsunImage,
  taro,
  tripple,
  valen,
  valenBanner,
  vechain,
  watter,
  zReal,
} from "../../assets";
import { EVENT_HEADER } from "../../common";
import { Footer } from "../../components/footer";
import { HeaderComponent, IHeaderProps } from "../../components/header";
import "./style.scss";
interface IDetailCoin {
  key: string;
  banner: string;
  title: string;
  link: {
    title: string;
    link: string;
  };
  icon: string;
  support?: { link: string; tag?: boolean }[];
  disable: boolean;
  colorBanner?: string;
  styleBanner?: any;
  styleCoverBanner?: any;
  styleIcon?: any;
}
interface IPersonClient {
  name: string;
  avatar: string;
  title: {
    title: string;
    link: string;
  };
  detail: string;
  role: string;
  disable: boolean;
}
export function HomePage() {
  const listLogo = [
    valen,
    harmony,
    tripple,
    vechain,
    stablyLogo,
    resolve,
    taro,
    realcoin,
    // "https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmeta.bbc99b74.svg&w=3840&q=75",
    // "https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstepn.e6e296f7.svg&w=3840&q=75",
    // "https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstripe.ae411f5c.svg&w=3840&q=75",
  ];
  const listCoin = ["Analytics", "Exchange", "Tokenization", "DeFi", "Oracle"];
  const detailCoinList: IDetailCoin[] = [
    {
      key: "Analytics",
      banner: stableCoinImage,
      icon: stablyImage,
      title:
        "Saola built a DeFi dashboard using open-source blockchain data to provide on-chain stablecoin TVL stats, metrics, and charts.",
      link: {
        title: "Learn more about Stable Camel",
        link: "https://www.stablecamel.com/ethereum",
      },
      support: [
        {
          link: "https://dune.com/docs/reference/images/dune-standard-logo-dark.svg",
        },
        { link: "https://cdn.cdnlogo.com/logos/e/81/ethereum-eth.svg" },
        { link: "https://cryptologos.cc/logos/avalanche-avax-logo.png" },
        {
          link: "https://assets-global.website-files.com/6364e65656ab107e465325d2/637ea09ce69ec8d049fb871e_nt4Cn4mhAnXmPqN4XNw7P3C8w59Mi18UQsJr0Kv-OWU.svg",
        },
      ],
      disable: false,
      colorBanner: "#ede0ff",
    },
    {
      key: "Exchange",
      banner: coverValen,
      icon: cfiIcon,
      title:
        "Saola was engaged in developing crypto exchange functionality for Valens Pay, a FINTRAC-registered MSB fintech platform.",
      link: {
        title: "Learn more about Valens Exchange",
        link: "https://valens-exchange.com/trade/",
      },
      disable: false,
      colorBanner: coverValen,
      styleCoverBanner: {
        background: "black",
      },
      styleIcon: {
        background: "white",
        padding: "10px",
      },
      // styleBanner: {
      //   height: "unset",
      //   width: "unset",
      //   top: "50%",
      //   left: " 25%",
      //   background: "white",
      //   transform: "scale(1.5)",
      // },
      support: [
        { link: qredo },
        { link: ltImage },
        { link: bitcoinn },
        { link: "https://cdn.cdnlogo.com/logos/e/81/ethereum-eth.svg" },
      ],
    },
    {
      key: "Tokenization",
      banner: bannerReal,
      icon: realcoin,
      title:
        "Realcoin is a real estate tokenization platform on Binance Smart Chain, allowing user to earn yield by investing in fractional real estate projects.",
      link: {
        title: "Learn more about Realcoin",
        link: "https://realcoin-wui.vercel.app/vi",
      },
      support: [
        { link: bitCoin },
        { link: zReal },
        { link: rsmReal },
        { link: "CT Group", tag: true },
      ],
      disable: false,
      colorBanner: "#243767",
    },
    {
      key: "DeFi",
      banner: alpacaCover,
      icon: alpaca,
      title:
        "Alpaca brought crop insurance on-chain with automated claim payment through permissioned smart contract researched and built by Saola.",
      link: { title: "Learn more about Crop Insurance dApp", link: "#" },
      disable: false,
      support: [
        {
          link: bitCoin,
        },
        {
          link: sunImage,
        },
        {
          link: sunsunImage,
        },
        {
          link: watter,
        },
      ],
      styleCoverBanner: {
        backgroundColor: "#19263E",
      },
      styleIcon: {
        background: "white",
        width: "auto",
        padding: "6px",
      },
    },
    {
      key: "Oracle",
      banner:
        "https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbladerite.61c266d2.jpg&w=3840&q=75",
      icon: "https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbladerite.d98c9210.png&w=3840&q=75",
      title:
        "Play and own. Bladerite, a free-to-play melee battle royale game, uses Solana to power its in-game item ownership system.",
      link: { title: "Learn more about Gaming on Solana", link: "#" },
      disable: true,
    },
  ];

  const detailPersonClientList: IPersonClient[] = [
    {
      name: "Brian Nguyen",
      avatar: brianImage,
      role: "Co-founder & CTO, Resolve",
      title: {
        title:
          "“Affirm spinout Resolve raises $60M for its B2B 'buy now, pay later' platform.”",
        link: "https://techcrunch.com/2021/05/25/affirm-spinout-resolve-raises-60m-for-its-b2b-buy-now-pay-later-platform/",
      },
      disable: false,
      detail:
        "They were able to quickly support our engineering team and were soon leading infrastructure projects end-to-end. Their team had strong knowledge of modern web development technologies and could easily handle both front-end and back-end implementations.",
    },
    {
      name: "Julian Berridi",
      avatar: julianImage,
      role: "Strategic Partnerships, Ripple",
      disable: true,
      title: {
        title: "“Efficient and Innovative: Our Experience with Silicon.”",
        link: "#",
      },
      detail:
        "Vero minima sequi adipisci architecto dolorum, error animi delectus dicta perferendis! A, exercitationem soluta quam reprehenderit rem animi amet eligendi voluptates consequatur ipsam pariatur necessitatibus laboriosam in illo eos molestias ex explicabo eaque assumenda voluptatibus ducimus consectetur perferendis! Architecto molestias, rerum reprehenderit amet sunt natus fuga blanditiis suscipit.",
    },
    {
      name: "Dominic Niolu",
      avatar: nioluImage,
      role: "Co-founder & CEO, Taro Finance",
      disable: true,
      title: { title: "“Exceptional Service and Quality Results.”", link: "#" },
      detail:
        "In quas adipisci assumenda voluptas eveniet obcaecati est quis sapiente voluptatum iste porro blanditiis debitis ut beatae, fugit quidem fugiat eum molestias? Dolore magni harum officia tempore eos sapiente. Voluptatibus pariatur omnis libero unde quasi optio, tenetur reprehenderit tempore necessitatibus harum mollitia qui. Maxime, quas tempore. Sunt quaerat porro facere blanditiis voluptatibus.",
    },
  ];
  const [personClient, setPersonClient] = useState<IPersonClient>(
    detailPersonClientList[0]
  );
  const [activeBtnCoin, setActiveBtnCoin] = useState<string>(listCoin[0]);
  const [_detailCoin, setDetailCoin] = useState<IDetailCoin>(detailCoinList[0]);

  const solutionRef = useRef<HTMLDivElement>(null);
  const partnerRef = useRef<HTMLHeadingElement>(null);

  const projectRef = useRef<HTMLDivElement>(null);

  const carerRef = useRef<HTMLDivElement>(null);
  const onClick = (eventHeader: EVENT_HEADER) => {
    switch (eventHeader) {
      case EVENT_HEADER.SOLUTION:
        solutionRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case EVENT_HEADER.CAREERS:
        carerRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case EVENT_HEADER.PROJECTS:
        projectRef.current?.scrollIntoView({
          behavior: "smooth",
        });
        break;
      case EVENT_HEADER.PARTNER:
        setTimeout(() => {
          window.scrollBy(
            0,
            (partnerRef.current?.getBoundingClientRect().top as number) - 100
          );
        }, 1);
        // window.scroll(0, -1);
        break;
    }
  };
  return (
    <div className="app-main">
      <div className="opacity-custom"></div>
      <HeaderComponent onClick={(props) => onClick(props)} />
      <div className="main-content ">
        <div className="bg-dark main">
          <div className="container">
            <div className="wrap-main">
              {/* <div className="cover-one bg-dark">
              <img src={bannerImage} />
            </div> */}
              <h1 className="h2 mb-4 text-center">
                Blockchain technology
                <br></br>
                for the real world.
              </h1>
              {/* <div className="cover-two bg-dark">
              <img src={bannerImage} />
            </div> */}
              <div className="row">
                <div className="col-md-7 mx-auto">
                  <p className="my-6 text-center">
                    Saola is a blockchain development firm with expertise in
                    DeFi and Tokenization, providing partners an unfair
                    advantage.
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <a
                  className="btn-custom-build me-2"
                  target="_blank"
                  href="https://t.me/buckphan"
                  rel="noopener noreferrer"
                >
                  Start building
                </a>
                <a
                  className="btn-custom-read"
                  href="https://t.me/buckphan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GET IN TOUCH
                </a>
              </div>
            </div>
            <div className="text-center">
              <h2
                ref={partnerRef}
                className="text-title-two fw-normal mb-6 text-center pb-3"
              >
                TRUSTED BY WORLD-CLASS BLOCKCHAIN FOUNDATIONS, COMPANIES, AND
                STARTUPS
              </h2>
              <div className="list-logo text-center">
                {listLogo.map((logo, index) => (
                  <div key={index} className="logo-item">
                    <img src={logo} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div ref={solutionRef} className="news bg-dark">
          {/* <div className="cover-new">
            <img src={bannerSecond} />
          </div> */}
          <div className="container">
            <div className="row pt-9 mt-9">
              <div className="col-lg-4">
                <div className="mb-8 mb-lg-0">
                  <h2 className="h4">
                    Solutions
                    {/* <span className="d-none d-lg-block">mass adoption.</span> */}
                  </h2>
                  {/* <div className="smaller text-uppercase subdued specal-font dot-text">
                    We build the tools and technology for organizations to
                    accelerate the transition to Web3
                  </div> */}
                </div>
              </div>
              <div className="col-lg-8">
                <div className="row">
                  <div className="col-md-6 mb-2">
                    <div className="p-5 card-custom">
                      <h3 className="title color-blue">
                        Decentralized Finance
                      </h3>
                      <div className="small subdued">
                        Saola has developed a wide range of projects from
                        trading and staking applications, lending protocols,
                        price feed oracles, to web3 payment.
                      </div>
                      {/* <div className="mt-5">
                        <div className="h5 fw-normal beffore-text color-blue">
                          4.174
                        </div>
                        <div className="smaller text-uppercase subdued">
                          Transactions per second
                        </div>
                      </div> */}
                    </div>
                  </div>
                  <div className="col-md-6 mb-2 mt-lg-n5">
                    <div className="p-5 card-custom">
                      <h3 className="title color-yellow">Tokenization</h3>
                      <div className="small subdued">
                        We have advised and deployed products with startups,
                        enterprises, and governments on stablecoins, security
                        token, health data, and real estate tokenization.
                      </div>
                      {/* <div className="mt-5">
                        <div className="h5 fw-normal beffore-text color-blue">
                          2.156
                        </div>
                        <div className="smaller text-uppercase subdued">
                          Validator nodes
                        </div>
                      </div> */}
                    </div>
                  </div>
                  <div className="col-md-6 mb-2">
                    <div className="p-5 card-custom">
                      <h3 className="title color-piple">
                        Blockchain Consulting
                      </h3>
                      <div className="small subdued">
                        With experience building tokenization and DeFi projects,
                        Saola provides technical consultation and go-to-market
                        plan for organizations of all sizes.
                      </div>
                      {/* <div className="mt-5">
                        <div className="h5 fw-normal beffore-text color-blue">
                          2.156
                        </div>
                        <div className="smaller text-uppercase subdued">
                          Total transactions
                        </div>
                      </div> */}
                    </div>
                  </div>
                  <div className="col-md-6 mb-2 mt-lg-n4">
                    <div className="p-5 card-custom">
                      <h3 className="title color-blue">Offshore Development</h3>
                      <div className="small subdued">
                        Save cost, build faster with our battle-tested
                        Vietnam-based development team that has delivered
                        projects for top-tier blockchain foundations and
                        VC-backed startups.
                        {/* <a href="#"> environment</a>. Each Solana transaction
                        uses about the same energy as a few Google searches. */}
                      </div>
                      {/* <div className="mt-5">
                        <div className="h5 fw-normal">0%</div>
                        <div className="smaller text-uppercase subdued">
                          NET CARBON IMPACT
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div ref={projectRef} className="detail-coin bg-dark">
          <div className="flag">
            <div className="container position-relative">
              <div className="bg-wrap"></div>
              <div className="d-flex mb-5 flex-column flex-lg-row justify-content-between align-items-lg-center">
                <h2 className="h4 mb-0">Projects</h2>
                <ul>
                  {detailCoinList.map((coin, index) => (
                    <li key={index} className="mt-2 mt-md-0">
                      <button
                        disabled={coin.disable}
                        className={activeBtnCoin === coin.key ? "active" : ""}
                        onClick={() => {
                          setActiveBtnCoin(coin.key);
                          const detail = detailCoinList.find(
                            (v) => v.key === coin.key
                          );
                          setDetailCoin(detail as IDetailCoin);
                        }}
                      >
                        {coin.key}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              {detailCoinList.map((detail, index) => (
                <div
                  key={index}
                  className={`${
                    activeBtnCoin === detail.key ? "d-block" : "d-none"
                  } `}
                >
                  <div className="d-flex flex-column-reverse flex-md-row overflow-hidden box-wrap">
                    <div className="w-md-50">
                      <div
                        style={{
                          background: `${
                            detail.colorBanner ? detail.colorBanner : "black"
                          }`,
                          backgroundImage: `url${detail.colorBanner}`,
                          ...detail.styleCoverBanner,
                        }}
                        className="wrap-image"
                      >
                        {/* {detail.key === "Exchange" && (
                          <img
                            style={{
                              position: "absolute",
                              width: "100%",
                              height: "100%",
                              transform: "scale(1.5)",
                            }}
                            src={detail.colorBanner}
                          />
                        )} */}
                        <img
                          style={detail.styleBanner}
                          src={detail.banner}
                          alt=""
                          srcSet=""
                        />
                      </div>
                    </div>
                    <div className="w-md-50 p-5 d-flex flex-column justify-content-center">
                      <div className="h4 mb-5">
                        <div className="h4__wrap-image">
                          <img
                            style={{ ...detail.styleIcon }}
                            src={detail.icon}
                            alt=""
                            srcSet=""
                          />
                        </div>
                      </div>
                      <p>{detail.title}</p>
                      <a
                        target={"_blank"}
                        href={detail.link.link}
                        rel="noreferrer"
                      >
                        {detail.link.title}
                      </a>
                    </div>
                  </div>
                  <div style={{ overflow: "auto" }} className="d-flex box-logo">
                    {(detail?.support || []).map((image, index) => (
                      <div key={index} className="wrap-logo">
                        {image.tag ? (
                          <div className="tag">{image.link}</div>
                        ) : (
                          <img
                            style={{ objectFit: "contain" }}
                            src={image.link}
                            alt=""
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="client-feedback bg-dark py-5">
          <div className="container">
            <h2 className="h4 mb-5">Who&apos;s Building With Saola Labs</h2>
            <div className="wrap">
              <div className="row gy-4 gx-md-4 gx-3">
                <div className="col-lg-4 col-sm-5 order-sm-1 order-2">
                  <div className="flex-column">
                    {detailPersonClientList.map((person, index) => (
                      <div key={index} className="mb-3">
                        <div
                          onClick={() => {
                            if (person.disable) return;
                            setPersonClient(person);
                          }}
                          className={`${
                            person.name === personClient.name ? "active" : ""
                          } wrap-person flex-md-row flex-sm-column align-items-md-center align-items-sm-start align-items-center p-md-4 p-3 rounded-3 fw-normal`}
                        >
                          <img
                            className="me-2"
                            src={person.avatar}
                            alt=""
                            srcSet=""
                          />
                          <div className="infor small subdued">
                            <span
                              style={{ color: "white" }}
                              className="d-block mb-0 fs-lg fw-semibold"
                            >
                              {person.name}
                            </span>
                            {person.role}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-sm-7 offset-lg-1 order-sm-2 order-1">
                  <div className="tab-content ps-lg-0 ps-md-4">
                    <a
                      href={personClient.title.link}
                      target="_blank"
                      className="mb-3"
                      rel="noreferrer"
                    >
                      {personClient.title.title}
                    </a>
                    <div className="fs-sm text-nowrap">
                      <i className="bi bi-star-fill rating-color text-warning"></i>
                      <i className="bi bi-star-fill rating-color text-warning"></i>
                      <i className="bi bi-star-fill rating-color text-warning"></i>
                      <i className="bi bi-star-fill rating-color text-warning"></i>
                    </div>
                    <p className="mt-md-4 mt-3 pt-lg-3 pt-md-2 mb-0 fs-lg small subdued">
                      {personClient.detail}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div ref={carerRef} className="near-footer py-5 bg-dark">
          <div className="container text-center py-5">
            <div className="w-md-75 mx-auto ">
              {/* <img
                style={{
                  zIndex: -1,
                  width: "100%",
                  height: "100%",
                  top: 0,
                  right: 0,
                }}
                className="position-absolute"
                src={bannerSecond}
                alt=""
                srcSet=""
              /> */}
              <h2 className="h4 mb-4">
                Join thousands of other builders to
                <br></br>
                accelerate the transition to web3.
              </h2>
              <a
                style={{
                  position: "relative",
                }}
                className="btn-custom-build me-2"
                href="https://t.me/buckphan"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start building
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
