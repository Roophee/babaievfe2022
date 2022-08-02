import React, {FunctionComponent} from "react";
import BgImage from '../../../assets/dogs.jpg'
import './Main.css'
import {useMoving} from '../../../state/context';
import { TOGGLE_IS_MOVING } from '../../../state/reducer';

const Main:FunctionComponent = () => {
    const {state, dispatch} = useMoving();
    const onClickHandler = (event: React.MouseEvent) => {
        event.preventDefault();
        dispatch && dispatch({type: TOGGLE_IS_MOVING});
    }

    return (
        <main className='main' data-testid="main">
            <img  className={['main__bg', state.isMoving ? 'main__move' : ''].join(' ')} src={BgImage} alt=""/>
            <button className='main__btn' type='button' onClick={onClickHandler} data-testid="button">
                Click me!
            </button>
        </main>
    );
}

export default Main;