class Api::TripsController < ApplicationController

  #query the database for trips that belong to the current user and this makes a join table
  #with the home table so that we can get everything with just one query to the database
  #This could have also been done with an assocation between user and homes through trips
  #associations are a good way to filter things out when you are going between several tables and foreign keys.

  def index
    if Trip.all.length != 0
      @trips = current_user.trips.includes(:home)
    else
      render json: "There are no booked trips"
    end
  end

  #the only thing that we don't have for this trip is the visitor_id and that id
  #is the current user's id so trip.visitor = current_user will set the visitor id up since
  #we have made the asssociation for this to work. No need to take the visitor id from the front
  #end since this id will belong to the current user in the back end.

  def create
    @trip = Trip.new(trip_params)
    @trip.visitor = current_user
    if @trip.save
      render :show
    else
      render json: @trip.errors.full_messages, status: 422
    end
  end

  def show
    @trip = Trip.find(params[:id])
    if @trip
      render :show
    else
      render json: @trip.errors.full_messages, status: 404
    end
  end

  #We go back with all the trips and then we delete the one we don't want from the trips reducer.
  #The state of trips changes and then the tripsindex re-renders.

  #N+1 queries were prevented here because we found all the trips belonging to the current user by using visitor id association
  #and then we found the home information by making a join table with homes by querying the homes table for ids that are the same
  #as the home ids in the current join table of user and trips. Overall this is done to get a lot of information about a trip including
  #user and home data that are all going to be picked up by jbuilder


  def destroy
    @trip = Trip.find(params[:id])

    if @trip.destroy
      @trips = current_user.trips.includes(:home)
      render :index
    else
      render json: @trip.errors.full_messages, status: 404
    end
  end

  private
  def trip_params
    params.require(:trip).permit(:home_id, :host_id, :start_date, :end_date, :totalcost)
  end

end
