import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../scss/banner.scss";
import Marquee from "react-fast-marquee";
import Navigation from "./Navigation";
import { BannerImages } from "../assests/data";
import { gsap } from "gsap";
import { TimelineLite, Power4 } from "gsap/gsap-core";
import img1 from "../assests/pippa png/bahan 2.png"
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
              <h2>PIPPA </h2>
              <p>

                the most memeable memecoin in existence. The dogs have had their day, it’s time for PIPPA to take reign.


              </p>
            </div>


            <div className="banner-btn">
              <div className="btn-main">
                <a target="_blank" href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=MXJAnKLWsPioK5wg5ozqU5fejrVKFt7ySQWDDAV83bK&outputSymbol=PIPPA&fixed=in">
                  <div>BUY ON NOW </div>
                </a>
              </div>
              <div className="btn-main">
                <a target="_blank" href="https://birdeye.so/token/MXJAnKLWsPioK5wg5ozqU5fejrVKFt7ySQWDDAV83bK?chain=solana">
                  <div>CHART </div>
                </a>
              </div>

            </div>
            <div className="contract">
              <span ref={contractAddressRef}>
                MXJAnKLWsPioK5wg5ozqU5fejrVKFt7ySQWDDAV83bK
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
