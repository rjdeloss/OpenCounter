import React from 'react'; 
import { Link } from 'react-router-dom';

class RestaurantShow extends React.Component {
    componentDidMount() {
        this.props.fetchRestaurant(this.props.match.params.restaurantId)
    }

    render() {

        return(
            <>
            <main className="show-page-container">
                <div className="show-page-image-container">
                </div>
                <div className="show-page-content-container">
                    <div className="show-page-restaurant-content">
                        <nav className="restaurant-profile-nav">
                            <a href=""><span>Overview</span></a>
                            <a href=""><span>Photos</span></a>
                            <a href=""><span>Menu</span></a>
                            <a href=""><span>Specials</span></a>
                            <a href=""><span>Reviews</span></a>
                        </nav>
                        <div className="restaurant-snippet">
                            <div className="restaurant-title">
                                <h1 className="restaurant-name-location">Restaurant Name - City</h1>
                            </div>
                            <article>
                                <span>rating </span>
                                <span>review_count </span>
                                <span>pricing </span>
                                <span>cuisine </span>
                                <br/>
                            </article>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates maxime exercitationem aliquam numquam, perferendis aperiam fugiat sunt atque facere nulla reiciendis architecto debitis. Ducimus, consequuntur deserunt atque ipsam error quas.</p>
                        </div>

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
                    </div>

                </div>
            </main>
            </>
        )
    }
}

export default RestaurantShow;