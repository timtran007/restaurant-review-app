class UsersController < ApplicationController

    before_action :authorize
    skip_before_action :authorize, only: [:create]

    # def index
    #     users = User.all
    #     render json: users
    # end
    
    def create
        
        user = User.create!(user_params)
        if user &.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {errors: user.errors.full_messages}
        end
    end
    
    def show
        find_user
        render json: find_user
    end

    private
    def user_params
        params.permit(:name, :image_url, :user_name, :password, :password_confirmation)
    end

end
