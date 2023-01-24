class UsersController < ApplicationController
    def show
        user = User.find(params[:id])
        render json: user, include: ['restaurants', 'restaurants.reviews']
    end
end
