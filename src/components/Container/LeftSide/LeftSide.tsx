import React, {FunctionComponent} from 'react';
import BgImage from '../../../assets/chubaka.jpg';
import './LeftSide.css'
import {useMoving} from "../../../state/context";

const LeftSide:FunctionComponent = () => {
    const {state} = useMoving();

    return (
        <section className="left-side" data-testid="left-side">
            <img className={['left-side__bg', state.isMoving ? 'left-side__move' : ''].join(' ')} src={BgImage} alt=""/>
         </section>);
}

export default LeftSide;