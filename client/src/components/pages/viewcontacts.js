import {useState, useEffect} from 'react';
import './viewcontacts.css';
import Default from './default1.png';
import Form from "../form.js";

const ViewContacts = () => {
    const [contacts, setContacts] = useState([{first_name: "Janice", email: "janice@gmail.com"}]);
    const [values, setValues] = useState({});
    const [selectedId, setSelectedId] = useState(0);
    const [expanded, setExpanded] = useState(false);
    const [formClicked, setFormClicked] = useState(false);

    const getContacts = async () => {
        const response = await fetch('http://localhost:9090/api/contacts');
        const allContacts = await response.json();
        setContacts(allContacts);
    };

    useEffect(() => {
        // useEffect will run getContacts() every time this component loads, as opposed to just the first time it is rendered.
        getContacts();
    }, []);

    console.log(contacts);

    const expandContact = () => {
        setExpanded((expanded) => !expanded);
    }

    const addContact = (newContact) => {
        setContacts((contacts) => [...contacts, newContact]);
    };

    const onDelete = async (ID) => {
        let response = await fetch(`http://localhost:9090/api/contacts/${ID}`, {method: "DELETE"})
        await response.json();
        let deleteContacts = [...contacts];
        let deleted = deleteContacts.filter((contact) => contact.id !== Number(ID));
        setContacts(deleted);
    }
    
    
    return (
            <div className="contacts-screen">
            <h1>Your Contacts</h1>
            {contacts.map((contact) => {
                return (
                <div key={contact.id} className="contact-card">
                    <div className="profile-pic">
                        <img src={contact.image || Default} alt={contact.first_name} style={{height: "50px", border: "solid 1px black", borderRadius: "50%"}}/>
                    </div>
                    <div className="contact-data">
                        <span style={{fontSize: "15px"}}>{contact.first_name} {contact.last_name}</span><br/>
                        {contact.cell_number}<br/>
                        <div className={selectedId === contact.id ? '' : 'collapsed'}>
                            {contact.address}
                            {contact.notes}
                            <button type="button">Edit</button>
                        </div>
                    </div>
                    <button type="button" onClick={() => {setSelectedId(contact.id)}} className={!expanded ? '' : 'hide'}>+</button>
                    <button type="button" onClick={() => {onDelete(contact.id)}}>x</button>
                </div>
                )
            })}
            <button type="button" onClick={() => {setFormClicked(!formClicked)}}>Add Contact</button>
            {formClicked ? (
                <Form addContact={addContact}/>
            ) : (
                <>
                </>
                )}
        </div>
    );
}

export default ViewContacts;