"use client";
import React, { useState } from "react";
import Image from "next/image";
import A from "../assets/A.png";
import l from "../assets/l.png";
import o from "../assets/o.png";
import h from "../assets/h.png";
import a from "../assets/a.png";
import menu from "../assets/menu.png";
import close from "../assets/close.png";
import Link from "next/link";

export default function Navbar() {
  const [showSidemenu, setShowSidemenu] = useState(false);
  {
  }
  return (
    <div className="nav-bar">
      {showSidemenu ? (
        <div className="leftmenu IBM-400">
          <Link href="/">
            <div className="leftmenu-item">Home</div>
          </Link>
          <div className="leftmenu-item">Surfing</div>
          <div className="leftmenu-item">Hula</div>
          <div className="leftmenu-item">Vulcano</div>
          <div className="menu-btn IBM-700">Book a trip</div>
        </div>
      ) : (
        ""
      )}
      <div className="nav-bar-items centerV">
        <div className="menu-links centerV">
          <Link href="/">
            <div className="logo-black">
              <Image src={A} width={23} height={33} alt="highlight image" />
              <Image src={l} width={17} height={32} alt="highlight image" />
              <Image src={o} width={17} height={21} alt="highlight image" />
              <Image src={h} width={22} height={35} alt="highlight image" />
              <Image src={a} width={23} height={21} alt="highlight image" />
            </div>
          </Link>
          <div className="nav-bar-links IBM-400">
            <Link href="/">
              <div>Home</div>
            </Link>
            <div>Surfing</div>
            <div>Hula</div>
            <div>Vulcano</div>
          </div>
        </div>
        <div className="nav-bar-btn IBM-700 centerHV">Book a trip</div>
      </div>
      <div
        className="sidemenu-toggle-icon hidden"
        onClick={() => setShowSidemenu(!showSidemenu)}
      >
        {!showSidemenu ? (
          <Image src={menu} width={30} height={20} alt="highlight image" />
        ) : (
          <Image src={close} width={24} height={24} alt="highlight image" />
        )}
      </div>
    </div>
  );
}
