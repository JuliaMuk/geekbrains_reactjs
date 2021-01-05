import React from 'react';

import Header from '../Header';

import { Link } from 'react-router-dom';

import '../../styles/Profile.css';


export default class Profile extends React.Component{
    

    render () {
        return <>      
        <Header text={'Мой профиль'} />
        <div className={'container_profile'}>
            <div>    
                <h2>Фамилия Имя</h2>
                <p>mail@mail.ru</p>
            </div>
            <div>
                <p>Перейти в <Link to = '/' >чаты</Link></p>
            </div>
            
        </div>      
    </>;
    }
}