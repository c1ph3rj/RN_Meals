import { configureStore } from "@reduxjs/toolkit";
import favoriteItemsReducers from "./favorites-reducers";

export default reduxStore = configureStore({
  reducer: {
    favoriteMealItemDetails: favoriteItemsReducers,
  },
});
