# TravelSmart
URL: [Live Link](https://travelsmart1.herokuapp.com)

![travelsmart-home](/app/assets/images/search_page.gif)

TravelSmart draws inspiration from AirBnB and helps users find homes for temporary stay based on multiple filters. It also lets them book and review locations.

## Contents
**Features**

* [User Auth](#user-authentication)
* [Home Show](#home-show-page)
* [Map Filters](#map-filters)
* [Booking](#booking)
* [Reviews](#reviews)

## Project Information
This project was developed in 10 days using Ruby on Rails, React.js with Redux, Google Maps, Cloudinary, and Amazon S3.

## Features
  * Account creation and authentication
  * Search for trips in a geographic location by price and roomtype in home
  * Search using the google maps SearchBox feature

  * View homes' show page
  * Displays home details (address, amenities, space details)
  * Book a home
  * Manage bookings and view trips.
  * Users may only view trips that they booked personally
  * Visitors may only post reviews on homes that they visit

## User Authentication
On the back-end, an encrypted, hashed password is stored in the database (passwords are never saved to the database). On log-in, the provided password is rehashed using BCrypt and compared to the encrypted password in order to verify the log-in. A session token is used to achieve this, making sure the user is logged in when navigating the website. SecureRandom gem was used for this. Bootstrapping the current
user is used to keep the user logged in on refresh of the page.

## Home Show Page
All homes are stored in the database, which contains columns for:
  * the home `id`
  * the Geographic location (`lat` and `long`)
  * `title` of the home
  * `description` of the home
  * `price` per night
  * the `address` of home
  * an `image_url` referencing it's picture hosted in AWS, packaged using paperclip
  * the number of `bathrooms`
  * the number of `bedrooms`
  * the number of `beds`
  * the `roomtype` that the host is servicing (Shared Room, Entire House, Private Room)

  ----The Following is not stored in the database but is randomly generated on home show----
  * a boolean that determines if the host provides the `internet` amenity
  * a boolean that determines if the host provides the `family`-friendly amenity
  * a boolean that determines if the host provides the free-`parking` amenity
  * a boolean that determines if the host provides a `kitchen`
  -----------------------------------------------------------------------------

Below is an example of a state shape for the home index page:

```JavaScript
{
  1: {
    id: 1,
    lat: 37.98435639,
    lng: -107.9596022,
    price: 1338,
    title: "some_title",
    address: "some_address",
    beds: 12,
    roomtype: "Private Room",
    image_url: "some_image_url"
  },
  2: {
    id: 2,
    lat: 34.43947806,
    lng: -101.3342404,
    price: 338,
    title: "Icirrus City",
    address: "7547 Franz Falls, Dooleyport, Honduras",
    beds: 12,
    room_type: "Entire home",
    image_url: "some_image_url"
  }
}
```

Home Show Page State Shape:

```JavaScript
{
  id: 29,
  lat: 34.43947806,
  lng: -101.3342404,
  price: 2404,
  title: "some_title",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  address: "some_address",
  roomtype: "Shared Room"
  image_url: "some_image_url",
  space: {
    bathrooms: 1,
    bedrooms: 2,
    beds: 4,
  },
}
```

![safehavn-show](/app/assets/images/demo/SafeHavnShow.png)

## Map Filters
TravelSmart offers real-time filtering based on roomtype and price (per month). The Redux state is updated with a list of all the homes matching both the filter query and location bounds. Map markers are then populated on the map as an overlay for every location stored in the state. With every filter or idle state of the map, old map markers are replaced with new map markers; the bounds also resize automatically when zooming in or out of the map. Markers pertaining to a certain house bounce when the house is hovered over in the homes index, and there
is google search functionality with a searchbar that will set the bounds of the map.

![filter-map](/app/assets/images/demo/filter-map.gif)

#### Implementation

On the backend, the home model will take in a query based on a latitude and longitude rectangular boundary. The home controller will also query based on roomtype and price range.

  ``` Ruby
  class Home
    def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
        .where("lat > ?", bounds[:southWest][:lat])
        .where("long > ?", bounds[:southWest][:lng])
        .where("long < ?", bounds[:northEast][:lng])
    end
  end

  class HomesController
    def index
      bounds = params[:bounds]
      @homes = bounds ? Home.in_bounds(bounds) : Home.all

      if (params[:minPrice] && params[:maxPrice])
        @homes = @homes.where(price: price_range)
      end

      if (params[:roomtype] && params[:roomtype] != "alltypes")
        @homes = @homes.where("roomtype = ?", params[:roomtype])
      end
    end
  end
  ```

On the frontend, a filter object will be a slice of state that will be passed in when making an ajax request for an index of homes, and the subsequent response will update the map api with the filtered index. Sort Filter action and Bounce Filter actions were added to help
with the bouncing of markers based on mouse hovering and the sorting of the houses based on price.

``` JavaScript
export const updateFilter = (filter, value) => (dispatch, getState) => {
  dispatch(changeFilter(filter, value));
  return fetchHomes(getState().filters)(dispatch);
};

export const sortFilter = (boolean) => ({
  type: SORT_FILTER,
  boolean
});

export const bounceFilter = (homeid, boolean) => ({
  type: BOUNCE_FILTER,
  homeid,
  boolean
})
```

Here is an example of a filter state slice:
```
  {
    bounds: {
      northEast: {lat: 39.123551, lng: -73.951231},
      southWest: {lat: 41.139024, lng: -69.994121}
    }
    minPrice: 300,
    maxPrice: 3400,
    bouncingmarker: {homeid: 3, bouncing: true},
    sorted: true
  }
```

![map-drag](/app/assets/images/demo/map-drag.gif)

## Booking a Trip
All trips (bookings) are stored in one table in the database, which contains columns for `id`, the `visitor_id` that references a visitor (user), the `home_id` that references the booked home, and the `start_date` and `end_date` of the trip.

![safehavn-book](/app/assets/images/demo/SafeHavnBook.png)

### Viewing Trips
Only the user can view their own trips. The user can view details about their trip, the amount they paid, and if they have to, cancel their trips. If the user has no trips, a link will allow the user to redirect back to the home index page.

This is the page where the user can post a review of their trips.

![safehavn-trip](/app/assets/images/demo/SafeHavnTrip.png)

## Reviews

Only visitors can make a review of the homes they visit. A review requires a rating and a body. The rating has to be between 1-10 and the body has to be less than 500 characters just like AirBnB. Upon creating a review, the review will be posted on the respective home show page. Since review info, author info, and home info are needed, the reviews controller queries the reviews table for reviews that
have the same id as the params[:homeid] that is passed in from front end. The .includes method was used to make a join table with users
across an author id. This way we can take the author returned from jbuilder and user his information.

## Future Concepts
During my two week course of development, I discovered many more implementation that can deliver a better user experience listed below:

#### User Profile Pages
Along with reviews, adding user profiles will improve the utility of the app and give a social element to the app.

#### Improved Booking
There is currently no model validation or validations to determine if the home is reserved, making double-booking permissible. I hope to tackle this problem by graying out dates in the calendar and also add a front-end validation as well as adding a model level validation.

#### Port to React Native
Integration with mobile using React Native.

#### More Filters
Filtering by number of beds and bedrooms as well as by reviews will help to improve usability. Drop Downs will be needed.

#### Improved Styling/Design
Compared with AirBnB, there are countless UX design tweaks that I can improve on such as: adding a carousel that spins through photos of the home. Adding a slider bar to filter budgets and guest size.
=======
TravelSmart- An AirBNB Clone

Heroku link -- Try Live Version Here -- http://travelsmart1.herokuapp.com

Trello link: COMING SOON

Minimum Viable Product

TravelSmart is a clone of AirBNB made using Ruby on Rails with a React/Redux front-end. It allows people to book amazing places around the world to stay for a limited amount of time. It will also let people find the exact place they want to stay by letting them search by of course, the location of the home, their price range, how many bedrooms, bathrooms, and other amenities they prefers

Hosting on Heroku New account creation, login, and guest/demo login Spots Spots Search (by location & availability) & Google Maps on searchable -- don't let users book on unavailable date Reviewss

View Wireframes -- The follows need to be links React Components API endpoints DB schema Sample State Implementation Timeline

Phase 1: Backend setup and Front End User Authentication (2 days)

Objective: Functioning rails project with front-end Authentication

Phase 2: User Host: Homes Model, API, and components (2 days)

Objective: User can add a home for extended stay, edit their home post, or remove the home through the API. They can also see all their hosted homes

Phase 3: User Guest: Home Index Page, Home Show Page

Objective: User can book a home and see all the available homes, make reviews and read them. They can also see all their booked trips

Phase 4: Home Search

Objective: Home search by location and Google Maps functionality to show homes

Phase 5: Home advanced Search functionality

Objective: Allow Search by Price Range, number of beds, bedrooms, bathrooms

Phase 6: - Pagination / infinite scroll for Homes Index (1 day, W2 F 6pm)

Objective: Add infinite scroll to Homes Index

Bonus Features (TBD)

-- Infinite Scroll on index pages -- Messaging -- User/host profiles
-- Allow Search by price range, number of bedrooms, bathrooms, and bathrooms, and quietness
>>>>>>> 9d88a9bf6346a05d2c5a55deaee40585f65209bd
