import React from 'react';
import ProblemList from'./ProblemList';
import '../App.css';


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      user: 'jonathantch'
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Leetcode Study App</h1>
        <ProblemList user={this.state.user}/>
      </div>
    );
  }
  
}

export default App;
