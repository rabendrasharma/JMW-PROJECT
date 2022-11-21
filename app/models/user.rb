class User < ApplicationRecord
  validates :number, length: { minimum: 10 }
  validates :name, presence: true
  validates :email, presence: true
   enum select_language: {ROR: "ROR Developer", Node_JS: 'Node JS Developer', React_JS: 'React JS Developer', Python: 'Python Developer', Architect: 'Technical Architect'}
end
