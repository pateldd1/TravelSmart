json.array! @reviews do |review|
  json.extract! review, :id, :body, :rating, :created_at, :author
  json.image_url asset_path(review.author.image.url(:small))
  # json.author review.author.first
end

# json.set for the reviews is not done because you won't ever need exactly one trip to look at
