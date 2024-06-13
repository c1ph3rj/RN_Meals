import { createContext, useState } from "react";

export const FavoritesContext = createContext({
    ids: [],
    addFavorites: (id) => {},
    removeFavorites: (id) => {}
})

export const FavoritesContextProvider = ({children}) => {
    const [favoriteIds, setFavoriteIds] = useState([]);

    const addFavorite = (id) => {
        setFavoriteIds((previousIds) => [id, ...previousIds]);
    }

    const removeFavorite = (id) => {
        setFavoriteIds((previousIds) => previousIds.filter((previousId) => previousId !== id));
    }


    const value = {
        ids: favoriteIds,
        addFavorites: addFavorite,
        removeFavorites: removeFavorite
    }

    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}    