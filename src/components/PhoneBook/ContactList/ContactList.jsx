import { Component } from "react"

export class ContactList extends Component {

    filterFunction = (filterKey) => {
        let filterContact = this.props.contactsList.filter((item) => (
            item.name.toLowerCase().includes(filterKey.toLowerCase())
        ))
        return filterContact
    }

    deleteFunc = (evt) => {        
            this.props.deleteContact(evt.target.closest("LI").id)
    }

    render() {          
        return (       
            <ul>              
                {(this.props.filter === '' ?
                    this.props.contactsList :
                    this.filterFunction(this.props.filter))
                    .map((item) => (<li  key={item.id} id={item.id}>
                <div>{item.name}: {item.number}</div>
                <button type="button" key={item.id} onClick={this.deleteFunc}>Delete</button>
            </li>))}          
            </ul>)
    }
}

