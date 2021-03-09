import React, { useEffect } from 'react';
import './App.css';

//components
import CardList from './components/CardList/CardList';
import SearchBox from './components/SearchBox/SearchBox';
//import { robots } from './components/robots';
import ErrorBoundry from './components/ErrorBoundry';

//redux
import { connect } from 'react-redux';
//actions
import { setSearchfield, requestRobots } from './redux/Actions/actions';


const App = ({ searchField, onSearchfield, robots, isPending, error, onRequestRobots }) => {
  useEffect(() => {
    onRequestRobots()
  }, [onRequestRobots])
  //console.log(searchField, setSearchfield);

  //console.log(robots, isPending, error);
  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });
  //console.log('render');

  return isPending ? <h1>Loading</h1> : (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox searchChange={onSearchfield} />
      <ErrorBoundry>
        <CardList robots={filteredRobots} />
      </ErrorBoundry>
    </div>
  )
}

const mapStateToProps = (state) => ({
  searchField: state.searchRobots.searchField,
  robots: state.requestRobots.robots,
  isPending: state.requestRobots.isPending,
  error: state.requestRobots.error
});

const mapDispatchToProps = (dispatch) => ({
  onSearchfield: text => dispatch(setSearchfield(text.target.value)),
  onRequestRobots: (items) => dispatch(requestRobots(items))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);