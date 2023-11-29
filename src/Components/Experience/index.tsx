import React from "react";
import { View } from "../view-wrapper";
import { TickList } from "../TickList";
import "./experience.scss";
import { backEndData, frontEndData } from "@/Utils/Data/frontEndData";
import Image from "next/image";
import FrontEnd from "../../../public/image/website-content.png";
import BackEnd from "../../../public/image/backend.png";

export const ExperienceSection = () => {
  return (
    <View title="Experience" introText="Explore My" id="experience">
      <div className="exp">
        <div className="experience">
          <div className="exp-head">
            <Image src={FrontEnd} alt="fn" width={30} />
            <h3>Frontend Development</h3>
          </div>
          {frontEndData.map((item, index) => (
            <TickList
              skill={item.skill}
              experience={item.experience}
              key={index}
            />
          ))}{" "}
        </div>

        <div className="experience-2">
          <div className="exp-head-2">
            {" "}
            <Image src={BackEnd} alt="fn" width={30} />
            <h3>Backend Development</h3>
          </div>
          {backEndData.map((item, index) => (
            <TickList
              skill={item.skill}
              experience={item.experience}
              key={index}
            />
          ))}{" "}
        </div>
      </div>
    </View>
  );
};
