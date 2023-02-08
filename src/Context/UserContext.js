import { createContext, useReducer } from "react";

export const UserContext = createContext();

const initialState = {
    name: 'John',
    age: 25,
    // add:""
}

const reducer1 = (state, action) => {
    switch (action.type) {
        case "update":
            let temp = Object.assign(state, { add: action.payload });
            console.log(temp);
            return temp;

        case "delete":
            let new1 = {
                name:""
            }
            return  state = new1;
    }
}

export const UserProvider = (props) => {

    const [state, dispatch] = useReducer(reducer1, initialState);

    return (
        <UserContext.Provider value={[state, dispatch]}>
            {props.children}
        </UserContext.Provider>
    )
}