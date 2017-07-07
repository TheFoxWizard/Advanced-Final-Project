import React, { Component } from "react";
import removeAlbum from "../actions";
import editAlbum from "../actions";
import setCurrentRecord from "../actions";
import { Link } from 'react-router-dom';
import EditThingsContainer from "../containers/EditThingsContainer";

// map over the arrary and propagate the record divs
// the component just needs one thing from props. This is
// referenced by the corresponding container (AlbumsContainer)

function Albums(props) {
  let total = 0;
  const albumsDivs = props.albums.map((albums, i) => {
    total += Number(albums.price);
    return( <div key={i}>
      <h4>artist: {albums.artist} </h4>
        <h4>title: {albums.title} </h4>
        <h4>year: {albums.year} </h4>
         <h4>value: ${albums.price} </h4>
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
  )
  })
  // .toFixed returns a set decimal to the number
  return (
    <div>
      {albumsDivs}
        <div className="datTotal">
          Total $:{total.toFixed(2)}
        </div>
      <Link className="addButton" to="/CreateThingsContainer">Add Record</Link>
    </div>
  );
}
export default Albums;
