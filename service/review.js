const reviewData = require("../data/alexa.json")

module.exports = {
    saveReview: async (req) => {
        try {
            reviewData.push(req.body);

            return reviewData;
        } catch (error) {
            throw error
        }
    },

    getReviews: async (req) => {
        try {
            //if condition when filer is required
            if (req.query.rating || req.query.reviewed_date || req.query.storeType) {
                //if condition when fitler is required by date
                if (req.query.reviewed_date) {
                    const filteredData = reviewData.filter(item => {
                        return new Date(item.reviewed_date).setHours(0, 0, 0, 0) == new Date(req.query.reviewed_date).setHours(0, 0, 0, 0)
                    });
                    return filteredData;
                }
                //else condition when fitler is required by store or rating
                else {
                    const filterByValue = req.query.rating || req.query.storeType;
                    const filterKey = req.query.rating ? 'rating' : "review_source"
                    const filteredData = reviewData.filter(item => item[filterKey] == filterByValue);
                    return filteredData;
                }
            }
            //else condition when filter is not reuired
            else {
                return reviewData;
            }
        } catch (error) {
            console.log(error)
            throw error
        }
    },

    monthlyRatingByStore: async (req) => {
        try {
            //following reduce will return the group by data with sum of rating and count with each key
            const grouped = reviewData.reduce(function (prev, item) {
                if (!prev[item.review_source]) {
                    prev[item.review_source] = { rating: item.rating, count: 1 };
                    return prev;
                }
                prev[item.review_source].rating += item.rating;
                prev[item.review_source].count += 1;
                return prev;
            }, {}); 

            for (let item in grouped) {
                grouped[item] = grouped[item].rating / grouped[item].count
            }

            return grouped;
        } catch (error) {
            console.log(error)
            throw error
        }
    },

    totalRatingByCategory: async (req) => {
        try {
            // following logic will simply return the data with groupby rating
            const grouped = reviewData.reduce(function (prev, item) {
                if (!prev[item.rating]) {
                    prev[item.rating] = { count: 1 };
                    return prev;
                }
                prev[item.rating].count += 1;
                return prev;
            }, {});

            return grouped;
        } catch (error) {
            console.log(error)
            throw error
        }
    }
}
