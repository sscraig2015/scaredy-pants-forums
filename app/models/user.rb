class User < ApplicationRecord
    has_secure_password

    validates :username, presence: true, uniqueness: true
    validates :password, presence: true

    has_many :posts, dependent: :destroy
    has_many :comments, dependent: :destroy
    has_many :topics, through: :posts
end
