import React from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import { Grid } from "@material-ui/core";
import Button from '@material-ui/core/Button';

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
    axios
      .post("/gallery/", {
        path: this.state.path,
        description: this.state.description,
      })
      .then((response) => {
        // reset state
        this.setState({ path: "", description: "", alert: false });
        // refresh the app
        this.props.refresh();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    console.log("AddImageForm.render()");
    return (
      <Grid container spacing={2} justify={"flex-start"}>
        <Grid item xs={3}>
					<h3>Add an image</h3>
				</Grid>
				<Grid item xs={6}>
          <form className="add-image-form" onSubmit={this.addImage}>
            <Grid container spacing={0} alignItems="center">
							<TextField
								type="text"
								value={this.state.path}
								variant="outlined"
								label="Image URL"
								onChange={(event) =>
									this.setState({ path: event.target.value, alert: false })
								}
								placeholder="Image URL"
							/>
							<TextField
								type="text"
								value={this.state.description}
								variant="outlined"
								label="Description"
								onChange={(event) =>
									this.setState({ description: event.target.value })
								}
								placeholder="Description"
							/>
							<Button variant="contained" color="primary" type="submit">Submit</Button>
							{this.state.alert ? <p>Please enter an image path</p> : ""}
						</Grid>
          </form>
        </Grid>
      </Grid>
    );
  }
}

export default AddImageForm;
