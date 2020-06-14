import React from "react";
import axios from "axios";
import "./GalleryItem.css";

class GalleryItem extends React.Component {
  state = {
    likes: this.props.image.likes,
    showDescription: false,
  };

  addLike = () => {
    axios
      .put(`/gallery/like/${this.props.image.id}`)
      .then((response) => {
        // current likes is sent back from the server
        this.setState({ likes: response.data.likes });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  deleteImage = () => {
    axios
      .delete(`/gallery/${this.props.image.id}`)
      .then((response) => {
        this.props.refresh();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  toggleDescription = () => {
    this.setState({ showDescription: !this.state.showDescription });
  };

  render() {
    console.log("GalleryItem.render()");
    const { image } = this.props;
    return (
      <div className="gallery-item">
        {this.state.showDescription ? (
          <p onClick={this.toggleDescription}>{image.description}</p>
        ) : (
          <img
            src={image.path}
            alt={image.description}
            height={100}
            width={100}
            onClick={this.toggleDescription}
          />
        )}
        <br />
        <button type="button" onClick={this.addLike}>
          Love it!
        </button>
        <button type="button" onClick={this.deleteImage}>
          X
        </button>
        <br />
        <>{this.state.likes} people love this!</>
      </div>
    );
  }
}

export default GalleryItem;
