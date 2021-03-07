import React, { Component } from 'react';
import './App.css';

import CardList from './components/CardList/CardList';
import SearchBox from './components/SearchBox/SearchBox';
//import { robots } from './components/robots';
import ErrorBoundry from './components/ErrorBoundry';


class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: ''
    }
    console.log('constructor');
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ robots: data })
      })
      .catch(error => console.log(error))
    console.log('componentDidMount');
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  }

  render() {
    const { robots, searchField } = this.state;
    console.log(robots, searchField);
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    //console.log('render');
    //console.log(filteredRobots);

    return !robots.length ? <h1>Loading</h1> : (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <ErrorBoundry>
          <CardList robots={filteredRobots} />
        </ErrorBoundry>
      </div>
    )

  }
}

export default App;