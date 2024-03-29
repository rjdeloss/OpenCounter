import React from 'react'; 
import { Link } from 'react-router-dom';
import ReservationForm from '../../reservation_form/reservation_form_container';
import FavoriteButton from '../../favorites/favorites_container';
import ReviewsIndex from '../../reviews/reviews_index';
import ReviewsStats from '../../reviews/reviews_stats';

class RestaurantShow extends React.Component {
    constructor(props) {
        super(props);
        this.props.fetchRestaurant(this.props.match.params.restaurantId)
        this.pageJumpTitle = this.pageJumpTitle.bind(this);
        this.pageJumpPhoto = this.pageJumpPhoto.bind(this);
        this.pageJumpMenu = this.pageJumpMenu.bind(this);
        this.pageJumpSpecials = this.pageJumpSpecials.bind(this);
        this.pageJumpReviews = this.pageJumpReviews.bind(this);
        this.titleRef = React.createRef();
        this.photoRef = React.createRef();
        this.menuRef = React.createRef();
        this.specialsRef = React.createRef();
        this.reviewsRef = React.createRef();
    }

    componentDidMount() {
        this.props.fetchRestaurant(this.props.match.params.restaurantId)
    }

    pageJumpTitle(e) {
        window.scrollTo(0, this.titleRef.current.offsetTop -40)
    }

    pageJumpPhoto(e) {
        window.scrollTo(0, this.photoRef.current.offsetTop - 40)
    }
    
    pageJumpMenu(e) {
        window.scrollTo(0, this.menuRef.current.offsetTop - 40)
    }
    
    pageJumpSpecials(e) {
        window.scrollTo(0, this.specialsRef.current.offsetTop - 40)
    }

