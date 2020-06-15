import React from "react";
import axios from "axios";
import "./GalleryItem.css";
import { Paper, IconButton, Grid, Box } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DeleteIcon from "@material-ui/icons/Delete";

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
      <Grid container justify="center">
        <Paper elevation={3}>
          <Box width={140} height={160}>
            <Grid container justify="center">
              <Grid item xs={12}>
                {this.state.showDescription ? (
                  <Box
                    height={100}
                    width={100}
                    onClick={this.toggleDescription}
                  >
                    {image.description}
                  </Box>
                ) : (
                  <img
                    src={image.path}
                    alt={image.description}
                    height={100}
                    width={100}
                    onClick={this.toggleDescription}
                  />
                )}
              </Grid>
              <Grid item xs={7}>
                <IconButton onClick={this.addLike}>
                  <FavoriteIcon />
                  <>{this.state.likes}</>
                </IconButton>
              </Grid>
              <Grid item xs={5}>
                <IconButton onClick={this.deleteImage}>
                  <DeleteIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Grid>
    );
  }
}

export default GalleryItem;
