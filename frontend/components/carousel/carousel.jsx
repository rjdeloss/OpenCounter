import React from 'react';
import { Route } from 'react-router-dom';

const Carousel = props => {
    const { title, id, component } = props;

    return (
        <div className="page-main-section-item">
            <h2 className="section-item-header ">{title}</h2>
            <section className="page-main-restaurant-carousel">
                <div id={id} className="page-main-restaurant-cuisines">
                    <Route exact path="/" component={component} />
                </div>
            </section>
        </div>
    )
}

export default Carousel;