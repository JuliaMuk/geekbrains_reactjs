import React from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import connect from "react-redux/es/connect/connect";
import { bindActionCreators } from "redux";
import '../styles/header.css';

class Header extends React.Component {
   static propTypes = {
       chatTitle: PropTypes.string,
       user:PropTypes.string
   };

   static defaultProps = {
       chatId: 1,
   };

   render() {
       return (
           <div className="header">
               <div style={ { fontSize: '20px' } }> { this.props.chatTitle }</div>
               <div>
                   {this.props.user}
                <Link to='/profile' className={'link'}>Профиль</Link> 
               </div>
                            
           </div>
       )
   }
}
const mapStateToProps = ({ profileReducer }) => ({
    user: profileReducer.user.name,
 });
 
 const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);
 
 export default connect(mapStateToProps, mapDispatchToProps)(Header);