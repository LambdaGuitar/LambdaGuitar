import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Search from './Components/search.js';
import axios from 'axios';
// import Signin from './Components/signin.js';
// import UserPage from './Components/userPage.js';
import Tab from './Components/tab.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchedQuery: '',
      option: 'song',
      result: []
    };
  }

  handleRadio(e) {
      let searchOption = e.target.value;
      this.setState({
          searchedQuery: this.state.searchedQuery,
          option: searchOption,
          result: this.state.result
      })
      console.log(this.state);
  }

  handleQuery(e) {
      let query = e.target.value;
      this.setState({
          searchedQuery: query,
          option: this.state.option,
          result: this.state.result
      })
  }

  handleSearch() {
    //promise for database
                // 
    //store returned search data
    //redirect page to "/search"
    // this.props.history.push(`/search/${this.state.option}/${this.state.searchedQuery}`)
    console.log('search....');
    console.log(this.props);
    axios.get(`http://localhost:3000/api/tabs/${this.state.option}/${this.state.searchedQuery}`)
        .then((searchResult) => {
          console.log(`searchResult => ${searchResult}`);
            this.setState({
                result: searchResult.data,
                option: this.state.option,
                searchedQuery: this.state.searchedQuery
            })
            this.props.history.push(`/`)
            this.props.history.push(`/search`)
        })
        .catch((err) => {
            console.log('axios FAILED!!!!  \n', err)
        })
  }

  render() {
    return (
      <div className="App">
        <header style={{ display: 'flex', justifyContent: 'space-around'}}>
            <Link to='/'>Home</Link>
            <Link to='/signin'>Sign In</Link>
            <Link to='/signup'>Sign Up!</Link>
            <Link to='/user'>My tabs</Link>
        </header>
        <div style={{marginTop: 3, display: 'flex', justifyContent: 'space-around'}}>
            <input onChange={this.handleQuery.bind(this)} value={ this.state.searchedQuery } />
            <div><input checked={this.state.option === 'song'} onChange={this.handleRadio.bind(this)} type="radio" name='ayy' value='song'/>Song Title</div>
            <div><input checked={this.state.option === 'artist'} onChange={this.handleRadio.bind(this)} type="radio" name='ayy' value='artist'/>Artist</div>
            <button onClick={this.handleSearch.bind(this)}>Submit</button>
            {/* <Link style={{marginLeft: 20}} to={`/search/${this.state.option}/${this.state.searchedQuery}`}>Submit</Link> */}

        </div>
        <Route path='/search' render={(props) => (
          <Search {...props} result={this.state.result} />
        )}/>
      </div>
    );
  }
}

export default App;