import { Component } from 'react';

import './App.css';

import CardList from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box.jsx';

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
        <SearchBox 
          handleChange={this.handleChange}
          className='monsters-search-box'
          placeholder='search monsters'
        />
        <CardList monsters={this.filteredMonsters()}/>
      </div>
    );
  }
}

export default App;
