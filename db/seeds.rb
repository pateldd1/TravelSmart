# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with long: lng,
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# def lat
#   (37.773972 * rand(1..1.00042357))
# end
#
# def lng # SF
#   (-122.431297 * rand(1..1.00057267))
# end

us =
[
    [37.69725134,	-122.50191],
    [37.69449765,	-122.4936328],
    [37.72209423,	-122.4945825],
    [37.6623514,	-122.4884589],
    [37.64979023,	-122.4534288],
    [37.65876878,	-122.4702279],
    [37.66883791,	-122.4871438],
    [37.71303327,	-122.4658245],
    [37.65205521,	-122.485547],
    [37.66406807,	-122.5120683],
    [37.70188669,	-122.4207392],
    [37.66524883,	-122.4898915],
    [37.7027109,	-122.4960203],
    [37.70582334,	-122.5031507],
    [37.69066087,	-122.5003003],
    [37.65041193,	-122.4537927],
    [37.7180281,	-122.4585893],
    [37.68482256,	-122.4884409],
    [37.69046322,	-122.4421678],
    [37.71114357,	-122.4813433],
    [45.27883485,	-119.6795484],
    [38.33461733,	-108.0762212],
    [35.43150319,	-108.7734488],
    [35.84726086,	-114.1795519],
    [48.14279393,	-112.7411832],
    [34.8605834,	-117.0450643],
    [43.44408061,	-105.0246742],
    [43.52554886,	-110.8869722],
    [42.99053945,	-118.243434],
    [34.63116241,	-101.575246],
    [37.60104243,	-110.5439313],
    [49.19802575,	-116.2205825],
    [44.51673529,	-107.2811645],
    [45.69832326,	-102.7904089],
    [42.02807052,	-109.6033095],
    [50.35088446,	-114.9466808],
    [39.74957657,	-112.3207599],
    [48.20954648,	-104.2892935],
    [41.65927137,	-117.5359966],
    [40.19738351,	-104.6587981],
    [42.28160012,	-102.1170445],
    [34.43947806,	-101.3342404],
    [34.18501552,	-101.7725226],
    [38.41295057,	-106.4476464],
    [45.87383438,	-118.4661676],
    [37.98435639,	-107.9596022],
    [45.86217651,	-120.4100119],
    [42.8992828,	-109.6856904],
    [34.34482145,	-107.4633391],
    [33.04498523,	-114.3089408]
  ]

def title
  (Faker::TwinPeaks.location)
end

def price
  (rand(200..4000))
end

def address
   (Faker::Address.street_address + ", " + Faker::Address.city + ", " + Faker::Address.country)
end

def description
  Faker::Hipster.paragraph(rand(10..30))
end

def bathrooms
  (rand(1..5))
end

def bedrooms
  (rand(1..6))
end

def beds
  (rand(1..8))
end

def roomtype
  ["Entire home", "Private Room", "Shared Room"].sample
end

