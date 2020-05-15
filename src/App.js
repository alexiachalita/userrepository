import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Directory from './components/Directory';
import companyDirectory from './data/companyDirectory';
class App extends Component {

  state = {
    company: "Some Company",
    data: [],
    sortBy: "ascending"
  }

  componentDidMount() {
    this.setState((prevState) => ({
      ...prevState,
      company: "Gizmos Gadgets",
      data: companyDirectory,
      filterBy: ''
    }), ()=> console.log("Component Did Mount"));
  }

  toggleSortBy = () => {
    const sortBy = this.state.sortBy === "ascending" ? "descending" : "ascending";
    this.setState((prevState)=> ({
      ...prevState,
      sortBy
    }))
  }

  toggleFilterBy = () => {
    const filterBy = this.state.filterBy === "" ? "Developer" : "";
    this.setState((prevState)=> ({
      ...prevState,
      filterBy
    }))
  }

  render() {
    let  { data } = this.state;
    if (data && data.length > 0) {
      if (this.state.sortBy==="ascending") {
        data.sort((a,b) => a.last_name < b.last_name ? -1 : 1);
      } else {
        data.sort((a,b) => a.last_name > b.last_name ? -1 : 1)
      }
    }
    return (
      <div className="App">
        <Header company={this.state.company}/>
        <Directory data={ data.filter(el=> el.job_title.includes(this.state.filterBy)) } 
          toggleSort={this.toggleSortBy}
          toggleFilter={this.toggleFilterBy}  
        />
      </div>
    );
  }
}

export default App;
