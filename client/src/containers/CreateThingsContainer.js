import { connect } from "react-redux";
import CreateThings from "../components/CreateThings";
import { createAlbum } from "../actions";

function mapDispatchToProps(dispatch) {
  return {
    createAlbum: function (v) {
      console.log(v);
      dispatch(createAlbum(v));
    }
  }
};
export default connect(null,mapDispatchToProps)(CreateThings);
