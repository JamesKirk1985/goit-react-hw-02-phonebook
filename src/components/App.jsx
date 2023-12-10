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
    filter: '',
    counter: 0
  }

  addContact = (contactObj) => {       

    this.setState((prevState) => {    
          if (prevState.contacts.some(({ name }) => (contactObj.name.trim() === name.trim()))) {
      alert(`${contactObj.name.trim()} is already in contacts`)
      return
    }  
      return { contacts: [...prevState.contacts, contactObj]}
    })  

   
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
    this.setState((prev) => {
      return {contacts: prev.contacts.filter((item) => (item.id !== contactId))}
      }) 
  }


  render() {
    return (    
      <div>
        <ContactForm addContact={this.addContact} />
        
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
  
