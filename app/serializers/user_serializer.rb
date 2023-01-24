class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :user_name

  has_many :reviews, serializer: UserReviewSerializer
  has_many :restaurants, through: :reviews, serializer: RestaurantReviewSerializer
end
