class Hotel {
  constructor(name, city) {
    this.name = name;
    this.city = city;
    this.reviews = [];
  }
  reviewCount() {
    //=> 0
    var total;
    for (var i=0; i<this.reviews.length;i++){
      total = total + 1
    }
    return total
  }

  rating() {
    //
  }
  ratingAsStars() {
    //
  }
  urlSlug() {
    // => "hilton_metropole_london"
    return ((((this.name+'_'+this.city).split(' ')).join('_')).toLowerCase());
  }
  addReview(review){
    this.reviews.push(review)
  }
}

module.exports = Hotel;
