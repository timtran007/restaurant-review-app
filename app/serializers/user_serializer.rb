class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :user_name

  has_many :restaurants, serializer: UserRestaurantSerializer
  
end
