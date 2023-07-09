import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface PersonState {
    name:string,
    age:number
}

// Define the initial state using that type
const initialState: PersonState = {
    age: -1, name: "default name"
} //in some cases may need  => as PersonState

export const personSlice = createSlice({

    name: 'person',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`

        changeName:(state,action:PayloadAction<string>)  => {
        console.log("changeName");
            state.name = action.payload
        },
        changeAge:(state,action:PayloadAction<number>) => {
            console.log("changeAge");

            state.age=action.payload;
        },
        setPerson:(state,action:PayloadAction<PersonState>)=>{
            state.name = action.payload.name;
            state.age = action.payload.age;
        }

    }
})

export const { changeName,changeAge,setPerson } = personSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectPerson = (state: RootState) => state.

export default personSlice.reducer