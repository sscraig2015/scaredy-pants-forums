class Post < ApplicationRecord
  belongs_to :user
  has_many :comments, dependent: :destroy

  belongs_to :topic
  

  validates :title, presence: true
  validates :body, presence: true
end
