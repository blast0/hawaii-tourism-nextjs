"use client";
import React, { useState } from "react";
import Image from "next/image";
import arrow from "../assets/arrow_forward.png";

export default function Category(props: any) {
  const [showlist, setShowlist] = useState(false);
  const { text, iconImage, height, width, activities } = props;
  console.log(showlist);
  return (
    <>
      <div
        className="category"
        style={{
          position: "relative",
        }}
        onClick={() => setShowlist(!showlist)}
      >
        <div className="category-text IBM-400">{text}</div>
        <div>
          <Image
            src={iconImage}
            width={width}
            height={height}
            alt="arrow image"
          />
        </div>
        {showlist ? (
          <div className="dropdown">
            {activities.map((activity: any) => {
              return (
                <div className="dropdown-item" key={activity.title}>
                  {activity.title}
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </>
  );
}

Category.defaultProps = {
  iconImage: arrow,
  height: 16,
  width: 16,
  text: "Adventure",
};
