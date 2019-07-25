import React, {Component} from 'react';

class Menu extends Component {
    render() {
        return (
            <div className="container-fluid menu">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarContent">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-link"><a href="#">Home</a></li>
                            <li className="nav-link"><a href="#">About</a></li>
                            <li className="nav-link"><a href="#">Services</a></li>
                            <li className="nav-link"><a href="#">Project</a></li>
                            <li className="nav-link"><a href="#">Packages</a></li>
                            <li className="nav-link"><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Menu;