import { StaticImageData } from "next/image";
import eduactionIcon from "../../../public/image/mortarboard.png";
import experienceIcon from "../../../public/image/work.png";

export enum AboutMeEnum {
  EXPERIENCE = "EXPERIENCE",
  EDUCATION = "EDUCATION",
}

export type AboutMeData = {
  icon?: StaticImageData;
  title: string;
  subtitle: string[];
};

type TypeOfAboutMe = Record<AboutMeEnum, AboutMeData>;
export const aboutMeData: TypeOfAboutMe = {
  [AboutMeEnum.EXPERIENCE]: {
    icon: experienceIcon,
    title: "Experience",
    subtitle: ["1+ years", "Frontend Developer"],
  },
  [AboutMeEnum.EDUCATION]: {
    icon: eduactionIcon,
    title: "Education",
    subtitle: ["B.E.", "Bachelor of Engineering"],
  },
};
