import React from "react";
import { Link } from "react-router-dom";
import brandLogo from "../images/blog-icon.png";

class Navbar extends React.Component {
    render() {
        return (<nav className="navbar">
                <div className="nav-container">
                    <div className="brand">
                        <Link to="/">
                            <img src={brandLogo} alt="Brand Logo"/>
                            <h1>Blogging is fun</h1>
                        </Link>
                    </div>
                    <div className="links">
                        <Link to="/posts">Posts</Link>
                    </div>
                </div>
        </nav>);
    }
}

export default Navbar;