// Boilerplate for class component
class Model extends Component {
  constructor() {
    super();
    this.state = {
      artist: "",
      title: "",
      year: "",
      price: ""
    };
  }
  render() {
    return {
      <form onSubmit={(e) => {
        e.preventDefault();
          }}
          <input><p>CREATE</p></input>
      </form>
    }
  }
}
