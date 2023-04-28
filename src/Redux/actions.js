export const RESET_MOVES = 'RESET_MOVES'
export const RESET_TIME = 'RESET_TIME'
export const INCREMENT_MOVES = 'INCREMENT_MOVES'
export const INCREMENT_TIME = 'INCREMENT_TIME'
export const SET_IS_PAUSED = 'SET_IS_PAUSED'

export const setTime = () => ({
    type: INCREMENT_TIME
})

export const resetTime = () => ({
    type: RESET_TIME
})

export const setMoves = () => ({
    type: INCREMENT_MOVES
})

export const resetMoves = () => ({
    type: RESET_MOVES
})

export const setIsPaused = (boolean) => ({
    type: SET_IS_PAUSED,
    payload: boolean
})