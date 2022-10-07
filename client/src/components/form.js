import { useState } from "react";

const Form = (props) => {
  const [contact, setContact] = useState({
    first_name: "", 
    last_name: "", 
    relationship: "", 
    email: "", 
    cell_number: "", 
    home_number: "", 
    address: "", 
    birthday: "", 
    notes: "", 
    image: ""
  });

  //create functions that handle the event of the user typing into the form

  const handleInput = (e) => {
    setContact((preValues) => ({
        ...preValues,
        [e.target.name]: e.target.value
  }))}

  //A function to handle the post request
  const postContact = (newContact) => {
    return fetch("http://localhost:9090/api/contacts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newContact),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("From the post ", data);
        props.addContact(data);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postContact(contact);
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label>First Name</label>
        <input
          type="text"
          id="add-user-name"
          placeholder="First Name"
          name="first_name"
          required
          value={contact.first_name}
          onChange={handleInput}
        />
        <label>Last Name</label>
        <input
          type="text"
          id="add-user-lastname"
          placeholder="Last Name"
          name="last_name"
          required
          value={contact.last_name}
          onChange={handleInput}
        />
        <label>Relationship</label>
          <input
          type="text"
          id="relationship"
          placeholder="Mother"
          name="relationship"
          required
          value={contact.relationship}
          onChange={handleInput}
        />
        <label>Email</label>
        <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    defaultValue={contact.email}
                    onChange={handleInput}
                />
                <label>Cell Number</label>
                <input
                    type="text"
                    id="cell"
                    name="cell_number"
                    defaultValue={contact.cell_number}
                    onChange={handleInput}
                />
                <label>Home Number</label>
                <input
                    type="text"
                    id="home"
                    name="home_number"
                    required
                    defaultValue={contact.home_number}
                    onChange={handleInput}
                />
                <label>Address</label>
                <input
                    type="text"
                    id="address"
                    placeholder="42 Wallaby Way"
                    name="address"
                    required
                    defaultValue={contact.address}
                    onChange={handleInput}
                />
                <label>Birthday</label>
                <input
                    type="date"
                    id="date"
                    name="date"
                    placeholder=""
                    required
                    defaultValue={contact.date}
                    onChange={handleInput}
                />
                <label>Notes</label>
                <input
                    type="text"
                    id="notes"
                    name="notes"
                    placeholder=""
                    required
                    defaultValue={contact.notes}
                    onChange={handleInput}
                />
                <label>Image</label>
                <input
                    type="text"
                    id="image"
                    name="image"
                    placeholder=""
                    required
                    defaultValue={contact.image}
                    onChange={handleInput}
                />
      </fieldset>
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
