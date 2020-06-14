import React from "react";
import GalleryItem from "../GalleryItem/GalleryItem";
import axios from 'axios';

class GalleryList extends React.Component {
	state = {};

	componentDidMount() {
		this.getGallery();
	}

	getGallery() {
		console.log('Start getGallery');
		axios.get('/gallery/')
			.then((response) => {
				console.log("Get success", response.data);
				this.setState({items: response.data});
			})
			.catch((error) => {
				console.log(error);
			})
	}

  render() {
		// return "Loading..." if there are no items to render
		if (!this.state.items) return (<>Loading...</>);

		// return list if there are items to render
    return (
      <div className="gallery-list">
				{this.state.items.map((item) => <GalleryItem image={item} key={item.id}/>)}
      </div>
    );
  }
}

export default GalleryList;
