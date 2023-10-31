const express = require('express');
const router = express.Router(); //
const { auth } = require('../middleware/auth');

const {
  add,
  all,
  remove,
  edit,
  employee,
} = require('../controllers/employees');

//api/employees
router.get('/', auth, all);
//api/employees/:id
router.get('/:id', auth, employee);
//api/employees/addçç
router.post('/add', auth, add);
//api/employees/remove/:id
router.post('/remove/:id', auth, remove);
//api/employees/remove/:id
router.put('/edit/:id', auth, edit);

module.exports = router;
