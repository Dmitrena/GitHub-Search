import {configureStore} from "@reduxjs/toolkit";
import {githubApi} from "./github/github.api";
import {setupListeners} from "@reduxjs/toolkit/query";
import {githubReducer} from "./github/githun.slice";

export const store = configureStore({
    reducer: {
        [githubApi.reducerPath]:githubApi.reducer,
        github :githubReducer
    },

    middleware:getDefaultMiddleware => getDefaultMiddleware().concat(githubApi.middleware)
})
setupListeners(store.dispatch)

export type RootSTate = ReturnType<typeof store.getState>