import React from "react";
import axios from "axios";

class GalleryItem extends React.Component {
	state = {
		likes: this.props.image.likes
	};

	addLike = () => {
		axios.put(`/gallery/like/${this.props.image.id}`)
			.then((response) => {
				console.log("Put success!", this.props.image.id);
				this.setState({likes: this.state.likes + 1});
			})
			.catch((error) => {
				console.log(error);
			})
	}

	render() {
		const {image} = this.props;
		return (
			<div className="gallery-item">
				<img src={image.path} alt={image.description} /> <br/>
				<button type="button" onClick={this.addLike}>Love it!</button> <br/>
				<>{this.state.likes} people love this!</>
			</div>
		);
	}
}


export default GalleryItem;
