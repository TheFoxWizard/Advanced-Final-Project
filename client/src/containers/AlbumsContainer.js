import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setCurrentAlbum} from '../actions';
import {setSearchText} from '../actions';
import {removeAlbum} from '../actions';
import Albums from "../components/Albums";

// this is a function that returns an object
// nothing is being put into state
// albums is the name used because it references the albums
// component off of props in that function (what's being
// mapped over)
function mapStateToProps(state) {
  return {albums: state.albums
  }
}

function mapDispatchToProps(dispatch) {
  return {
    removeAlbum: function (id) {
      dispatch(removeAlbum(id))
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Albums);
