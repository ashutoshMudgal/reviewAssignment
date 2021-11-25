const {
    body,
} = require('express-validator');
module.exports = {
    reviewProvider: function () {
        return [
            body("review", " review is Required field!").exists(),
            body("author", " author is Required field!").exists(),
            body("review_source", " review_source is Required field!").exists(),
            body("rating", " rating is Required field!").exists(),
            body("title", " title is Required field!").exists(),
            body("product_name", " product_name is Required field!").exists(),
            body("reviewed_date", " reviewed_date is Required field!").exists()
        ]
    }
}