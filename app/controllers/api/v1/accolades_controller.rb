class Api::V1::AccoladesController < ApplicationController
  def index
    accolades = Accolade.all
    render json: accolades

  def new
    user = User.find(params[:user_id])
    accolade = Accolade.new
  end

  def create
    accolade = Accolade.new(accolade_params)
    user = User.find(params[:user_id]) # should this actually be user_id or just id?
    accolade.user = accolade #current_user????

    if accolade.save
      render json: { accolade }
    else
      render json: { error: accolade.errors.full_message }, status: 400
    end
  end

  private

  def accolade_params
    params.require(:accolade).permit(:nominator, :body, :chosen_charity)
  end
  
end

