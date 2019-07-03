import React from 'react';
import RestaurantIndex from '../restaurants/index/restaurant_index';

class Search extends React.Component {
    constructor(props){
        super(props); 
        this.state = {
            
        }
    }
    
    handleInput(field) {
        return e => {this.setState({[field]: e.target.value})}
    }

    handleSubmit(e) {
        e.preventDefault();
    }
}
// const Search = ({restaurants}) => (
//     <>
//         <RestaurantIndex restaurants={restaurants} />
//     </>
// );

export default Search;