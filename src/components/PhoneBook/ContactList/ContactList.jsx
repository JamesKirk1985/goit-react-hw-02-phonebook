import { Component } from "react"
import css from './ContactList.module.css'

export class ContactList extends Component {

    // filterFunction = (filterKey) => {
    //     let filterContact = this.props.contactsList.filter((item) => (
    //         item.name.toLowerCase().includes(filterKey.toLowerCase())
    //     ))
    //     return filterContact
    // }

    deleteFunc = (evt) => {        
            this.props.deleteContact(evt.target.closest("LI").id)
    }

    render() {         
        return (       
            <ul className={ css.list}>              
                {(this.props.contactsList.length === this.props.filterContact.length ?
                    this.props.contactsList :
                    this.props.filterContact)
                    .map((item) => (<li className={css.contactItem} key={item.id} id={item.id}>
                <div>{item.name}: {item.number}</div>
                        <button className={css.button } type="button" key={item.id} onClick={this.deleteFunc}>Delete</button>
            </li>))}          
            </ul>)
    }
}

