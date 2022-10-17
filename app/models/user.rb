class User < ApplicationRecord
  validates :number, length: { minimum: 10 }
  validates :name, presence: true
  validates :email, presence: true
   enum select_language: {ROR_Developer: "ROR Developer", Node_JS_Developer: 'Node JS Developer', Python_Developer: 'React JS Developer', Python_Developer: 'Python Developer', Technical_Architect: 'Technical Architect'}
end
