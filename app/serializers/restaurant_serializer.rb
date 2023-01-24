class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :image_url, :cuisine, :price

  has_many :users, through: :reviews
  
  
end
