import React, { Component, PropTypes } from 'react';

export default class SearchBar extends Component {
  render () {
    return (
      <input type='text' placeholder='search'
             value={ this.props.filterText } />
    )
  }
}

SearchBar.propTypes ={
  filterText: PropTypes.string.isRequired
}
