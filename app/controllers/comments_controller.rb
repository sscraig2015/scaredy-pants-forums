class CommentsController < ApplicationController

    def create
        
        comment = Comment.create!(post_id: params[:post_id], user_id: session[:user_id], body: params[:body] )
        render json: comment, status: :created
    end
end
