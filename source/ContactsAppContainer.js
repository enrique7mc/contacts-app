import React, { Component, PropTypes } from 'react';
import ContactsApp from './ContactsApp'
import 'whatwg-fetch';

export default class ContactsAppContainer extends Component {
  constructor () {
    super();
    this.state = {
      contacts: []
    };
  }

  componentDidMount () {
    fetch('./contacts.json')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ contacts: data });
      })
      .catch((error) => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render () {
    return (
      <ContactsApp contacts={ this.state.contacts }/>
    );
  }
}
