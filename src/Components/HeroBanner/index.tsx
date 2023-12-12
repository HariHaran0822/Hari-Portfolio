import React from "react";
import { View } from "../view-wrapper";
import "./heroBanner.scss";
import BannerImage from "../../../public/image/bannerImage.webp";
import Image from "next/image";
import GitHub from "../../../public/image/github.png";
import LinkedIn from "../../../public/image/linkedin.png";
import Link from "next/link";
import Reveal from "@/Common/Reveal";

export const HeroBanner = () => {
  return (
    <Reveal>
      <View id="home">
        <div className="hero-banner">
          <div className="hero-banner-image">
            <div id="hero-img">
              <Image src={BannerImage} alt="banner-image" />
            </div>
          </div>
          <div className="hero-banner-text">
            <p>Hello Im</p>
            <h1>Hari Haran</h1>
            <h3 style={{ color: "#gray" }}>Frontend Developer</h3>
            <div className="hero-banner-buttons">
              <div className="cv">
                <a
                  href={"/HARIHARAN-RESUME.pdf"}
                  download="Hariharan-Resume.pdf"
                >
                  Download CV
                </a>
              </div>
              <Link href="#contactMe">
                <div className="contact-info"> Contact Info</div>
              </Link>
            </div>
            <div className="profile-links">
              <div>
                <Link href={"https://github.com/HariHaran0822"}>
                  <Image src={GitHub} alt="github" width={50} priority={true} />
                </Link>
              </div>
              <div>
                {" "}
                <Link
                  href={"https://www.linkedin.com/in/hari-haran-44a8bb18b/"}
                >
                  <Image
                    src={LinkedIn}
                    alt="linkedin"
                    width={50}
                    priority={true}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </View>{" "}
    </Reveal>
  );
};
