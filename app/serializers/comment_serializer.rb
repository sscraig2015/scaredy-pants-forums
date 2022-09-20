class CommentSerializer < ActiveModel::Serializer
  attributes :id, :body
  
  belongs_to :user
  belongs_to :post

  has_many :posts, through: :users
end
