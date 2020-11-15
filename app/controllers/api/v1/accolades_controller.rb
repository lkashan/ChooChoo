class Api::V1::AccoladesController < ApplicationController
  def index
    accolades = Accolade.all
    render json: accolades
  end

  def show
    accolades = Accolade.find(params[:id])
    render json: accolades
  end

  def new
    user = User.find(params[:user_id])
    accolade = Accolade.new
  end

  def create
    user = User.find(params[:user_id]) # should this actually be user_id or just id?
    accolade = Accolade.new(accolade_params)
    accolade.user = user

    if accolade.save
      render json: { accolade: accolade }
    else
      render json: { error: accolade.errors.full_message }, status: 400
    end
  end

  private

  def accolade_params
    params.require(:accolade).permit(:nominator, :body)
  end
  
end

