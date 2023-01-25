class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :image_url, :cuisine, :price

  has_many :reviews, serializer: UserReviewSerializer
end
