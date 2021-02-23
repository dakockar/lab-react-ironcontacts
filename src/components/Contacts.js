import React, { Component } from 'react';
import contactsJson from "../contacts.json";
import ContactDetails from "./ContactDetails.js";

export default class Contacts extends Component {

    state = {
        contacts: contactsJson.slice(0, 5)
    }

    handleAdd = () => {
        let randomInt = Math.floor(Math.random() * contactsJson.length);
        let randomContact = contactsJson[randomInt];

        const clonedContacts = JSON.parse(JSON.stringify(this.state.contacts));

        // instead of this, I used the spread method in setState
        // clonedContacts.push(randomContact);

        this.setState({
            // contacts: clonedContacts

            contacts: [...clonedContacts, randomContact]
        })
    }

    handleSort = (type) => {

        const clonedContacts = JSON.parse(JSON.stringify(this.state.contacts));

        switch (type) {
            case "name": {
                clonedContacts.sort((a, b) => {
                    if (a.name < b.name) return -1;
                    else if (a.name > b.name) return 1;
                    else return 0;
                })
                break;
            }
            case "popularity": {
                clonedContacts.sort((a, b) => b.popularity - a.popularity)
                break;
            }
        }


        this.setState({
            contacts: clonedContacts
        })
    }


    handleDelete = (deleteIndex) => {
        const clonedContacts = JSON.parse(JSON.stringify(this.state.contacts));

        clonedContacts.splice(deleteIndex, 1);

        this.setState({
            contacts: clonedContacts
        })
    }

    render() {
        const { contacts } = this.state;

        return (
            <div>
                <h1>IronContacts</h1>
                <div className="btn-container">
                    <button className="btn" onClick={this.handleAdd} >Add Random Contact</button>
                    <button className="btn" onClick={() => { this.handleSort("name") }}>Sort By Name</button>
                    <button className="btn" onClick={() => { this.handleSort("popularity") }}>Sort By Popularity</button>
                </div>
                <div className="contact-list">
                    {
                        this.state.contacts.map(singleContact => {
                            let index = contacts.indexOf(singleContact);

                            return <ContactDetails
                                onDelete={this.handleDelete}
                                contact={singleContact}
                                index={index}
                                key={index} />
                        })
                    }
                </div>
            </div>
        )
    }
}
