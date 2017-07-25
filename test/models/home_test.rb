# == Schema Information
#
# Table name: homes
#
#  id                 :integer          not null, primary key
#  title              :string
#  description        :string
#  roomtype           :string
#  lat                :float
#  long               :float
#  price              :integer
#  host_id            :integer          not null
#  address            :string
#  start_date         :date
#  end_date           :date
#  bathrooms          :integer
#  bedrooms           :integer
#  beds               :integer
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

require 'test_helper'

class HomeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
