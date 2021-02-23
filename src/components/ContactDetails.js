import React, { Component } from 'react'

export default class ContactDetails extends Component {

    render() {
        const { contact, index } = this.props;

        return (
            <div className="contact-details">
                <img className="element" src={contact.pictureUrl} />
                <h3 className="element">{contact.name}</h3>
                <p className="element">{contact.popularity.toFixed(2)}</p>
                <button className="element btn delete-btn" onClick={() => { this.props.onDelete(index) }}>Delete</button>
            </div>
        )
    }
}
