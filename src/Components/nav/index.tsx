"use client";
import React, { Fragment, useState } from "react";
import "./nav.scss";
import Link from "next/link";
import HamburgerIcon from "../../../public/image/hamburger.png";
import CloseIcon from "../../../public/image/close.png";

import Image from "next/image";

export const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleHamBurger = () => {
    console.log("clicked");
    setShowMenu(!showMenu);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }} className="nav">
      <div className="navbar">
        <div className="logo">
          <h2>Hari Haran</h2>
        </div>
        <div className="nav-list">
          <ul>
            <Link href={"#home"}>
              <li>Home</li>
            </Link>
            <Link href={"#contactMe"}>
              <li> Contact </li>
            </Link>
            <Link href={"#aboutMe"}>
              <li>About Me</li>{" "}
            </Link>

            <Link href={"#experience"}>
              <li> Experience</li>{" "}
            </Link>

            <Link href={"#project"}>
              <li> Projects</li>{" "}
            </Link>
          </ul>
          <div className="ham-burger" style={{ width: "1.5625rem" }}>
            <Image
              src={!showMenu ? HamburgerIcon : CloseIcon}
              alt="ham-burger"
              style={{ width: "100%", height: "auto" }}
              onClick={handleHamBurger}
            />
          </div>
        </div>
      </div>
      {showMenu && (
        <div
          className={`data ${showMenu ? "visible" : " "}`}
          onClick={handleHamBurger}
        >
          <ul className={`${showMenu ? "visible" : " "}`}>
            <Link href={"#home"}>
              <li>Home</li>
            </Link>
            <Link href={"#contactMe"}>
              <li> Contact </li>{" "}
            </Link>
            <Link href={"#aboutMe"}>
              <li>About Me</li>{" "}
            </Link>

            <Link href={"#experience"}>
              <li> Experience</li>{" "}
            </Link>

            <Link href={"#project"}>
              <li> Projects</li>{" "}
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};
