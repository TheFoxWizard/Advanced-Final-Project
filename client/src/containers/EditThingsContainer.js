import { connect } from "react-redux";
import EditThings from "../components/EditThings";
import { editAlbum, getAlbum } from "../actions";

function mapStateToProps(state) {
  return {
    albums: state.albums
  }
}
//finding the album and then making the call to edit it
function mapDispatchToProps(dispatch) {
  return {
    getAlbum: (id) => {
      const action = getAlbum(id);
      dispatch(action)
    },
    editAlbum: (id, obj) => {
      dispatch(editAlbum(id, obj));
    }
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(EditThings);
