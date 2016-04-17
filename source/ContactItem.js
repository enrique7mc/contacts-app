import React, { Component, PropTypes } from 'react';

export default class ContactItem extends Component {
  render () {
    return (
      <li>{ this.props.name } - { this.props.email }</li>
    )
  }
}

ContactItem.propTypes = {
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}
