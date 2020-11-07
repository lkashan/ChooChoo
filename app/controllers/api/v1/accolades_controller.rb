class Api::V1::AccoladesController < ApplicationController

  before_action :authenticate_user

  def create
    user = User.find(params[:user_id]) # should this actually be user_id or just id?
    accolade = Accolade.new(accolade_params)
    accolade.user = current_user #double check this? 

    if accolade.save
      render json: {  }
    else
      render json: { error: accolade.errors.full_message }, status: 400
    end
  end

    private

    def accolade_params
      params.require(:accolade).permit(:nominator, :body, :chosen_charity)
    end
  
end

