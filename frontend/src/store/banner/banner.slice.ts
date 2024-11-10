// Define a type for the slice state
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {BannerConfigModel} from "../../model/banner-config.model";
import {fetchBannerConfig} from "./banner.thunk";

interface BannerConfigState {
    config: BannerConfigModel;
}

// Define the initial state using that type
const initialState: BannerConfigState = {
    config: {
        animatedTitle: {delay: 0, text: ""},
        animatedSubTitle: {delay: 0, text: ""},
        video: {link: "", delay: 0},
        mobileVideo: {link: "", delay: 0}
    }
}

export const bannerConfigSlice = createSlice({
    name: 'bannerConfig',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchBannerConfig.fulfilled, (state, action: PayloadAction<BannerConfigModel>) => {
            if (action.payload) {
                state.config = action.payload
            }
        })
    }
})

export default bannerConfigSlice.reducer