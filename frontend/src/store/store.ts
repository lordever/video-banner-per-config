import {configureStore} from "@reduxjs/toolkit";
import testReducer from "./test/test.slice"
import bannerConfigReducer from "./banner/banner.slice"

export const store = configureStore({
    reducer: {
        test: testReducer,
        bannerConfig: bannerConfigReducer
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch