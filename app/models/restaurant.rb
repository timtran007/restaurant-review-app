class Restaurant < ApplicationRecord
    has_many :reviews
    has_many :users, through: :reviews

    validates :name, presence: true
    validates :address, presence: true
    validates :cuisine, inclusion: { in: ['American', 'Mexican', 'Italian', 'Asian', 'Mediterranean', 'French']}
    validates :price, numericality: {in: 1..3}
end
