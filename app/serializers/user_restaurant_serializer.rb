class UserRestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :image_url, :cuisine, :price, :reviews


end
