import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setCurrentAlbum} from '../actions';
import {setSearchText} from '../actions';
import {removeAlbum} from '../actions';
import AlbumDetails from "../components/AlbumDetails";


//search for whats typed dynamically
function mapStateToProps(state) {
  return {albums: state.albums
  }
}
//change the album from the album object
function mapDispatchToProps(dispatch) {
  return {
    removeAlbum: function(album) {
    let action = removeAlbum(album);
      dispatch(action);
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AlbumDetails);
