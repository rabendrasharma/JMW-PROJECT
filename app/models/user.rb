class User < ApplicationRecord
  validates :number, length: { minimum: 10 }
  validates :name, presence: true
  validates :email, presence: true
end
