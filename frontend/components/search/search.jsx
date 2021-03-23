import React, { useState } from 'react';
import RestaurantsIndex from '../restaurants/index/restaurant_index_container';

const Search = (props) => {
    const [ searchValue, setSearchValue ] = useState("");
    
    const handleInput = (e) => { 
        setSearchValue(e.target.value); 
    }

    const resetInputField = () => { setSearchValue("") }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.searchRestaurants(searchValue);
        resetInputField();
        props.history.push(`/restaurants/search?search=${ searchValue }`);
    }
    
    if (props.location.pathname === "/") {
        return (
            <form className="reservation-form" >
                <section className="reservation-inputs-container">
                    <div className="reservation-multi-search">
                        <div className="reservation-input reservation-input-right">
                            <div className="reservation-form-icon-decoration">
                                <i className="material-icons">calendar_today</i>
                            </div>
                            <input className="reservation-form-input-field" type="date" />
                        </div>
                        <div className="reservation-input reservation-input-left">
                            <div className="reservation-form-icon-decoration">
                                <i className="material-icons">access_time</i>
                            </div>
                            <select className="reservation-form-input-field" >
                                <option value="7:00 PM">7:00 PM</option>
                                <option value="8:00 PM">8:00 PM</option>
                                <option value="9:00 PM">9:00 PM</option>
                                <option value="10:00 PM">10:00 PM</option>
                                <option value="11:00 PM">11:00 PM</option>
                            </select>
                        </div>
                    </div>
                    <div className="reservation-input reservation-input-party">
                        <div className="reservation-form-icon-decoration">
                            <i className="material-icons">perm_identity</i>
                        </div>
                        <select className="reservation-form-input-field">
                            <option value="1">1 person</option>
                            <option value="2">2 person</option>
                            <option value="3">3 people</option>
                            <option value="4">4 people</option>
                            <option value="5">5 people</option>
                            <option value="6">6 people</option>
                            <option value="7">7 people</option>
                            <option value="8">8 people</option>
                            <option value="9">9 people</option>
                            <option value="10">10 people</option>
                        </select>
                    </div>         
                </section>
                <div className="reservation-input reservation-input-search">
                    <div className="reservation-form-icon-decoration">
                        <i className="material-icons">search</i>
                    </div>
                    <input className="reservation-form-search-field" type="text" value={searchValue} onChange={handleInput} placeholder="Manhattan" />
                </div>
                <input className="reservation-submit-input" onClick={handleSubmit} type="submit" value="Find a Table" />
            </form>
        )
    } else {
        return (
            <>
                <div className="compact-search-reservation-background">
                    <form className="compact-search-reservation-form">
                        <section className="compact-reservation-inputs">
                            <div className="compact-reservation-input-container">
                                <select className="reservation-form-input-field">
                                    <option value="1">1 person</option>
                                    <option value="2">2 person</option>
                                    <option value="3">3 people</option>
                                    <option value="4">4 people</option>
                                    <option value="5">5 people</option>
                                    <option value="6">6 people</option>
                                    <option value="7">7 people</option>
                                    <option value="8">8 people</option>
                                    <option value="9">9 people</option>
                                    <option value="10">10 people</option>
                                </select>
                            </div>
                            <div className="compact-reservation-input-container">
                                <input className="reservation-form-input-field" type="date" />
                            </div>
                            <div className="compact-reservation-input-container">
                                <select className="reservation-form-input-field" >
                                    <option value="7:00 PM">7:00 PM</option>
                                    <option value="8:00 PM">8:00 PM</option>
                                    <option value="9:00 PM">9:00 PM</option>
                                    <option value="10:00 PM">10:00 PM</option>
                                    <option value="11:00 PM">11:00 PM</option>
                                </select>
                            </div>
                            
                        <div className="compact-reservation-search-input">
                            <div className="reservation-form-icon-decoration">
                                <i className="material-icons grey">search</i>
                            </div>
                            <input type="text" value={searchValue} onChange={handleInput} placeholder="Location, Restaurant, or Cuisine" />
                        </div>
                        <input className="reservation-submit-input" onClick={handleSubmit} type="submit" value="Find a table" />
                        </section>
                    </form>
                </div>
                <div className="search-result-container">
                    <RestaurantsIndex />
                </div>
            </>
        )
    }
}

export default Search;