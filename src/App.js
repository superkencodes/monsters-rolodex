import React, {Component} from 'react';

import './App.css';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';

class App extends Component{
  constructor(){
    //super calls react.components constructor
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
    //this.handleChange = this.handleChange.bind(this); -- one way to bind this state to a method in a class
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      return response.json();
    })
    .then(data => {
      this.setState({monsters: data});
    });
  }

  handleChange = e => { //Lexical scoping
    this.setState({searchField: e.target.value});
  }

  onSearchChange = e =>{
    this.setState({title: e.target.value});
  }

  render(){
    const {monsters,searchField,title} = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return(
      <div className="App">
        <h1 className="title">{title}</h1>
        <SearchBox 
          placeholder="search monsters" 
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} /> 
      </div>
    )
  }
}

export default App;
