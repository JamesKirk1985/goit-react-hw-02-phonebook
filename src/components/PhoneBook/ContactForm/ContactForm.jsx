import { Component } from "react";
import { nanoid } from 'nanoid'
import css from './ContactForm.module.css'

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
          <form className={css.form } onSubmit={this.handelSubmit}>
            <label className={css.label }>
                Name<br/>
              <input
                className={css.input }
                type="text"
                name="name"
                onChange={this.inputChange}
                value={this.state.name}
                required />
          </label>
          <label className={css.label }>
            Number<br/>
              <input
              className={css.input }
              type="tel"
              name="number"
              onChange={this.inputChange}
              value={this.state.number}
              required />
          </label >
            <button className={css.button } type="submit">Add contact</button>
      </form>  )
    }
}