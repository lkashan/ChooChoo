class Accolade < ApplicationRecord
  validates :body, presence: true
  # validates :chosen_charity, presence: true
  validates :nominator, presence: true


  belongs_to :user # the one that got nominated
# belongs_to :nominator, class_name: "User", foreign_key: "nominator_id", optional: true
end