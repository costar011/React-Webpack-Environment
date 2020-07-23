import React from "react";
import axios from "axios";
import Memo from "./components/Memo";
import img1 from "../src/components/images/img1.jpg";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentDidMount = async () => {};
  render() {
    return (
      <div className="App">
        <div className="App__box">
          <div className="App__img__desc">
            <img src={img1} />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
