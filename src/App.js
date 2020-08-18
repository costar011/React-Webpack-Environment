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
        <div className="App__top">
          <div className="App__top__col1-1"></div>
        </div>

        <div className="App__main">
          <div className="App__main__col2-1">main1</div>
          <div className="App__main__col2-2">main2</div>
        </div>

        <div className="App__bottom">
          <div className="App__bottom__col3-1">bottom1</div>
          <div className="App__bottom__col3-2">bottom2</div>
        </div>
      </div>
    );
  }
}
export default App;
