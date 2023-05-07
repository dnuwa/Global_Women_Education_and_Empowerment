import React, { useEffect, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

import { Gallery } from "react-grid-gallery";
import axios from "axios";

const GalleryComponent = ({ images, handleLoadMore }) => {
  return (
    <>
      <div className="h-46 bg-[#e4e2d8] relative">
        <div
          className="absolute inset-0 bg-opacity-50 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dtuesm5ex/image/upload/v1683390710/GWEE/IMG-20230501-WA0031_irtbv9.jpg')",
          }}
        ></div>
        <div className="mb-8 py-36 relative z-10 bg-black bg-opacity-30">
          <div className="md:px-24 lg:px-36">
            <h1 className="font-bold tracking-tight text-white lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight dark:text-white">
              The photo gallery
            </h1>
            <p className="py-5 text-lg text-white">
              Discover the inspiring stories of women from around the world who
              are breaking barriers and achieving great things through education
              and empowerment. Our photo gallery captures the journeys of these
              incredible women, their struggles, and their successes. Join us in
              our mission to empower women and promote gender equality
              worldwide.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2 px-[20px] md:px-24 lg:px-36">
        <PhotoProvider
          toolbarRender={({ rotate, onRotate, onScale, scale }) => {
            return (
              <div className="flex">
                {/* <button onClick={() => onRotate(rotate + 90)}>Rotate</button> */}
                <p className="mr-1">Zoom: </p>
                <button onClick={() => onScale(scale + 1)} className="mr-1">
                  {" "}
                  In |
                </button>
                <button onClick={() => onScale(scale - 1)}>Out</button>
              </div>
            );
          }}
        >
          {images.map(({ id, title, image, width, height }) => {
            return (
              <PhotoView src={image} key={id}>
                <img
                  src={image}
                  alt=""
                  className="cursor-pointer w-full h-full object-cover"
                />
              </PhotoView>
            );
          })}
        </PhotoProvider>
        <button onClick={handleLoadMore}>Load More</button>
      </div>
    </>
  );
};

export default GalleryComponent;
