To start the project - 
1. npm i
2. npm start

APIS - 
1. Save review - \
http://localhost:3000/review
\
type : POST
\
Payload: {
        "review": "test",
        "author": "test",
        "review_source": "GooglePlayStore",
        "rating": 5,
        "title": "",
        "product_name": "Amazon Alexa",
        "reviewed_date": "2017-05-24T00:00:00.000Z"
    }


2. List reviews - \
http://localhost:3000/review
\
type: get\

Filter by ratings -\
localhost:3000/review?rating=4
\

Filter by store-
\
localhost:3000/review?review_source=iTunes
\


3. Monthly rating by store -
\
localhost:3000/review/monthlyRatingByStore


type get


4. total rating by category -\
localhost:3000/review/totalRatingByCategory


