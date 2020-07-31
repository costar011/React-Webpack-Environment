import React from "react";
import "./styles/app.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentDidMount = async () => {};
  render() {
    return (
      <div className="App">
        <div className="App__top">top</div>
        <div className="App__main">main</div>
        <div className="App__bottom">bottom</div>
      </div>
    );
  }
}
export default App;
