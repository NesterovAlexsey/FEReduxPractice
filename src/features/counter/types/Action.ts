type ActionCounter = 
| {type: 'counter/plus'; payload: number}
| {type: 'counter/minus'; payload: number}

export default ActionCounter;