import React, {FunctionComponent} from 'react';
import BgImage from '../../assets/cats.jpg';
import './Footer.css';
import {useMoving} from '../../state/context';

const Footer:FunctionComponent = () => {
    const {state} = useMoving();

    return (
        <footer className="footer" data-testid="footer">
            <img className={['footer__bg', state.isMoving ? 'footer__move' : ''].join(' ')} src={BgImage} alt=""/>
        </footer>);
}

export default Footer;