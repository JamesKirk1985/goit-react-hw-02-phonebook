import { Component } from "react"

export class Filter extends Component {
    
    inputChange = ({ target: { value, name } }) => {   
    console.log({[name]: value})
    this.props.filterAdd({[name]: value})            
    }
  
    render() {
        return (
            <label>
                Find contacts by name
                <input
                    type="text"
                    name="filter"
                    onChange={this.inputChange}
                    required />
            </label>
        )
    }
}