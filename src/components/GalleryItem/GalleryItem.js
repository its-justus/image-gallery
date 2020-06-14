import React from "react";

class GalleryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
			lovesCount: 0
		};
  }

  render() {
		return (
			<div className="gallery-item">
				Item data goes here
			</div>
		);
	}
}

export default GalleryItem;
