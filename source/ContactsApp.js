import React, { Component, PropTypes } from 'react';
import ContactList from './ContactList';
import SearchBar from './SearchBar';

export default class ContactsApp extends Component {
  render () {
    return (
      <section>
        <h1>Contacts App</h1>
        <SearchBar />
        <ContactList contacts={ this.props.contacts } />
      </section>
    )
  }
}

ContactsApp.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object)
}
