import css from './ContactList.module.css'


export const ContactList = ({contactsList, filterContact, deleteContact}) => {   

   function deleteFunc (evt)  {        
            deleteContact(evt.target.closest("LI").id)
    } 
            
        return (       
            <ul className={ css.list}>              
                {(contactsList.length === filterContact.length ?
                    contactsList :
                    filterContact)
                    .map((item) => (<li className={css.contactItem} key={item.id} id={item.id}>
                <div>{item.name}: {item.number}</div>
                        <button className={css.button } type="button" key={item.id} onClick={deleteFunc}>Delete</button>
            </li>))}          
            </ul>)    
}

