import React from "react";

class GalleryItem extends React.Component {
	state = {
		likes: this.props.image.likes
	};

	render() {
		const {image} = this.props;
		console.log(this.state);
		return (
			<div className="gallery-item">
				<img src={image.path} alt={image.description} />
			</div>
		);
	}
}


export default GalleryItem;
