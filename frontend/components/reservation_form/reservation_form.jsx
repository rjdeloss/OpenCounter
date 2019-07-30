import React, { useState, useEffect } from 'react'; 
import moment from 'moment';

class ReservationForm extends React.Component {
    constructor(props){
        super(props);
            this.state = {
                party_size: 2, 
                time: moment(this.props.restaurant.open_time).utc().format('LT'),
                date: moment().format().substr(0, 10)
            }
            this.handleSubmit = this.handleSubmit.bind(this);
        }
    
    handleSubmit(e) {
        const { restaurant, userId, openLogin } = this.props;
        const { party_size, time, date } = this.state;
        debugger
        if (!userId) {
            debugger
            openLogin();
        } else {
            const reservation = {
                restaurant_id: restaurant.id,
                party_size,
                start_datetime: date + " " + time
            };

            e.preventDefault();
            this.props.createReservation(reservation);
        }
    } 
    // const [inputs, setInputs] = useState({})

    handleInput(field) {
        return e => this.setState({ [field]: e.currentTarget.value})
    }

    renderErrors() {
        const errors = Object.values(this.props.errors); 
        debugger
        if (errors.length === 0) {
            return null 
        } else {
            const errorList = errors.map((error, i) => {
                const cleanedError = error.split(' ').splice(1).join(' ');
                return (
                    <li className="errors" key={i} >{cleanedError}</li>
                )
            });
            return (
                <ul className="restaurant-reservation-error-container">
                    { errorList }
                </ul>
            )
        }
    }
    
    partySizeSelect() {
        let partyArr = [];

        for (let i = 1; i < 20; i++) {
            partyArr.push(
                <option value={i} key={i}>{i ===1 ? i + " person" : i + " people"}</option>
            ); 
        }
        return partyArr;
    }

    timeSelect() {
        const {open_time, close_time} = this.props.restaurant; 
        const open = new Date(open_time); 
        const close = new Date(close_time);
        const openHour = new Date(open.getTime() + open.getTimezoneOffset() * 60000).getHours();
        const closeHour = new Date(close.getTime() + close.getTimezoneOffset() * 60000).getHours();
        let timeArr = [];
        for (let i = openHour; i < closeHour; i++) {
            let hr = i > 12 ? (i -12).toString() : i.toString();
            
            for (let j = 0; j <= 30; j += 30) {
                let timeStr = hr + ":";
                timeStr += j=== 0 ? "00" : j.toString();
                timeStr += i >= 12 ? " PM" : " AM";
                timeArr.push(timeStr);

                if (i === closeHour - 1) break;
            }
        }

        return timeArr.map(time =>(
            <option value={time} key={time}>{time}</option>
        ));


    }
    render() {
        

        return (
            <section className="restaurant-reservation-form">
                <h3 className="restaurant-reservation-form-title" ><span>Make a reservation</span></h3>
                { this.renderErrors() }
                <form className="" onSubmit={ this.handleSubmit }>
                    <label>Party Size
                        <select className="restaurant-reservation-form-field" name="party_size" value={this.state.party_size} onChange={this.handleInput("party_size")}>
                            { this.partySizeSelect() }
                        </select>
                    </label>
                    <section className="reservation-field-holder">
                        <label >Time
                            <select className="restaurant-reservation-form-field" name="time" value={this.state.time} onChange={this.handleInput("time")}>
                                { this.timeSelect() }
                            </select>
                        </label>
                        <label >Date
                            <input id ="today" className="restaurant-reservation-form-date-field" type="date" name="date"  value={this.state.date} onChange={ this.handleInput("date") } />
                        </label>
                    </section>
                    <input className="reservation-submit" type="submit" value="Find a Table" />
                </form>
            </section>
        )
    }
}

export default ReservationForm;