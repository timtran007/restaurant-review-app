class RestaurantsController < ApplicationController
    def index
        restaurants = Restaurant.all
        render json: restaurants, include: ['users', 'users.reviews']
    end

    def show
        restaurant = Restaurant.find(params[:id])
        render json: restaurant, include: ['users', 'users.reviews']
    end
end
