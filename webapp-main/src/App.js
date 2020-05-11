import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
  }

  componentDidMount() {
    //TODO: handle errors properly
    fetch(process.env.REACT_APP_API_ROOT + 'message')
      .then(res => res.json())
      .then(res => {
        this.setState({ message: res.message })
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        <p>
          {this.state.message}
        </p>
        </header>
      </div>
    );
  }
}

export default App;
