import React from 'react';
import { withRouter } from 'react-router-dom';


const RestaurantIndexItem = props => {
    
    const handleClick = () => {
        // debugger
        props.history.push(`/restaurants/${props.restaurant.id}`)
    }

    
    // const restaturant = props.restaurant; 
    if (props.location.pathname === "/") {
        return (
            <div className="page-main-restaurant-item" onClick={handleClick} >
                <div className="page-main-restaurant-item-img-container">
                    <img src="" alt="" />
                </div>
                <div className="page-main-restaurant-content-info">
                    <h3>{props.restaurant.name}</h3>
                    <div> <div>
                        <i className="material-icons red">star</i><i className="material-icons red">star</i><i className="material-icons red">star</i><i className="material-icons red">star</i><i className="material-icons red">star_half</i>
                    </div>*<span>review count</span></div>
                    <div>{props.restaurant.cuisine} * {props.restaurant.price_range} * {props.restaurant.city}</div>
                    <div>{props.restaurant.zip} of times booked</div>
                </div>
            </div>
        )
    } else if (props.location.pathname.includes("/restaurants/search")) {
        // debugger
        return (
            <div className="search-restaurant-item" >
                <div className="search-restaurant-img-container" onClick={handleClick}>
                    <img src="" alt=""/>
                </div>
                <div className="search-restaurant-info" >
                    <div className="search-restaurant-name" onClick={handleClick}>
                        <span>{props.restaurant.name}</span>
                    </div>
                    <div className="search-restaurant-ratings">
                        <div>
                            <i className="material-icons gold">star</i><i className="material-icons gold">star</i><i className="material-icons gold">star</i><i className="material-icons gold">star</i><i className="material-icons gold">star_half</i>
                        </div>
                        <span>{props.restaurant.price_range}</span>
                    </div>
                    <div className="search-restaurant-cuisine-location">
                        <span>{props.restaurant.cuisine}</span>
                        <span>{props.restaurant.city}</span>
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