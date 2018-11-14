const chai = require('chai');
const expect = chai.expect;

var Hotel = require('../models/Hotel');
var Review = require('../models/Review');

describe('Hotel', function() {
    it("Should return lowercase name and city joined by '_' ",()=>{
        var hotel = new Hotel("Hilton Metropole", "London");
        var result = hotel.urlSlug();
        expect(result).to.equal("hilton_metropole_london");
    })
    it("Should create reviews and add to the hotel",()=>{
        var hotel = new Hotel("Hilton Metropole", "London");
        var review1 = new Review(5, "Excellent!", "2018-12-17");
        hotel.addReview(review1);
        expect(hotel.Review.)
    })
    // it("Should return number of reviews",()=>{
    //     var hotel = new Hotel("Hilton Metropole", "London");
    //     var review1 = new Review(5, "Excellent", "2018-12-17");
    //     var review2 = new Review(3, "Alright", "2018-11-05");
    //     hotel.addReview(review1);
    //     hotel.addReview(review2);
    //     count = hotel.reviewCount();
    //     expect(count).to.equal(2)  
    // })
});
