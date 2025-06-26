const Navbar = ({toggle, setToggle}) => {
    return ( 
    <nav style={{left: toggle && "0"}} className="navbar">
        <ul className="navbar-links">
            <i onClick={() => setToggle(false)} className="navbar-link">Home</i>
            <i onClick={() => setToggle(false)} className="navbar-link">Authors</i>
            <i onClick={() => setToggle(false)} className="navbar-link">About Us</i>
            <i onClick={() => setToggle(false)} className="navbar-link">Contact Us</i>
            <i onClick={() => setToggle(false)} className="navbar-link">Register</i>
      
        </ul>
    </nav> );
}
 
export default Navbar;