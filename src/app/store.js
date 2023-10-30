import { configureStore } from "@reduxjs/toolkit"
import { Fruitsreducer } from "../Features/AddFruits"
import { LodingReducer } from "../Features/Loding"

export const store = configureStore(
    {
        reducer: {
            fruit : Fruitsreducer,
            loding: LodingReducer
        }
    }
)