import { createSlice, nanoid } from "@reduxjs/toolkit";

const Fruits = createSlice({
    name: 'fruits',
    initialState: {
        fruits: [{
            id: 1,
            text: "apple"
        },
        {
            id: 2,
            text: "orange"
        }
        ]
    },
    reducers: {
        addfruits: (state, action) => {
            const dothis = {
                id: nanoid(),
                text: action.payload
            }
            console.log("it is getting added");
            state.fruits.push(dothis);

        },
        deletefruits: (state, action) => {

            state.fruits = state.fruits.filter((removefruit) => removefruit.id !== action.payload);

        }

    },

})

//state.Alltodo = state.Alltodo.filter(todo => todo.id !== action.payload);

export const { addfruits, deletefruits } = Fruits.actions
export const Fruitsreducer = Fruits.reducer