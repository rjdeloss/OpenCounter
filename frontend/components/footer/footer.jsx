import React from 'react'; 

const Footer = () => {
    return (
        <footer >
            <div className="footer-container">
                <div className="footer-notes">
                    <p>openCounter is a single page web application inspired by OpenTable 
                        using Ruby on Rails, PostgreSQL, React, Redux, and Javascript. 
                        Features showcased in this project
                    </p>

                </div>
                <div className="footer-container-items">
                    <a href="https://www.linkedin.com/in/rafiluisdelossantos/"><i className="fab fa-linkedin fa-3x"></i></a>
                    <a href="http://github.com/Droool"><i className="fab fa-github fa-3x"></i></a>
                    <a href="https://droool.github.io"><i className="fas fa-swimmer fa-3x"></i></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;