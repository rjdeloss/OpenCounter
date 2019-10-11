# openCounter 

openCounter is a clone of OpenTable, developed to showcase my knowledge as a fullstack developer. It's purpose is to facilitate the process of reserving tables at restaurants. This app is able to search for restaurants, give users information regarding the restaurant such as times available for reservations, available seating depending on party size, and provide the users the ability to make a reservation.  


[openCounter Live](https://open-counter.herokuapp.com)

## Technoloigies Used

openCounter was developed with a PostgreSQL database, Ruby on Rails backend, and hosted by Heroku. When communicating with the backend, the application uses RESTful API's and responds with JSON data. The frontend was designed with React, Redux, and styled using CSS.

Other tools used in this application are JBuilder, NodeJS, JQuery to make Ajax requests, PGSearch Gem, Node Package Manager (npm), Webpack, React DOM, React Router, and React History for browser manipulation.


## Features
Users can navigate openCounter's selection of restaurants by using the search tool. Based on thier desire, the user can search either by name, city, or category. This allows them to condense the list of restaurants available to make a selection. 

![Search](https://github.com/Droool/OpenCounter/blob/master/app/assets/images/search_component.png?raw=true)

The Restaurant show page includes information to propt the user towards reserving a table such as, ratings, reviews, type of cuisine, estimate cost of dining at the restaurant, and contact information. This page also includes a reservation form that stays with the user while scrolling through the restaurant show page which keeps the incentive of reserving a table once the user has gathered enough enformation. 

![RestaurantShowPage](https://github.com/Droool/OpenCounter/blob/master/app/assets/images/restaurant_show.png?raw=true)
## Code Snippets

When retrieving all the restaurants for search, openCounters uses ```fetchRestaurants``` RESTful call to populate the initial restauranants. Upon clicking "Let's Go" (on the home page) or "Find a table" (on the search page), the application then uses ```searchRestaurants``` Restful call to retrieve the restaurants matching the search criteria. Once the user clicks on the restaurant, another call is made using ```fetchRestaurant``` to retreive the information that populates the show page. 


```
export const fetchRestaurants = data => (
    $.ajax({
        method: `get`, 
        url: `api/restaurants`, 
        data
    })
)

export const fetchRestaurant = id => (
    $.ajax({
        method: `get`, 
        url: `api/restaurants/${id}`, 
    })
)

export const searchRestaurants = search => (
    $.ajax({
        method: `get`,
        url: `api/restaurants`,
        data: { search }
    })
)
```


## Future Implementations
* Better error handling
* Intergration of Zomato Api
* Intergration of Google Maps
