const express=require('express');
const router=express.Router();

const homeController = require('../controllers/homeController');
const eduController = require('../controllers/eduController');
const skillController = require('../controllers/skillController');
const projectController = require('../controllers/projectController');
const contactController = require('../controllers/contactController');



router.get('/',homeController.home);

router.get('/edu',eduController.education);
router.get('/skills',skillController.skills);
router.get('/projects',projectController.projects);
router.get('/contact',contactController.contact);

module.exports = router;