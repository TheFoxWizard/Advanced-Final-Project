export function setCurrentAlbum (album) {
//this object is an action
  return {
    //what the action is representing/setting
    type:"SET_CURRENT_ALBUM",
    value:album
  }
}
// this is loading the database of records
export function loadAlbums() {
  return function (dispatch) {
    fetch("/albums")
    .then( (response) => {
      return response.json();
    }).then((albums) => {
      dispatch(albumsLoaded(albums));
    });
  };
}
//this is loading the record list
export function albumsLoaded(id) {
  return function (dispatch) {
    fetch(`/albums/${id}`)
    .then(res => res.json())
    .then((album => {
      dispatch(get_album(album));
    }));
  };
}
//getting the thing
function get_album (album) {
  return {
    type:"GET_ALBUM",
    value: album
  };
}
//loading the thing
function albumsLoaded(albums) {
  return {
    type: "ALBUMS_LOADED",
    value: albums
  };
}
//creating a new thing & posting it to the the list
export function createAlbum(r) {
  console.log(r);
  return function (dispatch) {
    fetch("/albums", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(r)
    }).then(() => dispatch(loadAlbums()));
  };
}
//removing the thing
export function removeAlbum(id) {
  return function (dispatch) {
    fetch(`/albums/${id}`, {
      method: "DELETE",
    }).then(() => dispatch(loadAlbums()));
  }
}
// the edit of the thing
export function editAlbum(id,obj) {
  return function (dispatch) {
    fetch(`/albums/${id}`, {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(obj)
    }).then(() => dispatch(loadAlbums()));
  }
}
//the searching of the thing
export function setSearchText (text) {
  return {
    type:"SET_SEARCH_TEXT",
    value: text
  }
}
