class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :user_name


  
  #get signed in user's restaurant
  has_many :restaurants, serializer: RestaurantReviewSerializer
  has_many :reviews
  
end
