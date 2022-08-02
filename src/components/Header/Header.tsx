import React, {FunctionComponent} from 'react';
import BgImage from '../../assets/planets.jpg';
import './Header.css'
import {useMoving} from '../../state/context';

const Header:FunctionComponent = () => {
    const {state} = useMoving();

    return (
        <header className='header' data-testid="header">
            <img className={['header__bg', state.isMoving ? 'header__move' : ''].join(' ')} src={BgImage} alt=""/>
        </header>
    );
}

export default Header;