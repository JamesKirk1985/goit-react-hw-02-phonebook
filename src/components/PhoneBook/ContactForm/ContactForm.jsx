import { Component } from "react";
import { nanoid } from 'nanoid'

export class ContactForm extends Component {
state = {        
    name: '',
    number: ''
    }

  inputChange = ({ target: { value, name } }) => {      
    this.setState(() => ({
      [name]: value      
    }))
    }

    handelSubmit = (e) => {
        e.preventDefault()  
     
        const contactObj = {
            name: this.state.name,
            id: nanoid(),
            number: this.state.number
        }
        this.props.addContact(contactObj)
    }
    
    
    render() {
        return (
      <form onSubmit={this.handelSubmit}>
            <label>
                Name:
              <input
                type="text"
                name="name"
                onChange={this.inputChange}
                value={this.state.name}
                required />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              onChange={this.inputChange}
              value={this.state.number}
              required />
          </label>
            <button type="submit">Add contact</button>
      </form>  )
    }
}