import { HeroBanner } from "@/Components/HeroBanner";
import "./home.scss";
import { AboutMe } from "@/Components/AboutMe";
import { ExperienceSection } from "@/Components/Experience";
import { ContactMe } from "@/Components/ContactMe";
import { Projects } from "@/Components/Projects";
import { NavBar } from "@/Components/nav";
import React from "react";
import Head from "next/head";
import { Footer } from "@/Components/Footer";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Caveat:wght@400;600&family=Ephesis&family=Shadows+Into+Light&display=swap"
          rel="stylesheet"
        />
      </Head>
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
