class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :headline, :rating, :comment
  
  belongs_to :restaurant
  belongs_to :user
end
