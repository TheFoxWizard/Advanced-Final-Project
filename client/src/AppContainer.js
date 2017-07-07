import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import {loadAlbums} from "./actions";

function mapDispatchToProps(dispatch) {
  return {
    loadAlbums: function () {
      dispatch(loadAlbums());
    }
  };
}

export default connect(null,mapDispatchToProps)(App);
