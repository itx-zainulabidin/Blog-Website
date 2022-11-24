import "./Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className="Navbar">
                <h1 className="logo">ZAIN Blogs</h1>
                <div className="links">
                    <Link to="/" className="a">Home</Link>
                    <Link to="/create" className="a">Create Blog</Link>
                    {/* <a href="/">Home</a>
                    <a href="/create">Create Blog</a> */}
                    
                </div>
            </nav>
        </>
    );
};

export default Navbar;