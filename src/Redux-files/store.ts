import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {personSlice} from "./PersonSlice";
// ...

const rootReducer = combineReducers({ person:personSlice.reducer })

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware()
})

// Infer the `RootState` and `AppDispatch` types from the store itself
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch