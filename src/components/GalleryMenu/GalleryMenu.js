import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
} from "@material-ui/core";


class GalleryMenu extends React.Component {
  render() {
		console.log('GalleryMenu.render()');
    return (
      <AppBar position="static">
        <Toolbar>
          <Grid container spacing={3} alignItems="center" justify="center">
            <Grid item>
              <Typography variant="h4" color="inherit">
							<span onClick={() => this.props.history.push('/')} style={{cursor: 'pointer'}}>Gallery of My Life</span>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6" color="inherit">
							<span onClick={() => this.props.history.push('/')} style={{cursor: 'pointer'}}>Gallery</span>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6" color="inherit">
								<span onClick={() => this.props.history.push('/about')} style={{cursor: 'pointer'}}>About</span>
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export default GalleryMenu;
