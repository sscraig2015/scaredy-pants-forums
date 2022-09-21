class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :topics

  has_many :posts
  has_many :comments
end
