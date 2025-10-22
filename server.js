const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/medicine_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Schema and model
const medicineSchema = new mongoose.Schema({
  id: Number,
  mname: String,
  date: String,     
  name: String,
  phone: String
});
const Medicine = mongoose.model('Medicine', medicineSchema);

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve HTML form
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Get all medicines
app.get('/medicines', async (req, res) => {
  const medicines = await Medicine.find();
  res.json(medicines);
});

// Get medicine by ID
app.get('/medicines/:id', async (req, res) => {
  const medicine = await Medicine.findOne({ id: parseInt(req.params.id) });
  if (medicine) {
    res.json(medicine);
  } else {
    res.status(404).send('Medicine not found');
  }
});

// Add new medicine
app.post('/medicines', async (req, res) => {
  let { id, mname, date, name, phone } = req.body;
  // Auto-generate id if not provided
  if (!id) {
    const lastMed = await Medicine.findOne().sort({ id: -1 });
    id = lastMed ? lastMed.id + 1 : 1;
  }
  const medicine = new Medicine({ id, mname, date, name, phone });
  await medicine.save();
  const isForm = req.headers['content-type'] === 'application/x-www-form-urlencoded';
  if (isForm) {
    res.send(`<h3>Medicine registered! <a href="/">Register another</a></h3>`);
  } else {
    res.status(201).json(medicine);
  }
});

// Delete medicine by ID
app.delete('/medicines/:id', async (req, res) => {
  const result = await Medicine.deleteOne({ id: parseInt(req.params.id) });
  if (result.deletedCount === 1) {
    res.send('Medicine deleted');
  } else {
    res.status(404).send('Medicine not found');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
