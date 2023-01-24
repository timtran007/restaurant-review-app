class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :image_url, :cuisine, :price

  has_many :users
  has_many :reviews
end
