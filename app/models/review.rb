class Review < ApplicationRecord
  belongs_to :restaurant
  belongs_to :user
  validates :headline, presence: true
  validates :rating, numericality: {in: 1..5}
  validates :comment, length: {minimum: 50}
end
