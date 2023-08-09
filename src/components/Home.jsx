import React, { useState } from "react";
import { Carousel } from "./Carousel";

const images = [
  "/assets/d-6.jpg",
  "/assets/d-1.jpg",
  "/assets/d-2.jpg",
  "/assets/d-3.jpg",
  "/assets/d-4.jpg",
  "/assets/d-5.jpg",
  "/assets/pc-1.jpg",
  "/assets/pc-2.jpg",
  "/assets/pc-3.jpg",
  "/assets/pc-4.jpg",
  "/assets/pc-5.jpg",
  "/assets/sb-1.jpg",
  "/assets/sb-2.jpg",
  "/assets/sb-3.jpg",
  "/assets/sb-4.jpg",
  "/assets/sb-5.jpg",
  "/assets/sb-6.jpg",
  "/assets/sb-7.jpg",
  "/assets/sb-8.jpg",
  "/assets/sb-9.jpg",
  "/assets/sb-10.jpg",
  "/assets/sb-11.jpg",
  "/assets/sb-12.jpg",
  "/assets/up-1.jpg",
  "/assets/up-2.jpg",
  "/assets/up-3.jpg",
  "/assets/up-4.jpg",
  "/assets/up-5.jpg",
  "/assets/up-6.jpg",
  "/assets/up-7.jpg",
];

function Home() {
  const [category, setCategory] = useState("");

  const imagesToRender = images.filter((image) => image.includes(category));
  return (
    <>
      <div className="home-container">
        <div className={!category ? "nav-tiles" : "hide-tiles"}>
          <button
            onClick={() => {
              setCategory("d");
            }}
            className="cat-nav"
          >
            Drapery
          </button>
          <button
            onClick={() => {
              setCategory("up");
            }}
            className="cat-nav"
          >
            Upholstery & Slip Covers
          </button>
          <button
            onClick={() => {
              setCategory("sb");
            }}
            className="cat-nav"
          >
            Shades and Blinds
          </button>
          <button
            onClick={() => {
              setCategory("pc");
            }}
            className="cat-nav"
          >
            Pillows & Cushions
          </button>
        </div>
        <div className={category ? "gallery" : "gallery-hidden"}>
          <Carousel
            category={category}
            setCategory={setCategory}
            data={imagesToRender}
          />
          {/* {imagesToRender.map((item) => {
            return (
              <article className="tile">
                <img key={item} src={item} className="pic"></img>
              </article>
            );
          })} */}
        </div>
      </div>
    </>
  );
}

export default Home;
