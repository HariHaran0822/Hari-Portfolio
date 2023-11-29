import React from "react";
import { View } from "../view-wrapper";
import "./project.scss";
import { ProjectCard } from "./ProjectCard";
import { projectsData } from "@/Utils/Data/projectData";

export const Projects = () => {
  return (
    <View introText="Browse My Recent" title="Projects" id="project">
      <div className="project">
        {Object.values(projectsData).map((items, index) => (
          <ProjectCard items={items} key={index} />
        ))}
      </div>
    </View>
  );
};
