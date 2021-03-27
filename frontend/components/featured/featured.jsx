import React from 'react'
import { Route } from 'react-router-dom';

const Featured = props => {
    const { title, component } = props;
    
    return (
        <div className="page-main-section-item">
            <h2 className="section-item-header ">{title}</h2>
                <section className="page-main-restaurant-carousel">
                    <div className="page-main-city-container">
                    <Route exact path="/" component={component} />
                </div>
            </section>
        </div>
    )
}

export default Featured;