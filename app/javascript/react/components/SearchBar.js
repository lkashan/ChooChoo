import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      searchString: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const newSearchString = event.target.value
    this.setState({ searchString: newSearchString })
  }

  handleSubmit(event) {
    event.preventDefault()
    const body = JSON.stringify({
      search_string: this.state.searchString
    })
    fetch('/api/v1/users/search.json', {
      method: 'POST',
      body: body,
      credentials: 'same-origin',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({ users: body })
    })
  }

  render() {
    const users = this.state.users.map((user => {
      return(
      <li key={user.id}><a href={`/users/${user.id}`}>{user.first_name} {user.last_name}</a></li>
      )
    }))

    return(
      <div className="searchbar">
        <form onSubmit={this.handleSubmit}>
          <label><h4>Find Your Flock:</h4></label>
          <input type='text' name='searchString' value={this.state.searchString} onChange={this.handleChange} />
          <input className="button" type="submit" value="Submit" />
        </form>
          <ul>{users}</ul>
      </div>
    )
  }
}
export default SearchBar;