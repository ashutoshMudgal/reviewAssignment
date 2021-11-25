const { saveReview, getReview, monthlyRatingByStore, totalRatingByCategory } = require("../controllers/review.js");
const mockData = require("./__mock__/mock_data")
console.log(mockData.reqBody)
let mockRes = {
    status: statusCode => ({
        json: body => ({ statusCode, body })
    })
}

let mockReq = {
    query: {},
    body: {}
}
describe("reviews test cases", () => {

    test('saveReview test', async () => {
        mockReq.body = mockData.reqBody;
        let response = await saveReview(mockReq, mockRes);
        expect(response.statusCode).toEqual(201);
    })

    test('getReview test', async () => {
        let response = await getReview(mockReq, mockRes);
        expect(response.statusCode).toEqual(200);
        expect(Array.isArray(response.body.data)).toBe(true);
    })

    test('monthlyRatingByStore test', async () => {
        let response = await monthlyRatingByStore(mockReq, mockRes);
        expect(response.statusCode).toEqual(200);
        expect(typeof response.body.data == "object").toBe(true);
    })

    test('totalRatingByCategory test', async () => {
        let response = await totalRatingByCategory(mockReq, mockRes);
        expect(response.statusCode).toEqual(200);
        expect(typeof response.body.data == "object").toBe(true);
    })
})