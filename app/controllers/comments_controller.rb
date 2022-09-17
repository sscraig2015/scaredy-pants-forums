class CommentsController < ApplicationController

    def create
        comment = @current_user.comments.create!(post_id: params[:post_id], body: params[:body])
        render json: comment, status: :created
    end

    def destroy
        @comment = current_user.comments.find_by!(id: params[:id])
        @comment.delete

        render json: @comment, status: :ok
    end
end
