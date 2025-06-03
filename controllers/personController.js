// controllers/personController.js
const Person = require('../models/person');

// @desc    List all people
// @route   GET /person
exports.getAllPersons = async (req, res) => {
  try {
    const people = await Person.find().sort({ createdAt: -1 });
    res.render('person/list', { people });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

// @desc    Show create form
// @route   GET /person/new
exports.showCreateForm = (req, res) => {
  res.render('person/form', {
    person: {},
    formAction: '/person',
    formMethod: 'POST',
    submitText: 'Create Person',
    errors: {}
  });
};

// @desc    Create a new person
// @route   POST /person
exports.createPerson = async (req, res) => {
  try {
    await Person.create({
      name: req.body.name,
      age: req.body.age,
      gender: req.body.gender,
      mobile: req.body.mobile
    });
    res.redirect('/person');
  } catch (err) {
    console.error(err);
    res.render('person/form', {
      person: req.body,
      formAction: '/person',
      formMethod: 'POST',
      submitText: 'Create Person',
      errors: err.errors || {}
    });
  }
};

// @desc    Show edit form
// @route   GET /person/:id/edit
exports.showEditForm = async (req, res) => {
  try {
    const person = await Person.findById(req.params.id);
    if (!person) return res.status(404).render('404', { url: req.originalUrl });
    res.render('person/form', {
      person,
      formAction: `/person/${person._id}?_method=PUT`,
      formMethod: 'POST',
      submitText: 'Update Person',
      errors: {}
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

// @desc    Update person
// @route   PUT /person/:id
exports.updatePerson = async (req, res) => {
  try {
    const { name, age, gender, mobile } = req.body;
    const person = await Person.findByIdAndUpdate(
      req.params.id,
      { name, age, gender, mobile },
      { new: true, runValidators: true }
    );
    if (!person) return res.status(404).render('404', { url: req.originalUrl });
    res.redirect('/person');
  } catch (err) {
    console.error(err);
    const personData = { _id: req.params.id, ...req.body };
    res.render('person/form', {
      person: personData,
      formAction: `/person/${req.params.id}?_method=PUT`,
      formMethod: 'POST',
      submitText: 'Update Person',
      errors: err.errors || {}
    });
  }
};

// @desc    Show delete confirmation
// @route   GET /person/:id/delete
exports.showDeleteForm = async (req, res) => {
  try {
    const person = await Person.findById(req.params.id);
    if (!person) return res.status(404).render('404', { url: req.originalUrl });
    res.render('person/delete', { person });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

// @desc    Delete person
// @route   DELETE /person/:id
exports.deletePerson = async (req, res) => {
  try {
    await Person.findByIdAndDelete(req.params.id);
    res.redirect('/person');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};
