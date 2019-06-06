import React from 'react';
import RestaurantIndexContainer from './restaurant_index_container';
import RestaurantIndexItem from './restaurant_index_item';

class RestaurantsIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchRestaurants();
    }
    
    render() {

        const restaurants = this.props.restaurants.map(restaurant => {
           return  <RestaurantIndexItem key={restaurant.id} restaurant={restaurant} />
        })
        return (
            <section className="page-main-restaurant-cuisines">
                    {restaurants}
             </section>
        );
    }
}
// const RestaurantsIndex = ({ restaurants }) => (
//     <div>
//         <h2>Restaurants: </h2>
//         { restaurants.map(restaurant =>(
//             <RestaurantIndexItem key={restaurant.id} restaurant={restaurant}/>
//         ))}
//     </div>
// );

export default RestaurantsIndex;