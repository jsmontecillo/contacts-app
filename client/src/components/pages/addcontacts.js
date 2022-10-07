import {useState, useEffect} from 'react';
import './addcontacts.css';

const AddContacts = () => {
    const [allContacts, setAllContacts] = useState([]);
    const [newContact, setNewContact] = useState([]);
    const [values, setValues] = useState({first_name: "", last_name: "", relationship: "", email: "", cell_number: "", home_number: "", address: "", birthday: "", notes: "", image: ""});

    const getContacts = async () => {
        const response = await fetch('http://localhost:9090/api/contacts');
        const allContacts = await response.json();
        setAllContacts(allContacts);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newContact = values;
        const rawResponse = await fetch('http://localhost:9090/api/contacts', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newContact)
        });
        const content = await rawResponse.json();
      
        setNewContact([...allContacts, content]);
        console.log(newContact);
        setValues({first_name: "", last_name: "", relationship: "", email: "", cell_number: "", home_number: "", address: "", birthday: "", notes: "", image: ""});
    }

    const handleInput = (e) => {
        setValues((preValues) => ({
            ...preValues,
            [e.target.name]: e.target.value
    }))

    return (
        <div>
            <h1>Add Contact</h1>
            <form onSubmit={handleSubmit}>
                <label>First Name</label>
                <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    required
                    defaultValue={values.first_name} 
                    onChange={handleInput}
                />
                <label>Last Name</label>
                <input
                    type="text"
                    id="last_name"
                    placeholder="Name"
                    name="last_name"
                    required
                    defaultValue={values.last_name} 
                    onChange={handleInput}
                />
                <label>Relationship</label>
                <input
                    type="text"
                    id="relationship"
                    placeholder="Mother"
                    name="relationship"
                    required
                    defaultValue={values.relationship}
                    onChange={handleInput}
                />
                <label>Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    defaultValue={values.email}
                    onChange={handleInput}
                />
                <label>Cell Number</label>
                <input
                    type="text"
                    id="cell"
                    name="cell_number"
                    defaultValue={values.cell_number}
                    onChange={handleInput}
                />
                <label>Home Number</label>
                <input
                    type="text"
                    id="home"
                    name="home_number"
                    required
                    defaultValue={values.home_number}
                    onChange={handleInput}
                />
                <label>Address</label>
                <input
                    type="text"
                    id="address"
                    placeholder="42 Wallaby Way"
                    name="address"
                    required
                    defaultValue={values.address}
                    onChange={handleInput}
                />
                <label>Birthday</label>
                <input
                    type="date"
                    id="date"
                    name="date"
                    placeholder=""
                    required
                    defaultValue={values.date}
                    onChange={handleInput}
                />
                <label>Notes</label>
                <input
                    type="text"
                    id="notes"
                    name="notes"
                    placeholder=""
                    required
                    defaultValue={values.notes}
                    onChange={handleInput}
                />
                <label>Image</label>
                <input
                    type="text"
                    id="image"
                    name="image"
                    placeholder=""
                    required
                    defaultValue={values.image}
                    onChange={handleInput}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}}

export default AddContacts;