    pageJumpReviews(e) {
        window.scrollTo(0, this.reviewsRef.current.offsetTop - 40)
    }

    
    render() {
        
        const restaurant = this.props.restaurant;
        const newReview = this.props.newReview;
        const loggedIn = this.props.loggedIn;
        const currentUser = this.props.currentUser;
        const deleteReview = this.props.deleteReview;
        const overallRating = this.props.restaurant.overall_ratings.overall_rating;

        let noStars = _.times(5 - Math.round(overallRating), (i) => {
            return (<i key={i + 1 + overallRating} className="material-icons star-grey">star</i>)
        });
        let stars = _.times(Math.round(overallRating), (i) => {
            return (<i key={i} className="material-icons red">star</i>)
        });

        let renderFavoriteButton = loggedIn ? <FavoriteButton restaurant={restaurant} /> : null
        
        if (typeof restaurant === "undefined") {
            return (<></>)
        } else {
            return(
            <>
            <main className="show-page-container">
                <div className="show-page-image-container" style={{ width: "100%", background: `url(${restaurant.photo}) center`}}>
                    {renderFavoriteButton}
                    {/* <img className="show-page-image" src={restaurant.photo}  align="middle" alt=""/> */}
                </div>
                <div className="show-page-content-container">
                    <div className="show-page-restaurant-content">
                        <nav className="restaurant-profile-nav">
                                <p className="restaurant-section-hover" onClick={this.pageJumpTitle}>Overview</p>
                                {/* <p className="restaurant-section-hover" onClick={this.pageJumpPhoto}>Photos</p> */}
                                {/* <p className="restaurant-section-hover" onClick={this.pageJumpMenu}>Menu</p>
                                <p className="restaurant-section-hover" onClick={this.pageJumpSpecials}>Specials</p> */}
                                <p className="restaurant-section-hover" onClick={this.pageJumpReviews}>Reviews</p>
                        </nav>
                        <div className="restaurant-snippet">
                            <h1 ref={this.titleRef} className="restaurant-title">{restaurant.name}</h1>
                            <article className="nav-bar-words">
                                <div>
                                    <span>{stars}{noStars}</span>{/* <i className="material-icons red">star</i><i className="material-icons red">star</i><i className="material-icons red">star</i><i className="material-icons red">star</i><i className="material-icons red">star_half</i> */}
                                </div>
                                <div className="restaurant-stats">
                                    <i className="material-icons">chat_bubble_outline</i><span>{Object.values(restaurant.reviews).length} reviews  </span>
                                    <i className="material-icons">local_atm</i><span>{restaurant.price_range}  </span>
                                    <i className="material-icons">restaurant</i><span>{restaurant.cuisine}</span>
                                </div>
                                <br/>
                            </article>
                            <p>{restaurant.description}</p>
                        </div>

                        {/* <section ref={this.photoRef} id="photos" className="section-container">
                               <h2>Photos</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem placeat molestias, ut sapiente, totam a quod fugit vero earum minus et quasi, velit rem! Accusantium saepe sequi labore rerum ad?</p>
                        </section> */}
                        {/* <section ref={this.menuRef} id="menu" className="section-container">
                            <h2>Menu</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequatur perferendis magnam optio esse ducimus asperiores commodi debitis excepturi cum blanditiis deleniti vel, accusamus perspiciatis necessitatibus sint, alias pariatur eligendi!</p>
                        </section>
                        <section ref={this.specialsRef} id="specials" className="section-container">
                            <h2>Specials</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ullam odio atque, a corporis amet, eum magni minus, soluta excepturi consectetur voluptas non. Id quas quam asperiores praesentium. Explicabo, dolores?</p>
                        </section> */}
                        <section ref={this.reviewsRef} id="reviews" className="section-container">
                            <ReviewsStats restaurant={restaurant} newReview={newReview} loggedIn={loggedIn} currentUser={currentUser} />  
                            <ReviewsIndex reviews={restaurant.reviews} currentUser={currentUser} loggedIn={loggedIn} deleteReview={deleteReview} />
                        </section>
                        <div className="restaurant-reviews-section">
                        </div>

                    </div>
                    {/* PAGE INFO SECTION */}
                    <div className="show-page-restaurant-info">
                        <ReservationForm restaurant={restaurant}/>
                        <div className="restaurant-show-map-container">
                            <div className="restaurant-show-map"><h1>MAP GOES HERE</h1></div>
                                <i className="material-icons">location_on</i>
                                <span>{restaurant.address}</span>
                        </div>
                        <section className="restaurant-info-container">
                            <div className="restaurant-info-section">
                                <div className="show-icon-container">
                                    <i className="material-icons">business</i>
                                </div>
                                <div className="restaurant-info-text">
                                    <span>Neighborhood</span>
                                    <p>{restaurant.city}</p>
                                </div>
                            </div>
                            <div className="restaurant-info-section">
                                <div className="show-icon-container">
                                    <i className="material-icons">access_time</i>
                                </div>
                                <div className="restaurant-info-text">
                                    <span>Hours of operation</span>
                                    <p>Mon-Sun 6:00 pm-8:00 pm</p>
                                </div>
                            </div>
                            <div className="restaurant-info-section">
                                <div className="show-icon-container">
                                    <i className="material-icons">restaurant</i>
                                </div>
                                <div className="restaurant-info-text">
                                    <span>Cuisines</span>
                                        <p>{restaurant.cuisine}</p>
                                </div>
                            </div>
                            <div className="restaurant-info-section">
                                <div className="show-icon-container">
                                    <i className="material-icons">local_phone</i>
                                </div>
                                <div className="restaurant-info-text">
                                    <span>Phone number</span>
                                    <p>{restaurant.phone_number}</p>
                                </div>
                            </div>
                            <div className="restaurant-info-section">
                                <div className="show-icon-container">
                                    <i className="material-icons">credit_card</i>
                                </div>
                                <div className="restaurant-info-text">
                                    <span>Payment options</span>
                                    <p>AMEX, Discover, MasterCard, Visa</p>
                                </div>
                            </div>

                        </section>
                    </div>

                </div>
            </main>
            </>
        )
    }}
}

export default RestaurantShow;