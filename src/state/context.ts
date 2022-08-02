import {createContext, useContext, Dispatch} from 'react';
import {StateType, ActionType} from './reducer';

export type contextValueType = {
    state: StateType;
    dispatch?: Dispatch<ActionType>
}
const defaultState:contextValueType = {state: {isMoving: false}, dispatch: undefined};
export const MovingCtx = createContext(defaultState);
export const useMoving = () => useContext(MovingCtx)