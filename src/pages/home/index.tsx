import React, { useState } from "react";
import {
  bannerImage,
  bannerSecond,
  brianImage,
  harmony,
  julianImage,
  nioluImage,
  realcoin,
  resolve,
  stableCoinImage,
  stablyImage,
  stablyLogo,
  taro,
  tripple,
  valen,
  vechain,
} from "../../assets";
import { Footer } from "../../components/footer";
import { HeaderComponent } from "../../components/header";
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
  support: string[];
  disable: boolean;
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
  const listCoin = ["Analytics", "DeFi", "Tokenization", "Oracle", "DAO"];
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
        "https://dune.com/docs/reference/images/dune-standard-logo-dark.svg",
        "https://cdn.cdnlogo.com/logos/e/81/ethereum-eth.svg",
        "https://cryptologos.cc/logos/avalanche-avax-logo.png",
        "https://assets-global.website-files.com/6364e65656ab107e465325d2/637ea09ce69ec8d049fb871e_nt4Cn4mhAnXmPqN4XNw7P3C8w59Mi18UQsJr0Kv-OWU.svg",
      ],
      disable: false,
    },
    {
      key: "DeFi",
      banner:
        "https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fopenbook.dfa6fbbc.jpg&w=3840&q=75",
      icon: "https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fopenbook.427f608b.svg&w=3840&q=75",
      title:
        "The Solana community came together to build an open-source order book which can power decentralized finance for everyone.",
      link: { title: "Learn more about DeFi on Solana", link: "#" },
      support: [
        "https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsolend.0a0cf7b0.svg&w=256&q=75",
        "https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjupiter.4735a644.svg&w=256&q=75",
        "https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fkamino.387b783e.svg&w=256&q=75",
        "https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Forca.f65c6e42.svg&w=256&q=75",
      ],
      disable: true,
    },
    {
      key: "Tokenization",
      banner:
        "https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fasics.67a8cfcf.jpg&w=3840&q=75",
      icon: "https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fasics.a0e6ca82.svg&w=3840&q=75",
      title:
        "ASICS accepted pre-orders for the Solana-inspired UI collection using a frictionless, permissionless payment system powered by Solana Pay.",
      link: { title: "Learn more about Payments on Solana", link: "#" },
      support: [
        "https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdecaf.9bcaeef9.png&w=256&q=75",
        "https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhelio.4eef08a9.svg&w=256&q=75",
        "https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftiplink.7a4d1c7b.svg&w=256&q=75",
      ],
      disable: true,
    },
    {
      key: "Oracle",
      banner:
        "https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbladerite.61c266d2.jpg&w=3840&q=75",
      icon: "https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbladerite.d98c9210.png&w=3840&q=75",
      title:
        "Play and own. Bladerite, a free-to-play melee battle royale game, uses Solana to power its in-game item ownership system.",
      link: { title: "Learn more about Gaming on Solana", link: "#" },
      support: [
        "https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbr1.580afdd0.png&w=256&q=75",
        "https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fminiroyale.136e595e.svg&w=256&q=75",
        "https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstaratlas.9a8b34a7.svg&w=256&q=75",
        "https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Faurory.942c2492.svg&w=256&q=75",
        "https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmatchday.437d068a.svg&w=256&q=75",
        "https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fseedlabs.aebb3ca3.svg&w=256&q=75",
        "https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgenopets.825f99bf.svg&w=256&q=75",
      ],
      disable: true,
    },
    {
      key: "DAO",
      banner:
        "https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmonkedao.970c07cd.jpg&w=3840&q=75",
      icon: "https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmonkedao.2cc1bea0.svg&w=3840&q=75",
      title:
        "A decentralized organization made up of NFT holders, MonkeDAO has already started running a validator node to support the Solana network — and has big plans for the future.",
      link: { title: "Learn more about DAOs on Solana", link: "#" },
      support: [
        "https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgrape.67c128f2.svg&w=256&q=75",
        "https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnation.38d16983.svg&w=256&q=75",
        "https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frealms.9362c02c.svg&w=256&q=75",
      ],
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
  return (
    <div className="app-main">
      <HeaderComponent />
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
                    Saola is a blockchain labs with expertise in DeFi,
                    Tokenization, Web3 Payment gives organizations an unfair
                    advantage.
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <a
                  className="btn-custom-build me-2"
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start building
                </a>
                <a
                  className="btn-custom-read"
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Our partner
                </a>
              </div>
            </div>
            <div className="text-center">
              <h2 className="text-title-two fw-normal mb-6 text-center">
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

        <div className="news bg-dark">
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
                        Saola has developed a wide range of blockchain projects
                        from trading and staking applications, lending
                        protocols, price feed oracles, to web3 payment.
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
        <div className="detail-coin bg-dark">
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
                      <div className="wrap-image">
                        <img src={detail.banner} alt="" srcSet="" />
                      </div>
                    </div>
                    <div className="w-md-50 p-5 d-flex flex-column justify-content-center">
                      <div className="h4 mb-5">
                        <div className="h4__wrap-image">
                          <img src={detail.icon} alt="" srcSet="" />
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
                    {detail.support.map((image, index) => (
                      <div key={index} className="wrap-logo">
                        <img
                          style={{ objectFit: "contain" }}
                          src={image}
                          alt=""
                        />
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
        <div className="near-footer py-5 position-relative bg-dark">
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
                className="btn-custom-build me-2"
                href="http://"
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
