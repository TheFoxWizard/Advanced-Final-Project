import React from "react";

class CreateThings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      album: {
        artist: "",
        title: "",
        year: "",
        price: ""
      }
    };
  }

  removeAlbum() {
    if (this.state.toggled === true) {
      this.props.removeAlbum(this.props.album._id);
      this.setState({ toggled: false });
    } else {
      this.props.createAlbum(this.props.album);
      this.setState({ toggled: true });
    }
  }
  render() {
    return (
      <div>
        <div>
          <h1>Add Album</h1>
          <form onSubmit={(e) => {
            e.preventDefault();
            if (this.props.createAlbum) {
              this.props.createAlbum(this.state.album);
            }
            this.props.history.push("/");
          }}>
            <div>
              Artist: <input onChange={(e) => {
                const album = {artist: e.target.value};
                this.setState({
                  album: Object.assign(this.state.album,album)
                });
              }} />
            </div>
            <div>
              Title: <input onChange={(e) => {
                const album = {title: e.target.value};
                this.setState({
                  album: Object.assign(this.state.album,album)
                });
              }} />
            </div>
            <div>
              Year: <input onChange={(e) => {
                const album = {year: e.target.value};
                this.setState({
                  album: Object.assign(this.state.album,album)
                });
              }} />
            </div>
            <div>
              Value: <input onChange={(e) => {
                const album = {price:e.target.value};
                this.setState({
                  album: Object.assign(this.state.album,album)
                });
              }} />
            </div>

            <button className="buttonLink">Add Album</button>
          </form>
        </div>
    </div>
    );
  }
}
export default CreateThings;
