import {combineReducers} from "redux";

function albums(state = [], action) {
  if (action.type === "ALBUMS_LOADED") {
    return action.value;
  }
  return state;
}
function album(state = [], action) {
  if (action.type === "GET_ALBUM") {
    return action.value;
  }
  return state;
}

const rootReducer = combineReducers({
  albums, album
});
export default rootReducer;
