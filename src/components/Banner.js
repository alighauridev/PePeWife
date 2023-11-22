import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../scss/banner.scss";
import Marquee from "react-fast-marquee";
import Navigation from "./Navigation";
import { BannerImages } from "../assests/data";
import { gsap } from "gsap";
import { TimelineLite, Power4 } from "gsap/gsap-core";
import img1 from "../assests/PepeWife.io/Pepewife.io.png"
import icons from "../assests/images/icons.png"
import { toast } from "react-toastify";
const Banner = ({ timeline, ease }) => {
  const contractAddressRef = useRef(null);

  const handleCopy = () => {
    const contractAddress = contractAddressRef.current.textContent.trim();
    navigator.clipboard.writeText(contractAddress);
    toast.success("Contract address copied!");
  };
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <>
      <Navigation timeline={timeline} ease={ease} />
      <section className="banner">
        <div className="container">
          <div className="banner-h">
            <div className="banner-main-h">
              <h2>Pepe Wife </h2>
              <p>
                Pepe may be a superstar now, but guess what? He left his ride-or-die behind, and she's feeling like she's drowning in loneliness. Let's show her some love and lift her up from this slump. Who's with me? Let's pump up the positivity and be the hype she needs right now!

              </p>
            </div>


            <div className="banner-btn">
              <div className="btn-main">
                <a target="_blank" href="https://app.uniswap.org/swap?inputCurrency=0x6643ed3bd5ffe7a3f9d3dd36f71a843abfa9df87&outputCurrency=ETH">
                  <div>BUY ON NOW </div>
                </a>
              </div>
              <div className="btn-main">
                <a target="_blank" href="https://www.dextools.io/app/en/ether/pair-explorer/0xc78460a8dce40a8b82f3cc59460b8f46853d6a93">
                  <div>CHART </div>
                </a>
              </div>

            </div>
            <div className="contract">
              <span ref={contractAddressRef}>
                0x6643ed3bd5ffe7a3f9d3dd36f71a843abfa9df87
              </span>
              <button onClick={handleCopy}>COPY</button>
            </div>
          </div>

          <div className="banner-img">
            <img src={img1} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
