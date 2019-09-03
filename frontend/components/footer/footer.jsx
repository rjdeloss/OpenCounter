import React from 'react'; 

const Footer = () => {
    return (
        <footer >
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-notes">
                        <h3>OPENCOUNTER</h3>
                        <p>openCounter is a single page web application inspired by OpenTable 
                            using Ruby on Rails, PostgreSQL, React, Redux, and Javascript. Features implemented in this project: 
                        </p>
                        <h3>FEATURES</h3>
                        <ul>
                            <li>User authentication </li>
                            <li>Search restaurants by name, city, and cuisine</li>
                            <li>Create/ Delete Reservations to a restaurant</li>
                            <li>Create/Delete Reviews from restaurant</li>
                            <li>Add restaurants as favorites</li>
                        </ul>
                        <div className="signature">
                            <p>Created by Rafiluis De Los Santos</p>
                        </div>
                    </div>
                    <div className="footer-container-items">
                        <a href="https://www.linkedin.com/in/rafiluisdelossantos/"><i className="fab fa-linkedin fa-3x"></i></a>
                        <a href="http://github.com/Droool"><i className="fab fa-github fa-3x"></i></a>
                        <a href="https://droool.github.io"><i className="fas fa-swimmer fa-3x"></i></a>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer;