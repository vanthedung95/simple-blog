// var express = require('express');
import express from 'express';
var router = express.Router();

import userController from '../controllers/userController';
import blogController from '../controllers/blogController';


let _userController = new userController();
let _blogController = new blogController();

router.post('/register', _userController.register);
router.put('/profile/:id', _userController.updateProfile);

router.get('/blogs', _blogController.list);
router.get('/blog-by-user', _blogController.getByUser);
router.get('/blog/:id', _blogController.getDetail);
router.post('/blog', _blogController.create);

module.exports = router;
