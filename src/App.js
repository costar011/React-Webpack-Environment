import React from "react";
import axios from "axios";
import Memo from "./components/Memo";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentDidMount = async () => {};
  render() {
    return (
      <div className="App">
        <div className="App__bg">
          <div className="App__bg__desc">
            <h1>test h1</h1>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
