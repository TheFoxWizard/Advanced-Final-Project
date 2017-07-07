import React from "react";
import { browserHistory } from 'react-router';
import editAlbum from "../actions";

//making the dollar sign a variable
let dollar = "$";
class EditThings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        artist: "",
        title: "",
        year: "",
        price: ""
    };
  }
  componentWillReceiveProps(nextProps) {
    const albums = nextProps.albums
    const id = this.props.match.params.id;
    //find returns an object and assigns it to a variable
    // the album variable has a album object in it
    const record = albums.find(u => u._id === id);
    this.setState ({
      artist: record.artist,
      title: record.title,
      year: record.year,
      price: record.price
    })
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    //find returns an object and assigns it to a variable
    // the album variable has a album object in it
    const album = this.props.albums.find(u => u._id === id);
    console.log(album);
    this.props.editAlbum(id);
  }
  removeAlbum() {
    if (this.state.toggled === true) {
      this.props.removeAlbum(this.props.album._id);
      this.setState({ toggled: false });
    } else {
      this.props.editAlbum(this.props.album._id);
      this.setState({ toggled: true });
    }
  }
  render() {
    const id = this.props.match.params.id;
    //find returns an object and assigns it to a variable
    // the album variable has a album object in it
    const album = this.props.albums.find(u => u._id === id) || {};
    return (
      <div>
        <div>
          <h1>Edit Album</h1>
          <form onSubmit={(e) => {
            e.preventDefault();
            if (this.props.editAlbum) {
              const id = this.props.match.params.id;
              this.props.editAlbum(id, this.state);
            }
            this.props.history.push("/");
          }}>
            <div>
              Artist: <input value={this.state.artist} onChange={(e) => {
                const album = {artist: e.target.value};
                this.setState({
                  artist: e.target.value
                });
              }} />
            </div>
            <div>
              Title: <input value={this.state.title} onChange={(e) => {
                const album = {title: e.target.value};
                this.setState({
                  title: e.target.value
                });
              }} />
            </div>
            <div>
              Year: <input value={this.state.year} onChange={(e) => {
                const album = {year: e.target.value};
                this.setState({
                  year: e.target.value
                });
              }} />
            </div>
            <div>
              Value: <input value={`$${this.state.price}`} onChange={(e) => {
                const album = {price:dollar + e.target.value};
                const val = e.target.value.replace('$','');
                this.setState({
                  price: val
                });
              }} />
            </div>

            <button className="buttonLink">Commit Edit</button>
          </form>
        </div>
    </div>
    );
  }
}
export default EditThings;
