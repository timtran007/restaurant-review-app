class RestaurantReviewSerializer < ActiveModel::Serializer
  #what we want to see from the restaurants
  attributes :id, :name, :address, :image_url, :cuisine, :price

  has_many :reviews

end
