import { StaticImageData } from "next/image";
import CirclednaImage from "../../../public/image/circleImage.jpg";
import OrderCirclednaImage from "../../../public/image/orderCircle.png";

export enum Projects {
  CIRCLE_DNA = "CIRCLE_DNA",
  ORDER_CIRCLE_DNA = "ORDER_CIRCLE_DNA",
}

export type ProjectsDataType = {
  name: string;
  link: string;
  image: StaticImageData;
  organization: string;
  object_fit?: any;
  buildBy: string;
};

export const projectsData = {
  [Projects.CIRCLE_DNA]: {
    name: "circledna.com",
    link: "https://circledna.com/en/",
    image: CirclednaImage,
    organization: "Prenetics",
    buildBy: "Next.js , Sass , SEO, Hooks",
  },
  [Projects.ORDER_CIRCLE_DNA]: {
    name: "order.circledna.com",
    link: "https://order.circledna.com/",
    image: OrderCirclednaImage,
    organization: "Prenetics",
    object_fit: "contain",
    buildBy: "Pure React ,Sass, Payment Api's",
  },
};
