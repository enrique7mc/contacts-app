import React, { Component, PropTypes } from 'react';
import ContactList from './ContactList';
import SearchBar from './SearchBar';

export default class ContactsApp extends Component {
  constructor () {
    super();
    this.state = {
      filterText: ''
    };
  }

  handleUserInput (searchTerm) {
    this.setState({ filterText: searchTerm });
  }

  render () {
    return (
      <section>
        <h1>Contacts App</h1>
        <SearchBar filterText={ this.state.filterText }
                   onUserInput={ this.handleUserInput.bind(this) }/>
        <ContactList contacts={ this.props.contacts }
                     filterText={ this.state.filterText } />
      </section>
    )
  }
}

ContactsApp.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object)
}
