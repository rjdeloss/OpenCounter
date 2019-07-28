import React, { useState, useEffect } from 'react'; 
import moment from 'moment';

class ReservationForm extends React.Component {
    constructor(props){
        super(props);
            this.state = {
                party_size: 2, 
                time: moment(this.props.restaurant.open_time).format('LT'),
                date: moment().format('lll')
            }
            this.handleSubmit = this.handleSubmit.bind(this);
        }
    
    handleSubmit(e) {
        const reservation = {
            restaurant_id: restaurant.id,
            table_size,
            start_datetime: date + " " + time
        };

    
        e.preventDefault();
        this.props.createReservation(reservation);
    } 
    // const [inputs, setInputs] = useState({})

    handleInput(field) {
        return e => this.setState({ [field]: e.currentTarget.value})
    }

    renderErrors() {
        const errors = props.errors; 
        if (errors.length === 0) {
            return null 
        } else {
            const errorList = errors.map( (error, i) => (
                <li className="reservation-error" key={i} >{error}</li>
            ));
            return (
                <ul className="reservation-error-container">
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
        const openHour = new Date(open_time).getHours();
        const closeHour = new Date(close_time).getHours();

        let timeArr = [];
        for (let i = openHour; i < closeHour; i++) {
            let hr = i > 12 ? (i -12).toString() : i.toString();
            
            for (let j = 0; j <= 45; j += 15) {
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
        debugger
        return (
            <section className="restaurant-reservation-form">
                <h3 className="restaurant-reservation-form-title" ><span>Make a reservation</span></h3>
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
                            <input type="date" name="date"  value={this.state.date} onChange={ this.handleInput("date") } />
                        </label>
                    </section>
                    <input className="reservation-submit" type="submit" value="Find a Table" />
                </form>
            </section>
        )
    }
}

export default ReservationForm;