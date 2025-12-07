const express = require('express');
const router = express.Router();

const usersRouter = require('./users');
const incomeRouter = require('./income');
const expenseRouter = require('./expense');
const authRouter = require('./auth');
const protectedRoute = require('../middleware/middleware');

router.use('/users', protectedRoute, usersRouter);
router.use('/income', protectedRoute, incomeRouter);
router.use('/expense', protectedRoute, expenseRouter);
router.use('/auth', authRouter);


module.exports = router;
