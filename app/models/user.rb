class User < ApplicationRecord
    has_secure_password

    has_many :reviews
    has_many :restaurants through :reviews
    validates :user_name, presence: true, uniqueness: true
    validates :name, presence: true
end
