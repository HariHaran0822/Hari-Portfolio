import { HeroBanner } from "@/Components/HeroBanner";
import "./home.scss";
import { AboutMe } from "@/Components/AboutMe";
import { ExperienceSection } from "@/Components/Experience";
import { ContactMe } from "@/Components/ContactMe";
import { Projects } from "@/Components/Projects";
import { NavBar } from "@/Components/nav";
import React from "react";
import { Footer } from "@/Components/Footer";

export default function Home() {
  return (
    <React.Fragment>
      <main style={{ backgroundColor: "white", color: "black" }}>
        <NavBar />
        <HeroBanner />
        <AboutMe />
        <ExperienceSection />
        <Projects />
        <ContactMe />
        <Footer />
      </main>
    </React.Fragment>
  );
}
