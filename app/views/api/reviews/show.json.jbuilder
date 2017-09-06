json.extract! @review,
  :id,
  :rating,
  :body,
  :author,
  :created_at
  json.image_url asset_path(@review.author.image.url(:small))
