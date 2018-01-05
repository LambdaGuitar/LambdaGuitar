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
    //let axiosURL = `http://localhost:3000/api/tabs/${this.state.option}/${this.state.searchedQuery}`
    let axiosURL = `/api/tabs/${this.state.option}/${this.state.searchedQuery}`;
    axios.get(axiosURL)
        .then((searchResult) => {
          console.log(`searchResult => ${searchResult}`);
            this.setState({
                result: searchResult.data,
                option: this.state.option,
                searchedQuery: this.state.searchedQuery
            })
            this.props.history.push(`/`);
            this.props.history.push(`/search`);
        })
        .catch((err) => {
            console.log('axios FAILED!!!!  \n', err)
        })
  }

  handleEnter(e) {
    if (e.key !== 'Enter') {
        return;
    }
    console.log('search....');
    console.log(this.props);
    //let axiosURL = `http://localhost:3000/api/tabs/${this.state.option}/${this.state.searchedQuery}`
    let axiosURL = `/api/tabs/${this.state.option}/${this.state.searchedQuery}`;
    axios.get(axiosURL)
        .then((searchResult) => {
          console.log(`searchResult => ${searchResult}`);
            this.setState({
                result: searchResult.data,
                option: this.state.option,
                searchedQuery: this.state.searchedQuery
            })
            this.props.history.push(`/`);
            this.props.history.push(`/search`);
        })
        .catch((err) => {
            console.log('axios FAILED!!!!  \n', err);
        })
  }

  render() {
    return (
      <div className="App">
        <header className="btn-group" style={{ display: 'flex', justifyContent: 'center', marginTop: 3}}>
            <Link className="btn btn-secondary" to='/'>Home</Link>
            <Link className="btn btn-secondary" to='/signin'>Sign In</Link>
            <Link className="btn btn-secondary" to='/signup'>Sign Up!</Link>
            <Link className="btn btn-secondary" to='/user'>My tabs</Link>
        </header>
        <div className="btn btn-secondary" className="btn-group"  style={{marginTop: 3, display: 'flex', justifyContent: 'center', marginBottom: 3}}>
            <input placeholder='Search by Song or Artist' style={{color: 'yellow'}} className="btn btn-outline-secondary" onKeyPress={this.handleEnter.bind(this)} onChange={this.handleQuery.bind(this)} value={ this.state.searchedQuery } />
            <div className="btn btn-secondary"><input checked={this.state.option === 'song'} onChange={this.handleRadio.bind(this)} type="radio" name='ayy' value='song'/>Song Title</div>
            <div className="btn btn-secondary"><input checked={this.state.option === 'artist'} onChange={this.handleRadio.bind(this)} type="radio" name='ayy' value='artist'/>Artist</div>
            <button style={{borderColor: 'yellow', color: 'yellow'}} className="btn btn-outline-warning" onClick={this.handleSearch.bind(this)}>Submit</button>
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