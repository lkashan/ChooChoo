class Api::V1::UsersController < ApplicationController
  before_action :authenticate_user 

  def index
    users = User.all 
    render json: users
  end

  def show
    user = User.find(params[:id])
    render json: user, serializer: UserSerializer
  end

  def search
    @users = User.where("first_name ILIKE ? OR last_name ILIKE ?", "%#{params['search_string']}%", "%#{params['search_string']}%")
    render json: @users
  end
end