User.destroy_all
guest_user = User.create!(username: "Guest", password: "123456")
users = [
User.create!({
  "username": "Walter White",
  "password": "asdf1234",
  "image": "http://res.cloudinary.com/dxplu7mua/image/upload/v1501278502/walt_a1xbly.jpg"
}),

User.create!({
  "username": "Sheldon",
  "password": "qwerty55",
  "image": "http://res.cloudinary.com/dxplu7mua/image/upload/v1501278502/sheldon_xkyu0d.jpg"
}),

User.create!({
  "username": "Programmer",
  "password": "funny69lol",
  "image": "http://res.cloudinary.com/dxplu7mua/image/upload/v1501278502/programmer_u2mrea.jpg"
}),

User.create!({
  "username": "Penny",
  "password": "victoriasecret99",
  "image": "http://res.cloudinary.com/dxplu7mua/image/upload/v1501278502/kaley_xkvfug.jpg"
}),

User.create!({
  "username": "Jack Sparrow",
  "password": "chalupas55",
  "image": "http://res.cloudinary.com/dxplu7mua/image/upload/v1501278501/jack_sparrow_jbtq8g.jpg"
}),
User.create!({
  "username": "Hermione",
  "password": "iloveron1",
  "image": "http://res.cloudinary.com/dxplu7mua/image/upload/v1501278501/hermione_kicftk.jpg"
}),
User.create!({
  "username": "Hacker",
  "password": "policestory3",
  "image": "http://res.cloudinary.com/dxplu7mua/image/upload/v1501278502/hacker_e2e7ye.jpg"
}),
User.create!({
  "username": "Future",
  "password": "taichumaster44",
  "image": "http://res.cloudinary.com/dxplu7mua/image/upload/v1501278501/future_wx0tit.jpg"
}),
User.create!({
  "username": "James Bond",
  "password": "graduationday",
  "image": "http://res.cloudinary.com/dxplu7mua/image/upload/v1501278502/bond_uyt87c.jpg"
}),
User.create!({
  "username": "300",
  "password": "amazingeyelashes",
  "image": "http://res.cloudinary.com/dxplu7mua/image/upload/v1501278502/300_daaizt.png"
})
# User.create({
#   "email": "wolfofwall@street.com",
#   "first": "Margot",
#   "last": "Robbie",
#   "password": "queloods55",
#   "month": 8,
#   "day": 18,
#   "year": 1990,
#   "image": ""
# }),
# User.create({
#   "email": "rapper@gangsta.com",
#   "first": "Nicki",
#   "last": "Minaj",
#   "password": "ilovepinkhair",
#   "month": 5,
#   "day": 26,
#   "year": 1987,
#   "image": ""
# }),
# User.create({
#   "email": "scarlett@marvel.com",
#   "first": "Scarlett",
#   "last": "Johansson",
#   "password": "ghostinshell33",
#   "month": 1,
#   "day": 4,
#   "year": 1991,
#   "image": ""
# }),
# User.create({
#   "email": "loralee@doublel.com",
#   "first": "Lora",
#   "last": "Lee",
#   "password": "appacademyll",
#   "month": 11,
#   "day": 27,
#   "year": 1990,
#   "image": ""
# }),
# User.create({
#   "email": "worldpeace@nobel.com",
#   "first": "Malala",
#   "last": "Yousafzai",
#   "password": "lovepeace",
#   "month": 4,
#   "day": 27,
#   "year": 1994,
#   "image": ""
# }),
# User.create({
#   "email": "doomfist@overwatch.com",
#   "first": "Terry",
#   "last": "Crews",
#   "password": "ultimate1",
#   "month": 9,
#   "day": 15,
#   "year": 1980,
#   "image": ""
# }),
# User.create({
#   "email": "seeds@apple.com",
#   "first": "Johnny",
#   "last": "Appleseed",
#   "password": "talltale",
#   "month": 3,
#   "day": 13,
#   "year": 1983,
#   "image": ""
# }),
# User.create({
#   "email": "steph@henk.com",
#   "first": "Stephanie",
#   "last": "Henkoff",
#   "password": "appacademybrooklyn",
#   "month": 7,
#   "day": 21,
#   "year": 1991,
#   "image": ""
# }),
# User.create({
#   "email": "wadah@appacademybrooklyn.com",
#   "first": "Wadah",
#   "last": "Adlan",
#   "password": "ilovememes",
#   "month": 6,
#   "day": 16,
#   "year": 1989,
#   "image": ""
# })
]

