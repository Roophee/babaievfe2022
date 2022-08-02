import React, {FunctionComponent} from 'react';
import BgImage from '../../../assets/dyno.jpg';
import './RightSide.css'
import {useMoving} from '../../../state/context';

const RightSide:FunctionComponent = () => {
    const {state} = useMoving();

    return (
        <section className='right-side' data-testid="right-side">
            <img className={['right-side__bg', state.isMoving ? 'right-side__move' : ''].join(' ')} src={BgImage} alt=""/>
        </section>
    );
}

export default RightSide;