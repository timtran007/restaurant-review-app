class UserSerializer < ActiveModel::Serializer
  attributes :

  has_many :restaurants, through: :reviews
end