Home.destroy_all
homes1 = Home.create!(
  title: title,
  description: description,
  lat: 37.73574333,
  long: -122.41539901,
  price: 400,
  host_id: guest_user.id,
  address: address,
  start_date: Date.new,
  end_date: Date.new,
  bathrooms: 3,
  bedrooms: 7,
  image: "http://res.cloudinary.com/dxplu7mua/image/upload/v1500922276/Home1_vghd9e.jpg",
  beds: 1,
  roomtype: "Shared Room"
)
homes2 = Home.create!(
  title: title,
  description: description,
  lat: 37.71802772,
  long: -122.39140357,
  price: 700,
  host_id: guest_user.id,
  address: address,
  start_date: Date.new,
  end_date: Date.new,
  bathrooms: 3,
  bedrooms: 7,
  image: "http://res.cloudinary.com/dxplu7mua/image/upload/v1500922306/home2_tuefps.jpg",
  beds: 2,
  roomtype: "Private Room"
)
homes3 = Home.create!(
  title: title,
  description: description,
  lat: 37.76353018,
  long: -122.45901883,
  price: 4000,
  host_id: guest_user.id,
  address: address,
  start_date: Date.new,
  end_date: Date.new,
  bathrooms: 3,
  bedrooms: 7,
  image: "http://res.cloudinary.com/dxplu7mua/image/upload/v1500922307/home3_qr7mr2.jpg",
  beds: 3,
  roomtype: "Entire Home"
)
homes4 = Home.create!(
  title: title,
  description: description,
  lat: 37.75599744,
  long: -122.50114132,
  price: 100,
  host_id: guest_user.id,
  address: address,
  start_date: Date.new,
  end_date: Date.new,
  bathrooms: 3,
  bedrooms: 7,
  image: "http://res.cloudinary.com/dxplu7mua/image/upload/v1500922307/home4_cujdz7.jpg",
  beds: 1,
  roomtype: "Shared Room"
)
homes5 = Home.create!(
  title: title,
  description: description,
  lat: 37.73349389,
  long: -122.43914575,
  price: 2200,
  host_id: guest_user.id,
  address: address,
  start_date: Date.new,
  end_date: Date.new,
  bathrooms: 3,
  bedrooms: 7,
  image: "http://res.cloudinary.com/dxplu7mua/image/upload/v1500922307/home5_qkngy4.jpg",
  beds: 2,
  roomtype: "Private Room"
)
homes6 = Home.create!(
  title: title,
  description: description,
  lat: 37.78354137,
  long: -122.42886915,
  price: 2950,
  host_id: guest_user.id,
  address: address,
  start_date: Date.new,
  end_date: Date.new,
  bathrooms: 3,
  bedrooms: 7,
  image: "http://res.cloudinary.com/dxplu7mua/image/upload/v1500922307/home6_hguah4.jpg",
  beds: 6,
  roomtype: "Entire Home"
)
homes7 = Home.create!(
  title: title,
  description: description,
  lat: 37.75289986,
  long: -122.49260179,
  price: 3400,
  host_id: guest_user.id,
  address: address,
  start_date: Date.new,
  end_date: Date.new,
  bathrooms: 3,
  bedrooms: 7,
  image: "http://res.cloudinary.com/dxplu7mua/image/upload/v1500922307/home7_mn6w3i.png",
  beds: 3,
  roomtype: "Entire Home"
)
homes8 = Home.create!(
  title: title,
  description: description,
  lat: 37.76405286,
  long: -122.44363511,
  price: 500,
  host_id: guest_user.id,
  address: address,
  start_date: Date.new,
  end_date: Date.new,
  bathrooms: 3,
  bedrooms: 7,
  image: "http://res.cloudinary.com/dxplu7mua/image/upload/v1500922307/home8_wwo2ui.jpg",
  beds: 1,
  roomtype: "Shared Room"
)
homes9 = Home.create!(
  title: title,
  description: description,
  lat: 37.72695272,
  long: -122.38500051,
  price: 3000,
  host_id: guest_user.id,
  address: address,
  start_date: Date.new,
  end_date: Date.new,
  bathrooms: 3,
  bedrooms: 7,
  image: "http://res.cloudinary.com/dxplu7mua/image/upload/v1500922307/home9_c3n3vk.jpg",
  beds: 7,
  roomtype: "Entire Home"
)
homes10 = Home.create!(
  title: title,
  description: description,
  lat: 37.76975707,
  long: -122.40303736,
  price: 1030,
  host_id: guest_user.id,
  address: address,
  start_date: Date.new,
  end_date: Date.new,
  bathrooms: 3,
  bedrooms: 7,
  image: "http://res.cloudinary.com/dxplu7mua/image/upload/v1500922307/home10_kkwekg.jpg",
  beds: 2,
  roomtype: "Private Room"
)
homes11 = Home.create!(
  title: title,
  description: description,
  lat: 37.7434939,
  long: -122.42086185,
  price: 450,
  host_id: guest_user.id,
  address: address,
  start_date: Date.new,
  end_date: Date.new,
  bathrooms: 3,
  bedrooms: 7,
  image: "http://res.cloudinary.com/dxplu7mua/image/upload/v1500922308/home11_lk4781.jpg",
  beds: 1,
  roomtype: "Shared Room"
)
homes12 = Home.create!(
  title: title,
  description: description,
  lat: 37.73543372,
  long: -122.41347352,
  price: 2700,
  host_id: guest_user.id,
  address: address,
  start_date: Date.new,
  end_date: Date.new,
  bathrooms: 3,
  bedrooms: 7,
  image: "http://res.cloudinary.com/dxplu7mua/image/upload/v1500922308/home12_lx0sqp.jpg",
  beds: 5,
  roomtype: "Entire Home"
)

