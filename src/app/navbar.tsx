"use client";
import React, { useState } from "react";
import Image from "next/image";
import A from "../assets/A.png";
import l from "../assets/l.png";
import o from "../assets/o.png";
import h from "../assets/h.png";
import a from "../assets/a.png";
import menu from "../assets/menu.png";

export default function Navbar() {
  const [showSidemenu, setShowSidemenu] = useState(false);
  {
  }
  return (
    <div className="nav-bar" onClick={() => setShowSidemenu(!showSidemenu)}>
      {showSidemenu ? (
        <div
          className="leftmenu"
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            height: "100vh",
            width: "365px",
            backgroundColor: "white",
          }}
        ></div>
      ) : (
        ""
      )}
      <div className="nav-bar-items centerV">
        <div className="menu-links centerV">
          <div className="logo-black">
            <Image src={A} width={23} height={33} alt="highlight image" />
            <Image src={l} width={17} height={32} alt="highlight image" />
            <Image src={o} width={17} height={21} alt="highlight image" />
            <Image src={h} width={22} height={35} alt="highlight image" />
            <Image src={a} width={23} height={21} alt="highlight image" />
          </div>
          <div className="nav-bar-links IBM-400">
            <div>Home</div>
            <div>Surfing</div>
            <div>Hula</div>
            <div>Vulcano</div>
          </div>
        </div>
        <div className="nav-bar-btn IBM-700 centerHV">Book a trip</div>
      </div>
    </div>
  );
}
