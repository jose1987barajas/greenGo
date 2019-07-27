const router = require('express').Router()
const { signup, login, logout, profile } = require('../controllers/auth.controller')
const passport = require('../config/passport')
const { verifyToken } = require('../config/jwt')
const uploadCloud = require('../config/cloudinary')
const { upload } = require('../controllers/uploadController')

router.post('/signup', signup)

router.post('/login', passport.authenticate('local'), login)

router.get('/logout', logout)

router.get('/profile', verifyToken, profile)

router.post('/upload', uploadCloud.single('photo'), upload)

module.exports = router
