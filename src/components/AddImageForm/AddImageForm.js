import React from "react";
import axios from "axios";

class AddImageForm extends React.Component {
  state = {
    path: "",
    description: "",
    alert: false,
  };

  addImage = (event) => {
    // prevent submit from refreshing the page
    event.preventDefault();

    // check that we have a path, exit function and alert if we do not
    if (this.state.path === "") {
      this.setState({ alert: true });
      return;
		}
		
		// submit axios request
		axios.post('/gallery/', {
			path: this.state.path,
			description: this.state.description
		})
			.then((response) => {
				// reset state
				this.setState({path: '', description: '', alert: false});
			})
			.catch((error) => {
				console.log(error);
			});
  };

  render() {
    return (
      <form className="add-image-form" onSubmit={this.addImage}>
        <input
          type="text"
					value={this.state.path}
					onChange={(event) =>
            this.setState({ path: event.target.value, alert: false })
					}
          placeholder="Image URL"
        />
        <input
					type="text"
					value={this.state.description}
          onChange={(event) =>
            this.setState({ description: event.target.value})
          }
          placeholder="Description"
        />
        <button type="submit">Submit</button>
        {this.state.alert ? <p>Please enter an image path</p> : ""}
      </form>
    );
  }
}

export default AddImageForm;
