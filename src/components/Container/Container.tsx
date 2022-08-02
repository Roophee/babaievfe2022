import React, {FunctionComponent} from 'react';
import LeftSide from './LeftSide';
import RightSide from './RightSide';
import Main from './Main';
import './Container.css'

const Container:FunctionComponent = () => {
    return (
        <div className='container'>
            <LeftSide/>
            <Main/>
            <RightSide/>
        </div>
    );
}

export default Container;
