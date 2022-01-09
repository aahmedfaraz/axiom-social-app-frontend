import React from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/userDataActions";

const Navbar = ({ auth, logout }) => {
  return (
    <nav>
      <h1>Axiom Social App</h1>
      {auth && (
        <button className='btn logout' onClick={logout}>
          Logout
        </button>
      )}
    </nav>
  );
};

const mapStateToProps = (state) => ({
  auth: state.user.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
