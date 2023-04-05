import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Blog</h1>
            <div className="links">
                <Link to="/">Home</Link> &nbsp;
                <Link to="/create" style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px"
                }}>New Blog</Link>
            </div>
        </nav>
     );
}

//Use <Link> instead of <a> for SPA application (limit requests).
 
export default Navbar;