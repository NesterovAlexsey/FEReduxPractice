type Action = 
| {type: 'addTask'; payload: string}
| {type: 'deleteTask'; payload: string}

export default Action;
