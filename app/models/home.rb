# == Schema Information
#
# Table name: homes
#
#  id          :integer          not null, primary key
#  title       :string
#  description :string
#  lat         :float
#  long        :float
#  price       :integer
#  host_id     :integer          not null
#  address     :string
#  start_date  :date
#  end_date    :date
#  bathrooms   :integer
#  bedrooms    :integer
#  image_url   :string
#  beds        :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Home < ApplicationRecord
  validates :lat, :long, :price, :host, :title, :description, :address, :roomtype,
  :start_date, :end_date, :bathrooms, :bedrooms, :beds, :image, presence: true
  #
  # validates :cancellation, inclusion: { in: %w(Strict Moderate Flexible)}

  # has_attached_file :image, default_url: "home2.jpg"
  # validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  has_attached_file :image, default_url: "http://res.cloudinary.com/dxplu7mua/image/upload/v1500922276/Home1_vghd9e.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  belongs_to :host,
    class_name: :User,
    foreign_key: :host_id

  # has_many :trips,
  #   class_name: :Trip,
  #   foreign_key: :home_id
  #
  # has_many :reviews,
  #   class_name: :Review,
  #   foreign_key: :home_id

  def self.in_bounds(bounds)
  self.where("lat < ?", bounds[:northEast][:lat])
      .where("lat > ?", bounds[:southWest][:lat])
      .where("long > ?", bounds[:southWest][:lng])
      .where("long < ?", bounds[:northEast][:lng])
  end

end
