class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :headline, :rating, :comment, :restaurant_id, :user_id

  belongs_to :user
  belongs_to :restaurant
end
