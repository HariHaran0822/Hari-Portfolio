import React from "react";
import "./aboutMeCard.scss";
import { AboutMeData } from "@/Utils/Data/aboutMeData";
import Image from "next/image";

type AboutMeCardProps = {
  items: AboutMeData;
};

export const AboutMeCard: React.FC<AboutMeCardProps> = ({
  items: { icon, title, subtitle },
}) => {
  return (
    <div className="about-me-card">
      {icon && (
        <div className="icon">
          <Image src={icon} alt="icons" width={30} />
        </div>
      )}
      <div className="card-title">{title}</div>
      <div className="card-subtitle">
        {subtitle.map((text, index) => (
          <ul key={index}>
            <li>{text}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};
