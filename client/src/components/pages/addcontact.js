import {useState, useEffect} from 'react';
import './addcontacts.css';

const AddContact = () => {
    const [allContacts, setAllContacts] = useState([]);
    const [newContact, setNewContact] = useState([]);
    const [values, setValues] = useState({first_name: "", last_name: "", relationship: "", email: "", cell_number: "", home_number: "", address: "", birthday: "", notes: "", image: ""});


    return (
        <div>
            <h1>Add Contact</h1>
            <form>
            <label>First Name</label>
                <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    required
                    defaultValue={values.first_name} 
                /><br/>
            <label>Last Name</label>
                <input
                    type="text"
                    id="last_name"
                    placeholder="Name"
                    name="last_name"
                    required
                    defaultValue={values.last_name} 
                /><br/>
                <label>Relationship</label>
                <input
                    type="text"
                    id="relationship"
                    placeholder="Mother"
                    name="relationship"
                    required
                    defaultValue={values.relationship}
                /><br/>
                <label>Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    defaultValue={values.email}
                /><br/>
                <label>Cell Number</label>
                <input
                    type="text"
                    id="cell"
                    name="cell_number"
                    defaultValue={values.cell_number}
                /><br/>
                <label>Home Number</label>
                <input
                    type="text"
                    id="home"
                    name="home_number"
                    required
                    defaultValue={values.home_number}
                /><br/>
                <label>Address</label>
                <input
                    type="text"
                    id="address"
                    placeholder="42 Wallaby Way"
                    name="address"
                    required
                    defaultValue={values.address}
                /><br/>
                <label>Birthday</label>
                <input
                    type="date"
                    id="date"
                    name="date"
                    placeholder=""
                    required
                    defaultValue={values.date}
                /><br/>
                <label>Notes</label>
                <input
                    type="text"
                    id="notes"
                    name="notes"
                    placeholder=""
                    required
                    defaultValue={values.notes}
                /><br/>
                <label>Image</label>
                <input
                    type="text"
                    id="image"
                    name="image"
                    placeholder=""
                    required
                    defaultValue={values.image}
                />
            </form>
        </div>
    )
}

export default AddContact;