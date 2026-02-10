export const increment = () => {
    return {
        type: 'INCREMENT'
    }
}


export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}


export const incrementBy = (n) => {
    return {
        type: 'INCREMENT_BY', payload: n
    }
}