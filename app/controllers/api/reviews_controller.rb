#Might wanna correct the N+1 Queries here. We made a join table with the users on user_id so we get the author object back easily

class Api::ReviewsController < ApplicationController
  def index
    @reviews = Review.where(home_id: params[:home_id]).includes(:author)
  end

  def create
    @review = Review.new(review_params)
    @review.author_id = current_user.id
    @review.save
  end

  private

  def review_params
    params.require(:review).permit(:rating, :body, :home_id)
  end
end
