import './App.css';
import React, { Component } from 'react';
import Home from './Pages/Home/Home';
import Form from './Pages/Form/Form';

class App extends Component {
  state = {
    programmers: [
      { name: 'Annonymous', age: 30, location: 'Uganda', id: 1 },
      { name: 'Random', age: 50, location: 'South Africa', id: 2 },
      { name: 'Hospital', age: 20, location: 'Canada', id: 3 }
    ]
  }

  addProgrammer = (programmer) => {
    programmer.id = Math.random();
    let programmers = [...this.state.programmers, programmer]
    this.setState({
      programmers: programmers
    })
  }

  deleteProgrammer = id => {
    let programmers = this.state.programmers.filter(programmer => {
      return programmer.id !== id;
    });
    this.setState({
      programmers: programmers
    })
  }
  render() {
    return (
      <div className='App'>
        <h1>Lets fillup a form</h1>
        <Home programmers={this.state.programmers} deleteProgrammer={this.deleteProgrammer} />
        <Form addProgrammer={this.addProgrammer} />
      </div>
    )
  }
}

export default App;
