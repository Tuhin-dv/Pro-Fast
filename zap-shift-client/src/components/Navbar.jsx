import { Link, NavLink } from 'react-router';
import ProFastLogo from '../sitelogo/ProFastLogo';
import { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext/AuthContext';

function Navbar() {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log('User logged out');
      })
      .catch(err => console.error(err));
  };

  const navItems = (
    <div className="font-semibold flex gap-3 flex-col lg:flex-row">
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/services">Services</NavLink></li>
      <li><NavLink to="/addpercel">Add Parcel</NavLink></li>
      <li><NavLink to="/coverage">Coverage</NavLink></li>
      <li><NavLink to="/about">About Us</NavLink></li>
      <li><NavLink to="/pricing">Pricing</NavLink></li>
      <li><NavLink to="/beRider">Be a Rider</NavLink></li>

      {user && (
        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
      )}
    </div>
  );

  return (
    <div className="px-5">
      <div className="navbar rounded-xl mb-5 p-4 bg-white shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round"
                  strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {navItems}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            <ProFastLogo />
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>

        <div className="navbar-end flex gap-4 items-center">
          {!user ? (
            <>
              <Link to="/login" className="btn btn-sm btn-outline">Login</Link>
              <Link to="/register" className="btn btn-sm btn-outline">Register</Link>
            </>
          ) : (
            <>
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="User"
                  className="w-10 h-10 rounded-full border"
                  title={user.displayName || user.email}
                />
              ) : (
                <span className="text-sm font-medium">{user.email}</span>
              )}
              <button onClick={handleLogout} className="btn btn-sm btn-error text-white">
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
