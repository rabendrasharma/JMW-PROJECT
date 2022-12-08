class User < ApplicationRecord
  mount_uploader :image, ImageUploader
  validates :number, length: { minimum: 10 }
  validates :name, presence: true
  validates :email, presence: true

end
