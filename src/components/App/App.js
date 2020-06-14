import React, { Component } from "react";
import axios from 'axios';
import "./App.css";
import GalleryList from "../GalleryList/GalleryList";
import AddImageForm from "../AddImageForm/AddImageForm";

class App extends Component {
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
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />
				<AddImageForm refresh={() => this.getGallery()} />
        <GalleryList items={this.state.items} />
      </div>
    );
  }
}

export default App;
