// COMPONENTS
import Category from "./category";
import Highlight from "./highlight";
import Footer from "./footer";
import Guide from "./guide";
import Navbar from "./navbar";
//METHODS
import getHighlights from "./apis/getHighlights";
import getCategories from "./apis/getCategories";
//STYLES
import "@fontsource/ibm-plex-mono";
import "./page.css";

export default async function Home() {
  const highlights = await getHighlights();
  const categories = await getCategories();
  return (
    <>
      <div className="Hero-section centerHV">
        <Navbar />
        <div className="hero-text centerV">Welcome to Hawaii</div>
      </div>

      <div className="page-body">
        <div className="highlights">
          <div>
            <div className="highlights-label IBM-700">Highlights</div>
            <div className="items">
              {highlights.map((item: any, index: number) => {
                return (
                  <Highlight
                    key={index}
                    imageUrl={item?.image}
                    headerText={item?.title}
                    bodyText={item?.description}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="categories-and-guides">
          <div className="categories">
            <div className="categories-label">Categories</div>
            {categories.map((item: any, index: number) => {
              return (
                <Category
                  activities={item?.activities}
                  key={index}
                  text={item?.name}
                />
              );
            })}
          </div>
          <div className="guides">
            <div className="guides-label IBM-700">Travel Guide</div>
            <Guide />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
