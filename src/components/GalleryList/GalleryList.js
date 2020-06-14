import React from "react";
import GalleryItem from "../GalleryItem/GalleryItem";

class GalleryList extends React.Component {

  render() {
		// return "Loading..." if there are no items to render
		if (!this.props.items) return (<>Loading...</>);

		// return list if there are items to render
    return (
      <div className="gallery-list">
				{this.props.items.map((item) => <GalleryItem image={item} key={item.id}/>)}
      </div>
    );
  }
}

export default GalleryList;
