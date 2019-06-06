import React from 'react';
import { withRouter } from 'react-router-dom';

class RestaurantIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        const restaurantId = this.props.restaurant.id; 
        this.props.history.push(`/restaurants/${restaurantId}`)
    }

    render() {
        const restaurant = this.props.restaurant;

        return (
        <div className="page-main-restaurant-item" onClick={this.handleClick} >
            <div className="page-main-restaurant-item-img-container">
                <img src="" alt="" />
            </div>
            <div className="page-main-restaurant-content-info">
                <h3>{restaurant.name}</h3>
                <div>rating <span>review count</span></div>
                <div>Cuisine * {restaurant.price_range} * {restaurant.city}</div>
                <div>{restaurant.zip} of times booked</div>
            </div>
        </div>
        )
    }
}

export default withRouter(RestaurantIndexItem);