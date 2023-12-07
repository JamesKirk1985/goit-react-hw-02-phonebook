import { Component } from "react"
import css from './Filter.module.css'

export class Filter extends Component {
    
    inputChange = ({ target: { value, name } }) => {    
    this.props.filterAdd({[name]: value})            
    }
  
    render() {
        return (
            <label className={ css.label}>
                Find contacts by name<br/>
                <input
                    className={css.input}
                    type="text"
                    name="filter"
                    onChange={this.inputChange}
                    required />
            </label>
        )
    }
}