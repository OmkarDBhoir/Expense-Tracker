const express = require('express');
const router = express.Router();

const usersRouter = require('./users');
const incomeRouter = require('./income');
const expenseRouter = require('./expense');
const authRouter = require('./auth');

router.use('/users', usersRouter);
router.use('/income', incomeRouter);
router.use('/expense', expenseRouter);
router.use('/', authRouter);


module.exports = router;
