class AccoladeSerializer < ActiveModel::Serializer
  attributes :id, :body, :chosen_charity, :nominator

   belongs_to :user, #ifff: :current_user? << Check necc

   def current_user?
    scope == object.user
   end
end
