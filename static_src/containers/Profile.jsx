import React from 'react';
import PropTypes from 'prop-types';
import connect from "react-redux/es/connect/connect";

import { bindActionCreators } from "redux";
import { Link } from 'react-router-dom';

import '../styles/profile.css';


class Profile extends React.Component{
    static propTypes = {        
        user: PropTypes.object,
        
    };
    static defaultProps = {
        user: {},
    };

    render () {
        return <>      
    
        <div className='container_profile'>
            <div>    
                <h2>{this.props.user.name}</h2>
                <p>{this.props.user.mail}</p>
            </div>
            <div>
                <p>Перейти в <Link to = '/' >чаты</Link></p>
            </div>
            
        </div>      
    </>;
    }
}

const mapStateToProps = ({ profileReducer }) => ({
    user: profileReducer.user,
 });
 
 const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);
 
 export default connect(mapStateToProps, mapDispatchToProps)(Profile);