class UsersController < ApplicationController

    skip_before_action :authorize
    
    def create 
        user = User.create!(user_params)
        render json: user, status: :created
    end

    def show
        
        currentUser = User.find_by!(id: session[:user_id])
        render json: currentUser, status: :ok
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation, :email)
    end
end
