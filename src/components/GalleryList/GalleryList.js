import React from "react";
import GalleryItem from "../GalleryItem/GalleryItem";
import { Grid } from "@material-ui/core";

class GalleryList extends React.Component {
  render() {
    console.log("GalleryList.render()");
    // return "Loading..." if there are no items to render
    if (!this.props.items) return <>Loading...</>;

    // return list if there are items to render
    return (
      <div className="gallery-list">
        <Grid container spacing={2} justify="space-evenly">
          {this.props.items.map((item) => (
            <Grid item xs={6} sm={4} md={3} lg={2} key={item.id}>
              <GalleryItem
                image={item}
                key={item.id}
                refresh={this.props.refresh}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

export default GalleryList;
