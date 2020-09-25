const express = require('express');
const Offer = require('../models/Offer');
const db = require('../config/database')
const offersRouter = express.Router();