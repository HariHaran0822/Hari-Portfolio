import React from "react";
import { View } from "../view-wrapper";
import "./contactMe.scss";
import Image from "next/image";
import EmailIcon from "../../../public/image/gmail.png";
import LinkedInIcon from "../../../public/image/linkedin.png";
import Link from "next/link";
import Reveal from "@/Common/Reveal";

export const ContactMe = () => {
  return (
    <Reveal>
      <View introText="Get In Touch" title="Contact Me">
        <div className="contact" id="contactMe">
          <div className="contact-wrapper">
            {" "}
            <div className="combos">
              <Image src={EmailIcon} alt="email" width={20} />
              <a href={`mailto:hariharanengineer0120@gmail.com`}>
                <p>hariharanengineer0120@gmail.com</p>
              </a>
            </div>
            <Link href={"https://www.linkedin.com/in/hari-haran-44a8bb18b/"}>
              <div className="combos">
                {" "}
                <Image src={LinkedInIcon} alt="email " width={20} />
                <p>Hari Haran</p>
              </div>
            </Link>
          </div>
        </div>
      </View>{" "}
    </Reveal>
  );
};
