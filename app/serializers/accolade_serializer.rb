class AccoladeSerializer < ActiveModel::Serializer
  attributes :id, :body, :nominator#, :chosen_charity

   belongs_to :user #ifff: :current_user? << Check necc

   def current_user?
    scope == object.user
   end
end
