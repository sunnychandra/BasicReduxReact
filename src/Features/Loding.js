import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { deletefruits } from "./AddFruits";

const wait = (seconds) => {
    return new Promise((resolve) => {
        setTimeout(resolve, seconds * 1000);
    });
}

export const worktobedone = createAsyncThunk(
    'fruits/deletefruitasync',
    async (fruitid, { dispatch }) => {
        console.log('started ' + fruitid);
        dispatch(deletefruits(fruitid));
        await wait(3);
    }
);

export const addFruits = (fruit) => (dispatch) => {
    // Your add logic here
    // This action doesn't modify the loading status in the Loding slice.
};

const Loding = createSlice({
    name: 'Loding',
    initialState: { status: "idle" },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(worktobedone.pending, (state) => {
            state.status = "working on it";
        });

        builder.addCase(worktobedone.fulfilled, (state) => {
            state.status = "work is done";

        });

        builder.addCase(worktobedone.rejected, (state) => {
            state.status = "work is rejected";
        });
    }
});


export const LodingReducer = Loding.reducer