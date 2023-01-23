class RestaurantSerializer < ActiveModel::Serializer
  attributes :id

  has_many :reviewers, through: :reviews
end
