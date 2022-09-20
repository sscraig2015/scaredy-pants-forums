class CommentsController < ApplicationController

    def create
        comment = @current_user.comments.create!(post_id: params[:post_id], body: params[:body])
    end

    def show
        comment = @current_user.comments.find_by!(id: params[:id])
        render json: comment, status: :ok
    end

    def destroy
        @comment = current_user.comments.find_by!(id: params[:id])
        @comment.delete

    end
end
