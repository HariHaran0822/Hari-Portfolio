import React from "react";
import Tick from "../../../public/image/check.png";
import Image from "next/image";
type TickListProps = {
  skill: string;
  experience: string;
};

export const TickList: React.FC<TickListProps> = ({ skill, experience }) => {
  return (
    // <div className="tick-list">
    <li
      className="list-item"
      style={{ listStyle: "none", display: "flex", gap: "0.5rem" }}
    >
      <div className="icon">
        <Image src={Tick} alt="tick" width={15} />
      </div>
      <div
        className="content"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div className="exp-title" style={{ fontWeight: 600 }}>
          {skill}
        </div>
        <div
          className="subtext"
          style={{ fontSize: "0.8rem", color: "gray", fontWeight: "500" }}
        >
          {experience}
        </div>
      </div>
    </li>
    // </div>
  );
};
