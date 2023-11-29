import React from "react";
import "./projectCard.scss";
import Image from "next/image";
import { ProjectsDataType } from "@/Utils/Data/projectData";
import Link from "next/link";

type ProjectCardProps = {
  items: ProjectsDataType;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  items: { image, link, name, organization, object_fit, buildBy },
}) => {
  return (
    <div className="pro-card">
      <div className="img-sec">
        <Image
          src={image}
          alt="cardImage"
          style={{ objectFit: object_fit ?? "" }}
        />
      </div>
      <div className="card-content">
        <div
          style={{
            color: "black",
            fontWeight: 600,
          }}
        >
          <h3>{name}</h3>
        </div>
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            color: "gray",
            fontWeight: 600,
          }}
        >
          Organisation: <p style={{ color: "black" }}>{organization}</p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            color: "gray",
            fontWeight: 600,
          }}
        >
          Build using: <p style={{ color: "black" }}>{buildBy}</p>{" "}
        </div>

        <Link href={link}>
          {" "}
          <div className="btn">Check Live</div>
        </Link>
      </div>
    </div>
  );
};
