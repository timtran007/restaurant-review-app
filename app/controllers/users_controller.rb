class UsersController < ApplicationController

    before_action :authorize
    skip_before_action :authorize, only: [:create]

    def create
        user = User.create!(user_params)
        if user &.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {errors: user.errors.full_messages}
    end
    
    def show
        user = User.find(session[:user_id])
        render json: user
    end

    private
    def user_params
        params.permit(:name, :image_url, :user_name, :passowrd, :password_confirmation)
    end

end
