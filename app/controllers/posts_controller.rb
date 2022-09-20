class PostsController < ApplicationController


    def create
        
        newUser = current_user.posts.create!(user_params)
        render json: newUser, status: :ok
    end

    def index
        render json: Post.all.order(created_at: :desc), status: :ok
    end

    def show
        post = Post.find_by!(id: params[:id])
        render json: post, include: ['user', 'comments', 'comments.user'], status: :ok
    end

    def destroy
        @post = current_user.posts.find_by!(id: param[:id])
        @post.delete
    end

    private

    def user_params
        params.permit(:body, :title, :topic_id, :user_id)
    end
end
