import React from 'react';
import './App.css';

import ExitModal from './ExitModal';

class App extends React.Component {
  componentDidMount() {
    document.addEventListener('mouseleave', this.handleMouseLeave);
    document.addEventListener('mouseenter', this.handleMousEnter);
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('mouseleave', this.handleMouseLeave);
    document.removeEventListener('mouseenter', this.handleMousEnter);
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleMouseLeave = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;

    /* if (clientX <= 0 || clientX >= innerWidth || clientY <= 0 || clientY >= innerHeight) { */

    console.log(clientY);
    if (clientY <= 0) {
      console.log("Hey don't leave. I have an free eBook for you");
      alert("Hey don't leave. I have an free eBook for you");
    }
  };

  handleMousEnter = (e) => {};

  handleKeyDown = (e) => {};

  render() {
    return (
      <div className="App">
        <ExitModal name="World" />
      </div>
    );
  }
}

export default App;
