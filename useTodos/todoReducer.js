
export const todoReducer = ( initialState = [], action ) => {

    switch (action.type) {
        case '[TODO] Add Todo':
            //throw new Error('Action.type = ABC no está implementada');
            return [ ...initialState, action.payload ]
        
        case '[TODO] Remove Todo':
            return initialState.filter( todo => todo.id !== action.payload );

        case '[TODO] Toggle Todo':
            return initialState.map( todo => {
                if ( todo.id === action.payload ){ //payload es el id del todo
                    return {
                        ...todo, //los 3 puntos es el operador spread que sirve para esparcir el [TODO]
                        done: !todo.done
                    }
                }    
                return todo;
            } )
    
        default:
            return initialState;
    }

}