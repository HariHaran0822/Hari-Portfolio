import React from "react";
import { View } from "../view-wrapper";
import Image from "next/image";
import AboutMeImage from "../../../public/image/aboutMe.jpg";
import { aboutMeData } from "@/Utils/Data/aboutMeData";

import "./aboutMe.scss";
import { AboutMeCard } from "./AboutMeCard";

export const AboutMe = () => {
  return (
    <View title="About Me" introText="Get To Know More" id="aboutMe">
      <div className="about-me">
        <div className="about-image">
          <div id="about-img">
            <Image src={AboutMeImage} alt="about-me-image" />
          </div>
        </div>
        <div className="about-me-content">
          <div className="container">
            <div className="con-1">
              {Object.values(aboutMeData).map((items, index) => (
                <AboutMeCard items={items} key={index} />
              ))}
            </div>
            <p id="para">
              Passionate Front-End React Developer with a year of hands-on
              experience in building responsive and user-friendly web
              applications. Proficient in React, JavaScript, Next.js,
              PostgreSQL, HTML, and CSS, I bring a strong foundation in
              front-end development and a keen eye for UI/UX design. Committed
              to delivering high-quality code, optimizing performance, and
              collaborating effectively in agile development teams. Eager to
              continue learning and contribute to creating engaging web
              experiences
            </p>
          </div>
        </div>
      </div>
    </View>
  );
};