homes13 = Home.create!(
  title: title,
  description: description,
  lat: 37.77018411,
  long: -122.45792444,
  price: 1300,
  host_id: guest_user.id,
  address: address,
  start_date: Date.new,
  end_date: Date.new,
  bathrooms: 3,
  bedrooms: 7,
  image: "http://res.cloudinary.com/dxplu7mua/image/upload/v1500922308/home13_svivmm.jpg",
  beds: 2,
  roomtype: "Private Room"
)
homes14 = Home.create!(
  title: title,
  description: description,
  lat: 37.76208576,
  long: -122.47174521,
  price: 1500,
  host_id: guest_user.id,
  address: address,
  start_date: Date.new,
  end_date: Date.new,
  bathrooms: 3,
  bedrooms: 7,
  image: "http://res.cloudinary.com/dxplu7mua/image/upload/v1500922308/home14_xf2eei.jpg",
  beds: 2,
  roomtype: "Private Room"
)
homes15 = Home.create!(
  title: title,
  description: description,
  lat: 37.71059965,
  long: -122.42874999,
  price: 1650,
  host_id: guest_user.id,
  address: address,
  start_date: Date.new,
  end_date: Date.new,
  bathrooms: 3,
  bedrooms: 7,
  image: "http://res.cloudinary.com/dxplu7mua/image/upload/v1500922308/home15_zuf141.jpg",
  beds: 8,
  roomtype: "Entire Home"
)
homes16 = Home.create!(
  title: title,
  description: description,
  lat: 37.73918482,
  long: -122.4425699,
  price: 1550,
  host_id: guest_user.id,
  address: address,
  start_date: Date.new,
  end_date: Date.new,
  bathrooms: 3,
  bedrooms: 7,
  image: "http://res.cloudinary.com/dxplu7mua/image/upload/v1500922308/home16_ek4yup.jpg",
  beds: 1,
  roomtype: "Private Room"
)
homes17 = Home.create!(
  title: title,
  description: description,
  lat: 37.72212374,
  long: -122.43733212,
  price: 2770,
  host_id: guest_user.id,
  address: address,
  start_date: Date.new,
  end_date: Date.new,
  bathrooms: 3,
  bedrooms: 7,
  image: "http://res.cloudinary.com/dxplu7mua/image/upload/v1500922309/home17_aux5eh.jpg",
  beds: 5,
  roomtype: "Entire Home"
)
homes18 = Home.create!(
  title: title,
  description: description,
  lat: 37.77578668,
  long: -122.45619801,
  price: 3610,
  host_id: guest_user.id,
  address: address,
  start_date: Date.new,
  end_date: Date.new,
  bathrooms: 3,
  bedrooms: 7,
  image: "http://res.cloudinary.com/dxplu7mua/image/upload/v1500922308/home18_jzz5on.jpg",
  beds: 10,
  roomtype: "Entire Home"
)
homes19 = Home.create!(
  title: title,
  description: description,
  lat: 37.78642475,
  long: -122.41360693,
  price: 2900,
  host_id: guest_user.id,
  address: address,
  start_date: Date.new,
  end_date: Date.new,
  bathrooms: 3,
  bedrooms: 7,
  image: "http://res.cloudinary.com/dxplu7mua/image/upload/v1500922308/home19_yzejmm.jpg",
  beds: 15,
  roomtype: "Entire Home"
)
homes20 = Home.create!(
  title: title,
  description: description,
  lat: 37.78198248,
  long: -122.45854506,
  price: 150,
  host_id: guest_user.id,
  address: address,
  start_date: Date.new,
  end_date: Date.new,
  bathrooms: 3,
  bedrooms: 7,
  image: "http://res.cloudinary.com/dxplu7mua/image/upload/v1500922309/home20_lbfnzc.jpg",
  beds: 1,
  roomtype: "Shared Room"
)
homes21 = Home.create!(
  title: title,
  description: description,
  lat: 37.70587994,
  long: -122.42015515,
  price: 350,
  host_id: guest_user.id,
  address: address,
  start_date: Date.new,
  end_date: Date.new,
  bathrooms: 3,
  bedrooms: 7,
  image: "http://res.cloudinary.com/dxplu7mua/image/upload/v1500922309/home21_tn3vho.jpg",
  beds: 1,
  roomtype: "Shared Room"
)
homes22 = Home.create!(
  title: title,
  description: description,
  lat: 37.7185728,
  long: -122.39613813,
  price: 200,
  host_id: guest_user.id,
  address: address,
  start_date: Date.new,
  end_date: Date.new,
  bathrooms: 3,
  bedrooms: 7,
  image: "http://res.cloudinary.com/dxplu7mua/image/upload/v1500922309/home22_z8qjeu.jpg",
  beds: 2,
  roomtype: "Shared Room"
)
homes23 = Home.create!(
  title: title,
  description: description,
  lat: 37.77938135,
  long: -122.45478873,
  price: 100,
  host_id: guest_user.id,
  address: address,
  start_date: Date.new,
  end_date: Date.new,
  bathrooms: 3,
  bedrooms: 7,
  image: "http://res.cloudinary.com/dxplu7mua/image/upload/v1500922309/home23_dmzp84.jpg",
  beds: 2,
  roomtype: "Shared Room"
)
homes24 = Home.create!(
  title: title,
  description: description,
  lat: 37.76673272,
  long: -122.42492374,
  price: 150,
  host_id: guest_user.id,
  address: address,
  start_date: Date.new,
  end_date: Date.new,
  bathrooms: 3,
  bedrooms: 7,
  image: "http://res.cloudinary.com/dxplu7mua/image/upload/v1500922309/home24_mdim32.jpg",
  beds: 1,
  roomtype: "Shared Room"
)

