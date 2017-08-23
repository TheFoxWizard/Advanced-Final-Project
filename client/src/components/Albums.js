import React, { Component } from "react";
import removeAlbum from "../actions";
import editAlbum from "../actions";
import setCurrentRecord from "../actions";
import { Link } from 'react-router-dom';
import EditThingsContainer from "../containers/EditThingsContainer";
import Sticky from 'react-sticky-el';

// map over the arrary and propagate the record divs
// the component just needs one thing from props. This is
// referenced by the corresponding container (AlbumsContainer)

function Albums(props) {
  // setting the total initally to zero
  let total = 0;
  const albumsDivs = props.albums.map((albums, i) => {
    // adds all of the album.price totals together
    total += Number(albums.price);
    return(
      <div className="album-container" key={i}>
      <h4>{albums.artist} </h4>
        <h4>{albums.title} </h4>
        <h4>{albums.year} </h4>
         <h4> ${albums.price} </h4>
      <div className="buttons-container">
      <button><a href={"/AlbumDetailsContainer/" + albums._id}>
        View
      </a></button>&nbsp;
      <button><a href="#" onClick={
        (e)=>{
          e.preventDefault();
          props.removeAlbum(albums._id);
        }}
        >Delete </a>
      </button>&nbsp;
      <button>
        <a href={"/EditThingsContainer/" + albums._id}>Edit </a>
      </button>
    </div>
  </div>
  )
  })
  // .toFixed returns a set decimal to a number
  return (
    <div>
    <Sticky topOffset={0} style={{zIndex: 10}}>
      <div className="banner-wrapper">
        <h1 className="banner">My Vinyl Records</h1>
        <div className="titles-container">
          <h4 className="titles-item">Artist:</h4>
          <h4 className="titles-item">Title:</h4>
          <h4 className="titles-item">Year:</h4>
          <h4 className="titles-item">Value:</h4>
          <h4 className="titles-item">Actions:</h4>
        </div>
      </div>
    </Sticky>
      {albumsDivs}
        <div className="datTotal">
          Estimated Value: ${total.toFixed(2)}
        </div>
      <Link className="addButton" to="/CreateThingsContainer">Add Record</Link>
    </div>
  );
}
export default Albums;
