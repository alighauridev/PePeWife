import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../scss/aboutnft.scss";
import { Parallax, Background } from "react-parallax";
// import img from "./layer2.png";
import { FaDiscord } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import Marquee from "react-easy-marquee";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaRedditAlien } from "react-icons/fa";
import { BiChevronRight } from "react-icons/bi";
import { gsap } from "gsap";
import { TimelineLite, Power4 } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/all";
import img from "../assests/PepeWife.io/PEPE WIFE 02.webp"
gsap.registerPlugin(ScrollTrigger);
const AboutNft = () => {
  const btn = useRef(null);
  const p = useRef(null);
  const tll = new gsap.timeline();
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
    });
  }, []);

  return (
    <>
      {/* <Marquee duration={10000} background="#7da936" height="100px">
        <h1 className="marque__heading">Release This Week Stay Tunned!</h1>
        <h1 className="marque__heading">Release This Week Stay Tunned!</h1>


      </Marquee> */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content one">
            <div className="about-img">
              <img
                src={img}
                alt=""
              />
            </div>
            <div className="about-h">

              <h2>WHO IS PIPPA? </h2>

              <p> PIPPA, the reigning queen of meme coins, brings both beauty and brains to the crypto game. She's here to flip the script on those dog-themed tokens and show the world what true meme royalty looks like</p>



              <div className="join-btn">
                <a href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=MXJAnKLWsPioK5wg5ozqU5fejrVKFt7ySQWDDAV83bK&outputSymbol=PIPPA&fixed=in" target="_blank">
                  <div className="btn">
                    <div className="text">Buy Now</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="about-content two">

            <div className="about-h">

              <h2>Who is Pepe Wife? </h2>

              <p> PIPPA, the reigning queen of meme coins, brings both beauty and brains to the crypto game. She's here to flip the script on those dog-themed tokens and show the world what true meme royalty looks like</p>





              <div className="join-btn">
                <a href="https://T.me/Pippasol" target="_blank">
                  <div className="btn">
                    <div className="text">Join Now</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="about-img">
              <img
                src={img}
                alt=""
              />
            </div>
          </div>

        </div>
      </section>
      <div style={{ position: "fixed" }} className="sidebtn">
        <div className="grid">
          <a href="https://discord.gg/royalsocietynft" target="_blank">
            <FaTelegramPlane />
          </a>
          <a href="https://discord.gg/royalsocietynft" target="_blank">
            <FaRedditAlien />
          </a>
          <a href="https://discord.gg/royalsocietynft" target="_blank">
            <FaDiscord />
          </a>
          <a href="https://discord.gg/royalsocietynft" target="_blank">
            <AiOutlineTwitter />
          </a>
        </div>
      </div>
    </>
  );
};

export default AboutNft;
