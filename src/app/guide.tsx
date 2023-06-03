import React from "react";
import Image from "next/image";
import guide from "../assets/guide.png";

export default function Guide(props: any) {
  const { name, desc } = props;
  return (
    <div className="guide">
      <div className="guide-details">
        <div className="guide-name">{name}</div>
        <div className="guide-desc IBM-400">{desc}</div>
        <div className="contact-btn">
          <div className="guide-contact-btn centerHV">Contact</div>
        </div>
      </div>

      <div className="guide-image">
        <Image src={guide} alt="highlight image" />
      </div>
    </div>
  );
}

Guide.defaultProps = {
  name: "Hadwin Malone",
  desc: "Guide since 2012",
};
