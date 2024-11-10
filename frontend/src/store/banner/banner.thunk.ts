import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchBannerConfig = createAsyncThunk(
    "banner/fetchConfig",
    async (_, {rejectWithValue}) => {
        try {
            const response = await fetch("/api/v1/banner-config")
            return await response.json()
        } catch (e) {
            console.error("Banner config fetching has been failed: ", e);
            return rejectWithValue(e)
        }
    }
)