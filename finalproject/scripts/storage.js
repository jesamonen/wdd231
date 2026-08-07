const FAVORITE_KEY = "favorites";

export function getFavorites() {
    return JSON.parse(
        localStorage.getItem(FAVORITE_KEY)
    ) || [];
}


export function addFavorite(product) {

    const favorites = getFavorites();

    const alreadySaved = favorites.some(
        item => item.id === product.id
    );

    if (!alreadySaved) {

        favorites.push(product);

        localStorage.setItem(
            FAVORITE_KEY,
            JSON.stringify(favorites)
        );
    }
}


export function removeFavorite(id) {

    const favorites = getFavorites();

    const updatedFavorites = favorites.filter(
        item => item.id !== id
    );

    localStorage.setItem(
        FAVORITE_KEY,
        JSON.stringify(updatedFavorites)
    );
}


export function isFavorite(id) {

    const favorites = getFavorites();

    return favorites.some(
        item => item.id === id
    );
}