class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :created_at, :topic
  
  belongs_to :user
  has_many :comments
  
end
