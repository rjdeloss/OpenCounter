import React from 'react'; 
import { Link } from 'react-router-dom';

class RestaurantShow extends React.Component {
    constructor(props) {
        super(props);
        this.props.fetchRestaurant(this.props.match.params.restaurantId)
        this.pageJumpTitle = this.pageJumpTitle.bind(this);
        this.pageJumpPhoto = this.pageJumpPhoto.bind(this);
        this.pageJumpMenu = this.pageJumpMenu.bind(this);
        this.pageJumpSpecials = this.pageJumpSpecials.bind(this);
        this.pageJumpReviews = this.pageJumpReviews.bind(this);
        this.titleRef = React.createRef()
        this.photoRef = React.createRef()
        this.menuRef = React.createRef()
        this.specialsRef = React.createRef()
        this.reviewsRef = React.createRef()
    }

    // componentDidMount() {
    //     this.props.fetchRestaurant(this.props.match.params.restaurantId)
    // }
    pageJumpTitle(e) {
        window.scrollTo(0, this.titleRef.current.offsetTop)
    }

    pageJumpPhoto(e) {
        window.scrollTo(0, this.photoRef.current.offsetTop)
    }
    
    pageJumpMenu(e) {
        window.scrollTo(0, this.menuRef.current.offsetTop)
    }
    
    pageJumpSpecials(e) {
        window.scrollTo(0, this.specialsRef.current.offsetTop)
    }

    pageJumpReviews(e) {
        window.scrollTo(0, this.reviewsRef.current.offsetTop)
    }
    render() {


        const restaurant = this.props.restaurant;
        if (typeof restaurant === "undefined") {
            return (<></>)
        } else {
        return(
            <>
            <main className="show-page-container">
                <div className="show-page-image-container">
                </div>
                <div className="show-page-content-container">
                    <div className="show-page-restaurant-content">
                        <nav className="restaurant-profile-nav">
                                <p onClick={this.pageJumpTitle}>Overview</p>
                                <p onClick={this.pageJumpPhoto}>Photos</p>
                                <p onClick={this.pageJumpMenu}>Menu</p>
                                <p onClick={this.pageJumpSpecials}>Specials</p>
                                <p onClick={this.pageJumpReviews}>Reviews</p>
                        </nav>
                        <div className="restaurant-snippet">
                            <div className="restaurant-title">
                                    <h1 ref={this.titleRef} className="restaurant-name-location">{restaurant.name} - {restaurant.city}</h1>
                            </div>
                            <article className="nav-bar-words">
                                <div>
                                <i className="material-icons red">star</i><i className="material-icons red">star</i><i className="material-icons red">star</i><i className="material-icons red">star</i><i className="material-icons red">star_half</i>
                                </div>
                                <i className="material-icons">chat_bubble_outline</i><p>{restaurant.zip} reviews  </p>
                                <i className="material-icons">local_atm</i><p>{restaurant.price_range}  </p>
                                <i className="material-icons">restaurant</i><p>cuisine</p>
                                <br/>
                            </article>
                            <p>{restaurant.description}</p>
                        </div>

                        <section ref={this.photoRef} id="photos" className="section-container">
                               <h2>Photos</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem placeat molestias, ut sapiente, totam a quod fugit vero earum minus et quasi, velit rem! Accusantium saepe sequi labore rerum ad?</p>
                        </section>
                        <section ref={this.menuRef} id="menu" className="section-container">
                            <h2>Menu</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequatur perferendis magnam optio esse ducimus asperiores commodi debitis excepturi cum blanditiis deleniti vel, accusamus perspiciatis necessitatibus sint, alias pariatur eligendi!</p>
                        </section>
                        <section ref={this.specialsRef} id="specials" className="section-container">
                            <h2>Specials</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ullam odio atque, a corporis amet, eum magni minus, soluta excepturi consectetur voluptas non. Id quas quam asperiores praesentium. Explicabo, dolores?</p>
                        </section>
                        <section ref={this.reviewsRef} id="reviews" className="section-container">
                            <h2>What {restaurant.zip} People Are Saying</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quo rerum numquam alias? Maxime odio at, vero adipisci ratione corrupti. Eum dicta consequuntur officiis iusto dolorem tempore reiciendis, nihil reprehenderit.</p>
                        </section>
                        <div className="restaurant-reviews-section">
                        </div>

                    </div>
                    {/* PAGE INFO SECTION */}
                    <div className="show-page-restaurant-info">
                        <section className="restaurant-reservation-form">
                                <h3 className="restaurant-reservation-form-title" ><span>Make a reservation</span></h3>
                            <form className="">
                                <label>Party Size
                                    <select className="restaurant-reservation-form-field" name="party-size" id="">
                                        <option value="1">1 person</option>
                                        <option value="2">2 people</option>
                                        <option value="3">3 people</option>
                                        <option value="4">4 people</option>
                                        <option value="5">5 people</option>
                                        <option value="6">6 people</option>
                                        <option value="7">7 people</option>
                                        <option value="8">8 people</option>
                                        <option value="9">9 people</option>
                                        <option value="10">10 people</option>
                                    </select>
                                </label>
                                <section className="reservation-field-holder">
                                    <label >Time
                                        <select className="restaurant-reservation-form-field" name="date" id="">
                                            <option value="7:00 PM">7:00 PM</option>
                                            <option value="7:15 PM">7:15 PM</option>
                                            <option value="7:30 PM">7:30 PM</option>
                                            <option value="7:45 PM">7:45 PM</option>
                                            <option value="8:00 PM">8:00 PM</option>
                                            <option value="8:15 PM">8:15 PM</option>
                                            <option value="8:30 PM">8:30 PM</option>
                                            <option value="8:45 PM">8:45 PM</option>
                                            <option value="9:00 PM">9:00 PM</option>
                                        </select>
                                    </label>
                                    <label >Date
                                        <input type="date" name="" id=""/>
                                    </label>
                                </section>
                                <input className="reservation-submit" type="submit" value="Find a Table"/>    
                            </form>
                        </section>
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
                                    <p>{restaurant.cuisine_id}</p>
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