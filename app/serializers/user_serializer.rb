class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :user_name

  #custom method for all restaurant information associated from user.reviews
  # def restaurants
  #   object.reviews.map do |review|
  #     {id: review.restaurant.id,
  #     name: review.restaurant.name,
  #     address: review.restaurant.address,
  #     image_url: review.restaurant.image_url,
  #     cuisine: review.restaurant.cuisine,
  #     price: 
  #       if review.restaurant.price == 1
  #         "$"
  #       elsif review.restaurant.price == 2
  #         "$$"
  #       elsif review.restaurant.price == 3
  #         "$$$"
  #       else
  #         "$$$$"
  #       end,
  #     review: {
  #       headline: review.headline,
  #       rating: review.rating,
  #       comment: review.comment,
  #       restaurant_id: review.restaurant_id,
  #       user_id: review.user_id,
  #     }
  #   }
  #   end
  # end

  
  #get signed in user's restaurant
  has_many :restaurants, serializer: RestaurantReviewSerializer
  
end
