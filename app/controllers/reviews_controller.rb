class ReviewsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_record_not_found
    def index
        reviews = Review.all
        render json: reviews
    end

    def show
        review = Review.find_by!(id: params[:id])
        render json: review
    end

    def create
    end

    def update
    end

    def destroy
    end

    private

    def render_record_not_found(invalid)
        binding.break
        render json: {error: ["record not found"]}, status: :not_found
    end

end
