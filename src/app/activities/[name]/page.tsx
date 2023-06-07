import getActivity from "@/app/apis/getActivity";
import Category from "@/app/category";
import Footer from "@/app/footer";
import Guide from "@/app/guide";
import Navbar from "@/app/navbar";
import React from "react";
import "./page.css";

export default async function Page({ params }: { params: { name: string } }) {
  const activity = await getActivity(params.name);
  return (
    <div className={activity.name + "-page"}>
      <div
        className="Hero-section centerHV"
        style={{
          backgroundImage: `url(${activity.image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "1080px",
        }}
      >
        <Navbar />
        <div className="hero-text centerV">{activity.name}</div>
      </div>
      <div className="page-body">
        <div className="categories-and-guides">
          <div className="categories">
            <div className="categories-label">Categories</div>
            {activity.activities.map((item: any, index: number) => {
              return <Category key={index} text={item?.name} />;
            })}
          </div>

          <div className="guides">
            <div className="guides-label IBM-700">Travel Guide</div>
            <Guide />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
