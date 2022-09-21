class UsersController < ApplicationController

    skip_before_action :authorize, only: [:create]
    
    def create 
        user = User.create!(user_params)
        render json: user, status: :created
    end

    def show
        currentUser = current_user
        render json: currentUser, include: ['posts', 'comments', 'comments.post'], status: :ok
    end

    def update
        user = current_user.update!(user_params)
        render json: user, status: :ok
    end

    def destroy
        current_user.destroy
        head :no_content
    end

    def profile
        @user = User.find_by(id: params[:id])
        render json: @user, status: :ok
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation, :email)
    end
end

