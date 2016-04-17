import React, { Component, PropTypes } from 'react';
import ContactItem from './ContactItem'

export default class ContactList extends Component {
  render () {
    let items = this.props.contacts.map(
      (contact) => <ContactItem key={ contact.email }
                   name={ contact.name }
                   email={ contact.email } />
    );

    return (
      <ul>
        { items }
      </ul>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object)
}
