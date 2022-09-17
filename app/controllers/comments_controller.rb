class CommentsController < ApplicationController

    def create
        comment = @current_user.comments.create!(post_id: params[:post_id], body: params[:body])
    end

    def destroy
        @comment = current_user.comments.find_by!(id: params[:id])
        @comment.delete

    end
end
