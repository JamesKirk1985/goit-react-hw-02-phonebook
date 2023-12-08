import { Component } from "react";
import { ContactForm } from "./PhoneBook/ContactForm/ContactForm";
import { Filter } from "./PhoneBook/Filter/Filter";
import { ContactList } from "./PhoneBook/ContactList/ContactList";
import css from './App.module.css'

export class App extends Component {

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: ''
  }

  addContact = (contactObj) => {    
    const newContacts = this.state.contacts;
    const newName = contactObj.name.trim()
    if (newContacts.some(({ name }) => (newName === name.trim()))) {
      alert(`${newName} is already in contacts`)
      return
    }
    newContacts.push(contactObj)
    this.setState({ contacts: newContacts })
  }

  filterAdd = (contactName) => {
    this.setState(contactName)    
  }  
  filterFunction = (filterKey) => {
        let filterContact = this.state.contacts.filter((item) => (
            item.name.toLowerCase().includes(filterKey.toLowerCase())
        ))
        return filterContact
    }

  deleteContact = (contactId) => {
    const prevContacts = this.state.contacts   
    const newContacts = prevContacts.filter((item) => (item.id !== contactId))
    this.setState({contacts: newContacts})    
  }


  render() {
    return (    
      <div>
        <ContactForm addContact={this.addContact} inputChange={this.inputChange} />
        
        <h2 className={css.title}>Contacts</h2>  
        <Filter filterAdd={this.filterAdd} />
        
        <ContactList          
          contactsList={this.state.contacts}
          filterContact={this.filterFunction(this.state.filter)}
          deleteContact={this.deleteContact}    
          
        />                  
      </div>
    )
  }  
}
  
