@trips.each do |trip|

  json.set! trip.id do
    json.extract! trip,
      :id,
      :home,
      :start_date,
      :end_date,
      :totalcost

      json.image_url asset_path(trip.home.image.url)
  end
end
