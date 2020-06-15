import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import GalleryList from "../GalleryList/GalleryList";
import AddImageForm from "../AddImageForm/AddImageForm";

import Grid from "@material-ui/core/Grid";

/*
Some general notes: I passed a "refresh" function to components that handle their own data, but needed 
a way to let the app know that it should refresh it's data, since that is the only way to retrieve the 
new data from the server. is this ideal? probably not. it works well enough for a simple app like this, but a more 
complicated architecture would result in obscenely complicated signalling and passing
of properties. I'm hoping Redux/Recoil provides the answer to this issue, and as such 
I'm going to leave this app the way it is.  
*/

class App extends Component {
  state = {};

  componentDidMount() {
    this.getGallery();
  }

  getGallery() {
    axios
      .get("/gallery/")
      .then((response) => {
        this.setState({ items: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    console.log("App.render()");
    return (
      <div className="App">
        <Grid container spacing={2} justify="center">
          <Grid item xs={12}>
            <header className="App-header">
              <h1 className="App-title">Gallery of my life</h1>
            </header>
          </Grid>
          <Grid item xs={10}>
            <AddImageForm refresh={() => this.getGallery()} />
          </Grid>
          <Grid item xs={10}>
            <GalleryList
              items={this.state.items}
              refresh={() => this.getGallery()}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
