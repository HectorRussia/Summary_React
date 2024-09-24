
interface Action {
    type: 'INCREMENT' | 'RESET' | 'DECREMENT';
}

const Counterrecuder = (state: number , actions : Action) : number => {
    if(actions.type === 'INCREMENT') {
        return state + 1;
    }
    if(actions.type === 'DECREMENT') {
        return state - 1;
    }
    if(actions.type === 'RESET') {
        return 0;
    }

    return state;
}

export default Counterrecuder