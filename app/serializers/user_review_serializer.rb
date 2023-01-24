class UserReviewSerializer < ActiveModel::Serializer
  attributes :id, :headline, :rating, :comment, :restaurant_id
  has_many :reviews
end
