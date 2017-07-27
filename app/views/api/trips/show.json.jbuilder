json.extract! @trip,
  :id,
  :home,
  :visitor,
  :start_date,
  :end_date,
  :totalcost

  json.image_url asset_path(@trip.home.image.url)
