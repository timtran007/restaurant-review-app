class ReviewsController < ApplicationController
    
    def index
        reviews = Review.all
        render json: reviews
    end

    def show
        review = Review.find(params[:id])
        render json: review
    end

    def create
        find_user
        review = find_user.reviews.create!(review_params)
        render json: review, status: :created
    end

    def update
        find_user
        review = find_user.reviews.find(params[:id])
        review.update(review_params)
        render json: review
    end

    def destroy
        find_user
        review = find_user.reviews.find(params[:id].to_i)
        review.destroy
        render json: review
    end

    private

    def review_params
        params.permit(:headline, :rating, :comment, :restaurant_id, :user_id)
    end


end
