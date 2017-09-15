# TravelSmart
See Live Version Here: [https://travelsmart1.herokuapp.com](https://travelsmart1.herokuapp.com)

![travelsmart-search](/app/assets/images/search.gif)

TravelSmart draws inspiration from AirBnB and helps users find homes for temporary stay based on multiple filters. It also lets them book and review locations.

## Contents
**Features**

* [User Auth](#user-authentication)
* [Home Show](#home-show-page)
* [Map Filters](#map-filters)
* [Home Details](#home-details)
* [Booking](#booking)
* [Reviews](#reviews)

## Project Information
This project was developed using Ruby on Rails, React.js with Redux, Google Maps, Cloudinary, and Amazon S3.

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
On the back-end, an encrypted, hashed password is stored in the database (passwords are never saved to the database). On log-in, the provided password is rehashed using BCrypt and compared to the encrypted password in order to verify the log-in. A session token is used to achieve this, making sure the user is logged in when navigating the website. SecureRandom gem was used for this. Bootstrapping the current user is used to keep the user logged in on refresh of the page.

![TravelSmart-show](/app/assets/images/booking.gif)

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
    title: "some_title",
    address: "some_address",
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


## Map Filters
TravelSmart offers real-time filtering based on roomtype and price (per month). The Redux state is updated with a list of all the homes matching both the filter query and location bounds. Map markers are then populated on the map as an overlay for every location stored in the state. With every filter or idle state of the map, old map markers are replaced with new map markers; the bounds also resize automatically when zooming in or out of the map. Markers pertaining to a certain house bounce when the house is hovered over in the homes index, and there
is google search functionality with a searchbar that will set the bounds of the map.

![map-drag](/app/assets/images/map_drag.gif)

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

On the frontend, a filter object will be a slice of state that will be passed in when making an ajax request for an index of homes, and the subsequent response will update the map api with the filtered index. Sort Filter action and Shade Filter actions were added to help
with the shading blue of markers based on mouse hovering and the sorting of the houses based on price.

``` JavaScript
export const updateFilter = (filter, value) => (dispatch, getState) => {
  dispatch(changeFilter(filter, value));
  return fetchHomes(getState().filters)(dispatch);
};

export const sortFilter = (boolean) => ({
  type: SORT_FILTER,
  boolean
});

export const shadeFilter = (homeid, boolean) => ({
  type: SHADE_FILTER,
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
    shadingmarker: {homeid: 3, shading: true},
    sorted: true
  }
```


## Home Details
The home show page contains a more in-depth explanation of the home's features. The page is shown when a user clicks on either a home from
the home index page or when they click on a home's marker from the map.

## Booking a Trip
All trips (bookings) are stored in one table in the database, which contains columns for `id`, the `visitor_id` that references a visitor (user), the `home_id` that references the booked home, and the `start_date` and `end_date` of the trip.

![trips-view](/app/assets/images/mytrips.gif)

### Viewing Trips
Only the user can view their own trips. The user can view details about their trip, the amount they paid, and if they have to, cancel their trips. If the user has no trips, a link will allow the user to redirect back to the home index page. Since the user has many trips and since each trip belongs to a home through a home id, these assocations were used to get the current user's trips and home info of those trips such as the home title, etc. A join table with home was made with a 'includes' statement in the controller to prevent N+1 SQL queries.

On the frontend, bootstrap was used to create a carousel that would flip through the trips a user had been on.


## Reviews

Users can create reviews on a home's show page and can view reviews there as well. A review requires a body and rating. The rating has to be between 1-10. Upon creating a review, the reviews info is stored in the database along with its user_id and home_id. Since review info, author info, and home info are needed, the reviews controller queries the reviews table for reviews that have the same id as the params[:homeid] that is passed in from front end. The .includes method was used again to prevent N+1 queries. In addition, since the reviews and review info would constantly change based on the home show page the user is looking at, the reviews were not stored in the store. A AJAX/database request was made directly in the review jsx component to improve space complexity. This would help a lot of a home had a lot of reviews.

## Coming Soon
I realized that I could add numerous things that AirBNB has to improve a user's experience.

#### User Profile Pages
Adding a user profile page would improve the sociality of the app.

#### Hosting
Allowing users to host homes, view their hosted homes, and delete from them if need be.

#### Additional UX features
Infinite Scroll on index pages
