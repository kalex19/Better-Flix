// import React, { Component } from 'react';
// import './UserMenu.css';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { signOut } from '../../actions';

// export class UserMenu extends Component {
//   signOutUser = async e => {
//     e.preventDefault();
//     const user = {
//       id: '',
//       name: '',
//       password: '',
//       email: ''
//     }
//   };

//   render = () => {
//       return (
//         <form className="user-select-menu">
//           <Link to='/create_account'>
//             <button className="user-select-buttons">Create Account</button>
//           </Link>
//           <Link to="/log_in">
//             <button className="user-select-buttons">Log In</button>
//           </Link>
//           <button onClick={()=> }>Back</button>
//         </form>
//       );
//     }
// }

// export const mapStateToProps = state => ({
//   user: state.user
// });

// export const mapDispatchToProps = dispatch => ({
//   signOut: user => dispatch(signOut(user))
// });

// export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
