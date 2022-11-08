import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    }

    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentdidmount');

    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => this.setState({monsters:users}))
  }

  render() {
    console.log('render');

    return (
      <div className="App">
      <input className='search-box' type='search' placeholder='search monster' onChange={(e) => console.log(e.target.value)} />
        {this.state.monsters.map(monster => <div key={monster.id}><h2>{monster.name}</h2></div>)}
      </div>
    );
  }
}

export default App;
