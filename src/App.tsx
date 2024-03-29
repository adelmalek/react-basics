import { useState, useEffect, ChangeEvent } from 'react';

import './App.css';

import CardList from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box';

import { getData } from './utils/data';

export type Monster = {
  id: number,
  name: string,
  email: string
};

const App = () => {
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [searchField, setSearchField] = useState('');
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  console.log('render')

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/users")
    // .then(res => res.json())
    // .then(users => setMonsters(users))
    
    const fetchUsers = async () => {
      const users = await getData<Monster[]>("https://jsonplaceholder.typicode.com/users");
      setMonsters(users);
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    let filtered = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField);
    });
    setFilteredMonsters(filtered);
  }, [searchField, monsters]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    let searchFieldString = e.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
        <h1 className="title">Monsters Rolodex</h1>
        <SearchBox 
          handleChange={handleChange}
          className='monsters-search-box'
          placeholder='search monsters'
        />
        <CardList monsters={filteredMonsters}/>
    </div>
  )
}

export default App;

/*
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
        <h1 className="title">Monsters Rolodex</h1>
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
*/
