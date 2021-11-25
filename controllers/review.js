const reviewService = require("../service/review.js");

module.exports = {
    saveReview: async (req, res, next) => {
        try {
            let response = await reviewService.saveReview(req)
            return res.status(201).json({ error: 0 })
        } catch (error) {
            res.status(500).json({ error: 1, data: error })
        }
    },

    getReview: async (req, res, next) => {
        try {
            let response = await reviewService.getReviews(req)
            return res.status(200).json({ error: 0, data: response })
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: 1, data: error })
        }
    },

    monthlyRatingByStore: async (req, res, next) => {
        try {
            let response = await reviewService.monthlyRatingByStore(req)
            return res.status(200).json({ error: 0, data: response })
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: 1, data: error })
        }
    },

    totalRatingByCategory: async (req, res, next) => {
        try {
            let response = await reviewService.totalRatingByCategory(req)
            return res.status(200).json({ error: 0, data: response })
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: 1, data: error })
        }
    },


}