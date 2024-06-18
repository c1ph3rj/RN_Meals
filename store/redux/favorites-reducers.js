import { createSlice } from "@reduxjs/toolkit";

const FavoritesSlice = createSlice({
    name: "favorites-reducers",
    initialState: {
        ids: []
    },

    reducers: {
        addFavorite: (state, action) => {
            state.ids.push(action.payload.id);
        },

        removeFavorite: (state, action) => {
            state.ids.splice(state.ids.indexOf(action.payload.id));
        }
    }
})

export const addFavorite = FavoritesSlice.actions.addFavorite;
export const removeFavorite = FavoritesSlice.actions.removeFavorite;
export default FavoritesSlice.reducer;