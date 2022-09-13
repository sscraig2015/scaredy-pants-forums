class PostsController < ApplicationController

    def create
        newUser = @current_user.Post.create!(user_params)
        render json: newUser, status: :ok
    end

    private

    def user_params
        params.permit(:body, :tile)
    end
end
