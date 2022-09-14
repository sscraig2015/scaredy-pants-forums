class PostsController < ApplicationController

 

    def create
        newUser = current_user.posts.create!(user_params)
        render json: newUser, status: :ok
    end

    def index
        render json: Post.all, status: :ok
    end

    def show
        post = Post.find_by!(id: params[:id])
        render json: post, status: :ok
    end

    private

    def user_params
        params.permit(:body, :title)
    end
end
