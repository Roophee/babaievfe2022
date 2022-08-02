export type ActionType = {
    type: string;
}
export type StateType = {
    isMoving:boolean;
}
export const TOGGLE_IS_MOVING = 'TOGGLE_IS_MOVING';

export const initialValue:StateType = {
    isMoving: false,
}

export const reducer = (state:StateType, action:ActionType) => {
    switch (action.type) {
        case TOGGLE_IS_MOVING:
            return {
                isMoving: !state.isMoving
            };

        default:
            return state;
    }
};