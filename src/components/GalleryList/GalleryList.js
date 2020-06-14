import React from "react";
import GalleryItem from "../GalleryItem/GalleryItem";

class GalleryList extends React.Component {
  state = {};

  render() {
    return (
      <div className="gallery-list">
        <GalleryItem />
      </div>
    );
  }
}

export default GalleryList;
