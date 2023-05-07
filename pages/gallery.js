import React, { useState } from "react";
import GalleryComponent from "../components/GalleryComponent";
import { search, mapImageResources } from "../lib/cloudinary";

export default function gallery({
  images: defaultImages,
  nextCursor: defaultNextCursor,
}) {
  const [images, setImages] = useState(defaultImages);
  const [nextCursor, setnNextCursor] = useState(defaultNextCursor);

  async function handleLoadMore(e) {
    e.preventDefault();

    const results = await fetch("/api/search", {
      method: "POST",
      body: JSON.stringify({
        nextCursor,
        expression: 'folder="GWEE"'
      }),
    }).then((r) => r.json());

    const { resources, next_cursor: updatedNextCursor } = results;

    const images = mapImageResources(resources);

    setImages((prev) => {
      return [...prev, ...images];
    });

    setnNextCursor(updatedNextCursor);
  }

  return <GalleryComponent images={images} handleLoadMore={handleLoadMore} />;
}

export async function getStaticProps() {
  const results = await search({
    expression: 'folder="GWEE"'
  });

  const { resources, next_cursor: nextCursor } = results;

  const images = mapImageResources(resources);

  return {
    props: {
      images,
      nextCursor: nextCursor || false,
    },
  };
}
