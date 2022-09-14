class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest

  has_many :posts
  has_many :comments
end
