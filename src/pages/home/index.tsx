import React, { useState } from "react";
import { bannerImage, bannerSecond } from "../../assets";
import { Footer } from "../../components/footer";
import { HeaderComponent } from "../../components/header";
import "./style.scss";
interface IDetailCoin {
  key: string;
  banner: string;
  title: string;
  link: string;
  icon: string;
  support: string[];
}
interface IPersonClient {
  name: string;
  avatar: string;
  title: string;
  detail: string;
  role: string;
}
export function HomePage() {
  const listLogo = [
    "https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbrave.804b1c56.svg&w=3840&q=75",
    "https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcircle.f3cc98eb.svg&w=3840&q=75",
    "https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdiscord.87aa9f77.svg&w=3840&q=75",
    "https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgoogle.e500ae20.svg&w=3840&q=75",
    "https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjump.930480b7.svg&w=3840&q=75",
    "https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flollapalooza.f4c99138.svg&w=3840&q=75",
    "https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmagiceden.ebc6a3cc.svg&w=3840&q=75",
    "https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmeta.bbc99b74.svg&w=3840&q=75",
    "https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstepn.e6e296f7.svg&w=3840&q=75",
    "https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstripe.ae411f5c.svg&w=3840&q=75",
  ];
  const listCoin = ["NFTs", "DeFi", "Payments", "Gaming", "DAOs"];
  const detailCoinList: IDetailCoin[] = [
    {
      key: "NFTs",
      banner:
        "https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fanybodies.2a438591.jpg&w=3840&q=75",
      icon: "https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fanybodies.0e8994eb.svg&w=3840&q=75",
      title:
        "It’s time to bridge the digital and physical. Anybodies helps established brands like Toys’R’Us connect real-life places and products with NFTs.",
      link: "Learn more about NFTs on Solana",
      support: [
        "https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fclaynosaurz.7e3c20f2.png&w=256&q=75",
        "https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdaa.337cafe7.svg&w=256&q=75",
        "https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffff.5ef30764.svg&w=256&q=75",
        "https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fokb.71c47176.png&w=256&q=75",
      ],
    },
    {
      key: "DeFi",
      banner:
        "https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fopenbook.dfa6fbbc.jpg&w=3840&q=75",
      icon: "https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fopenbook.427f608b.svg&w=3840&q=75",
      title:
        "The Solana community came together to build an open-source order book which can power decentralized finance for everyone.",
      link: "Learn more about DeFi on Solana",
      support: [
        "https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsolend.0a0cf7b0.svg&w=256&q=75",
        "https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjupiter.4735a644.svg&w=256&q=75",
        "https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fkamino.387b783e.svg&w=256&q=75",
        "https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Forca.f65c6e42.svg&w=256&q=75",
      ],
    },
    {
      key: "Payments",
      banner:
        "https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fasics.67a8cfcf.jpg&w=3840&q=75",
      icon: "https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fasics.a0e6ca82.svg&w=3840&q=75",
      title:
        "ASICS accepted pre-orders for the Solana-inspired UI collection using a frictionless, permissionless payment system powered by Solana Pay.",
      link: "Learn more about Payments on Solana",
      support: [
        "https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdecaf.9bcaeef9.png&w=256&q=75",
        "https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhelio.4eef08a9.svg&w=256&q=75",
        "https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftiplink.7a4d1c7b.svg&w=256&q=75",
      ],
    },
    {
      key: "Gaming",
      banner:
        "https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbladerite.61c266d2.jpg&w=3840&q=75",
      icon: "https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbladerite.d98c9210.png&w=3840&q=75",
      title:
        "Play and own. Bladerite, a free-to-play melee battle royale game, uses Solana to power its in-game item ownership system.",
      link: "Learn more about Gaming on Solana",
      support: [
        "https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbr1.580afdd0.png&w=256&q=75",
        "https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fminiroyale.136e595e.svg&w=256&q=75",
        "https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstaratlas.9a8b34a7.svg&w=256&q=75",
        "https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Faurory.942c2492.svg&w=256&q=75",
        "https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmatchday.437d068a.svg&w=256&q=75",
        "https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fseedlabs.aebb3ca3.svg&w=256&q=75",
        "https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgenopets.825f99bf.svg&w=256&q=75",
      ],
    },
    {
      key: "DAOs",
      banner:
        "https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmonkedao.970c07cd.jpg&w=3840&q=75",
      icon: "https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmonkedao.2cc1bea0.svg&w=3840&q=75",
      title:
        "A decentralized organization made up of NFT holders, MonkeDAO has already started running a validator node to support the Solana network — and has big plans for the future.",
      link: "Learn more about DAOs on Solana",
      support: [
        "https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgrape.67c128f2.svg&w=256&q=75",
        "https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnation.38d16983.svg&w=256&q=75",
        "https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frealms.9362c02c.svg&w=256&q=75",
      ],
    },
  ];

  const detailPersonClientList: IPersonClient[] = [
    {
      name: "Jack Taylor",
      avatar: "https://silicon.createx.studio/assets/img/avatar/48.jpg",
      role: "Co-founder of Lorem Company",
      title: "“Cool and experienced team to develop your web application.”",
      detail:
        "Dolor, a eget elementum, integer nulla volutpat, nunc, sit. Quam iaculis varius mauris magna sem. Egestas sed sed suscipit dolor faucibus dui imperdiet at eget. Tincidunt imperdiet quis hendrerit aliquam feugiat neque cras sed. Dictum quam integer volutpat tellus, faucibus platea. Pulvinar turpis proin faucibus at mauris. Sagittis gravida vitae porta enim, nulla arcu fermentum massa volutpat pretium.",
    },
    {
      name: "Annette Black",
      avatar: "https://silicon.createx.studio/assets/img/avatar/49.jpg",
      role: "VP of Strategy, Stretto Inc.",
      title: "“Efficient and Innovative: Our Experience with Silicon.”",
      detail:
        "Vero minima sequi adipisci architecto dolorum, error animi delectus dicta perferendis! A, exercitationem soluta quam reprehenderit rem animi amet eligendi voluptates consequatur ipsam pariatur necessitatibus laboriosam in illo eos molestias ex explicabo eaque assumenda voluptatibus ducimus consectetur perferendis! Architecto molestias, rerum reprehenderit amet sunt natus fuga blanditiis suscipit.",
    },
    {
      name: "Mel Gibson",
      avatar: "https://silicon.createx.studio/assets/img/avatar/50.jpg",
      role: "Founder & CEO, Uber",
      title: "“Exceptional Service and Quality Results.”",
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
        <div className="container">
          <div className="wrap-main">
            <div className="cover-one bg-dark">
              <img src={bannerImage} />
            </div>
            <h1 className="h2 mb-4 text-center">
              Powerful for developers.
              <br /> Fast for everyone.
            </h1>
            <div className="cover-two bg-dark">
              <img src={bannerImage} />
            </div>
            <div className="row">
              <div className="col-md-7 mx-auto">
                <p className="my-6 text-center">
                  Bring blockchain to the people. Solana supports experiences
                  for power users, new consumers, and everyone in between.
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
                Read docs
              </a>
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-title-two fw-normal mb-6 text-center">
              POWERING TOOLS AND INTEGRATIONS FROM COMPANIES ALL AROUND THE
              WORLD
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
        <div className="news bg-dark">
          <div className="cover-new">
            <img src={bannerSecond} />
          </div>
          <div className="container">
            <div className="row pt-9 mt-9">
              <div className="col-lg-4">
                <div className="mb-8 mb-lg-0">
                  <h2 className="h4">
                    Made for
                    <span className="d-none d-lg-block">mass adoption.</span>
                  </h2>
                  <div className="smaller text-uppercase subdued specal-font dot-text">
                    Live data
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="row">
                  <div className="col-md-6 mb-2">
                    <div className="p-5 card-custom">
                      <h3 className="title color-blue">Fast</h3>
                      <div className="small subdued">
                        Don’t keep your users waiting. Solana has block times of
                        400 milliseconds — and as hardware gets faster, so will
                        the network.
                      </div>
                      <div className="mt-5">
                        <div className="h5 fw-normal beffore-text color-blue">
                          4.174
                        </div>
                        <div className="smaller text-uppercase subdued">
                          Transactions per second
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-2 mt-lg-n5">
                    <div className="p-5 card-custom">
                      <h3 className="title color-yellow">Decentralized</h3>
                      <div className="small subdued">
                        The Solana network is validated by thousands of nodes
                        that operate independently of each other, ensuring your
                        data remains secure and censorship resistant.
                      </div>
                      <div className="mt-5">
                        <div className="h5 fw-normal beffore-text color-blue">
                          2.156
                        </div>
                        <div className="smaller text-uppercase subdued">
                          Validator nodes
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-2">
                    <div className="p-5 card-custom">
                      <h3 className="title color-piple">Có thể mở rộng</h3>
                      <div className="small subdued">
                        Get big, quick. Solana is made to handle thousands of
                        transactions per second, and fees for both developers
                        and users remain less than $0.01.
                      </div>
                      <div className="mt-5">
                        <div className="h5 fw-normal beffore-text color-blue">
                          2.156
                        </div>
                        <div className="smaller text-uppercase subdued">
                          Total transactions
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-2 mt-lg-n4">
                    <div className="p-5 card-custom">
                      <h3 className="title color-yellow">Energy Efficient</h3>
                      <div className="small subdued">
                        Solana’s proof of stake network and other innovations
                        minimize its impact on the
                        <a href="#"> environment</a>. Each Solana transaction
                        uses about the same energy as a few Google searches.
                      </div>
                      <div className="mt-5">
                        <div className="h5 fw-normal">0%</div>
                        <div className="smaller text-uppercase subdued">
                          NET CARBON IMPACT
                        </div>
                      </div>
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
                <h2 className="h4 mb-0">Build for growth.</h2>
                <ul>
                  {listCoin.map((coin, index) => (
                    <li key={index} className="mt-2 mt-md-0">
                      <button
                        className={activeBtnCoin === coin ? "active" : ""}
                        onClick={() => {
                          setActiveBtnCoin(coin);
                          const detail = detailCoinList.find(
                            (v) => v.key === coin
                          );
                          setDetailCoin(detail as IDetailCoin);
                        }}
                      >
                        {coin}
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
                      <a href="">{detail.link}</a>
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
        <div className="py-5 position-relative">
          <div className="container text-center py-5">
            <div className="w-md-75 mx-auto ">
              <img
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
              />
              <h2 className="h4 mb-4">
                It is time to join the thousands of creators, artists, and
                developers using Solana.
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
        <div className="client-feedback bg-dark">
          <div className="container">
            <h2 className="h4 mb-5">What Our Clients Say About Us</h2>
            <div className="wrap">
              <div className="row gy-4 gx-md-4 gx-3">
                <div className="col-lg-4 col-sm-5 order-sm-1 order-2">
                  <div className="flex-column">
                    {detailPersonClientList.map((person, index) => (
                      <div key={index} className="mb-3">
                        <div
                          onClick={() => {
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
                    <h4 className="mb-3">{personClient.title}</h4>
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
      </div>
      <Footer />
    </div>
  );
}
