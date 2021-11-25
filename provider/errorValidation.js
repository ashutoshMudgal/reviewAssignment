const {
    validationResult
} = require('express-validator')
module.exports = {
    validate: function (req, res, next) {
        const errors = validationResult(req); // Finds the validation errors in this request and wraps them in an object with handy functions
        if (!errors.isEmpty()) {
            res.status(400).json({ error: 1, message: errors.array()[0].msg });
        } else {
            next();
        }
    }
}