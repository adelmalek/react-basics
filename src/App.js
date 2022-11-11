import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => this.setState({monsters: users}))
  }

  handleChange = (e) => {
    let searchField = e.target.value.toLowerCase();
    this.setState(() => {
      return { searchField }
    })
  }

  filteredMonsters() {
    let filtered = this.state.monsters.filter(monster => {
      return monster.name.toLowerCase().includes(this.state.searchField);
    });
    return filtered;
  }


  render() {
    return (
      <div className="App">
        <input className='search-box' 
              type='search' 
              placeholder='search monster' 
              onChange={this.handleChange}
        />
        <CardList monsters={this.filteredMonsters()}/>
      </div>
    );
  }
}

export default App;