urls = [
  "http://res.cloudinary.com/dxplu7mua/image/upload/v1501270743/home25_o6onbe.jpg",
  "http://res.cloudinary.com/dxplu7mua/image/upload/v1501270743/home26_sazejq.jpg",
  "http://res.cloudinary.com/dxplu7mua/image/upload/v1501270743/home27_msxwhz.jpg",
  "http://res.cloudinary.com/dxplu7mua/image/upload/v1501270743/home28_fgmmro.jpg",
  "http://res.cloudinary.com/dxplu7mua/image/upload/v1501270743/home29_rlivrw.jpg",
  "http://res.cloudinary.com/dxplu7mua/image/upload/v1501270743/home30_qqoeti.jpg",
  "http://res.cloudinary.com/dxplu7mua/image/upload/v1501270743/home31_bqfy8k.jpg",
  "http://res.cloudinary.com/dxplu7mua/image/upload/v1501270743/home32_uibwwk.jpg",
  "http://res.cloudinary.com/dxplu7mua/image/upload/v1501270743/home33_nu21a1.jpg",
  "http://res.cloudinary.com/dxplu7mua/image/upload/v1501270744/home34_cgv1fh.jpg",
  "http://res.cloudinary.com/dxplu7mua/image/upload/v1501270744/home35_dfvoub.jpg",
  "http://res.cloudinary.com/dxplu7mua/image/upload/v1501270744/home36_zdlx2x.jpg",
  "http://res.cloudinary.com/dxplu7mua/image/upload/v1501270744/home37_kfrmsv.jpg",
  "http://res.cloudinary.com/dxplu7mua/image/upload/v1501270745/home38_kskrjm.jpg",
  "http://res.cloudinary.com/dxplu7mua/image/upload/v1501270744/home39_rfjibt.jpg",
  "http://res.cloudinary.com/dxplu7mua/image/upload/v1501270744/home40_vxhx0p.jpg",
  "http://res.cloudinary.com/dxplu7mua/image/upload/v1501270744/home41_xwndpi.jpg",
  "http://res.cloudinary.com/dxplu7mua/image/upload/v1501270745/home42_u83dru.jpg",
  "http://res.cloudinary.com/dxplu7mua/image/upload/v1501270744/home43_s6fi7i.jpg",
  "http://res.cloudinary.com/dxplu7mua/image/upload/v1501270744/home44_zupw9m.jpg",
  "http://res.cloudinary.com/dxplu7mua/image/upload/v1501270744/home45_gccqvv.jpg",
  "http://res.cloudinary.com/dxplu7mua/image/upload/v1501270744/home46_cyugwt.jpg",
  "http://res.cloudinary.com/dxplu7mua/image/upload/v1501270745/home47_oxdvfy.jpg",
  "http://res.cloudinary.com/dxplu7mua/image/upload/v1501270745/home48_uzr6n3.jpg"
]

(25..48).each do |i|
  Home.create!({
    host_id: guest_user.id,
    lat: us[i-25][0],
    long: us[i-25][1],
    title: title,
    price: price,
    start_date: Date.new,
    end_date: Date.new,
    address: address,
    bathrooms: bathrooms,
    bedrooms: bedrooms,
    beds: beds,
    roomtype: roomtype,
    description: description,
    image: urls[i-25]
  })
end

Trip.destroy_all

5.times do |i|
  Trip.create!({
    visitor_id: guest_user.id,
    home_id: Home.all.sample.id,
    start_date: Time.at(rand * Time.now.to_i),
    end_date: Time.at(rand * Time.now.to_i),
    totalcost: rand(200..10000)
    }
  )
end

Review.destroy_all

200.times do |i|
  Review.create!({
    author_id: User.all.sample.id,
    home_id: Home.all.sample.id,
    rating: rand(5..10),
    body: Faker::Lorem.sentence(rand(5..40))
  })
end
