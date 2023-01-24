class ReviewsController < ApplicationController
    
    def index
        reviews = Review.all
        render json: reviews
    end

    def show
        review = Review.find!(params[:id])
        render json: review
    end

    def create
        review = Review.create(review_params)
        render json: review, status: :created
    end

    def update
        review = Review.find!(params[:id])
        review.update(review_params)
        render json: review
    end

    def destroy

    end

    private

    def review_params
        params.permit(:headline, :rating, :comment, :restaurant_id, :user_id)
    end


end
