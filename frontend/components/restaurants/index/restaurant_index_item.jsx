import React from 'react';
import { withRouter } from 'react-router-dom';


const RestaurantIndexItem = props => {
    const restaurant = props.restaurant;
    const reviewsCount = Object.keys(props.restaurant.reviews).length;
    const overallRating = props.restaurant.overall_ratings.overall_rating;

    let noStars = _.times(6 - overallRating, (i) => {
        return (<i key={i + 1 + overallRating} className="material-icons star-grey">star</i>)
    });
    let stars = _.times(overallRating, (i) => {
        return (<i key={i} className="material-icons red">star</i>)
    });

    const handleClick = () => {
        props.history.push(`/restaurants/${restaurant.id}`)
    }

    let greyPriceRange = _.times(4 - restaurant.price_range.length, (i) => {
        return (<span key={i} className="grey-price-range">$</span>)
    });
    
    // const restaturant = props.restaurant; 
    if (props.location.pathname === "/") {
        return (
            <div className="page-main-restaurant-item" onClick={handleClick} >
                <div className="page-main-restaurant-item-img-container">
                    <img src="" alt="" />
                </div>
                <div className="page-main-restaurant-content-info">
                    <h3 className="bold-text">{restaurant.name}</h3>
                    <div className="reviews-rating-header"> 
                        {stars}{noStars} 
                        <p>&nbsp;&nbsp;&nbsp;{reviewsCount} reviews</p></div>
                    <div>{restaurant.cuisine} &nbsp;·&nbsp; {restaurant.price_range} &nbsp;·&nbsp; {restaurant.city}</div>
                    <div>{restaurant.zip} of times booked</div>
                </div>
            </div>
        )
    } else if (props.location.pathname.includes("/restaurants/search")) {
        return (
            <div className="search-restaurant-item" >
                <div className="search-restaurant-img-container" onClick={handleClick}>
                    <img src="" alt=""/>
                </div>
                <div className="search-restaurant-info" >
                    <div className="search-restaurant-name" onClick={handleClick}>
                        <span>{restaurant.name}</span>
                    </div>
                    <div className="search-restaurant-ratings">
                        <div>
                            {stars}{noStars}{/* <i className="material-icons gold">star</i><i className="material-icons gold">star</i><i className="material-icons gold">star</i><i className="material-icons gold">star</i><i className="material-icons gold">star_half</i> */}
                        </div>
                        <span>{restaurant.price_range}{greyPriceRange}</span>
                    </div>
                    <div className="search-restaurant-cuisine-location">
                        <span>{restaurant.cuisine}</span>
                        <span>{restaurant.city}</span>
                    </div>
                    <div className="search-restaurant-times">
                        <button>6:00 PM</button>
                        <button>6:30 PM</button>
                        <button>7:00 PM</button>
                        <button>7:45 PM</button>
                        <button>8:00 PM</button>
                    </div>
                </div>
            </div>
        )
    }
}

// class RestaurantIndexItem extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleClick = this.handleClick.bind(this)
//     }

//     handleClick() {
//         const restaurantId = this.props.restaurant.id; 
//         this.props.history.push(`/restaurants/${restaurantId}`)
//     }

//     render() {
//         const restaurant = this.props.restaurant;

//         return (
//         <div className="page-main-restaurant-item" onClick={this.handleClick} >
//             <div className="page-main-restaurant-item-img-container">
//                 <img src="" alt="" />
//             </div>
//             <div className="page-main-restaurant-content-info">
//                 <h3>{restaurant.name}</h3>
//                     <div> <div>
//                         <i className="material-icons gold">star</i><i className="material-icons red">star</i><i className="material-icons red">star</i><i className="material-icons red">star</i><i className="material-icons red">star_half</i>
//                     </div>*<span>review count</span></div>
//                 <div>Cuisine * {restaurant.price_range} * {restaurant.city}</div>
//                 <div>{restaurant.zip} of times booked</div>
//             </div>
//         </div>
//         )
//     }
// }

export default withRouter(RestaurantIndexItem);