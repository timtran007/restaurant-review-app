class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :image_url, :cuisine, :price, :restaurant_rating, :number_of_reviews

  def price
    if object.price == 1
      "$"
    elsif object.price == 2
      "$$"
    elsif object.price == 3
      "$$$"
    end
  end

  def restaurant_rating
    object.reviews.average(:rating).to_f
  end

  def number_of_reviews
    object.reviews.length
  end

  has_many :reviews, serializer: UserReviewSerializer
end
