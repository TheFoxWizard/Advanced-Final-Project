import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Sticky from 'react-sticky-el';
import "./App.css";
import AlbumsContainer from "./containers/AlbumsContainer";
import CreateThingsContainer from "./containers/CreateThingsContainer";
import AlbumDetailsContainer from "./containers/AlbumDetailsContainer"
import EditThingsContainer from "./containers/EditThingsContainer";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import CreateThings from "./components/CreateThings";
import Main from "./components/Main";
import AlbumDetails from "./components/AlbumDetails";
import Albums from "./components/Albums";


class App extends Component {
  constructor() {
    super();
    this.state = {albums: []};
  }
  componentDidMount() {
      this.props.loadAlbums();
  }
  render() {
    return (
      <Router>
      <div>
        <Switch>
          <Route path="/AlbumDetailsContainer/:id" component={AlbumDetailsContainer} />
          <Route path="/CreateThingsContainer" component={CreateThingsContainer} />
          <Route path="/EditThingsContainer/:id" component={EditThingsContainer} />
          {/* this needs to be last so the others can load*/}
          <Route path="/" component={AlbumsContainer} />
        </Switch>
        <div className="stopgap">

        </div>
      </div>
    </Router>
    );
  }
}
export default (App);
