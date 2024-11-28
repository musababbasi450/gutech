import React from 'react';
import '../style/navbar.css'; // Import CSS file
function Navbar() {
return (
<nav className="navbar">
<div className="navbar-logo"><img class="logo" src="data:image/jpeg;base64,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"/>TABEER SCHOOLING SYSTEM</div>
<ul className="navbar-menu">
<li><a href="#" className="navbar-link">Home</a></li>
<li><a href="#" className="navbar-link">Administration</a></li>
<li><a href="#" className="navbar-link">Contact</a></li>
</ul>
</nav>
);
}
export default Navbar;