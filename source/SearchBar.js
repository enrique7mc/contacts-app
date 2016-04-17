import React, { Component, PropTypes } from 'react';

export default class SearchBar extends Component {

  handleChange (event) {
    this.props.onUserInput(event.target.value)
  }

  render () {
    return (
      <input type='text' placeholder='search'
             value={ this.props.filterText }
             onChange={ this.handleChange.bind(this) } />
    )
  }
}

SearchBar.propTypes ={
  filterText: PropTypes.string.isRequired,
  onUserInput: PropTypes.func.isRequired
}
