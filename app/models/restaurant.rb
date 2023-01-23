class Restaurant < ApplicationRecord
    has_many :reviews
    has_many :users, through: :reviews

    validates :name, presence: true
    validates :address, presence: true
    validates :cuisine, presence: true
    validates :price, numericality: {in: 1..3}
end
