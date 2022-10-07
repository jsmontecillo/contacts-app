const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./db/db-connection.js');

const app = express();

const PORT = 9090;
app.use(cors());
app.use(express.json());

// creates an endpoint for the route /api
app.get('/', (req, res) => {
  res.json({ message: 'Hello from My template ExpressJS' });
});

// create the get request
app.get('/api/contacts', cors(), async (req, res) => {
  try {
    const { rows: contacts_list } = await db.query('SELECT * FROM contacts_list');
    res.send(contacts_list);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

/*
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
*/

app.post('/api/contacts', cors(), async (req, res) => {
  const newContact = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    relationship: req.body.relationship,
    email: req.body.email,
    cell_number: req.body.cell_number,
    home_number: req.body.home_number,
    address: req.body.address,
    notes: req.body.notes,
    image: req.body.image
  };
  console.log(newContact);
  try {
    const result = await db.query(
    'INSERT INTO contacts_list(first_name, last_name, relationship, email, cell_number, home_number, address, notes, image) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
    [newContact.first_name, newContact.last_name, newContact.relationship, newContact.email, newContact.cell_number, newContact.home_number, newContact.address, newContact.notes, newContact.image]
    );
    console.log(result.rows[0]);
    res.json(result.rows[0]);
  } catch(e) {
    return res.status(400).json({e});
  }

});

app.delete(`/api/contacts/:id`, cors(), async(req,res) => {
  const userId = req.params.id;
  await db.query('DELETE FROM contacts_list WHERE id=$1', [userId]);
  res.status(200).end();
});
// create the POST request
// app.post('/api/students', cors(), async (req, res) => {
//   const newUser = {
//     firstname: req.body.firstname,
//     lastname: req.body.lastname,
//   };
//   console.log([newUser.firstname, newUser.lastname]);
//   const result = await db.query(
//     'INSERT INTO students(firstname, lastname) VALUES($1, $2) RETURNING *',
//     [newUser.firstname, newUser.lastname],
//   );
//   console.log(result.rows[0]);
//   res.json(result.rows[0]);
// });

// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
