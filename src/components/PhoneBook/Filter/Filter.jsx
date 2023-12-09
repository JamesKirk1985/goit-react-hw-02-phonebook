import css from './Filter.module.css'

export const Filter = ({filterAdd}) => {
    
    function inputChange ({ target: { value, name } })  {    
    filterAdd({[name]: value})            
    }    
        return (
            <label className={ css.label}>
                Find contacts by name<br/>
                <input
                    className={css.input}
                    type="text"
                    name="filter"
                    onChange={inputChange}
                    required />
            </label>
        )
    
}