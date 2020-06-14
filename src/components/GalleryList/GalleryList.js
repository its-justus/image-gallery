import React from "react";
import GalleryItem from "../GalleryItem/GalleryItem";

class GalleryList extends React.Component {
  render() {
    console.log("GalleryList.render()");
    // return "Loading..." if there are no items to render
    if (!this.props.items) return <>Loading...</>;

    // return list if there are items to render
    return (
      <div className="gallery-list">
        {this.props.items.map((item) => (
          <GalleryItem
            image={item}
            key={item.id}
            refresh={this.props.refresh}
          />
        ))}
      </div>
    );
  }
}

export default GalleryList;
