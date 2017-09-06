class Api::HomesController < ApplicationController
  def index
    bounds = params[:bounds]
    @homes = bounds ? Home.in_bounds(bounds) : Home.all

    if (params[:minPrice] && params[:maxPrice])
      @homes = @homes.where(price: price_range)
    end

    if (params[:roomtype] && params[:roomtype] != "alltypes")
      @homes = @homes.where("roomtype = ?", params[:roomtype])
    end

    if (params[:beds])
      @homes = @homes.where("beds = ?", params[:beds])
    end

    if (params[:bedrooms])
      @homes = @homes.where("bedrooms = ?", params[:bedrooms])
    end

    if (params[:bathrooms])
      @homes = @homes.where("bathrooms = ?", params[:bathrooms])
    end
  end

  def show
    @home = Home.find(params[:id])
    if @home
      render :show
    else
      render json: @home.errors.full_messages, status: 404
    end
  end

  def create
    @home = Home.new(home_params)

    if @home.save
      render :show
    else
      render json: @home.errors.full_messages, status: 422
    end

  end

  private

  #All of this will come in from the AJAX request and the data it sends through
  def home_params
    params.require(:home).permit(
      :lat, :lng, :price, :host,
      :title, :description,
      :address, :start_date, :end_date, :bathrooms,
      :beds, :bedrooms, :bounds, :roomtype
    )
  end

  def price_range
    (params[:minPrice]..params[:maxPrice])
  end

end
