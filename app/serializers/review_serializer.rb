class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :headline, :rating, :comment
  has_one :restaurant
  has_one :user
end
