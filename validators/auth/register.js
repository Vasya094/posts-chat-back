const { body } = require('express-validator')

exports.rules = (() => {
    return [
        body('name').notEmpty(),
        body('email').isEmail(),
        body('password').isLength({ min: 5 })
    ]
})()
